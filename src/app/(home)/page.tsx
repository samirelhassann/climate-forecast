"use client";

import React from "react";

import AirQuality from "./components/AirQuality";
import CurrentTemperature from "./components/CurrentTemperature";
import SunPath from "./components/SunSchedule";

import { useGeoLocation } from "./hooks/useGeoLocation";

export default function Home() {
  const { lat, long, isLoading } = useGeoLocation();

  return (
    <main
      className="bg-cover bg-center bg-background-card overflow-y-auto min-h-screen"
      style={{ backgroundImage: "url('/background.png')" }}
    >
      {!isLoading && (
        <div className="flex items-center justify-center gap-8 flex-col lg:flex-row py-12 lg:h-screen h-auto">
          <CurrentTemperature lat={lat} long={long} />

          <div className="flex flex-col">
            <div className="flex flex-col lg:flex-row justify-evenly w-[80vw] max-w-[540px] gap-6">
              <AirQuality />

              <SunPath startTime="06:12" endTime="18:52" currentTime="06:01" />
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
