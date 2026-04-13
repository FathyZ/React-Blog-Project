import { useContext } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../features/auth/context/AuthContext";
import { PostsContext } from "../features/posts/context/PostsContext";
import PostForm from "../features/posts/components/PostForm";
import { toast } from "react-toastify";

const AddPost = () => {
  const { user } = useContext(AuthContext);
  const { addPost } = useContext(PostsContext);
  const navigate = useNavigate();

  const handlePostSubmit = async (formData) => {
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
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <PostForm onSubmit={handlePostSubmit} />
    </div>
  );
};

export default AddPost;
