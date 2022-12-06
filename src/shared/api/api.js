import axiosInstance from "./instance";
import kakaoInstance from "./KakaoInstance";

export const signUp = (param) => axiosInstance.post('/v1/users/join', param).then(res => res)

export const login = (param) => axiosInstance.post('/v1/users/login', param).then(res => res)

export const userInfo = () => axiosInstance.get('/v1/users').then(res => res)

export const updateUser = (param) => axiosInstance.post('/v1/users/update', param).then(res => res)

export const write = (param) => axiosInstance.post('/v1/posts', param).then(res => res)

export const getMyPosts = () => axiosInstance.get('/v1/posts').then(res => res)

export const getMyTeamPosts = () => axiosInstance.get('/v1/posts/team').then(res => res)

export const getTeamPostsByLocation = (param, page = 0) => axiosInstance.post(`/v1/posts/team/location?page=${page}`, param).then(res => res)

export const writeTeamPost = (param) => axiosInstance.post('/v1/posts/team', param).then(res => res)

export const updatePost = (param) => axiosInstance.put(`/v1/posts`, param).then(res => res)

export const updateTeamPost = (param) => axiosInstance.put(`/v1/posts/team`, param).then(res => res)

export const deletePost = (postId) => axiosInstance.delete(`/v1/posts/${postId}`).then(res => res)

export const getPost = (id) => axiosInstance.get(`/v2/posts/${id}`).then(res => res)

export const getTeamPost = (id) => axiosInstance.get(`/v2/posts/team/${id}`).then(res => res)

export const addMember = (postId, memberId) => axiosInstance.post(`/v1/posts/team/${postId}/member/${memberId}`).then(res => res)

export const addWait = (postId) => axiosInstance.post(`/v1/posts/team/${postId}/wait`).then(res => res)

export const getWaitList = (postId) => axiosInstance.get(`/v2/posts/team/${postId}/wait`).then(res => res)

export const deleteWaitListMember = (postId, memberId) => axiosInstance.delete(`/v1/posts/team/${postId}/wait/${memberId}`).then(res => res)

export const confirmTeam = (postId) => axiosInstance.get(`/v1/posts/team/${postId}/confirm`).then(res => res)

export const deleteMember = (postId, memberId) => axiosInstance.delete(`/v1/posts/team/${postId}/member/${memberId}`).then(res => res)

export const getPostList = (page = 0, keyword = '') => axiosInstance.get(`/v2/posts?page=${page}&keyword=${keyword}`).then(res => res)

export const getTeamPostList = (page = 0, keyword = '', place = '') => axiosInstance.get(`/v2/posts/team?page=${page}&keyword=${keyword}&place=${place}`).then(res => res)

export const writeComment = (postId, content) => axiosInstance.post(`/v1/posts/${postId}/comments`, content).then(res => res)

export const writeCommentWithParent = (postId, parentId, content) => axiosInstance.post(`/v1/posts/${postId}/comments/${parentId}`, content).then(res => res)

export const getComments = (postId) => axiosInstance.get(`/v1/posts/${postId}/comments`).then(res => res)

export const deleteComment = (postId, commentId) => axiosInstance.delete(`/v1/posts/${postId}/comments/${commentId}`).then(res => res)

export const getAlarms = () => axiosInstance.get(`/v1/alarms`).then(res => res)

export const deleteAlarms = (alarmId) => axiosInstance.delete(`/v1/alarms/${alarmId}`).then(res => res)

export const kakaoPlaceSearch = (query, y=0, x=0) => kakaoInstance.get(`https://dapi.kakao.com/v2/local/search/keyword.json?query=${query}&y=${y}&x=${x}`).then(res => res)

export const kakaoSearch = () => kakaoInstance.get(`https://dapi.kakao.com/v2/search/blog?query="클라이밍 후기"&sort=accuracy&size=5`).then(res => res)

export const getRecommendPostsImg = (param) => axiosInstance.post('/v2/posts/recommend', param).then(res => res)