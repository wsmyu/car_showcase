"use client";
import { CustomButtonProps } from "@/types";
import Image from "next/image";

const CustomButton = ({
  title,
  handleClick,
  containerStyles,
  btnType,
  textStyles,
  isDisabled,
  rightIcon
}: CustomButtonProps) => {
  return (
    <button
      disabled={false}
      type={btnType || "button"}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
      
    >
      <span className={`flex-1 ${textStyles}`}>{title}</span>
      {rightIcon &&(
        <div className="relative flex w-6 h-6 justify-center items-center">
          {rightIcon}
        </div>
      )}
    </button>
  );
};

export default CustomButton;
