import clsx from "clsx";
import type { ButtonClassOptions } from "./types";

const colorOptions: ButtonClassOptions["color"] = {
  primary: "bg-primary text-secondary",
  secondary: "bg-secondary text-warning",
};

const sizeOptions: ButtonClassOptions["size"] = {
  small: "h-10 px-4",
  medium: "h-12 px-6",
  large: "h-14 px-8",
};

const baseOptions: ButtonClassOptions["base"] = {
  init: clsx(
    "rounded-xl shadow-md hover:shadow-xl active:shadow-2xl",
    colorOptions.primary,
  ),
};

export const buttonClassOptions: ButtonClassOptions = {
  base: baseOptions,
  color: colorOptions,
  size: sizeOptions,
};
