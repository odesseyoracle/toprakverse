import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Friends from "./pages/Friends";
import UserProfile from "./pages/UserProfile";
import SignUp from "./pages/SignUp";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import { FriendPage } from "./pages/FriendPage";
import Navigation from "./components/Navigation";
import { useUserContext } from "./contexts/UserContext";

function App() {
  const { loggedUserId } = useUserContext();

  return (
    <>
      {loggedUserId != 0 && (
        <>
          <Header />
          <Navigation />
        </>
      )}
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/" index={true} element={<Login />} />
        <Route path="/friends" element={<Friends />} />
        <Route path="/userProfile" element={<UserProfile />} />
        <Route path="/friend/:id" element={<FriendPage />} />
      </Routes>
    </>
  );
}

export default App;
