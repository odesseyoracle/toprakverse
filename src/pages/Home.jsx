import React, { useState, useEffect } from "react";
import Post from "../components/Post";
import Button from "../components/Button";
import { useUserContext } from "../contexts/UserContext";
import { allPosts } from "../data/posts";

const Home = () => {
  const [newPost, setNewPost] = useState("");
  const [posts, setPosts] = useState(allPosts);
  const { userData } = useUserContext();
  const loggedUser = userData.find((user) => user.loggedIn);
  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem("posts")) || allPosts;
    setPosts(storedPosts);
  }, []);

  const handleNewPost = (e) => {
    setNewPost(e.target.value);
  };

  const handleAddPost = () => {
    const currentPost = {
      profilePicture: loggedUser.profilePicture,
      username: loggedUser.userName,
      content: newPost,
      date: new Date().toLocaleDateString("de-DE"),
      picture: loggedUser.profilePicture,
    };

    const updatedPosts = [currentPost, ...posts];
    localStorage.setItem("posts", JSON.stringify(updatedPosts));
    setPosts((prev) => [currentPost, ...prev]);
    setNewPost("");
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-bold">Home</h1>
      <textarea
        className="border-solid border-2 border-tertiary rounded-md m-3 mb-0 p-3 w-96 h-24"
        placeholder="What's on your mind?"
        onChange={handleNewPost}
        value={newPost}
      ></textarea>
      <Button event={handleAddPost}>Post It!</Button>
      {posts.map((post, index) => (
        <Post key={index} {...post} />
      ))}
    </div>
  );
};

export default Home;
