import axios from 'axios';
import { message } from 'antd';

const service = axios.create({
    baseURL: process.env.REACT_APP_MOCK_API_BASE
})
//请求拦截
service.interceptors.request.use((config) => {
    config.data = Object.assign({}, config.data, {
    })
    return config;
})

//响应拦截
service.interceptors.response.use((resp) => {
    if (resp.data.code === '200') {
        return resp.data;
    } else {
        //全局处理错误
        message.error(resp.msg);
    }
})

export default service;