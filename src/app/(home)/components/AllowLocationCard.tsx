import { LoaderIcon } from "lucide-react";

export default function AllowLocationCard() {
  return (
    <div className="flex items-center relative justify-center gap-8 flex-col lg:flex-row py-12 h-screen">
      <div className="rounded-xl bg-purple-primary bg-cover w-[50%] min-h-[10rem] opacity-7 flex flex-col lg:flex-row justify-evenly items-center p-10 gap-10">
        <div className="flex flex-col gap-8 items-center lg:items-start">
          <span className="text-label font-semibold text-xl text-center">
            Waiting for Location Permission
          </span>
          <span className="text-purple-subtitle text-base hidden lg:block ">
            Please allow location access to enhance your experience. Your
            privacy is protected.
          </span>
        </div>
        <LoaderIcon className="animate-spin text-label w-10 h-10" />
      </div>
    </div>
  );
}
