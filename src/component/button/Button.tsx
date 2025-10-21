import clsx from "clsx";
import React, { ComponentPropsWithoutRef } from "react";

export type Props = {
  variant: "primary" | "secondary" | "tertiary";
  fullWidth?: boolean;
} & ComponentPropsWithoutRef<"button">;

const Button = ({ variant = "primary", fullWidth = false, className, ...rest }: Props) => {
  const baseStyles =
    "rounded-[2px] outline-2 outline-transparent flex items-center justify-center w-[182px] h-[36px] px-6 py-[6px] transition-all duration-200";

  const variants = {
    primary:
      "bg-[var(--primary-500)] active:bg-[var(--primary-700)] hover:bg-[var(--primary-100)] focus-visible:outline-[var(--primary-700)] disabled:bg-[var(--primary-900)] disabled:text-[var(--light-900)]",

    secondary:
      "bg-[var(--dark-300)] hover:bg-[var(--dark-100)] active:bg-[var(--dark-400)] focus-visible:border-[var(--primary-300)] border-2 border-transparent disabled:bg-[var(--dark-500)] disabled:text-[var(--light-900)]",

    tertiary:
      "bg-transparent border-2 border-[var(--primary-500)] text-[var(--primary-500)] hover:border-[var(--primary-100)] hover:text-[var(--primary-100)] active:border-[var(--primary-700)] active:text-[var(--primary-700)] focus-visible:outline-[var(--primary-700)] focus-visible:border-transparent disabled:border-[var(--primary-900)] disabled:text-[var(--primary-900)]",
  };

  const classes = clsx(baseStyles, variants[variant], fullWidth && "w-full", className);

  return <button className={classes} {...rest} />;
};

export default Button;
