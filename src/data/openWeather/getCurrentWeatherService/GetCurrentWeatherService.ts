import { api } from "../../api";
import { GetCurrentWeatherDTO } from "./GetCurrentWeatherDTO";

interface GetCurrentWeatherServiceProps {
  lat: number;
  long: number;
}

export async function getCurrentWeatherService({
  lat,
  long,
}: GetCurrentWeatherServiceProps): Promise<GetCurrentWeatherDTO> {
  const path = "/data/2.5/weather";

  const currentWeather = await api<GetCurrentWeatherDTO>({
    path,
    queryParams: {
      lat: lat.toString(),
      lon: long.toString(),
      units: "metric",
    },
  });

  return currentWeather;
}
