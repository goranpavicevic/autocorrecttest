import React, { useEffect, useState } from "react";
import axios from "axios";

import Country from "../models/Country";

interface Props {
  setSelectedCountryCities: (cities: string[]) => void;
}

const Countries = ({ setSelectedCountryCities }: Props) => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<string>();

  useEffect(() => {
    getCountries();
  }, []);

  const getCountries = async () => {
    const response = await axios.get(
      process.env.REACT_APP_API_URL + "/api/countries"
    );

    setCountries(response?.data?.data);
  };

  return (
    <>
      <input
        type="text"
        list="country"
        className="appearance-none border w-52 m-3 py-2 px-3 focus:outline-none focus:shadow-outline"
        onChange={(e) => {
          setSelectedCountry(e.target.value);
          const foundCountry = countries.find(
            (country) => country.country === e.target.value
          );
          if (foundCountry) setSelectedCountryCities(foundCountry?.cities);
        }}
      />
      <datalist
        className="appearance-none border w-52 m-3 py-2 px-3 focus:outline-none focus:shadow-outline"
        id="country"
        placeholder="Country"
        data-value={selectedCountry}
      >
        <option value=""></option>
        {countries.map((item) => {
          return (
            <option
              className="text-black"
              key={item.country}
              value={item.country}
            >
              {item.country}
            </option>
          );
        })}
      </datalist>
    </>
  );
};

export default Countries;
