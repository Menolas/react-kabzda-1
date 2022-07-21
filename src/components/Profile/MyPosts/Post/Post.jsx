import classes from './Post.module.css';
import ava from './ichigo.jpg';

const Post = (props) => {
  return (
    <li className={classes.item}>
      <img src={ava} />
      <div className={classes.itemContent}>
        {props.message}
        <span className={classes.itemLike}>{props.likesCount}</span>
      </div>
    </li>
  );
}

export default Post;
