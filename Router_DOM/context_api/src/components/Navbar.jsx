import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";

const Navbar = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <nav
      className={`sticky top-0 z-50 border-b backdrop-blur-md transition-all duration-300 ${
        theme === "dark"
          ? "border-white/10 bg-zinc-950/80 text-white"
          : "border-zinc-200 bg-white/80 text-zinc-900"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <Link to="/" className="text-xl font-bold tracking-tight hover:opacity-90">
              Sheryians
            </Link>
            <div className="hidden sm:flex gap-6 text-sm font-medium">
              <Link to="/" className="hover:text-amber-500 transition-colors">
                Home
              </Link>
              <Link to="/about" className="hover:text-amber-500 transition-colors">
                About
              </Link>
              <Link to="/products" className="hover:text-amber-500 transition-colors">
                Products
              </Link>
              <Link to="/contact" className="hover:text-amber-500 transition-colors">
                Contact
              </Link>
              <Link to="/theme" className="hover:text-amber-500 transition-colors">
                Theme
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className={`p-2 rounded-xl border transition-colors cursor-pointer ${
                theme === "dark"
                  ? "border-white/10 hover:bg-white/5 text-yellow-400"
                  : "border-zinc-200 hover:bg-zinc-100 text-indigo-600"
              }`}
              title="Toggle theme"
            >
              {theme === "dark" ? (
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 3v1m0 16v1m9-9h-1M4 9H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z"
                  ></path>
                </svg>
              ) : (
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  ></path>
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;