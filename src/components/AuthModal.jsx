import React, { useState } from 'react'

export default function AuthModal({ mode = 'login', onClose, onAuth }) {
  const [tab, setTab] = useState(mode)
  const [form, setForm] = useState({ email: '', password: '', username: '' })

  function submit(e) {
    e.preventDefault()
    const name = tab === 'register' ? (form.username || 'Fan') : form.email.split('@')[0] || 'Fan'
    onAuth({ username: name })
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="relative w-full max-w-md rounded-2xl bg-white dark:bg-gray-900 shadow-xl ring-1 ring-black/5 dark:ring-white/10">
        <div className="px-6 pt-5">
          <div className="flex gap-1 p-1 bg-gray-100 dark:bg-gray-800 rounded-lg w-full">
            <button onClick={() => setTab('login')} className={`flex-1 py-2 rounded-md text-sm font-semibold ${tab==='login' ? 'bg-white dark:bg-gray-900 shadow' : 'text-gray-600 dark:text-gray-300'}`}>Log In</button>
            <button onClick={() => setTab('register')} className={`flex-1 py-2 rounded-md text-sm font-semibold ${tab==='register' ? 'bg-white dark:bg-gray-900 shadow' : 'text-gray-600 dark:text-gray-300'}`}>Create Account</button>
          </div>
        </div>
        <form onSubmit={submit} className="px-6 pb-6 pt-4 space-y-4">
          {tab === 'register' && (
            <div>
              <label className="block text-sm font-medium mb-1">Username</label>
              <input value={form.username} onChange={e=>setForm({...form, username:e.target.value})} required className="w-full rounded-md border border-gray-300 dark:border-white/10 bg-white dark:bg-gray-900 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"/>
            </div>
          )}
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input type="email" value={form.email} onChange={e=>setForm({...form, email:e.target.value})} required className="w-full rounded-md border border-gray-300 dark:border-white/10 bg-white dark:bg-gray-900 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"/>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input type="password" value={form.password} onChange={e=>setForm({...form, password:e.target.value})} required className="w-full rounded-md border border-gray-300 dark:border-white/10 bg-white dark:bg-gray-900 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"/>
          </div>
          <button type="submit" className="w-full py-2.5 rounded-md bg-orange-500 hover:bg-orange-600 text-white font-semibold">{tab==='login'?'Log In':'Create Account'}</button>
          <p className="text-xs text-gray-500 dark:text-gray-400 text-center">This is a demo UI. No data is stored.</p>
        </form>
      </div>
    </div>
  )
}
