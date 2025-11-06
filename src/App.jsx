import { useEffect, useMemo, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import LoginPage from './components/LoginPage.jsx';
import RegisterPage from './components/RegisterPage.jsx';

function App() {
  const [user, setUser] = useState(null);
  const [theme, setTheme] = useState('system');

  // Read persisted theme on first load
  useEffect(() => {
    const stored = localStorage.getItem('theme');
    if (stored === 'light' || stored === 'dark' || stored === 'system') {
      setTheme(stored);
    } else {
      setTheme('system');
    }
  }, []);

  // Apply theme to <html> and manage system listener only when needed
  useEffect(() => {
    const root = document.documentElement;
    const media = window.matchMedia('(prefers-color-scheme: dark)');

    const applyTheme = (mode) => {
      if (mode === 'dark') {
        root.classList.add('dark');
      } else if (mode === 'light') {
        root.classList.remove('dark');
      } else {
        // system
        if (media.matches) root.classList.add('dark');
        else root.classList.remove('dark');
      }
    };

    applyTheme(theme);

    const handleChange = (e) => {
      // Only react to system changes when theme is set to system
      if (theme === 'system') {
        if (e.matches) root.classList.add('dark');
        else root.classList.remove('dark');
      }
    };

    // Attach listener only for system mode
    if (theme === 'system') {
      media.addEventListener('change', handleChange);
    }

    return () => {
      media.removeEventListener('change', handleChange);
    };
  }, [theme]);

  const handleSetTheme = (value) => {
    setTheme(value);
    localStorage.setItem('theme', value);
  };

  const authProps = useMemo(() => ({ user, setUser }), [user]);

  return (
    <div className="min-h-screen bg-white text-slate-900 transition-colors duration-300 dark:bg-[#0b0e14] dark:text-slate-100">
      <Navbar theme={theme} setTheme={handleSetTheme} user={user} setUser={setUser} />
      <main className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage {...authProps} />} />
          <Route path="/register" element={<RegisterPage {...authProps} />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
