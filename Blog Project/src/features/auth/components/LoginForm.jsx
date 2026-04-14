import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const loginSchema = z.object({
  email: z.string().email("Please enter a valid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const LoginForm = ({ onSubmit, serverError }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
      {serverError && (
        <div className="bg-red-50 border-l-4 border-red-500 p-3">
          <p className="text-red-700 text-sm">{serverError}</p>
        </div>
      )}

      <div>
        <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-gray-500">
          Email
        </label>
        <input
          {...register("email")}
          className={`w-full p-4 border ${errors.email ? "border-red-500" : "border-gray-200"} focus:outline-none focus:border-black transition-colors`}
          placeholder="name@example.com"
        />
        {errors.email && (
          <span className="text-red-500 text-[10px] uppercase font-bold mt-1">
            {errors.email.message}
          </span>
        )}
      </div>

      <div>
        <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-gray-500">
          Password
        </label>
        <input
          {...register("password")}
          type="password"
          className={`w-full p-4 border ${errors.password ? "border-red-500" : "border-gray-200"} focus:outline-none focus:border-black transition-colors`}
          placeholder="••••••••"
        />
        {errors.password && (
          <span className="text-red-500 text-[10px] uppercase font-bold mt-1">
            {errors.password.message}
          </span>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full cursor-pointer bg-black text-white p-4 font-black uppercase tracking-[0.2em] hover:bg-gray-800 disabled:bg-gray-400 transition-all"
      >
        {isSubmitting ? "LOGGING IN..." : "LOGIN"}
      </button>
    </form>
  );
};

export default LoginForm;
