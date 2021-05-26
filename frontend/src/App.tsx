import React, { useState } from 'react';

import Countries from './components/Countries';
import Cities from './components/Cities';
import Population from './components/Population';

const App = () => {
  const [selectedCountryCities, setSelectedCountryCities] = useState<string[]>(
    []
  );
  const [selectedCity, setSelectedCity] = useState<string>('');

  return (
    <div>
      <div className='absolute w-full h-full sm:bg-gray-100'></div>
      <div className='fixed w-full h-16 left-0 bg-red-700 text-white text-lg flex justify-center items-center'>
        AUTOCOMPLETE
      </div>
      <div className='flex justify-center'>
        <div className='fixed w-80 h-80 sm:w-200 mt-28 flex flex-col items-center bg-white border border-gray-300 shadow-2xl rounded'>
          <p className='text-gray-400 mt-10'>Autocomplete</p>

          <Countries setSelectedCountryCities={setSelectedCountryCities} />

          <Cities
            selectedCountryCities={selectedCountryCities}
            selectedCity={selectedCity}
            setSelectedCity={setSelectedCity}
          />

          <Population selectedCity={selectedCity} />
          <div className='divide-y-2 divide-red-400'></div>
        </div>
      </div>
    </div>
  );
};

export default App;
