interface CurrentWeather {
    temperature: number;
    time: string;
    weathercode: number;
    weatherdirection: number;
    windspeed: number;
}

interface DailyUnits {
    apparent_temperature_max: string;
    apparent_temperature_min: string;
    sunrise: string;
    
}