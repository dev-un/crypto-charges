export interface ClassOptions {
  base: Record<"init", string>;
  [propName: string]: Record<string, string>;
}

export type ClassProps<T = ClassOptions> = {
  [K in keyof Omit<T, "base">]: keyof T[K];
};
