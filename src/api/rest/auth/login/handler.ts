import { LoginDto } from "./dto";
import { baseApiClient } from "@/api/instances/base";
import { LOGIN_PATH } from "./constants";

export async function login(dto: LoginDto) {
  const res = await baseApiClient.post(LOGIN_PATH, dto, {
    withCredentials: true,
  });
  return res.data;
}
