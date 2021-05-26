import React from "react";

interface Props {
  selectedCountryCities: string[];
  selectedCity: string;
  setSelectedCity: (selectedCity: string) => void;
}

const Cities = ({
  selectedCountryCities,
  selectedCity,
  setSelectedCity,
}: Props) => {
  return (
    <>
      <input
        type="text"
        list="city"
        className="appearance-none border w-52 m-3 py-2 px-3 focus:outline-none focus:shadow-outline"
        onChange={(e) => {
          setSelectedCity(e.target.value);
        }}
        data-value={selectedCity}
      />
      <datalist
        className="appearance-none border w-52 m-3 py-2 px-3 focus:outline-none focus:shadow-outline"
        id="city"
        placeholder="City"
      >
        <option value=""></option>
        {selectedCountryCities?.map((city: string, index: number) => {
          return (
            <option className="text-black" key={index} value={city}>
              {city}
            </option>
          );
        })}
      </datalist>
    </>
  );
};

export default Cities;
