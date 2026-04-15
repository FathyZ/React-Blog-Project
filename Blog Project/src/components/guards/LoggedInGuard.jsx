import { useContext } from "react";
import { Navigate, Outlet } from "react-router";
import { AuthContext } from "../../features/auth/context/AuthContext";

const LoggedInGuard = () => {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default LoggedInGuard;
