import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';

let store = {

  _state: {

    profilePage: {
      posts: [
        { id: 1, message: "Hi, how are you?", likesCount: 12 },
        { id: 2, message: "It's my first post", likesCount: 34 },
        { id: 2, message: "Bla bla bla", likesCount: 124 },
      ],

      newPostText: 'it-kamasutra.com',
    },

    dialogsPage: {
      dialogs: [
        { id: 1, name: 'Dimych' },
        { id: 2, name: 'Andrey' },
        { id: 3, name: 'Sveta' },
        { id: 4, name: 'Sasha' },
        { id: 5, name: 'Viktor' },
        { id: 6, name: 'Valera' },
      ],
      messages: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How is your IT Kama Sutra' },
        { id: 3, message: 'YoYo' },
        { id: 4, message: 'Hi' },
        { id: 5, message: 'Hi' },
      ],
      newMessageBody: '',
    },

    sideBar: {
      friends: [
        { id: 1, name: 'Sveta' },
        { id: 2, name: 'Andrey' },
        { id: 3, name: 'Viktor' },
      ],
    },

    usersPage: {
      users: [
        {
          id: 1,
          followed: true,
          photoUrl: 'https://image.shutterstock.com/z/stock-photo-dragon-head-on-the-gray-stone-background-digital-painting-1441710026.jpg',
          fullName: 'Elena',
          status: 'I am a developer',
          location: { city: 'Mykolaiv', country: 'Ukraine' }
        },
        {
          id: 2,
          followed: false,
          photoUrl: 'https://image.shutterstock.com/z/stock-photo-dragon-head-on-the-gray-stone-background-digital-painting-1441710026.jpg',
          fullName: 'Kenneth',
          status: 'I am a developer',
          location: { city: 'Kotinth', country: 'Denmark' }
        },
        {
          id: 4,
          followed: true,
          photoUrl: 'https://image.shutterstock.com/z/stock-photo-dragon-head-on-the-gray-stone-background-digital-painting-1441710026.jpg',
          fullName: 'Adelaine',
          status: 'I am a developer',
          location: { city: 'Milan', country: 'Italy' }
        },
      ],
    },
  },

  getState() {
    return this._state;
  },

  _callSubscriber() {
    console.log('State is changed');
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {

    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sideBar = sidebarReducer(this._state.sideBar, action);
    this._callSubscriber(this._state);
  }
};

window.store = store;

export default store;
