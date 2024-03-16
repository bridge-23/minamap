import React, { useEffect, useState } from "react";
import WorldMapSVG from "../../public/images/countries.svg";
import randomColor from "randomcolor";

export type MapPageProps = {
  visitedCountries: string[];
  onCountryClick: (countryCode: string) => Promise<boolean>;
};

export function MapPage({ visitedCountries, onCountryClick }: MapPageProps) {
  const MATCH_QUERY = "g.countries_svg__entities > g";

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
      <WorldMapSVG />
    </div>
  );
}

export default MapPage;
