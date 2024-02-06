"use client";

import React from "react";

import AirQuality from "./components/AirQuality";
import AllowLocationCard from "./components/AllowLocationCard";
import CurrentTemperature from "./components/CurrentTemperature";
import DailyForecast from "./components/DailyForecast";
import SunPath from "./components/SunSchedule";

import { useGeoLocation } from "./hooks/useGeoLocation";

export default function Home() {
  const { lat, long, isLoading } = useGeoLocation();

  if (isLoading) {
    return <AllowLocationCard />;
  }

  return (
    <main className="flex items-center relative justify-center gap-8 flex-col lg:flex-row py-12 lg:h-screen h-auto">
      <CurrentTemperature lat={lat} long={long} />

      <div className="flex flex-col gap-11">
        <div className="flex flex-col lg:flex-row justify-evenly w-[80vw] max-w-[540px] gap-6">
          <AirQuality />

          <SunPath startTime="06:12" endTime="18:52" currentTime="06:01" />
        </div>

        <DailyForecast />
      </div>
    </main>
  );
}
