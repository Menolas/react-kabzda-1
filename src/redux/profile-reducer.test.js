import profileReducer, { addPostAC, deletePost } from "./profile-reducer";

let state = {
  posts: [
    { id: 1, message: "Hi, how are you?", likesCount: 12 },
    { id: 2, message: "It's my first post", likesCount: 34 },
    { id: 3, message: "Bla bla bla", likesCount: 124 },
  ]
};

it('new post should be added', () => {
  //1. test data
  let action = addPostAC("it-kamasutra.com");

  //2. action
  let newState = profileReducer(state, action);

  //3. expectation
  expect(newState.posts.length).toBe(4); 
});

it('message of new post should be correct', () => {
    // 1. test data
    let action = addPostAC("it-kamasutra.com");

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts[3].message).toBe("it-kamasutra.com");
});

it('after deleting length of messages should be decrement', () => {
    // 1. test data
    let action = deletePost(1);

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts.length).toBe(2);
});

it('after deleting length should not be decrement if id is incorrect', () => {
    // 1. test data
    let action = deletePost(1000);

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts.length).toBe(3);
});
