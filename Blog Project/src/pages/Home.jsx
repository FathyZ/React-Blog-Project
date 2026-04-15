import { useContext } from "react";
import { PostsContext } from "../features/posts/context/PostsContext";
import { AuthContext } from "../features/auth/context/AuthContext";
import PostCard from "../features/posts/components/PostCard";
import { Link } from "react-router";

const Home = () => {
  const { posts, loading, deletePost } = useContext(PostsContext);
  const { user } = useContext(AuthContext);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="font-mono text-xs uppercase tracking-[0.3em] animate-pulse">
          Loading Feed...
        </span>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-20 relative">
      {user && (
        <Link to="/edit-post">
          <div className="z-50 fixed h-16 flex items-center justify-center aspect-square rounded-full bg-black right-12 bottom-12 text-3xl text-white hover:bg-gray-500 cursor-pointer transition-colors duration-200">
            +
          </div>
        </Link>
      )}
      <header className="mb-20 border-b-8 border-black pb-10">
        <h1 className="text-8xl font-black uppercase tracking-tighter leading-none">
          Home Feed
        </h1>
        <p className="mt-6 font-mono text-sm uppercase tracking-widest text-gray-400">
          {posts.length} Posts Available to read
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2  gap-x-12 gap-y-24 items-stretch">
        {posts.length > 0 ? (
          posts.map((post) => (
            <PostCard
              key={post.id}
              post={post}
              currentUserId={user?.id}
              onDelete={deletePost}
              onEdit={(id) => console.log("Edit post:", id)}
            />
          ))
        ) : (
          <div className="col-span-full py-20 border-2 border-dashed border-gray-200 text-center">
            <p className="font-mono text-xs uppercase text-gray-400">
              No posts found. Start writing?
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
