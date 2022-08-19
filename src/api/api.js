import * as axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    "API-KEY": "b58005cf-88b0-4f79-8a3d-30cc5b096349"
  }
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => {
        return response.data;
      });
  },
  unfollowUser (userId) {
    return instance.delete(`follow/${userId}`)
      .then(response => {
        if (response.data.resultCode === 0) {
          return response.data;
        }
      });
  },
  followUser (userId) {
    return instance.post(`follow/${userId}`)
      .then(response => {
        if (response.data.resultCode === 0) {
          return response.data;
        }
      });
  },
  getProfile(userId) {
    return instance.get(`profile/` + userId)
      .then(response => {
        
        return response.data;
      });
  },
}

export const authAPI = {
  me() {
    return instance.get(`auth/me`)
      .then(response => {
        
        if (response.data.resultCode === 0) {
          return response.data;
        }
      });
  }
}
