import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

  let postsElements = props.profilePage.posts
    .map(p => <Post message={p.message} likesCount={p.likesCount} key={p.id} />);
  
  let newPostElement = React.createRef();
  
  let onAddPost = () => {
    props.addPost();
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  };

  return (
    <div className={classes.myPosts}>
      <h3>My posts</h3>
      <div className={classes.newPost}>
        <textarea
          rows="10"
          ref={newPostElement}
          value={props.newPostText}
          onChange={onPostChange} />
        <button onClick={onAddPost}>Add post</button>
      </div>
      <ul className={classes.postsList}>
        {postsElements}
      </ul>
    </div>
  );
}

export default MyPosts;
