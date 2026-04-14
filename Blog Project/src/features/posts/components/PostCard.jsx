import { Link } from "react-router";

const PostCard = ({ post, onDelete, currentUserId }) => {
  const isOwner = post.userId === currentUserId;

  return (
    <div className="flex flex-col h-full border-t-2 border-black pt-6">
      <div className="aspect-16/10 overflow-hidden bg-gray-100 mb-6">
        {post.imageUrl ? (
          <img
            src={post.imageUrl}
            alt={post.title}
            className="w-full h-full object-cover grayscale"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-50 text-gray-300 font-mono text-[10px] uppercase tracking-tighter">
            No Image Provided
          </div>
        )}
      </div>

      <div className="flex justify-between items-start mb-4">
        <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-gray-600">
          Author : {post.author} <br />{" "}
          {new Date(post.createdAt).toLocaleDateString()}
        </span>

        {isOwner && (
          <div className="flex gap-3">
            <Link
              to={`/edit-post/${post.id}`}
              className="text-[10px] cursor-pointer font-bold uppercase hover:underline"
            >
              Edit
            </Link>
            <button
              onClick={() => {
                if (window.confirm("Delete?")) onDelete(post.id);
              }}
              className="text-[10px] cursor-pointer font-bold uppercase text-red-600 hover:underline"
            >
              Del
            </button>
          </div>
        )}
      </div>

      <div className="flex-1 flex flex-col">
        <h2 className="text-2xl font-black uppercase tracking-tighter leading-[0.9] mb-4 line-clamp-2">
          {post.title}
        </h2>

        <p className="text-gray-600 text-sm leading-relaxed line-clamp-4 mb-8">
          {post.content}
        </p>
      </div>
    </div>
  );
};

export default PostCard;
