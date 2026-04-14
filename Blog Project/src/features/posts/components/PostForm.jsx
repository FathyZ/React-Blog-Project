import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Widget } from "@uploadcare/react-widget";
import { useEffect } from "react";

const postSchema = z.object({
  title: z.string().min(5, "Title must be at least 5 characters"),
  content: z.string().min(10, "Content must be at least 10 characters"),
  imageUrl: z.string().url("Please enter a valid image URL").or(z.literal("")),
});

const PostForm = ({ onSubmit, mode, initialData = null }) => {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(postSchema),
    defaultValues: { title: "", content: "", imageUrl: "" },
  });
  useEffect(() => {
    reset(initialData || { title: "", content: "", imageUrl: "" });
  }, [initialData, reset]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
      <div className="flex flex-col">
        <input
          {...register("title")}
          className="text-5xl font-black uppercase tracking-tighter bg-transparent border-none focus:outline-none placeholder:text-gray-200 w-full"
          placeholder="POST TITLE"
        />
        {errors.title && (
          <span className="text-red-600 text-[10px] font-bold uppercase mt-2">
            {errors.title.message}
          </span>
        )}
      </div>

      <hr className="border-gray-100" />

      <div className="flex flex-col gap-4">
        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">
          Cover Image
        </label>

        <div className="p-4 border-2 border-dashed border-gray-200 hover:border-black transition-colors">
          <Widget
            publicKey="018a2bc4c3a7518e8883"
            id="file"
            onChange={(info) => {
              setValue("imageUrl", info.cdnUrl);
            }}
          />
        </div>

        <input type="hidden" {...register("imageUrl")} />
        {errors.imageUrl && (
          <span className="text-red-600 text-[10px] font-bold uppercase mt-1">
            {errors.imageUrl.message}
          </span>
        )}
      </div>

      <div className="flex flex-col">
        <label className="text-[10px] font-black uppercase tracking-[0.2em] mb-4 text-gray-400">
          Content
        </label>
        <textarea
          {...register("content")}
          rows="10"
          className="w-full p-4 border-2 border-gray-200 focus:border-black outline-none text-lg leading-relaxed transition-all"
          placeholder="Tell your story..."
        />
        {errors.content && (
          <span className="text-red-600 text-[10px] font-bold uppercase mt-1">
            {errors.content.message}
          </span>
        )}
      </div>

      <button
        disabled={isSubmitting}
        className="w-full bg-black cursor-pointer text-white py-5 font-black uppercase tracking-[0.4em] text-xs hover:bg-zinc-800 transition-all disabled:bg-gray-300"
      >
        {mode === "edit" ? "UPDATE POST" : "PUBLISH POST"}
        {isSubmitting ? "PUBLISHING..." : ""}
      </button>
    </form>
  );
};

export default PostForm;
