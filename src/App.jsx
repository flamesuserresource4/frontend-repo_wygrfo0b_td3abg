import React, { useEffect, useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import LoginPage from './components/LoginPage'
import RegisterPage from './components/RegisterPage'
import AuthModal from './components/AuthModal'

export default function App() {
  const [showAuth, setShowAuth] = useState(false)
  const [authMode, setAuthMode] = useState('login')
  const [user, setUser] = useState(null)
  const [theme, setTheme] = useState('system') // 'light' | 'dark' | 'system'

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    const saved = localStorage.getItem('theme') || 'system'
    setTheme(saved)
  }, [])

  // Apply theme class to <html>
  useEffect(() => {
    const root = document.documentElement
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const shouldDark = theme === 'dark' || (theme === 'system' && prefersDark)
    root.classList.toggle('dark', shouldDark)
    localStorage.setItem('theme', theme)
  }, [theme])

  const openLogin = () => { setAuthMode('login'); setShowAuth(true) }
  const openRegister = () => { setAuthMode('register'); setShowAuth(true) }

  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100 transition-colors">
      <Navbar
        onLogin={openLogin}
        onRegister={openRegister}
        isAuthed={!!user}
        username={user?.username || 'Fan'}
        onLogout={() => setUser(null)}
        theme={theme}
        onThemeChange={setTheme}
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

      <footer className="border-t border-black/5 dark:border-white/10 mt-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 text-sm text-gray-600 dark:text-gray-400 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} AniStream. Built for anime fans.</p>
          <nav className="flex items-center gap-6">
            <a href="#genres" className="hover:text-gray-900 dark:hover:text-white">Genres</a>
            <a href="#popular" className="hover:text-gray-900 dark:hover:text-white">Popular</a>
            <a href="#new" className="hover:text-gray-900 dark:hover:text-white">New</a>
          </nav>
        </div>
      </footer>
    </div>
  )
}
