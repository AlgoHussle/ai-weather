type Props = {
    params: {
        city: string,
        lat: string,
        long: string,
    }
}



function WeatherPage({}: Props) {
  return (
    <div>Welcome to the weather page</div>
  )
}

export default WeatherPage