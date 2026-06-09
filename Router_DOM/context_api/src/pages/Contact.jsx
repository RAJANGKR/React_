import { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Contact = () => {
  const { theme } = useContext(ThemeContext);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

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
          Get in touch
        </p>
        <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
          Contact Us
        </h1>
        <p className="mt-4 max-w-2xl leading-7 text-zinc-400">
          Have questions or want to collaborate? Fill out the form below and we will get back to you as soon as possible.
        </p>
      </section>

      <div className="mt-10 max-w-xl">
        {submitted ? (
          <div className={`p-6 rounded-2xl border ${theme === "dark" ? "bg-emerald-950/30 border-emerald-500/20 text-emerald-400" : "bg-emerald-50 border-emerald-200 text-emerald-800"}`}>
            <h3 className="text-lg font-semibold">Message sent successfully!</h3>
            <p className="mt-1 text-sm">Thank you for reaching out. We will get back to you shortly.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className={`block text-sm font-medium mb-2 ${theme === "dark" ? "text-zinc-300" : "text-zinc-700"}`}>
                Name
              </label>
              <input
                type="text"
                required
                className={`w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all ${
                  theme === "dark"
                    ? "bg-zinc-900 border-white/10 text-white focus:border-amber-500"
                    : "bg-white border-zinc-300 text-zinc-900 focus:border-amber-500"
                }`}
              />
            </div>
            <div>
              <label className={`block text-sm font-medium mb-2 ${theme === "dark" ? "text-zinc-300" : "text-zinc-700"}`}>
                Email
              </label>
              <input
                type="email"
                required
                className={`w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all ${
                  theme === "dark"
                    ? "bg-zinc-900 border-white/10 text-white focus:border-amber-500"
                    : "bg-white border-zinc-300 text-zinc-900 focus:border-amber-500"
                }`}
              />
            </div>
            <div>
              <label className={`block text-sm font-medium mb-2 ${theme === "dark" ? "text-zinc-300" : "text-zinc-700"}`}>
                Message
              </label>
              <textarea
                rows="4"
                required
                className={`w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all ${
                  theme === "dark"
                    ? "bg-zinc-900 border-white/10 text-white focus:border-amber-500"
                    : "bg-white border-zinc-300 text-zinc-900 focus:border-amber-500"
                }`}
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-amber-500 hover:bg-amber-600 text-zinc-950 font-semibold py-3 px-6 rounded-xl transition-colors shadow-lg shadow-amber-500/15"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </main>
  );
};

export default Contact;
