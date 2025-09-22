import type { LoginResponse } from "@/api/rest/auth/login/types";
import { VkRegisterDto } from "./types";
import { baseApiClient } from "@/api/instances/base";
import { VK_REGISTER_PATH } from "./constants";

export async function vkRegister(dto: VkRegisterDto) {
  const res = await baseApiClient.post<LoginResponse>(
    VK_REGISTER_PATH,
    dto,
    //   {
    //   withCredentials: true,
    // }
  );
  return res.data;
}
