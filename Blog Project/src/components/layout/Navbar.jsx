import { useContext } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../features/auth/context/AuthContext";

function Navbar() {
  const { user, handleLogout } = useContext(AuthContext);

  return (
    <nav className="w-full bg-white border-b border-gray-200 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex-1">
          <Link
            to="/"
            className="text-2xl font-black tracking-tighter uppercase hover:text-gray-600 transition-colors"
          >
            MY BLOG
          </Link>
        </div>

        <div className="flex-none">
          <ul className="flex gap-8 items-center font-mono text-xs uppercase tracking-widest">
            {user ? (
              <>
                <li>
                  <span className="text-gray-400">
                    User /{" "}
                    <span className="text-black font-bold">
                      {user.username}
                    </span>
                  </span>
                </li>
                <li>
                  <button
                    onClick={handleLogout}
                    className="bg-black text-white px-4 py-2 cursor-pointer hover:bg-gray-800 transition-all font-bold"
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <li>
                <Link
                  to="/login"
                  className="border-b-2 border-black pb-1 font-bold hover:text-gray-500 hover:border-gray-500 transition-all"
                >
                  Login / Signup
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
