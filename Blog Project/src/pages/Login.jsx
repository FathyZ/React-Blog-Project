import { useContext, useState } from "react";
import { AuthContext } from "../features/auth/context/AuthContext";
import LoginForm from "../features/auth/components/LoginForm";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

const Login = () => {
  const { handleLogin } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const onFormSubmit = async (data) => {
    try {
      setError("");
      await handleLogin(data);
      toast.success("Login successful!");
      navigate("/");
    } catch (err) {
      setError(err.message || "Invalid email or password");
      toast.error(err.message || "Login failed.");
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="max-w-md w-full border-4 p-8  rounded-lg">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-black tracking-tight mb-2">
            WELCOME BACK
          </h1>
          <p className="text-base-content/60">
            Enter your details to access your account
          </p>
        </div>

        <LoginForm onSubmit={onFormSubmit} serverError={error} />

        <p className="text-center mt-6 text-sm">
          Don't have an account?{" "}
          <button
            onClick={() => navigate("/register")}
            className="link link-primary font-semibold"
          >
            Sign up for free
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
