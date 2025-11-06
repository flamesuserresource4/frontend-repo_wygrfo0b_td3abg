import React, { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import LoginPage from './components/LoginPage'
import RegisterPage from './components/RegisterPage'
import AuthModal from './components/AuthModal'

export default function App() {
  const [showAuth, setShowAuth] = useState(false)
  const [authMode, setAuthMode] = useState('login')
  const [user, setUser] = useState(null)

  const openLogin = () => { setAuthMode('login'); setShowAuth(true) }
  const openRegister = () => { setAuthMode('register'); setShowAuth(true) }

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white text-gray-900">
        <Navbar
          onLogin={openLogin}
          onRegister={openRegister}
          isAuthed={!!user}
          username={user?.username || 'Fan'}
          onLogout={() => setUser(null)}
        />

        <Routes>
          <Route path="/" element={<Home onStart={openLogin} />} />
          <Route path="/login" element={!user ? <LoginPage onAuth={setUser} /> : <Navigate to="/" replace />} />
          <Route path="/register" element={!user ? <RegisterPage onAuth={setUser} /> : <Navigate to="/" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>

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
    </BrowserRouter>
  )
}
