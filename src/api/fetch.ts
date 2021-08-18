
import { getParameterType, getParameter } from '@/utils'
// 基于Promise封装fetch库 (增删改查)
class Http {
    // get 请求
    async get(url: string, data?: getParameterType) {    
        const response = await fetch(url + getParameter(data));
        const resData = await response.json();
        return resData;
    }

    // 封装 post 请求
    async post(url: string, data: object) {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        const resData = await response.json();
        return resData;
    }


    // 封装 put 请求
    async put(url: string, data: object) {
        const response = await fetch(url, {
            method: "PUT",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        const resData = await response.json()
        return resData
    }

    // 封装 delete 请求
    async delete(url: string, data: object) {
        const response = await fetch(url, {
            method: "DELETE",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        const resData = await response.json();
        return resData;
    }
}

const http = new Http;
export default http;