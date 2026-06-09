import { useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import Card from './components/MainCard';

const LoadingCard = () => {
  return (
    <div className="animate-pulse overflow-hidden rounded-3xl border border-white/10 bg-white/5">
      <div className="aspect-[4/3] bg-white/10" />
      <div className="space-y-3 p-5">
        <div className="h-5 w-2/3 rounded bg-white/10" />
        <div className="h-4 w-full rounded bg-white/10" />
        <div className="h-4 w-3/4 rounded bg-white/10" />
      </div>
    </div>
  );
};

const App = () => {
  const [userData, setUserData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchImages = async () => {
      try {
        setLoading(true);
        setError('');

        const response = await axios.get(
          `https://picsum.photos/v2/list?page=${page}&limit=10`
        );

        setUserData(response.data);
      } catch (err) {
        setError('Unable to fetch images. Please try again.');
        console.error('Error fetching data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, [page]);

  const cards = useMemo(() => {
    if (loading) {
      return Array.from({ length: 6 }).map((_, index) => (
        <LoadingCard key={index} />
      ));
    }

    if (error) {
      return (
        <div className="col-span-full rounded-3xl border border-red-400/20 bg-red-500/10 p-8 text-center text-red-100">
          <h3 className="text-lg font-semibold">Something went wrong</h3>
          <p className="mt-2 text-sm text-red-100/80">{error}</p>
        </div>
      );
    }

    return userData.map((item) => (
      <Card
        key={item.id}
        title={item.author}
        description={item.url}
        image={item.download_url}
      />
    ));
  }, [loading, error, userData]);

  return (
    <div className="min-h-screen bg-[#070707] text-white">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8 overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-zinc-900 via-zinc-950 to-black p-6 shadow-2xl shadow-black/40 sm:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">


            <div className="max-w-2xl space-y-4">
              <span className="inline-flex w-fit items-center rounded-full border border-amber-300/20 bg-amber-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-amber-200">
                Some Memory Gallery
              </span>

              <div className="space-y-3">
                <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                  Beautiful image gallery with pagination
                </h1>
                <p className="max-w-xl text-sm leading-7 text-zinc-300 sm:text-base">
                  This app fetches images from the Picsum API and reloads data
                  whenever the page changes.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">
                  Current page
                </p>
                <p className="mt-2 text-2xl font-semibold text-white">{page}</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">
                  Images
                </p>
                <p className="mt-2 text-2xl font-semibold text-white">
                  {userData.length}
                </p>
              </div>

              <div className="col-span-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 sm:col-span-1">
                <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">
                  Status
                </p>
                <p className="mt-2 text-sm font-semibold text-emerald-300">
                  {loading ? 'Loading...' : error ? 'Error' : 'Ready'}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          {cards}
        </div>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 rounded-3xl border border-white/10 bg-white/5 px-5 py-5 sm:flex-row sm:gap-6">
          <button
            disabled={page === 1 || loading}
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-40 sm:w-auto"
            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          >
            ← Previous
          </button>

          <div className="rounded-2xl border border-amber-300/20 bg-amber-300/10 px-5 py-3 text-sm font-semibold text-amber-200">
            Page {page}
          </div>

          <button
            disabled={loading}
            className="w-full rounded-2xl bg-amber-400 px-5 py-3 text-sm font-semibold text-black transition hover:bg-amber-300 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
            onClick={() => setPage((prev) => prev + 1)}
          >
            Next →
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;