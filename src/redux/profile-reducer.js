import { profileAPI } from '../api/api';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
  posts: [
    { id: 1, message: "Hi, how are you?", likesCount: 12 },
    { id: 2, message: "It's my first post", likesCount: 34 },
    { id: 3, message: "Bla bla bla", likesCount: 124 },
  ],
  newPostText: 'it-kamasutra.com',
  profile: null,
  status: '',
};

const profileReducer = (state = initialState, action) => {

  switch (action.type) {
    case SET_STATUS:
      return {
        ...state,
        status: action.status,
      };
    
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };
    
    case ADD_POST:
      let newPost = {
        id: 5,
        message: state.newPostText,
        likesCount: 0,
      };
      
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: '',
      };
    
    case UPDATE_NEW_POST_TEXT:
    
      return {
        ...state,
        newPostText: action.newText,
      };
    
    default:
      return state;
  }
};

export const addPostAC = () => ({type: ADD_POST,});
export const updateNewPostTextAC = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text, });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const setStatus = (status) => ({ type: SET_STATUS, status });

export const getUserProfile = (userId) => (dispatch) => {
  profileAPI.getProfile(userId).then(data => {
    dispatch(setUserProfile(data.data));
  });
}

export const getStatus = (userId) => (dispatch) => {
  profileAPI.getStatus(userId).then(data => {
    dispatch(setStatus(data));
  });
}

export const updateStatus = (status) => (dispatch) => {
  profileAPI.updateStatus(status)
    .then(response => {
      debugger;
      if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
      }
  });
}

export default profileReducer;
