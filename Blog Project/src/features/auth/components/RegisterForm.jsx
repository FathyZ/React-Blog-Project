import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const registerSchema = z
  .object({
    username: z.string().min(3, "Username must be at least 3 characters"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

const RegisterForm = ({ onSubmit, serverError }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(registerSchema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {serverError && (
        <div className="bg-red-50 border-l-4 border-red-600 p-4 mb-4">
          <p className="text-red-700 text-xs font-bold uppercase tracking-tight">
            {serverError}
          </p>
        </div>
      )}

      <div className="flex flex-col">
        <label className="text-[10px] font-black uppercase tracking-[0.2em] mb-2 text-gray-500">
          Username
        </label>
        <input
          {...register("username")}
          className={`w-full p-3 border-2 transition-all outline-none ${
            errors.username
              ? "border-red-600 focus:border-red-700"
              : "border-gray-200 focus:border-black"
          }`}
          placeholder="fathy_dev"
        />
        {errors.username && (
          <span className="text-red-600 text-[10px] font-bold uppercase mt-1">
            {errors.username.message}
          </span>
        )}
      </div>

      <div className="flex flex-col">
        <label className="text-[10px] font-black uppercase tracking-[0.2em] mb-2 text-gray-500">
          Email Address
        </label>
        <input
          {...register("email")}
          type="email"
          className={`w-full p-3 border-2 transition-all outline-none ${
            errors.email
              ? "border-red-600 focus:border-red-700"
              : "border-gray-200 focus:border-black"
          }`}
          placeholder="ahmed@example.com"
        />
        {errors.email && (
          <span className="text-red-600 text-[10px] font-bold uppercase mt-1">
            {errors.email.message}
          </span>
        )}
      </div>

      <div className="flex flex-col">
        <label className="text-[10px] font-black uppercase tracking-[0.2em] mb-2 text-gray-500">
          Password
        </label>
        <input
          {...register("password")}
          type="password"
          className={`w-full p-3 border-2 transition-all outline-none ${
            errors.password
              ? "border-red-600 focus:border-red-700"
              : "border-gray-200 focus:border-black"
          }`}
          placeholder="••••••••"
        />
        {errors.password && (
          <span className="text-red-600 text-[10px] font-bold uppercase mt-1">
            {errors.password.message}
          </span>
        )}
      </div>

      <div className="flex flex-col">
        <label className="text-[10px] font-black uppercase tracking-[0.2em] mb-2 text-gray-500">
          Confirm Password
        </label>
        <input
          {...register("confirmPassword")}
          type="password"
          className={`w-full p-3 border-2 transition-all outline-none ${
            errors.confirmPassword
              ? "border-red-600 focus:border-red-700"
              : "border-gray-200 focus:border-black"
          }`}
          placeholder="••••••••"
        />
        {errors.confirmPassword && (
          <span className="text-red-600 text-[10px] font-bold uppercase mt-1">
            {errors.confirmPassword.message}
          </span>
        )}
      </div>

      <button
        disabled={isSubmitting}
        className="w-full bg-black cursor-pointer text-white py-4 font-black uppercase tracking-[0.3em] text-xs hover:bg-zinc-800 transition-all disabled:bg-gray-300 disabled:cursor-not-allowed mt-4"
      >
        {isSubmitting ? "PROCESSING..." : "CREATE ACCOUNT"}
      </button>
    </form>
  );
};

export default RegisterForm;
