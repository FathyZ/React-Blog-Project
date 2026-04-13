const PostCard = ({ post, onDelete, onEdit, currentUserId }) => {
  const isOwner = post.userId === currentUserId;

  return (
    <article className="flex flex-col h-full border-t-2 border-black pt-6">
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
        <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-gray-400">
          {post.author} <br /> {new Date(post.createdAt).toLocaleDateString()}
        </span>

        {isOwner && (
          <div className="flex gap-3">
            <button
              onClick={() => onEdit(post.id)}
              className="text-[10px] cursor-pointer font-bold uppercase hover:underline"
            >
              Edit
            </button>
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

      <div className="mt-auto pt-4">
        <button className="w-full cursor-pointer py-3 border border-black text-[10px] font-black uppercase tracking-[0.3em] hover:bg-black hover:text-white transition-colors">
          Read Full Entry
        </button>
      </div>
    </article>
  );
};

export default PostCard;
