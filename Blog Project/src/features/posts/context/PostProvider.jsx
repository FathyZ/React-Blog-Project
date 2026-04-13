import { useState, useEffect } from "react";
import { PostsContext } from "./PostsContext";
import { postService } from "../../../services/postService";

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const refreshPosts = async () => {
    try {
      setLoading(true);
      const data = await postService.getAll();
      setPosts(data.reverse());
    } catch (err) {
      console.error("Fetch Error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    refreshPosts();
  }, []);

  const addPost = async (postData) => {
    const newPost = await postService.create(postData);
    setPosts((prev) => [newPost, ...prev]);
  };

  const deletePost = async (id) => {
    await postService.delete(id);
    setPosts((prev) => prev.filter((p) => p.id !== id));
  };

  const updatePost = async (id, updatedData) => {
    const updated = await postService.update(id, updatedData);
    setPosts((prev) => prev.map((p) => (p.id === id ? updated : p)));
  };

  return (
    <PostsContext.Provider
      value={{
        posts,
        loading,
        addPost,
        deletePost,
        updatePost,
        refreshPosts,
      }}
    >
      {children}
    </PostsContext.Provider>
  );
};
