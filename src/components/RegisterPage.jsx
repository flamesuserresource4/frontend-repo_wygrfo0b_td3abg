import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function RegisterPage({ user, setUser }) {
  const navigate = useNavigate();
  const [error, setError] = useState('');

  return (
    <div className="mx-auto w-full max-w-md rounded-xl border border-slate-200 bg-white/70 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/40">
      <h2 className="text-xl font-semibold">Create your account</h2>
      <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">Join to keep track of what you watch.</p>

      {error && (
        <div className="mt-3 rounded-md border border-rose-200 bg-rose-50 p-3 text-sm text-rose-700 dark:border-rose-800 dark:bg-rose-900/30 dark:text-rose-200">{error}</div>
      )}

      <form
        className="mt-5 space-y-4"
        onSubmit={(e) => {
          e.preventDefault();
          const data = Object.fromEntries(new FormData(e.currentTarget));
          if (!data.username || !data.email || !data.password) return setError('Please fill out all fields');
          setUser({ username: data.username, email: data.email });
          navigate('/');
        }}
      >
        <div className="grid gap-1">
          <label className="text-sm text-slate-600 dark:text-slate-300">Username</label>
          <input name="username" className="rounded-md border border-slate-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-orange-500 dark:border-slate-700 dark:bg-slate-900/50" />
        </div>
        <div className="grid gap-1">
          <label className="text-sm text-slate-600 dark:text-slate-300">Email</label>
          <input type="email" name="email" className="rounded-md border border-slate-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-orange-500 dark:border-slate-700 dark:bg-slate-900/50" />
        </div>
        <div className="grid gap-1">
          <label className="text-sm text-slate-600 dark:text-slate-300">Password</label>
          <input type="password" name="password" className="rounded-md border border-slate-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-orange-500 dark:border-slate-700 dark:bg-slate-900/50" />
        </div>
        <button className="w-full rounded-md bg-orange-500 px-4 py-2 text-sm font-medium text-white hover:bg-orange-600">Create account</button>
      </form>

      <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">
        Already have an account? <Link to="/login" className="text-orange-600 hover:text-orange-700">Log in</Link>
      </p>
    </div>
  );
}
