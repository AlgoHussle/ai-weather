type Props = {
    params: {
        city: string,
        lat: string,
        long: string,
    }
}



function WeatherPage({params}: {city, lat} Props) {
  return (
    <div>Welcome to the weather page</div>
  )
}

export default WeatherPage