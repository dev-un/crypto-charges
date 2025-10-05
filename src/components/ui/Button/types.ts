import type { ReactNode } from "react";
import type { ClassOptions, ClassProps } from "../types";

export interface ButtonClassOptions extends ClassOptions {
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

export type ButtonProps = {
  children: ReactNode;
} & ClassProps<ButtonClassOptions>;
