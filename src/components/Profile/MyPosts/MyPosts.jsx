import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Posts/Post.jsx";

const MyPosts = (props) => {
  //   let posts = [
  //     { id: 1, likesCount: 12, message: "Helloy" },
  //     { id: 2, likesCount: 5, message: "Hi? Arae You?" },
  //     { id: 3, likesCount: 0, message: "blabla" },
  //     { id: 4, likesCount: 9, message: "WtF" },
  //     { id: 5, likesCount: 11, message: "It`s is my first post!" },
  //   ];

  let postsElements = props.posts.map((p) => (
    <Post iLike={p.likesCount} message={p.message} />
  ));

  let newPostElement = React.createRef();

  let addPost = () => {
    // let text = newPostElement.current.value;
    props.addPost(/*text*/);
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  };

  return (
    <div className={s.postBlock}>
      <h3>My Post</h3>
      <div>
        <div>
          <textarea
            onChange={onPostChange}
            ref={newPostElement}
            value={props.newPostText}
          />
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
          {/* <button>Remove</button> */}
        </div>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
