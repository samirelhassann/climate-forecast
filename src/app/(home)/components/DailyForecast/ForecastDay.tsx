import Image, { StaticImageData } from "next/image";

interface ForecastDayProps {
  textDay: string;
  icon: StaticImageData;
  maxTemp: number;
  minTemp: number;
}

export default function ForecastDay({
  textDay,
  icon,
  maxTemp,
  minTemp,
}: ForecastDayProps) {
  const formatedMaxTemp = `${maxTemp.toFixed(0)}°`;
  const formatedMinTemp = `${minTemp.toFixed(0)}°`;

  return (
    <div className="flex flex-col gap-8 items-center">
      <span className="font-medium text-purple-subtitle">{textDay}</span>
      <Image src={icon} alt="cloud image" className="max-h-[2.7rem]" />

      <div className="flex gap-1">
        <span className="text-white">{formatedMaxTemp}</span>
        <span className="text-purple-subtitle">{formatedMinTemp}</span>
      </div>
    </div>
  );
}
