import { useContext } from "react";
import { AuthContext } from "../../features/auth/context/AuthContext";
import { Navigate, Outlet } from "react-router";

const GuestGuard = () => {
  const { user } = useContext(AuthContext);

  if (user) {
    return <Navigate to="/" replace />;
  }
  if (!user) {
    return <Outlet />;
  }
};

export default GuestGuard;
