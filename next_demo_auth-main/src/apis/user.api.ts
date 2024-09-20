import axios from "axios"

export interface RegisterDTO {
    userName: string;
    email: string;
    password: string;
}

export interface LoginDTO {
    loginName: string;
    password: string;
}


export const userApi = {
    register: async (data: RegisterDTO) => {
        return await axios.post("http://localhost:3000/api/user/register", data)
    },
    login: async (data: LoginDTO) => {
        return await axios.post("http://localhost:3000/api/user/login", data)
    },
    getData: async (token: string) => {
        return await axios.post("http://localhost:3000/api/user/verify-token", {token})
    },
    loginGoogle: async (token: string) => {
        return await axios.post("http://localhost:3000/api/user/verify-token", {token})
    }
}