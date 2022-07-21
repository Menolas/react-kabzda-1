import renderEntireTree from './../render';

let state = {

  profilePage: {
    posts: [
      { id: 1, message: "Hi, how are you?", likesCount: 12 },
      { id: 2, message: "It's my first post", likesCount: 34 },
      { id: 2, message: "Bla bla bla", likesCount: 124 },
    ],
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
  },

  siteBar: {
    friends: [
      { id: 1, name: 'Sveta' },
      { id: 2, name: 'Andrey' },
      { id: 3, name: 'Viktor' },
    ]
  }
};

export let addPost = (postMessage) => {

  let newPost = {
    id: 5,
    message: postMessage,
    likesCount: 0,
  };

  state.profilePage.posts.push(newPost);
  renderEntireTree(state);
};

export default state;
