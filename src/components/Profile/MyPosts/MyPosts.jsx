import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../../utils/validators/validators';
import { Textarea } from './../../common/FormsControl/FormsControl';

const maxLength50 = maxLengthCreator(50);

let AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        rows="10"
        component={Textarea}
        name="newPostText"
        validate={[required, maxLength50]}
        placeholder={"Write your next post here"} />
      <button >Add post</button>
    </form>
  );
}

let AddNewPostFormRedux = reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm);

const MyPosts = React.memo(props => {

  let postsElements = props.profilePage.posts
    .map(p => <Post message={p.message} likesCount={p.likesCount} key={p.id} />);
  
  let onAddPost = (values) => {
    props.addPost(values.newPostText);
  };

  return (
    <div className={classes.myPosts}>
      <h3>My posts</h3>
      <div className={classes.newPost}>
        <AddNewPostFormRedux onSubmit={onAddPost} />
      </div>
      <ul className={classes.postsList}>
        {postsElements}
      </ul>
    </div>
  );
});

export default MyPosts;
