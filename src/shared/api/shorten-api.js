import { get } from "./http-methods";

export const shortenUrl = async (url) => {
    const response = await get(url);

    if(response.ok) {
        return response.json()
    }else {
        const errorResponse = await response.json().then((err) => err);
        return Promise.reject(errorResponse);
    }
}