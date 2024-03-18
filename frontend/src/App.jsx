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
import { useEffect } from "react";
import PrivateRoutes from "./utils/PrivateRoutes";

const loggedIn = false;

function App() {
  const { loggedUserId, setLoggedUserId } = useUserContext();
  useEffect(() => {
    const newLoggedUserId =
      JSON.parse(localStorage.getItem("loggedUserId")) || loggedUserId;
    setLoggedUserId(newLoggedUserId);
  }, []);

  return (
    <>
      {loggedUserId != 0 && (
        <>
          <Header />
          <Navigation />
        </>
      )}
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path="/" index={true} element={<Home />} />
          <Route path="/friends" element={<Friends />} />
          <Route path="/userProfile" element={<UserProfile />} />
          <Route path="/friend/:id" element={<FriendPage />} />
        </Route>
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
