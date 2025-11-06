import React from 'react'

export default function Navbar({ onLogin, onRegister, isAuthed, username, onLogout }) {
  return (
    <header className="w-full sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded bg-orange-500" />
          <span className="text-xl font-extrabold tracking-tight">
            AniStream
          </span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
          <a href="#popular" className="hover:text-gray-900">Popular</a>
          <a href="#new" className="hover:text-gray-900">New</a>
          <a href="#genres" className="hover:text-gray-900">Genres</a>
        </nav>
        <div className="flex items-center gap-3">
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
              <span className="text-sm text-gray-700">Hi, {username}</span>
              <button onClick={onLogout} className="px-3 py-1.5 rounded-md border border-gray-200 hover:bg-gray-50 text-sm font-medium">
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
