import { authApiClient } from "@/api/instances/auth";
import { GET_USERS_ME_PATH } from "./constants";

export async function getMe() {
  const res = await authApiClient.get(GET_USERS_ME_PATH);
  return res.data;
}
