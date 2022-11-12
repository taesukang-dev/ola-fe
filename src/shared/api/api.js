import axiosInstance from "./instance";

export const signUp = (param) => axiosInstance.post('/v1/users/join', param).then(res => res)

export const login = (param) => axiosInstance.post('/v1/users/login', param).then(res => res)

export const userInfo = () => axiosInstance.get('/v1/users').then(res => res)

export const updateUser = (param) => axiosInstance.post('/v1/users/update', param).then(res => res)

export const write = (param) => axiosInstance.post('/v1/posts', param).then(res => res)

export const getMyPosts = () => axiosInstance.get('/v1/posts').then(res => res)

export const getMyTeamPosts = () => axiosInstance.get('/v1/posts/team').then(res => res)

export const writeTeamPost = (param) => axiosInstance.post('/v1/posts/team', param).then(res => res)

export const updatePost = (param) => axiosInstance.put(`/v1/posts`, param).then(res => res)

export const updateTeamPost = (param) => axiosInstance.put(`/v1/posts/team`, param).then(res => res)

export const deletePost = (postId) => axiosInstance.delete(`/v1/posts/${postId}`).then(res => res)

export const getPost = (id) => axiosInstance.get(`/v2/posts/${id}`).then(res => res)

export const getTeamPost = (id) => axiosInstance.get(`/v2/posts/team/${id}`).then(res => res)

export const addMember = (postId) => axiosInstance.post(`/v1/posts/team/${postId}/member`).then(res => res)

export const deleteMember = (postId, memberId) => axiosInstance.delete(`/v1/posts/team/${postId}/member/${memberId}`).then(res => res)

export const getPostList = (page = 0) => axiosInstance.get(`/v2/posts?page=${page}`).then(res => res)

export const getTeamPostList = (page = 0) => axiosInstance.get(`/v2/posts/team?page=${page}`).then(res => res)

export const writeComment = (postId, content) => axiosInstance.post(`/v1/posts/${postId}/comments`, content).then(res => res)

export const writeCommentWithParent = (postId, parentId, content) => axiosInstance.post(`/v1/posts/${postId}/${parentId}/comments`, content).then(res => res)

export const getComments = (postId) => axiosInstance.get(`/v1/posts/${postId}/comments`).then(res => res)

export const deleteComment = (postId, commentId) => axiosInstance.delete(`/v1/posts/${postId}/${commentId}/comments`).then(res => res)

export const getAlarms = () => axiosInstance.get(`/v1/posts/alarms`).then(res => res)

export const deleteAlarms = (alarmId) => axiosInstance.delete(`/v1/posts/alarms/${alarmId}`).then(res => res)
