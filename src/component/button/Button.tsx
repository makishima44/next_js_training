import clsx from "clsx";
import React, { ComponentPropsWithoutRef } from "react";

export type Props = {
  variant: "primary" | "secondary" | "link";
  fullWidth?: boolean;
} & ComponentPropsWithoutRef<"button">;

const Button = ({ variant = "primary", fullWidth = false, className, ...rest }: Props) => {
  const baseStyles =
    "text-[var(--light-100)] rounded-[2px] outline-2 outline-transparent text-white flex flex-row items-center justify-center w-[182px] h-[36px] px-6 py-[6px]";

  const variants = {
    primary:
      "bg-[var(--primary-500)] active:bg-[var(--primary-700)] hover:bg-[var(--primary-100)] focus-visible:outline-[var(--primary-700)] disabled:bg-[var(--primary-900)] disabled:text-[var(--light-900)]",

    secondary: "bg-[#4c4c4c]",
    link: "text-blue-600 hover:underline active:text-blue-800 focus:ring-blue-500",
  };

  const classes = clsx(baseStyles, variants[variant], fullWidth && "w-full", className);

  return <button className={classes} {...rest} />;
};

export default Button;
