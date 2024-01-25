import React, {useState} from 'react';
import Post from '../components/Post';
import Button from '../components/Button';
import { useUserContext } from "../contexts/UserContext";

const allPosts = [
  { username: 'user1', content: 'Lorem ipsum...', date: '2024-01-22', picture: 'https://picsum.photos/200' },
  { username: 'user2', content: 'Dolor sit amet...', date: '2024-01-23', picture: 'https://picsum.photos/201'},
  { username: 'user3', content: 'Consectetur adipiscing elit...', date: '2024-01-24', picture: 'https://picsum.photos/202'},
  { username: 'user4', content: 'Sed do eiusmod tempor incididunt...', date: '2024-01-25', picture: 'https://picsum.photos/203'},
];

const Home = () => {
  const [newPost, setNewPost] = useState("");
  const [posts, setPosts] = useState(allPosts);
  const { userData } = useUserContext();
  const loggedUser = userData.find((user) => user.loggedIn);


  const handleNewPost = (newPost) => {
    setNewPost([...newPost, newPost]);
  };

  const handleAddPost = () => {
    const newPost= {
      username: loggedUser.userName,
      content: newPost,
      date: new Date().toISOString().slice(0, 10),
      picture: loggedUser.profilePicture,
    }; 
    setPosts([...posts, newPost]);

    setNewPost("");
  }



  return (
    <div className="flex flex-col items-center">
    <h1 className="text-2xl font-bold">Home</h1>
    <textarea className="border-solid border-2 border-black m-3 p-3 w-96 h-24" placeholder="What's on your mind?" onChange={handleAddPost} ></textarea>
    <Button event={handleNewPost}>Post It!</Button>
    {posts.map((post, index) => (
      <Post key={index} {...post} />
    ))}
  </div>
  );
}

export default Home