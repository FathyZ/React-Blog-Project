import { Route, Routes } from "react-router";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AddPost from "../pages/AddPost";
import Home from "../pages/Home";
function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/edit-post/:id?" element={<AddPost />} />
    </Routes>
  );
}

export default AppRoutes;
