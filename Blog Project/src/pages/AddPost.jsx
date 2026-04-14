import { useContext } from "react";
import { useNavigate, useParams } from "react-router";
import { AuthContext } from "../features/auth/context/AuthContext";
import { PostsContext } from "../features/posts/context/PostsContext";
import PostForm from "../features/posts/components/PostForm";
import { toast } from "react-toastify";

const AddPost = () => {
  const { user } = useContext(AuthContext);
  const { addPost, posts, updatePost } = useContext(PostsContext);
  const navigate = useNavigate();
  const { id } = useParams();
  const mode = id ? "edit" : "add";
  const existingPost =
    mode === "edit" ? posts.find((post) => post.id === +id) : null;

  const initialData = existingPost
    ? {
        title: existingPost.title,
        content: existingPost.content,
        imageUrl: existingPost.imageUrl,
      }
    : null;

  const handlePostSubmit = async (formData) => {
    if (mode === "edit") {
      try {
        const updatedData = {
          ...formData,
          userId: existingPost.userId,
        };
        await updatePost(existingPost.id, updatedData);
        toast.success("Post updated successfully!");
        navigate("/");
      } catch (error) {
        console.error("Failed to update post:", error);
        toast.error("Failed to update post.");
      }
    } else {
      try {
        const fullPostData = {
          ...formData,
          userId: user.id,
          author: user.username,
          createdAt: new Date().toISOString(),
        };

        await addPost(fullPostData);
        toast.success("Post created successfully!");
        navigate("/");
      } catch (error) {
        console.error("Failed to create post:", error);
        toast.error("Failed to create post.");
      }
    }
  };

  console.log(mode);
  console.log(id);
  console.log(posts[0]);

  console.log(existingPost);

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <PostForm
        initialData={initialData}
        mode={mode}
        onSubmit={handlePostSubmit}
      />
    </div>
  );
};

export default AddPost;
