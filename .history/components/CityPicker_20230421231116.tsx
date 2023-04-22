"use client";

import React, { useState } from 'react';
import { Country, City } from "country-state-city";
import Select from "react-select";

type option = {
    value: {
        latitude: string,
        longitude: string,
        isoCode: string,
    };
    
}

const options = Country.getAllCountries().map((country) => ({
    value: {
        latitude: country.latitude,
        longitude: country.longitude,
        isoCode: country.isoCode,
    },
    label: country.name,
}));

function CityPicker() {
    const [selectCountry, setSelectCountry] = useState<option>(null);
  return (
    <div>
        <Select options={options} />
    </div>
  )
}

export default CityPicker