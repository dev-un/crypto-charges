import { authApiClient } from "@/api/instances/auth";
import { GET_USERS_ME_PATH } from "./constants";
import { User } from "./types";

export async function getMe() {
  const res = await authApiClient.get<User>(GET_USERS_ME_PATH);
  return res.data;
}
