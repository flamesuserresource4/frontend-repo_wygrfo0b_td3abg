import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AnimeGrid from './components/AnimeGrid'
import AuthModal from './components/AuthModal'

export default function App() {
  const [showAuth, setShowAuth] = useState(false)
  const [authMode, setAuthMode] = useState('login')
  const [user, setUser] = useState(null)

  const openLogin = () => { setAuthMode('login'); setShowAuth(true) }
  const openRegister = () => { setAuthMode('register'); setShowAuth(true) }

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar
        onLogin={openLogin}
        onRegister={openRegister}
        isAuthed={!!user}
        username={user?.username || 'Fan'}
        onLogout={() => setUser(null)}
      />
      <main>
        <Hero onStart={openLogin} />
        <AnimeGrid sectionId="popular" title="Popular Now" />
        <AnimeGrid sectionId="new" title="New This Week" />
      </main>

      {showAuth && (
        <AuthModal
          mode={authMode}
          onClose={() => setShowAuth(false)}
          onAuth={(u) => setUser(u)}
        />
      )}

      <footer className="border-t border-black/5 mt-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 text-sm text-gray-600 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} AniStream. Built for anime fans.</p>
          <nav className="flex items-center gap-6">
            <a href="#genres" className="hover:text-gray-900">Genres</a>
            <a href="#popular" className="hover:text-gray-900">Popular</a>
            <a href="#new" className="hover:text-gray-900">New</a>
          </nav>
        </div>
      </footer>
    </div>
  )
}
