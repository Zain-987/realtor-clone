import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:3003/',
    withCredentials: true,
})

export const registerUser = async (data) => {

    try {
        let response = await api.post("/api/v1/register", data)
        return response;
    } catch (error) {
        return error
    }
}
export const LoginUser = async (data) => {

    try {
        let response = await api.post("/api/v1/login", data)
        return response;
    } catch (error) {
        return error
    }
}
export const UpdateUser = async (id , data) => {

    try {
        let response = await api.patch("/api/v1/:"+id, data)
        return response;
    } catch (error) {
        return error
    }
}
export const DeleteUser = async (id) => {

    try {
        let response = await api.post("/api/v1/:" + id, data)
        return response;
    } catch (error) {
        return error
    }
}

