"use client";

import { useRouter } from "next/navigation";
import React, { useState } from 'react';
import { Country, City } from "country-state-city";
import Select from "react-select";
import {GlobeIcon } from "@her"

type option = {
    value: {
        latitude: string,
        longitude: string,
        isoCode: string,
    };
    label: string;
} | null;

type cityOption = {
    value: {
        latitude: string,
        longitude: string,
        countryCode: string,
        name: string;
        stateCode: string;
    };
    label: string;
} | null;

const options = Country.getAllCountries().map((country) => ({
    value: {
        latitude: country.latitude,
        longitude: country.longitude,
        isoCode: country.isoCode,
    },
    label: country.name,
}));

function CityPicker() {
    const [selectedCountry, setSelectedCountry] = useState<option>(null);
        const [selectedCity, setSelectedCity] = useState<cityOption>(null);
        const router = useRouter();

        const handleSelectedCountry = (option: option) => {
            setSelectedCountry(option);
            setSelectedCity(null);
        }


  return (
    <div>
        <div>
            <label htmlFor="country">Country</label>
        </div>
        <Select
            className="text-black"
            value={selectedCountry}
            onChange={handleSelectedCountry}
            options={options} />
    </div>
  )
}

export default CityPicker