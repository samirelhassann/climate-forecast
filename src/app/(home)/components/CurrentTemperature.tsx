/* eslint-disable camelcase */

"use client";

import { useEffect, useState } from "react";

import Image from "next/image";

import { CloudRain, Droplets, MapPin, RefreshCcw, Wind } from "lucide-react";

import Skeleton from "@/components/Skeleton";
import { GetCurrentWeatherDTO } from "@/data/openWeather/getCurrentWeatherService/GetCurrentWeatherDTO";
import { getCurrentWeatherService } from "@/data/openWeather/getCurrentWeatherService/GetCurrentWeatherService";

interface CurrentTemperatureProps {
  lat: number;
  long: number;
}

function Loading() {
  return (
    <div className="rounded-xl bg-purple-primary relative bg-cover w-[80vw] max-w-[480px]">
      <div className="flex flex-col ">
        <div className="self-end flex gap-1 text-purple-subtitle items-center mt-8 mr-8">
          <Skeleton className="w-24 h-5" />
        </div>

        <div className="mt-20 flex self-center">
          <div className="flex flex-col items-center gap-3">
            <Skeleton className="w-40 h-20" />
            <div className="flex gap-2">
              <Skeleton className="w-14 h-7" />
              <Skeleton className="w-14 h-7" />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20 lg:mt-40 self-center">
        <div className="flex justify-center items-center p-3 flex-wrap gap-3">
          <Skeleton className="py-3 px-4 gap-3 flex items-center justify-center bg-[#7c70d5] rounded-md w-36 h-[5.3rem]" />
          <Skeleton className="py-3 px-4 gap-3 flex items-center justify-center bg-[#7c70d5] rounded-md w-36 h-[5.3rem]" />
          <Skeleton className="py-3 px-4 gap-3 flex items-center justify-center bg-[#7c70d5] rounded-md w-36 h-[5.3rem]" />
        </div>
      </div>
    </div>
  );
}

export default function CurrentTemperature({
  lat,
  long,
}: CurrentTemperatureProps) {
  const [data, setData] = useState<GetCurrentWeatherDTO>();

  useEffect(() => {
    const fetchData = async () => {
      const currentWeather = await getCurrentWeatherService({
        lat,
        long,
      });
      setData(currentWeather);
    };

    fetchData();
  }, [lat, long]);

  if (!data) {
    return <Loading />;
  }

  const {
    name,
    sys: { country },
    main: { temp, temp_min, temp_max, humidity },
    weather: [{ icon }],
    wind,
  } = data;

  const formatedLocation = `${name}, ${country}`;
  const formatedTemp = `${temp.toFixed(0)}`;
  const formatedTempMin = `${temp_min.toFixed(0)}°`;
  const formatedTempMax = `${temp_max.toFixed(0)}°`;

  const formatedUrl = `https://openweathermap.org/img/wn/${icon}@4x.png`;

  return (
    <div className="rounded-xl bg-purple-primary relative bg-cover w-[80vw] max-w-[480px]">
      <Image
        src={formatedUrl}
        alt="Cloud Icon"
        width={176}
        height={176}
        className="absolute mt-[-5rem] ml-[-3.5rem]"
      />
      <div className="flex flex-col ">
        <div className="self-end flex gap-1 text-purple-subtitle items-center mt-8 mr-8">
          <MapPin size={20} />
          <span className="text-sm ">{formatedLocation}</span>
          <RefreshCcw className="ml-2 h-5 w-5 text-emerald-400" />
        </div>

        <div className="mt-20 flex self-center">
          <div className="flex flex-col items-center gap-3">
            <div className="flex items-start">
              <span className="text-white text-8xl font-bold">
                {formatedTemp}
              </span>
            </div>
            <div className="flex gap-2">
              <span className="text-xl text-white font-bold">
                {formatedTempMax}
              </span>
              <span className="text-xl text-purple-subtitle font-bold">
                {formatedTempMin}
              </span>
            </div>
          </div>
          <span className="text-purple-subtitle text-2xl font-bold mt-2">
            °C
          </span>
        </div>
      </div>

      <div className="mt-20 lg:mt-40 self-center">
        <div className="flex justify-center items-center p-3 flex-wrap gap-3">
          <div className="py-3 px-4 gap-3 flex items-center justify-center bg-[#7c70d5] rounded-md w-36">
            <Wind size={32} className="text-purple-subtitle" />
            <div className="flex flex-col">
              <span className="text-sm text-label">Wind</span>

              <div className="flex items-baseline gap-1">
                <span className="text-xl text-label">{wind.speed}</span>
                <span className="text-base text-[#DAD8F7]">km/h</span>
              </div>
            </div>
          </div>

          <div className="py-3 px-4 gap-3 flex items-center justify-center bg-[#7c70d5] rounded-md w-36">
            <Droplets size={32} className="text-purple-subtitle" />
            <div className="flex flex-col">
              <span className="text-sm text-label">Humidity</span>

              <div className="flex items-baseline gap-1">
                <span className="text-xl text-label">{humidity}</span>
                <span className="text-base text-[#DAD8F7]">%</span>
              </div>
            </div>
          </div>

          <div className="py-3 px-4 gap-3 flex items-center justify-center bg-[#7c70d5] rounded-md w-36">
            <CloudRain size={32} className="text-purple-subtitle" />
            <div className="flex flex-col">
              <span className="text-sm text-label">Rain</span>

              <div className="flex items-baseline gap-1">
                <span className="text-xl text-label">10</span>
                <span className="text-base text-[#DAD8F7]">%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
