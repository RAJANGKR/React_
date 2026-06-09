import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const About = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <section
        className={`rounded-3xl border p-8 shadow-2xl transition-all duration-300 ${
          theme === "dark"
            ? "border-white/10 bg-gradient-to-br from-zinc-900 via-zinc-950 to-black text-white"
            : "border-zinc-200 bg-gradient-to-br from-zinc-50 via-white to-zinc-100 text-zinc-800"
        }`}
      >
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-amber-500">
          About Us
        </p>
        <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
          Who We Are
        </h1>
        <p className="mt-4 max-w-2xl leading-7 text-zinc-400">
          We are a team dedicated to building beautifully crafted, high-performance web applications using modern technologies like React, React Router, and Tailwind CSS.
        </p>
      </section>

      <section
        className={`mt-10 rounded-3xl border p-8 transition-all duration-300 ${
          theme === "dark"
            ? "border-white/10 bg-white/5 text-zinc-300"
            : "border-zinc-200 bg-zinc-50 text-zinc-700"
        }`}
      >
        <h2 className={`text-3xl font-semibold ${theme === "dark" ? "text-white" : "text-zinc-900"}`}>
          Our Mission
        </h2>
        <p className="mt-4 max-w-3xl leading-7">
          Our mission is to simplify state management and routing in modern web interfaces, enabling developers to build responsive, rich user experiences with minimal friction and maximum design elegance.
        </p>
      </section>
    </main>
  );
};

export default About;
