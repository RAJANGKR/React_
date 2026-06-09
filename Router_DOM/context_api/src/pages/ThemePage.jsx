import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ThemePage = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div
      className={`min-h-screen px-6 py-10 transition-all duration-300 ${
        theme === "dark" ? "bg-zinc-950 text-white" : "bg-white text-black"
      }`}
    >
      <div className="mx-auto max-w-4xl rounded-3xl border border-white/10 p-8 shadow-lg">
        <h1 className="text-4xl font-bold">Theme Context Page</h1>
        <p className="mt-4 text-lg">
          Current theme is : <span className="font-semibold">{theme}</span>
        </p>

        <div className="mt-6 flex gap-4">
          <button
            onClick={() => setTheme("light")}
            className="rounded-xl bg-yellow-400 px-5 py-2 font-semibold text-black"
          >
            Light Mode
          </button>

          <button
            onClick={() => setTheme("dark")}
            className="rounded-xl bg-black px-5 py-2 font-semibold text-white border border-white"
          >
            Dark Mode
          </button>
        </div>

        <div className="mt-8 rounded-2xl bg-white/10 p-5">
          <h2 className="text-2xl font-semibold">Why this page?</h2>
          <p className="mt-3 leading-7">
            This page is used to manage and test the context. When you change the
            theme here, every component using the same context can also react to
            that change.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThemePage;