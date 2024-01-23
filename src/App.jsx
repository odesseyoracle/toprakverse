import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Navigation from "./pages/Navigation";
import Friends from "./pages/Friends";
import UserProfile from "./pages/UserProfile";
import SignUp from "./pages/SignUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <button className="bg-primary hover:bg-secondary text-">
        Click hier
      </button>
<Navigation />

<BrowserRouter>
      <Routes>
<Route path="/" element={<Home />} />
<Route path="/SignUp" element={<SignUp />} />
<Route path="/Login" element={<Login />} />
  <Route path="/Friends" element={<Friends />} />
  <Route path="/UserProfile" element={<UserProfile />} />
</Routes>
</BrowserRouter>

    </>
  );
}

export default App;
