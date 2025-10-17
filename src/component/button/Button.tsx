import clsx from "clsx";
import React, { ComponentPropsWithoutRef } from "react";

export type Props = {
  variant?: "primary" | "secondary" | "tertiary" | "link";
  fullWidth?: boolean;
} & ComponentPropsWithoutRef<"button">;

const Button = ({ variant = "primary", fullWidth, className, ...rest }: Props) => {
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 active:bg-blue-800",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400 active:bg-gray-400",
    tertiary: "bg-transparent border border-gray-400 text-gray-700 hover:bg-gray-100 focus:ring-gray-300 active:bg-gray-200",
    link: "text-blue-600 underline-offset-4 hover:underline focus:ring-blue-500 active:text-blue-800",
  };

  const classes = clsx(variants[variant], fullWidth && "w-full", className);

  return <button className={classes} {...rest} />;
};

export default Button;
