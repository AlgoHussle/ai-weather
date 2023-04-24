import { getClient } from "@/apollo-client"
import fetchWeatherQuery from "@/graphql/queries/fecthWeatherQueries";


type Props = {
    params: {
        city: string,
        lat: string,
        long: string,
    }
}



function WeatherPage({params: {city, lat, long}}:  Props) {
  const client = getClient();

  const { data } =  await client.query({
    query: fetchWeatherQuery
  })

  return (
    <div>Welcome to the weather page: {city} {lat} {long} </div>
  )
}

export default WeatherPage