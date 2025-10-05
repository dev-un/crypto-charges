import { generateClassNames } from "../utils";
import { buttonClassOptions } from "./options";
import type { ButtonProps } from "./types";
import React from "react";

const Button = ({ children, ...classProps }: ButtonProps) => {
  return (
    <button className={generateClassNames(buttonClassOptions, classProps)}>
      {children}
    </button>
  );
};

export default Button;
