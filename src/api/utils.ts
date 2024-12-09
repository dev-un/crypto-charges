import { AxiosError } from "axios";

export function generateError(err: unknown | null) {
  if (!err) return null;

  const error = err as AxiosError<{ message: string; details: string }>;
  const message = error.response?.data?.message || "Unknown error";
  const details = error.response?.data?.details || "Something went wrong";
  const status = error.response?.status || 500;

  return { status, message, details };
}
