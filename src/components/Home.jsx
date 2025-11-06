import { useState } from 'react';
import Hero from './Hero.jsx';
import AnimeGrid from './AnimeGrid.jsx';
import AuthModal from './AuthModal.jsx';

export default function Home() {
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState('login');

  return (
    <div className="space-y-10">
      <Hero />
      <AnimeGrid id="popular" title="Popular Now" />
      <AnimeGrid id="new" title="New This Week" />

      <div className="rounded-lg border border-slate-200 bg-white/70 p-4 text-sm dark:border-slate-800 dark:bg-slate-900/40">
        <p>
          This is a demo site. Use the header buttons to open full-page auth, or try the modal here:
        </p>
        <div className="mt-3 flex gap-2">
          <button onClick={() => { setMode('login'); setOpen(true); }} className="rounded-md border border-slate-200 bg-white px-3 py-1.5 hover:bg-slate-100 dark:border-slate-800 dark:bg-slate-900 dark:hover:bg-slate-800">Open Login Modal</button>
          <button onClick={() => { setMode('register'); setOpen(true); }} className="rounded-md bg-orange-500 px-3 py-1.5 font-medium text-white hover:bg-orange-600">Open Register Modal</button>
        </div>
      </div>

      <AuthModal
        open={open}
        onClose={() => setOpen(false)}
        mode={mode}
        onSubmit={() => setOpen(false)}
      />
    </div>
  );
}
