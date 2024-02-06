import { RefreshCwOff } from "lucide-react";

import StormImage from "@/assets/raining-with-storm.png";
import RainingImage from "@/assets/raining.png";
import SunWithCloudsImage from "@/assets/sun-with-clouds.png";
import SunImage from "@/assets/sun.png";

import ForecastDay from "./ForecastDay";

export default function DailyForecast() {
  return (
    <div className="rounded-xl bg-purple-primary bg-cover w-full p-10 min-h-60 items-center gap-12 justify-center md:flex grid grid-cols-2 relative ">
      <RefreshCwOff className="absolute ml-1 h-4 w-4 text-rose-400 right-0 top-0 m-5" />

      <ForecastDay
        textDay="Tomorrow"
        icon={RainingImage}
        maxTemp={30}
        minTemp={20}
      />

      <ForecastDay textDay="Friday" icon={SunImage} maxTemp={30} minTemp={20} />

      <ForecastDay
        textDay="Saturday"
        icon={StormImage}
        maxTemp={30}
        minTemp={20}
      />

      <ForecastDay
        textDay="Sunday"
        icon={SunWithCloudsImage}
        maxTemp={30}
        minTemp={20}
      />
    </div>
  );
}
