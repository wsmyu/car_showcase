"use client";
import { CarProps } from "@/types";
import Image from "next/image";
import CustomButton from "./CustomButton";
import { calculateCarRent } from "@/utils";
import { RiSteering2Line } from "react-icons/ri";
import { GiCartwheel } from "react-icons/gi";
import { PiGasCanFill } from "react-icons/pi";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useState } from "react";
import CardDetails from "./CardDetails";

interface CarCardProps {
  car: CarProps;
}

const CarCard = ({ car }: CarCardProps) => {
  const { city_mpg, year, make, model, transmission, drive } = car;
  const [isOpen, setIsOpen] = useState(false);
  const carRent = calculateCarRent(city_mpg, year);

  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {make} {model}
        </h2>
      </div>
      <p className="flex mt-6 text-[32px] font-extrabold">
        <span className="self-start text-[14px] font-semibold">$</span>
        {carRent}
        <span className="self-end text-[14px] font-medium">/day</span>
      </p>
      <div className="relative w-full h-40 my-3 object-contain">
        <Image
          src="/hero.png"
          alt="car model"
          fill
          priority
          className="object-contain"
        />
      </div>
      <div className="relative flex w-full mt-2">
        <div className="flex group-hover:invisible w-full justify-between text-gray">
          <div className="flex flex-col gap-2 justify-center items-center">
            <RiSteering2Line />
            <p className="text-[14px]">
              {transmission === "a" ? "Automatic" : "Manual"}
            </p>
          </div>
          <div className="flex flex-col gap-2 justify-center items-center">
            <GiCartwheel />
            <p className="text-[14px]">{drive.toUpperCase()}</p>
          </div>
          <div className="flex flex-col gap-2 justify-center items-center">
            <PiGasCanFill />
            <p className="text-[14px]">{city_mpg} MPG</p>
          </div>
        </div>
        <div className="car-card__btn-container">
          <CustomButton
            title="View More"
            containerStyles="w-full py-[16px] rounded-full bg-gray-500"
            textStyles="text-white text-[14px] leading-[17px] font-bold"
            handleClick={() => setIsOpen(true)}
            rightIcon={<FaLongArrowAltRight style={{ color: "white" }} />}
          />
        </div>
      </div>
      <CardDetails isOpen={isOpen} closeModal={()=>setIsOpen(false)} car={car} />
    </div>
  );
};

export default CarCard;
