import { gql } from "@apollo/client";

const fetchWeatherQuery = gql`
query myQuery(
    $current_weather: String
    $daily: String = "weathercode, temperature_2m_max, temperature_2m_min, apparent_temperature_max,
    apparent_temperature_min, sunrise, sunset,     "
    $forecast_days: String, 
    $hourly: String, 
    $latitude: String!, 
    $longitude: String!, 
    $precipitation_unit: String!, 
    $temperature_unit: String!, 
    $timezone: String!, 
    $windspeed_unit: String
    ) {
    myQuery(
      current_weather: $current_weather
      daily: $daily
      forecast_days: $forecast_days
      hourly: $hourly
      latitude: $latitude
      longitude: $longitude
      precipitation_unit: $precipitation_unit
      temperature_unit: $temperature_unit
      timezone: $timezone
      windspeed_unit: $windspeed_unit
    ) {
      current_weather {
        is_day
        temperature
        time
        weathercode
        winddirection
        windspeed
      }
      daily {
        temperature_2m_max
        time
        weathercode
        apparent_temperature_max
        apparent_temperature_min
        sunrise
        sunset
        temperature_2m_min
        uv_index_max
      }
      daily_units {
        temperature_2m_max
        time
        weathercode
        apparent_temperature_max
        apparent_temperature_min
        sunrise
        temperature_2m_min
        uv_index_clear_sky_max
        uv_index_max
      }
      elevation
      generationtime_ms
      hourly {
        apparent_temperature
        dewpoint_2m
        precipitation_probability
        relativehumidity_2m
        temperature_2m
        time
        uv_index
        uv_index_clear_sky
        precipitation
        rain
        showers
        snow_depth
        snowfall
        windgusts_10m
      }
      hourly_units {
        apparent_temperature
        dewpoint_2m
        precipitation_probability
        relativehumidity_2m
        temperature_2m
        time
        uv_index
        uv_index_clear_sky
        precipitation
        rain
        showers
        snow_depth
        snowfall
        windgusts_10m
      }
      latitude
      longitude
      timezone
      timezone_abbreviation
      utc_offset_seconds
    }
  }`