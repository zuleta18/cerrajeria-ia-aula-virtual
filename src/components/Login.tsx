import React, { useState } from 'react';
import { Key } from 'lucide-react';

interface LoginProps {
  onLogin: (email: string, name: string) => void;
}

export function Login({ onLogin }: LoginProps) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && name) {
      onLogin(email, name);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-black">
      <div className="w-full max-w-md bg-dark-800 border border-gold-500/30 p-8 shadow-2xl flex flex-col">
        <div className="flex flex-col items-center mb-8 border-b border-gold-500/20 pb-6">
          <div className="w-16 h-16 bg-gold-500/10 rounded-full flex items-center justify-center mb-4 border border-gold-500">
            <Key className="w-8 h-8 text-gold-500" />
          </div>
          <h1 className="text-3xl font-display italic font-bold tracking-wider text-gold-500">CerrajeríaIA</h1>
          <p className="text-[10px] uppercase tracking-[0.3em] text-gold-500/70 mt-2">Aula Virtual Premium</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-2">Nombre completo</label>
            <input
              id="name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-black border border-dark-600 px-4 py-3 text-white focus:outline-none focus:border-gold-500 transition-colors text-xs"
              placeholder="Ej. Carlos Mendoza"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-2">Correo electrónico</label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-black border border-dark-600 px-4 py-3 text-white focus:outline-none focus:border-gold-500 transition-colors text-xs"
              placeholder="tu@correo.com"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-transparent border border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-black font-bold uppercase text-[10px] tracking-[0.2em] shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-none py-3 mt-6 transition-all"
          >
            Acceder al Aula
          </button>
        </form>
      </div>
    </div>
  );
}
