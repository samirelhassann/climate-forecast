import { LeafIcon, RefreshCwOff } from "lucide-react";

export default function AirQuality() {
  return (
    <div className="rounded-xl bg-purple-primary bg-cover w-full p-4 h-60">
      <div className="flex flex-col items-center justify-between h-full">
        <div className="flex flex-col ">
          <div className="flex gap-1 text-purple-subtitle items-center pt-4 font-bold text-base">
            <LeafIcon size={20} />
            <span className="text-sm ">Air Quality</span>
            <RefreshCwOff className="ml-1 h-4 w-4 text-rose-400" />
          </div>

          <div className="flex flex-col items-center gap-2 mt-8">
            <span className="text-[#87EBCD]">Good</span>
            <span className="text-label text-4xl font-bold">21</span>
          </div>
        </div>

        <div className="flex items-center w-full justify-evenly">
          <div className="flex flex-col items-center justify-center">
            <span className="text-[#87EBCD] text-sm font-bold">12.9</span>
            <span className="text-label text-xs">PM2.5</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <span className="text-[#87EBCD] text-sm font-bold">12.9</span>
            <span className="text-label text-xs">PM2.5</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <span className="text-[#87EBCD] text-sm font-bold">12.9</span>
            <span className="text-label text-xs">PM2.5</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <span className="text-[#87EBCD] text-sm font-bold">12.9</span>
            <span className="text-label text-xs">PM2.5</span>
          </div>
        </div>
      </div>
    </div>
  );
}
