interface CurrentWeather {
    temperature: number;
    time: string;
    weathercode: number;
    weatherdirection: number;
    windspeed: number;
}

interface Daily {
    apparent_temperature_max: [number];
    apparent_temperature_min: [number];
    sunrise: [string];
    sunset: [string];
    temperature_2m_max: [number];
    temperature_2m_min: [number];
    time: [string];
    uv_index_clear_sky_max: [number];
    uv_index_max: [number];
    weathercode: [number];
}

interface DailyUnits {
    apparent_temperature_max: string;
    apparent_temperature_min: string;
    sunrise: string;
    sunset: string;
    temperature_2m_max: string;
    temperature_2m_min: string;
    time: string;
    uv_index_clear_sky_max: string;
    uv_index_max: string;
    weathercode: string;
}

interface Hourly {
    apparent_temperature: [number];
    precipitation: [number];
    precipitation_probability: [number];
    rain: [number];
    relativehumidity_2m: [number]
    showers: [number];
    snow_depth: [number];
    snowfall: [number];
    temperature_2m: [number];
    time: [string];
    uv_index: [number];
}