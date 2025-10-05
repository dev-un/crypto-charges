import type { ClassOptions, ClassProps } from "./types";

export const generateClassNames = (options: ClassOptions, props: ClassProps) =>
  Object.entries(props).reduce(
    (acc, [propName, propValue]) => acc + " " + options[propName][propValue],
    options.base.init,
  );
