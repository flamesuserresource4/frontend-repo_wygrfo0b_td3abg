import { Link, useNavigate } from 'react-router-dom';
import { Sun, Moon, Monitor, User, LogOut } from 'lucide-react';

export default function Navbar({ theme, setTheme, user, setUser }) {
  const navigate = useNavigate();

  const ThemeButton = ({ value, Icon, label }) => (
    <button
      onClick={() => setTheme(value)}
      aria-label={label}
      className={`inline-flex items-center justify-center rounded-md border px-2.5 py-1.5 text-sm transition-colors
        ${theme === value
          ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 border-slate-900 dark:border-white'
          : 'bg-white/70 text-slate-700 dark:bg-slate-800/70 dark:text-slate-200 border-slate-200 dark:border-slate-700 hover:bg-slate-100/90 dark:hover:bg-slate-700/70'}
      `}
    >
      <Icon className="h-4 w-4" />
    </button>
  );

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:border-slate-800 dark:bg-[#0b0e14]/60 dark:supports-[backdrop-filter]:bg-[#0b0e14]/40">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <Link to="/" className="font-semibold tracking-tight">
            <span className="text-orange-500">Ani</span>
            <span className="text-slate-900 dark:text-white">Stream</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600 dark:text-slate-300">
            <a href="#popular" className="hover:text-slate-900 dark:hover:text-white">Popular</a>
            <a href="#new" className="hover:text-slate-900 dark:hover:text-white">New</a>
            <a href="#genres" className="hover:text-slate-900 dark:hover:text-white">Genres</a>
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <ThemeButton value="light" Icon={Sun} label="Light mode" />
            <ThemeButton value="dark" Icon={Moon} label="Dark mode" />
            <ThemeButton value="system" Icon={Monitor} label="System theme" />
          </div>

          <div className="mx-2 h-6 w-px bg-slate-200 dark:bg-slate-800" />

          {user ? (
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-2 rounded-md border border-slate-200 bg-white/70 px-2.5 py-1.5 text-sm dark:border-slate-800 dark:bg-slate-900/60">
                <User className="h-4 w-4" />
                <span className="max-w-[8rem] truncate">{user.username}</span>
              </div>
              <button
                onClick={() => {
                  setUser(null);
                  navigate('/');
                }}
                className="inline-flex items-center gap-1 rounded-md border border-rose-200 bg-rose-500/10 px-2.5 py-1.5 text-sm text-rose-600 hover:bg-rose-500/20 dark:border-rose-800 dark:text-rose-300"
              >
                <LogOut className="h-4 w-4" /> Logout
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Link
                to="/login"
                className="rounded-md border border-slate-200 bg-white/70 px-3 py-1.5 text-sm hover:bg-slate-100/80 dark:border-slate-800 dark:bg-slate-900/60 dark:hover:bg-slate-800/70"
              >
                Log in
              </Link>
              <Link
                to="/register"
                className="rounded-md bg-orange-500 px-3 py-1.5 text-sm font-medium text-white shadow hover:bg-orange-600"
              >
                Sign up
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
