import { Route, Routes } from "react-router";
import LoginForm from "../components/ui/LoginForm";
function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<h1>Home</h1>} />
      <Route path="/login" element={<LoginForm />}></Route>
    </Routes>
  );
}

export default AppRoutes;
