import clsx from "clsx";
import React, { type ReactNode } from "react";

interface ButtonOptions {
  base: string;
  color: {
    primary: string;
    secondary: string;
  };
  size: {
    small: string;
    medium: string;
    large: string;
  };
}

export const options: ButtonOptions = {
  base: "shadow-md",
  color: {
    primary: "bg-primary text-secondary",
    secondary: "bg-secondary text-white",
  },
  size: {
    small: "h-10 px-4",
    medium: "h-12 px-6",
    large: "h-14 px-8",
  },
};

type ButtonParams = {
  [K in keyof Omit<ButtonOptions, "base">]: keyof ButtonOptions[K];
};

const generateClass = (options: ButtonOptions, params: ButtonParams) => {
  return Object.entries(params).reduce(
    // @ts-ignore
    (acc, [key, value]) => acc + " " + options[key][value],
    options.base,
  );
};

export type ButtonProps = {
  children: ReactNode;
} & ButtonParams;

const Button = ({ children, ...params }: ButtonProps) => {
  return <button className={generateClass(options, params)}>{children}</button>;
};

export default Button;
