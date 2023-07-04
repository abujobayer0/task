import { useEffect, useState } from "react";
import { AutoComplete } from "primereact/autocomplete";
import { CountryService } from "./service/CountryService";

export default function MultipleAutocomplete() {
  const [countries, setCountries] = useState([]);
  const [selectedCountries, setSelectedCountries] = useState(null);
  const [filteredCountries, setFilteredCountries] = useState(null);

  const search = (event) => {
    // Timeout to emulate a network connection
    setTimeout(() => {
      let _filteredCountries;

      if (!event.query.trim().length) {
        _filteredCountries = [...countries];
      } else {
        _filteredCountries = countries.filter((country) => {
          return country.name
            .toLowerCase()
            .startsWith(event.query.toLowerCase());
        });
      }

      setFilteredCountries(_filteredCountries);
    }, 250);
  };

  useEffect(() => {
    CountryService.getCountries().then((data) => setCountries(data));
  }, []);

  return (
    <div className="card p-fluid">
      <AutoComplete
        field="name"
        multiple
        value={selectedCountries}
        suggestions={filteredCountries}
        completeMethod={search}
        onChange={(e) => setSelectedCountries(e.value)}
      />
    </div>
  );
}
