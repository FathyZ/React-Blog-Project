import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../features/auth/context/AuthContext";
import RegisterForm from "../features/auth/components/RegisterForm";
import { toast } from "react-toastify";

const Register = () => {
  const { handleRegister } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const onFormSubmit = async (data) => {
    try {
      setError("");
      await handleRegister({
        username: data.username,
        email: data.email,
        password: data.password,
      });
      toast.success("Registration successful! ");
      navigate("/");
    } catch (err) {
      setError(
        err.message || "Registration failed. Email might already exist.",
      );
      toast.error("Registration failed.");
    }
  };

  return (
    <div className="min-h-[85vh] flex items-center justify-center px-4">
      <div className="max-w-md w-full border-4 p-8  rounded-lg">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-black tracking-tight mb-2 uppercase">
            Join Us
          </h1>
          <p className="text-base-content/60 italic">
            Start sharing your thoughts today.
          </p>
        </div>

        <RegisterForm onSubmit={onFormSubmit} serverError={error} />

        <p className="text-center mt-6 text-sm">
          Already have an account?{" "}
          <button
            onClick={() => navigate("/login")}
            className="link link-primary font-bold"
          >
            Log in here
          </button>
        </p>
      </div>
    </div>
  );
};

export default Register;
