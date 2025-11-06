import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function RegisterPage({ onAuth }) {
  const [form, setForm] = useState({ username: '', email: '', password: '' })

  function submit(e) {
    e.preventDefault()
    const name = form.username || form.email.split('@')[0] || 'Fan'
    onAuth({ username: name })
  }

  return (
    <div className="mx-auto max-w-md px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-8">
        <h1 className="text-3xl font-black tracking-tight">Create your account</h1>
        <p className="text-gray-600 mt-1">Join AniStream and start streaming today.</p>
      </div>

      <form onSubmit={submit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Username</label>
          <input value={form.username} onChange={e=>setForm({...form, username:e.target.value})} required className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"/>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input type="email" value={form.email} onChange={e=>setForm({...form, email:e.target.value})} required className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"/>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Password</label>
          <input type="password" value={form.password} onChange={e=>setForm({...form, password:e.target.value})} required className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"/>
        </div>
        <button type="submit" className="w-full py-2.5 rounded-md bg-orange-500 hover:bg-orange-600 text-white font-semibold">Create Account</button>
        <p className="text-xs text-gray-500 text-center">This is a demo. No data is stored.</p>
      </form>

      <p className="mt-6 text-sm text-gray-700 text-center">
        Already have an account? <Link to="/login" className="font-semibold text-orange-600 hover:text-orange-700">Log in</Link>
      </p>
    </div>
  )
}
