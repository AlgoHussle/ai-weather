"use client";

import React from 'react';
import { Country, City } from "country-state-city";
import Select from "react-select";

const options = Country.getAllCountries().map((country) => ({
    value: {
        latitude: country.latitude,
        longitude: country.longitude,
        isoCode: country.isoCode
    }
}))

function CityPicker() {
  return (
    <div>CityPicker</div>
  )
}

export default CityPicker