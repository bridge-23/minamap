import React, { useState, useEffect } from 'react';
import WorldMapSVG from '../../public/images/countries.svg'; // Путь к SVG карте должен быть верным

function MapPage() {
  const [visitedCountries, setVisitedCountries] = useState([{ code: "RU", name: "Russia" }, { code: "VN", name: "Vietnam" }]);
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [startPosition, setStartPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);

  const handleCountryClick = (svgId: string) => {
    if (svgId === 'countries_svg__ocean') {
      return;
    }
  
    const countryName = svgId;
  
    if (!visitedCountries.some(country => country.code === svgId)) {
      const newCountry = { code: svgId, name: countryName };
      setVisitedCountries([...visitedCountries, newCountry]);
      console.log(`Country ${svgId} added!`);
    }
  };

  // Функции для масштабирования
  const zoomIn = () => {
    setScale(scale * 1.1);
  };

  const zoomOut = () => {
    setScale(scale / 1.1);
  };

  const resetZoom = () => {
    setScale(1);
    setPosition({ x: 0, y: 0 }); // Сброс позиции при сбросе масштаба
  };

  // Обработчики событий мыши
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartPosition({ x: e.clientX - position.x, y: e.clientY - position.y });
    e.preventDefault(); // Предотвратить стандартное поведение
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      setPosition({
        x: e.clientX - startPosition.x,
        y: e.clientY - startPosition.y,
      });
      e.preventDefault();
    }
  };

  useEffect(() => {
    visitedCountries.forEach(country => {
      const countryElement = document.getElementById(country.code);
      if (countryElement) {
        countryElement.style.fill = 'rgb(121, 80, 255)'; // Задаем цвет для посещенных стран
      }
    });
  }, [visitedCountries]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="absolute z-10 top-2 left-2 flex space-x-2">
        <button onClick={zoomIn} className="bg-blue-500 text-white px-4 py-2 rounded">Zoom In</button>
        <button onClick={zoomOut} className="bg-blue-500 text-white px-4 py-2 rounded">Zoom Out</button>
        <button onClick={resetZoom} className="bg-blue-500 text-white px-4 py-2 rounded">Reset</button>
      </div>
      <div onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} onMouseMove={handleMouseMove} onMouseLeave={handleMouseUp} className="w-full h-full">
        <WorldMapSVG
          style={{ transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`, transformOrigin: 'center center' }}
          className="w-full h-full object-contain"
          onClick={(e) => {
            const target = e.target as SVGElement;
            handleCountryClick(target.id);
          }}
        />
      </div>
    </div>
  );
}

export default MapPage;
