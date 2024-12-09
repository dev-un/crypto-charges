import { LoginDto, LoginResponse } from "./types";
import { baseApiClient } from "@/api/instances/base";
import { LOGIN_PATH } from "./constants";

export async function login(dto: LoginDto): Promise<LoginResponse> {
  const res = await baseApiClient.post(LOGIN_PATH, dto, {
    withCredentials: true,
  });
  return res.data;
}
