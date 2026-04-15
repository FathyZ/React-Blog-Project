import { Route, Routes } from "react-router";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AddPost from "../pages/AddPost";
import Home from "../pages/Home";
import LoggedInGuard from "../components/guards/LoggedInGuard";
import GuestGuard from "../components/guards/GuestGuard";
function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route element={<LoggedInGuard />}>
        <Route path="/edit-post/:id?" element={<AddPost />} />
      </Route>
      <Route element={<GuestGuard />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
