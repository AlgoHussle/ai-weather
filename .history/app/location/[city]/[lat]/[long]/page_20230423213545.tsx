import { getClient } from "@/apollo-client";
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
    current_weather: "true",
    longitude: long,
    latitude: lat,
    timezone: 'GMT'
    }
  })

  const results: Root = data.myQuery;


  return (
    <div>
      {/* <informationPanel /> */}
      <div>
        <div>
          
        </div>
      </div>
    </div>
  )
}

export default WeatherPage