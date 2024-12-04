import axios from "axios";
import { LoginRequest, LoginResponse } from "./types";

const endpoints = {
    login: (req: LoginRequest) => axios.post<LoginResponse>('/auth/login', req),
}

async function login(req: LoginRequest) {
    try {
        const { data } = await endpoints.login(req)

        return data;
    } catch (e) {
        // TODO: ERROR HANDLER

        console.error('login endpoint', e)
    }
}
