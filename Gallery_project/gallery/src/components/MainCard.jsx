const Card1 = ({ title, description, image }) => {
  return (
    <div className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber-300/40 hover:bg-white/10 hover:shadow-2xl hover:shadow-amber-500/10">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
        <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/35 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-amber-200 backdrop-blur-md">
          Gallery
        </span>
      </div>

      <div className="space-y-3 p-5">
        <h3 className="line-clamp-1 text-lg font-semibold text-white">
          {title}
        </h3>

        <p className="line-clamp-2 break-all text-sm leading-6 text-zinc-300">
          {description}
        </p>

        <a
          href={description}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-amber-300 transition hover:text-amber-200"
        >
          Open image link
          <span aria-hidden="true">↗</span>
        </a>
      </div>
    </div>
  );
};

export default Card1;