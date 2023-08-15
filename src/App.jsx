import './App.css';
import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import SignIn from "./pages/SignIn";
import Register from "./pages/Register";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/signup" element={<Register />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/signin" element={<SignIn />} />
      </Routes>
    </>
  );
}

export default App;
