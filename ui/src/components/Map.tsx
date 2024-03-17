import React, { useEffect, useState } from "react";
import WorldMapSVG from "../../public/images/countries.svg";
import randomColor from "randomcolor";

export type MapPageProps = {
  visitedCountries: string[];
  onCountryClick: (countryCode: string) => Promise<boolean>;
};

export function MapPage({ visitedCountries, onCountryClick }: MapPageProps) {
  const MATCH_QUERY = "g.countries_svg__entities > g";
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [startPosition, setStartPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);

  function paintCountry(countryGroup: Element) {
    const color = randomColor({
      seed: countryGroup.id,
      luminosity: "bright",
    });
    countryGroup.querySelectorAll("path").forEach((path) => {
      path.style.fill = color;
    });
  }

  const listenersCache: Record<string, Function> = {};

  function getCountryListener(countryId: string): Function {
    if (listenersCache[countryId]) {
      return listenersCache[countryId];
    }

    listenersCache[countryId] = (e: Event) => {
      const country = document.getElementById(countryId)!;

      const countryCode = country.id.replace("countries_svg__", "");

      onCountryClick(countryCode).then((visited) => {
        if (visited) {
          paintCountry(country);
        }
      });
    };

    return listenersCache[countryId];
  }

    const zoomIn = () => {
      setScale(scale * 1.1);
    };
  
    const zoomOut = () => {
      setScale(scale / 1.1);
    };
  
    const resetZoom = () => {
      setScale(1);
      setPosition({ x: 0, y: 0 });
    };
  
    const handleMouseDown = (e: { clientX: number; clientY: number; preventDefault: () => void; }) => {
      setIsDragging(true);
      setStartPosition({ x: e.clientX - position.x, y: e.clientY - position.y });
      e.preventDefault(); // Предотвратить стандартное поведение
    };
  
    const handleMouseUp = () => {
      setIsDragging(false);
    };
  
    const handleMouseMove = (e: { clientX: number; clientY: number; preventDefault: () => void; }) => {
      if (isDragging) {
        setPosition({
          x: e.clientX - startPosition.x,
          y: e.clientY - startPosition.y,
        });
        e.preventDefault();
      }
    };

  useEffect(() => {
    setTimeout(() => {
      console.log("visitedCountries", visitedCountries);
      visitedCountries.forEach((countryCode) => {
        document
          .querySelectorAll("#countries_svg__" + countryCode)
          .forEach((country) => {
            paintCountry(country);
          });
      });

      document.querySelectorAll(MATCH_QUERY).forEach((country) => {
        // @ts-ignore
        country.addEventListener("click", getCountryListener(country.id));
      });
    }, 1000);

    return () => {
      document.querySelectorAll(MATCH_QUERY).forEach((country) => {
        // @ts-ignore
        country.removeEventListener("click", getCountryListener(country.id));
      });
    };
  }, [visitedCountries]);

  return (
    <div>
      <div className="absolute z-10 top-2 left-2 flex space-x-2">
        <button onClick={zoomIn} className="bg-blue-500 text-white px-4 py-2 rounded">Zoom In</button>
        <button onClick={zoomOut} className="bg-blue-500 text-white px-4 py-2 rounded">Zoom Out</button>
        <button onClick={resetZoom} className="bg-blue-500 text-white px-4 py-2 rounded">Reset</button>
      </div>
      <div onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} onMouseMove={handleMouseMove} onMouseLeave={handleMouseUp} className="w-full h-full">
        <WorldMapSVG
          style={{ transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`, transformOrigin: 'center center' }}
        />
      </div>
    </div>
  );
}

export default MapPage;
