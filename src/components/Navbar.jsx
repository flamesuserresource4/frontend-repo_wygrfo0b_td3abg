import React from 'react'
import { Sun, Moon, Monitor } from 'lucide-react'

export default function Navbar({ onLogin, onRegister, isAuthed, username, onLogout, theme = 'system', onThemeChange }) {
  return (
    <header className="w-full sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 dark:bg-gray-900/80 dark:supports-[backdrop-filter]:bg-gray-900/60 border-b border-black/5 dark:border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded bg-orange-500" />
          <span className="text-xl font-extrabold tracking-tight">
            AniStream
          </span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700 dark:text-gray-300">
          <a href="#popular" className="hover:text-gray-900 dark:hover:text-white">Popular</a>
          <a href="#new" className="hover:text-gray-900 dark:hover:text-white">New</a>
          <a href="#genres" className="hover:text-gray-900 dark:hover:text-white">Genres</a>
        </nav>
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center rounded-md border border-gray-200 dark:border-white/10 overflow-hidden">
            <button
              onClick={() => onThemeChange && onThemeChange('light')}
              className={`px-2.5 py-2 text-sm flex items-center gap-1 ${theme==='light' ? 'bg-white dark:bg-gray-800 text-orange-600' : 'text-gray-600 dark:text-gray-300'}`}
              title="Light"
            >
              <Sun className="h-4 w-4" />
            </button>
            <button
              onClick={() => onThemeChange && onThemeChange('dark')}
              className={`px-2.5 py-2 text-sm flex items-center gap-1 ${theme==='dark' ? 'bg-white dark:bg-gray-800 text-orange-600' : 'text-gray-600 dark:text-gray-300'}`}
              title="Dark"
            >
              <Moon className="h-4 w-4" />
            </button>
            <button
              onClick={() => onThemeChange && onThemeChange('system')}
              className={`px-2.5 py-2 text-sm flex items-center gap-1 ${theme==='system' ? 'bg-white dark:bg-gray-800 text-orange-600' : 'text-gray-600 dark:text-gray-300'}`}
              title="System"
            >
              <Monitor className="h-4 w-4" />
            </button>
          </div>

          {!isAuthed ? (
            <>
              <button onClick={onLogin} className="px-3 py-1.5 rounded-md text-sm font-semibold hover:text-orange-600">
                Log In
              </button>
              <button onClick={onRegister} className="px-3 py-1.5 rounded-md bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold shadow">
                Create Account
              </button>
            </>
          ) : (
            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-700 dark:text-gray-300">Hi, {username}</span>
              <button onClick={onLogout} className="px-3 py-1.5 rounded-md border border-gray-200 dark:border-white/10 hover:bg-gray-50 dark:hover:bg-gray-800 text-sm font-medium">
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
