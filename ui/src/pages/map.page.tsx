import React, { useState } from 'react';
import WorldMapSVG from '../../public/images/countries.svg';

function MapPage() {
  const [visitedCountries, setVisitedCountries] = useState([{ code: "ID", name: "Indonesia" }, { code: "VN", name: "Vietnam_mainland" }]);

  const handleCountryClick = (svgId: string) => {
    // Extract a meaningful part of the svgId, assuming it follows a pattern like 'countries_svg__{CountryName}'
    const countryName = svgId.replace('countries_svg__', '');

    // Check if the country is already visited by searching for its name in the visitedCountries array
    if (!visitedCountries.some(country => country.name === countryName)) {
      // Find or generate a country code if necessary. This example assumes you might have a function or a mapping to get it.
      // For simplicity, let's pretend we append to the visited list using the svgId directly.
      const newCountry = { code: svgId, name: countryName }; // This is a placeholder. You might want to map svgId to country code/name properly.
      setVisitedCountries([...visitedCountries, newCountry]);
      console.log(`Country ${svgId} point added!`);
    }
  };

  return (
    <div>
      <WorldMapSVG onClick={(e: { target: { id: string; }; }) => {
        if (e.target.id) {
          handleCountryClick(e.target.id);
        }
      }} />
      <ul>
        {visitedCountries.map((country) => (
          <li key={country.code}>{country.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default MapPage;
