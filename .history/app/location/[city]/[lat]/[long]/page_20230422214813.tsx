type Props = {
    params: {
        city: string,
        lat: string,
        long: string,
    }
}



function WeatherPage({params: {city, lat, long}}:  Props) {
  return (
    <div>Welcome to the weather page: {city} {lat} </div>
  )
}

export default WeatherPage