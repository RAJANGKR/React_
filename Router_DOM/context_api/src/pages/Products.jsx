import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Products = () => {
  const { theme } = useContext(ThemeContext);

  const productList = [
    {
      id: 1,
      name: "Starter Kit",
      price: "$19",
      description: "Good for learning basic React components, props, hooks, and layout.",
      features: ["Basic hooks template", "React Router templates", "Responsive base layouts"],
    },
    {
      id: 2,
      name: "UI Pack",
      price: "$49",
      description: "Useful when you want ready-made sections like cards, hero banners, and CTA blocks.",
      features: ["50+ Tailwind components", "Dark mode toggles", "Access to Figma designs"],
    },
    {
      id: 3,
      name: "Theme Tools",
      price: "$29",
      description: "Helps you create light mode and dark mode based layouts and styles.",
      features: ["Advanced Theme Context Provider", "Local storage syncing", "Smooth CSS transition presets"],
    },
  ];

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
          Our offerings
        </p>
        <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
          Premium Products
        </h1>
        <p className="mt-4 max-w-2xl leading-7 text-zinc-400">
          Take a look at our curated tools designed to level up your development workflow and styling capabilities.
        </p>
      </section>

      <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {productList.map((product) => (
          <div
            key={product.id}
            className={`rounded-3xl border p-6 flex flex-col justify-between transition-all duration-300 hover:scale-[1.02] ${
              theme === "dark"
                ? "bg-zinc-900 border-white/10 text-white"
                : "bg-white border-zinc-200 text-zinc-800 shadow-md"
            }`}
          >
            <div>
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-bold text-amber-500">{product.name}</h3>
                <span className={`text-lg font-semibold px-3 py-1 rounded-full ${
                  theme === "dark" ? "bg-white/10 text-white" : "bg-zinc-100 text-zinc-800"
                }`}>
                  {product.price}
                </span>
              </div>
              <p className="mt-3 text-sm leading-6 text-zinc-400">{product.description}</p>
              
              <ul className="mt-6 space-y-2">
                {product.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-sm">
                    <svg
                      className="w-4 h-4 text-emerald-500 mr-2 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <button className="mt-8 w-full py-3 px-4 rounded-xl font-semibold bg-amber-500 hover:bg-amber-600 text-zinc-950 transition-colors">
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Products;
