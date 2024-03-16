import React, { useState } from 'react';
import WorldMapSVG from '../../public/images/countries.svg';

function MapPage() {
  const [visitedCountries, setVisitedCountries] = useState([{ code: "ID", name: "Indonesia" }, { code: "VN", name: "Vietnam_mainland" }]);

  const handleCountryClick = (svgId: string) => {
    const countryName = svgId.replace('countries_svg__', '');

    if (!visitedCountries.some(country => country.name === countryName)) {
      const newCountry = { code: svgId, name: countryName };
      setVisitedCountries([...visitedCountries, newCountry]);
      console.log(`Country ${svgId} point added!`);
    }

    // Add class to visited country
    const visitedCountryElement = document.getElementById(svgId);
    if (visitedCountryElement) {
      visitedCountryElement.classList.add('visited-country');
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
