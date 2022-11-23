import axios from "axios";

const axiosConfig = {
    timeout: 3000,
    baseURL: 'http://localhost:8080/api',
};

const KakaoInstance = axios.create(axiosConfig);

KakaoInstance.interceptors.request.use(
    (config) => {
        config.headers["Content-Type"] = "application/json; charset=utf-8";
        config.headers["X-Requested-With"] = "XMLHttpRequest";
        config.headers["Authorization"] = `KakaoAK ${process.env.REACT_APP_KAKAO_AUTH}`;
        config.headers.Accept = "application/json";
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

//-- response --
KakaoInstance.interceptors.response.use(
    (response) => {
        const res = response.data;
        return res;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default KakaoInstance;