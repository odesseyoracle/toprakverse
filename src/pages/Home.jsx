import React, { useState } from "react";
import Post from "../components/Post";
import Button from "../components/Button";
import { useUserContext } from "../contexts/UserContext";
import { allPosts } from "../data/posts";

const Home = () => {
  const [newPost, setNewPost] = useState("");
  const [posts, setPosts] = useState(allPosts);
  const { userData } = useUserContext();
  const loggedUser = userData.find((user) => user.loggedIn);

  const handleNewPost = (e) => {
    setNewPost(e.target.value);
  };

  const handleAddPost = () => {
    const currentPost = {
      username: loggedUser.userName,
      content: newPost,
      date: new Date().toISOString().slice(0, 10),
      picture: loggedUser.profilePicture,
    };
    setPosts((prev) => [currentPost, ...prev]);
    setNewPost("");
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-bold">Home</h1>
      <textarea
        className="border-solid border-2 border-black m-3 p-3 w-96 h-24"
        placeholder="What's on your mind?"
        onChange={handleNewPost}
      ></textarea>
      <Button event={handleAddPost}>Post It!</Button>
      {posts.map((post, index) => (
        <Post key={index} {...post} />
      ))}
    </div>
  );
};

export default Home;
