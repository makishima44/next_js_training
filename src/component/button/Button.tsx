import clsx from "clsx";
import React, { ComponentPropsWithoutRef } from "react";

export type Props = {
  variant: "primary" | "secondary";
  fullWidth?: boolean;
} & ComponentPropsWithoutRef<"button">;

const Button = ({ variant = "primary", fullWidth = false, className, ...rest }: Props) => {
  const baseStyles =
    "text-[var(--light-100)] rounded-[2px] outline-2 outline-transparent border-2 border-transparent  flex flex-row items-center justify-center w-[182px] h-[36px] px-6 py-[6px]";

  const variants = {
    primary:
      "bg-[var(--primary-500)] active:bg-[var(--primary-700)] hover:bg-[var(--primary-100)] focus-visible:outline-[var(--primary-700)] disabled:bg-[var(--primary-900)] disabled:text-[var(--light-900)]",

    secondary:
      "bg-[var(--dark-300)] active:bg-[var(--dark-600)] hover:bg-[var(--dark-100)] focus-visible:border-[var(--primary-300)] disabled:bg-[var(--dark-500)] disabled:text-[var(--light-900)]",
  };

  const classes = clsx(baseStyles, variants[variant], fullWidth && "w-full", className);

  return <button className={classes} {...rest} />;
};

export default Button;
