import React from "react";

import { SunIcon } from "lucide-react";

import { getCircleCoordinates } from "@/utils/getCircleCoordinates";

interface SunScheduleProps {
  startTime: string;
  endTime: string;
  currentTime: string;
}

export default function SunSchedule({
  startTime,
  endTime,
  currentTime,
}: SunScheduleProps) {
  const parseTime = (time: string) =>
    parseInt(time.split(":")[0], 10) * 60 + parseInt(time.split(":")[1], 10);

  const startTimeInMinutes = parseTime(startTime);
  const endTimeInMinutes = parseTime(endTime);
  const currentTimeInMinutes = parseTime(currentTime);

  const { x, y } = getCircleCoordinates(
    startTimeInMinutes,
    endTimeInMinutes,
    currentTimeInMinutes
  );

  return (
    <div className="bg-purple-primary rounded-2xl shadow-lg pt-4 pb-6 px-4 relative flex flex-col items-center w-full">
      <div className="flex gap-1 text-purple-subtitle items-center pt-4 font-bold text-base">
        <SunIcon size={20} />
        <span className="text-sm ">Sun Schedule</span>
      </div>
      <div className="flex-grow flex items-center justify-center">
        <svg viewBox="0 0 100 50" className="w-full h-auto">
          <path
            d="M10,50 A40,40 0 0,1 90,50"
            fill="none"
            stroke="#C2BFF4"
            strokeWidth="0.5"
          />
          <circle cx={x} cy={y} r="3" fill="#f6c834" />
        </svg>
      </div>
      <div className="absolute top-1/2 transform -translate-y-1 right-25">
        <span className="text-purple-subtitle">{currentTime}</span>
      </div>
      <div className="flex justify-between w-full mt-4">
        <span className="text-sm text-purple-subtitle">{startTime}</span>
        <span className="text-sm text-purple-subtitle">{endTime}</span>
      </div>
    </div>
  );
}
