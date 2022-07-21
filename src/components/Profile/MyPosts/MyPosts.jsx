import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

  let postsElements = props.posts
    .map(p => <Post message={p.message} likesCount={p.likesCount} />);
  
  let newPostElement = React.createRef();
  
  let addPost = () => {
    let text = newPostElement.current.value;
    props.addPost(text);
    newPostElement.current.value = '';
  };

  return (
    <div className={classes.myPosts}>
      <h3>My posts</h3>
      <div className={classes.newPost}>
        <textarea rows="10" ref={newPostElement}></textarea>
        <button onClick={addPost}>Add post</button>
      </div>
      <ul className={classes.postsList}>
        {postsElements}
      </ul>
    </div>
  );
}

export default MyPosts;
