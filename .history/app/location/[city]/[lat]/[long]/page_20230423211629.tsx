import { getClient } from "@/apollo-client"
import fetchWeatherQuery from "@/graphql/queries/fecthWeatherQueries";


type Props = {
    params: {
        city: string,
        lat: string,
        long: string,
    }
}



 async function WeatherPage({params: {city, lat, long}}:  Props) {
  const client = getClient();

  const { data } =  await client.query({
    query: fetchWeatherQuery,
    variables: {
    
    }
  })

  return (
    <div>Welcome to the weather page: {city} {lat} {long} </div>
  )
}

export default WeatherPage