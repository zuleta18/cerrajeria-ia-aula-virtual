import React, { useState } from 'react';
import { OnboardingData } from '../types';

interface OnboardingProps {
  onComplete: (data: OnboardingData) => void;
}

export function Onboarding({ onComplete }: OnboardingProps) {
  const [data, setData] = useState<OnboardingData>({
    level: '',
    goal: '',
    timeAvailable: '',
    format: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (data.level && data.goal && data.timeAvailable && data.format) {
      onComplete(data);
    }
  };

  const updateField = (field: keyof OnboardingData, value: string) => {
    setData({ ...data, [field]: value });
  };

  return (
    <div className="min-h-screen p-4 md:p-8 flex items-center justify-center bg-black">
      <div className="w-full max-w-2xl bg-dark-800 border border-gold-500/30 p-6 md:p-10 shadow-2xl">
        <h2 className="text-2xl font-display font-medium italic text-white mb-2">Personaliza tu experiencia</h2>
        <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500 mb-8 border-b border-dark-600 pb-4">Ajustes del aula virtual</p>
        
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Nivel */}
          <div className="space-y-4">
            <label className="block text-[10px] font-bold uppercase tracking-widest text-gold-500">Nivel Actual</label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {['Principiante', 'Intermedio', 'Avanzado'].map((level) => (
                <button
                  key={level}
                  type="button"
                  onClick={() => updateField('level', level)}
                  className={`p-3 text-xs transition-all border ${
                    data.level === level 
                    ? 'border-gold-500 bg-gold-500/10 text-gold-500' 
                    : 'border-white/10 bg-black text-gray-400 hover:border-gold-500/50'
                  }`}
                >
                  {level}
                </button>
              ))}
            </div>
          </div>

          {/* Objetivo */}
          <div className="space-y-4">
            <label className="block text-[10px] font-bold uppercase tracking-widest text-gold-500">Objetivo principal</label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {['Montar mi negocio', 'Hobby o Bricolaje', 'Añadir servicio extra', 'Curiosidad'].map((goal) => (
                <button
                  key={goal}
                  type="button"
                  onClick={() => updateField('goal', goal)}
                  className={`p-3 text-left text-xs transition-all border ${
                    data.goal === goal 
                    ? 'border-gold-500 bg-gold-500/10 text-gold-500' 
                    : 'border-white/10 bg-black text-gray-400 hover:border-gold-500/50'
                  }`}
                >
                  {goal}
                </button>
              ))}
            </div>
          </div>

          {/* Tiempo */}
          <div className="space-y-4">
            <label className="block text-[10px] font-bold uppercase tracking-widest text-gold-500">Disponibilidad</label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {['1-2 horas', '3-5 horas', 'Más de 5 horas'].map((time) => (
                <button
                  key={time}
                  type="button"
                  onClick={() => updateField('timeAvailable', time)}
                  className={`p-3 text-xs transition-all border ${
                    data.timeAvailable === time 
                    ? 'border-gold-500 bg-gold-500/10 text-gold-500' 
                    : 'border-white/10 bg-black text-gray-400 hover:border-gold-500/50'
                  }`}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>

          {/* Formato */}
          <div className="space-y-4">
            <label className="block text-[10px] font-bold uppercase tracking-widest text-gold-500">Formato Preferido</label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {['Casos Prácticos', 'Teórico e Histórico', 'Actividades', 'Mixto equilibrado'].map((format) => (
                <button
                  key={format}
                  type="button"
                  onClick={() => updateField('format', format)}
                  className={`p-3 text-left text-xs transition-all border ${
                    data.format === format 
                    ? 'border-gold-500 bg-gold-500/10 text-gold-500' 
                    : 'border-white/10 bg-black text-gray-400 hover:border-gold-500/50'
                  }`}
                >
                  {format}
                </button>
              ))}
            </div>
          </div>

          <div className="pt-6">
            <button
              type="submit"
              disabled={!data.level || !data.goal || !data.timeAvailable || !data.format}
              className="w-full bg-gold-500 text-black font-bold uppercase text-[10px] tracking-[0.2em] shadow-[0_0_20px_rgba(212,175,55,0.3)] disabled:opacity-50 disabled:shadow-none py-4 mt-6 transition-colors hover:bg-gold-400"
            >
              Confirmar Diseño
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
