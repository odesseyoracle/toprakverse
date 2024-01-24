import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Navigation from "./components/Navigation";
import Friends from "./pages/Friends";
import UserProfile from "./pages/UserProfile";
import SignUp from "./pages/SignUp";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Navigation />
      <Routes>
        <Route path="/toprakverse" index={true} element={<Home />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/friends" element={<Friends />} />
        <Route path="/userProfile" element={<UserProfile />} />
      </Routes>
    </>
  );
}

export default App;
