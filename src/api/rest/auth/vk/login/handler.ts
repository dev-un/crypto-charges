import type { LoginResponse } from "@/api/rest/auth/login/types";
import { VkLoginDto } from "./types";
import { baseApiClient } from "@/api/instances/base";
import { VK_LOGIN_PATH } from "./constants";

export async function vkLogin(dto: VkLoginDto) {
  const res = await baseApiClient.post<LoginResponse>(
    VK_LOGIN_PATH,
    dto,
    //   {
    //   withCredentials: true,
    // }
  );
  return res.data;
}
