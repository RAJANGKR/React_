import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Home = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <section
        id="home"
        className={`mb-10 rounded-3xl border p-8 shadow-2xl transition-all duration-300 ${
          theme === "dark"
            ? "border-white/10 bg-gradient-to-br from-zinc-900 via-zinc-950 to-black text-white"
            : "border-zinc-200 bg-gradient-to-br from-zinc-50 via-white to-zinc-100 text-zinc-800"
        }`}
      >
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-amber-500">
          Home
        </p>
        <h1 className="max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
          Simple landing page with React Router DOM
        </h1>
        <p className="mt-4 max-w-2xl leading-7 text-zinc-400">
          This is a demo landing page. The navbar can take you to different pages
          and also directly jump to sections on the home page. This is great for
          learning basic routing and section navigation together.
        </p>
      </section>

      <section
        id="about"
        className={`mb-10 rounded-3xl border p-8 transition-all duration-300 ${
          theme === "dark"
            ? "border-white/10 bg-white/5 text-zinc-300"
            : "border-zinc-200 bg-zinc-50 text-zinc-700"
        }`}
      >
        <h2 className={`text-3xl font-semibold ${theme === "dark" ? "text-white" : "text-zinc-900"}`}>About section</h2>
        <p className="mt-4 max-w-3xl leading-7">
          React is a library for building user interfaces with reusable components.
          A landing page often contains a hero section, about section, product
          section, and theme or features section. Keeping sections separate makes
          the UI easier to read and easier to maintain.
        </p>
      </section>

      <section
        id="products"
        className={`mb-10 rounded-3xl border p-8 transition-all duration-300 ${
          theme === "dark"
            ? "border-white/10 bg-white/5 text-zinc-300"
            : "border-zinc-200 bg-zinc-50 text-zinc-700"
        }`}
      >
        <h2 className={`text-3xl font-semibold ${theme === "dark" ? "text-white" : "text-zinc-900"}`}>Product section</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          <div className={`rounded-2xl border p-5 transition-all duration-300 ${
            theme === "dark" ? "border-white/10 bg-zinc-900" : "border-zinc-200 bg-white shadow-sm"
          }`}>
            <h3 className="text-xl font-semibold text-amber-500">Starter Kit</h3>
            <p className="mt-2 text-sm leading-6 text-zinc-400">
              Good for learning basic React components, props, hooks, and layout.
            </p>
          </div>

          <div className={`rounded-2xl border p-5 transition-all duration-300 ${
            theme === "dark" ? "border-white/10 bg-zinc-900" : "border-zinc-200 bg-white shadow-sm"
          }`}>
            <h3 className="text-xl font-semibold text-amber-500">UI Pack</h3>
            <p className="mt-2 text-sm leading-6 text-zinc-400">
              Useful when you want ready-made sections like cards, hero banners,
              and CTA blocks.
            </p>
          </div>

          <div className={`rounded-2xl border p-5 transition-all duration-300 ${
            theme === "dark" ? "border-white/10 bg-zinc-900" : "border-zinc-200 bg-white shadow-sm"
          }`}>
            <h3 className="text-xl font-semibold text-amber-500">Theme Tools</h3>
            <p className="mt-2 text-sm leading-6 text-zinc-400">
              Helps you create light mode and dark mode based layouts and styles.
            </p>
          </div>
        </div>
      </section>

      <section
        id="theme"
        className={`rounded-3xl border p-8 transition-all duration-300 ${
          theme === "dark"
            ? "border-white/10 bg-white/5 text-zinc-300"
            : "border-zinc-200 bg-zinc-50 text-zinc-700"
        }`}
      >
        <h2 className={`text-3xl font-semibold ${theme === "dark" ? "text-white" : "text-zinc-900"}`}>Theme section</h2>
        <p className="mt-4 max-w-3xl leading-7">
          Themes usually control colors, background, text shades, and component
          appearance. Light themes feel open and airy, while dark themes feel more
          modern and focused. Many apps support both for better user comfort.
        </p>
      </section>
    </main>
  );
};

export default Home;