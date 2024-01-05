import React from "react";

import Image from "next/image";

import { CloudRain, Droplets, MapPin, Wind } from "lucide-react";

import CloudIcon from "../icons/weather.svg";

export default function Home() {
  return (
    <main
      className="bg-cover bg-center h-screen bg-background flex items-center justify-center"
      style={{ backgroundImage: "url('/background.png')" }}
    >
      <div className="rounded-xl bg-purple-primary relative bg-cover">
        <Image
          src={CloudIcon}
          alt="Cloud Icon"
          width={176}
          height={176}
          className="absolute mt-[-3.5rem] ml-[-4rem]"
        />
        <div className="flex flex-col ">
          <div className="self-end flex gap-1 text-purple-subtitle items-center mt-8 mr-8">
            <MapPin size={20} />
            <span className="text-sm ">São Paulo, SP</span>
          </div>

          <div className="mt-20 flex self-center">
            <div className="flex flex-col items-center gap-3">
              <div className="flex items-start">
                <span className="text-white text-8xl font-bold">18</span>
              </div>
              <div className="flex gap-2">
                <span className="text-xl text-white font-bold">22°</span>
                <span className="text-xl text-purple-subtitle font-bold">
                  16°
                </span>
              </div>
            </div>
            <span className="text-purple-subtitle text-2xl font-bold mt-2">
              °C
            </span>
          </div>
        </div>

        <div className="mt-40">
          <div className="flex gap-2 p-3">
            <div className="py-3 px-4 gap-3 flex items-center justify-center bg-[#7e79e0] rounded-md w-36">
              <Wind size={32} className="text-purple-subtitle" />
              <div className="flex flex-col">
                <span className="text-sm text-[#E7E6FB]">Wind</span>

                <div className="flex items-baseline gap-1">
                  <span className="text-xl text-[#E7E6FB]">17</span>
                  <span className="text-base text-[#DAD8F7]">km/h</span>
                </div>
              </div>
            </div>
            <div className="py-3 px-4 gap-3 flex items-center justify-center bg-[#7e79e0] rounded-md w-36">
              <Droplets size={32} className="text-purple-subtitle" />
              <div className="flex flex-col">
                <span className="text-sm text-[#E7E6FB]">Humidity</span>

                <div className="flex items-baseline gap-1">
                  <span className="text-xl text-[#E7E6FB]">31</span>
                  <span className="text-base text-[#DAD8F7]">%</span>
                </div>
              </div>
            </div>
            <div className="py-3 px-4 gap-3 flex items-center justify-center bg-[#7e79e0] rounded-md w-36">
              <CloudRain size={32} className="text-purple-subtitle" />
              <div className="flex flex-col">
                <span className="text-sm text-[#E7E6FB]">Rain</span>

                <div className="flex items-baseline gap-1">
                  <span className="text-xl text-[#E7E6FB]">10</span>
                  <span className="text-base text-[#DAD8F7]">%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
