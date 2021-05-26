import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Props {
  selectedCity: string;
}

interface IPopulation {
  reliabilty: string;
  sex: string;
  value: string;
  year: string;
}

const Population = ({ selectedCity }: Props) => {
  const [populationData, setPopulationData] = useState<IPopulation[]>([]);

  const getPopulationFromCities = async (city: string) => {
    try {
      const response = await axios.post(
        process.env.REACT_APP_API_URL + '/api/populace',
        {
          city: city,
        }
      );

      setPopulationData(response.data.data.populationCounts);
    } catch (error) {}
  };

  useEffect(() => {
    if (selectedCity) getPopulationFromCities(selectedCity);
  }, [selectedCity]);

  const getLatestPopulation = () => {
    if (populationData) {
      const latest = populationData.reduce(
        (a, b) => (a.year > b.year ? a : b),
        {
          reliabilty: '',
          sex: '',
          value: '',
          year: '',
        }
      );
      return latest.value;
    }
  };

  return (
    <>
      <label
        className='appearance-none  border w-52 m-3 py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
        id='latestpopulation'
      >
        Latest population count : {getLatestPopulation()}
      </label>
    </>
  );
};

export default Population;
