import axiosInstance from "./instance";

export const signUp = (param) => axiosInstance.post('/v1/users/join', param).then(res => res)

export const login = (param) => axiosInstance.post('/v1/users/login', param).then(res => res)

export const userInfo = (param) => axiosInstance.get('/v1/users', param).then(res => res)

export const write = (param) => axiosInstance.post('/v1/posts', param).then(res => res)

export const writeTeamPost = (param) => axiosInstance.post('/v1/posts/team', param).then(res => res)

export const getPost = (id) => axiosInstance.get(`/v2/posts/${id}`).then(res => res)

export const getTeamPost = (id) => axiosInstance.get(`/v2/posts/team/${id}`).then(res => res)

