import { useEffect } from 'react';

export default function AuthModal({ open, onClose, mode = 'login', onSubmit }) {
  useEffect(() => {
    const handle = (e) => e.key === 'Escape' && onClose();
    if (open) document.addEventListener('keydown', handle);
    return () => document.removeEventListener('keydown', handle);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/40 p-4">
      <div className="w-full max-w-md overflow-hidden rounded-lg border border-slate-200 bg-white shadow-xl dark:border-slate-800 dark:bg-slate-900">
        <div className="border-b border-slate-200 p-4 dark:border-slate-800">
          <h3 className="text-lg font-semibold capitalize">{mode}</h3>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const data = Object.fromEntries(new FormData(e.currentTarget));
            onSubmit?.(data);
          }}
          className="space-y-4 p-4"
        >
          {mode === 'register' && (
            <div className="grid gap-1">
              <label className="text-sm text-slate-600 dark:text-slate-300">Username</label>
              <input name="username" required className="rounded-md border border-slate-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-orange-500 dark:border-slate-700 dark:bg-slate-900/50" />
            </div>
          )}
          <div className="grid gap-1">
            <label className="text-sm text-slate-600 dark:text-slate-300">Email</label>
            <input type="email" name="email" required className="rounded-md border border-slate-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-orange-500 dark:border-slate-700 dark:bg-slate-900/50" />
          </div>
          <div className="grid gap-1">
            <label className="text-sm text-slate-600 dark:text-slate-300">Password</label>
            <input type="password" name="password" required className="rounded-md border border-slate-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-orange-500 dark:border-slate-700 dark:bg-slate-900/50" />
          </div>
          <div className="flex justify-end gap-2 pt-2">
            <button type="button" onClick={onClose} className="rounded-md border border-slate-200 bg-white px-4 py-2 text-sm hover:bg-slate-100 dark:border-slate-800 dark:bg-slate-900 dark:hover:bg-slate-800">Cancel</button>
            <button type="submit" className="rounded-md bg-orange-500 px-4 py-2 text-sm font-medium text-white hover:bg-orange-600">{mode === 'login' ? 'Log in' : 'Create account'}</button>
          </div>
        </form>
      </div>
    </div>
  );
}
