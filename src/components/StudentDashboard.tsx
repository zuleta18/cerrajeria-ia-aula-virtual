import React from 'react';
import { User } from '../types';
import { courseData } from '../data/courseData';
import { CheckCircle, Circle, LockOpen, LogOut, LayoutDashboard } from 'lucide-react';

interface StudentDashboardProps {
  user: User;
  onSelectUnit: (unitId: string) => void;
  onLogout: () => void;
  isInstructor?: boolean;
  onSwitchView?: () => void;
}

export function StudentDashboard({ user, onSelectUnit, onLogout, isInstructor, onSwitchView }: StudentDashboardProps) {
  const completedCount = user.progress.length;
  const totalUnits = courseData.length;
  const progressPercentage = Math.round((completedCount / totalUnits) * 100);

  return (
    <div className="min-h-screen bg-black pb-20">
      {/* Header */}
      <header className="bg-dark-800 border-b border-gold-500/20 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gold-500/10 border border-gold-500 flex items-center justify-center">
              <LockOpen className="w-5 h-5 text-gold-500" />
            </div>
            <div>
              <h1 className="font-display font-bold italic text-gold-500 tracking-wider text-xl leading-none">CerrajeríaIA</h1>
              <span className="text-[8px] uppercase tracking-[0.2em] text-gold-500/70">Aula Virtual</span>
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <div className="text-right hidden sm:block">
              <p className="text-[10px] uppercase text-gray-500 font-bold mb-1">{user.name}</p>
              <p className="text-[10px] uppercase text-gold-500 tracking-wider">Alumno</p>
            </div>
            {isInstructor && onSwitchView && (
               <button onClick={onSwitchView} className="hidden sm:flex px-4 py-2 border border-gold-500/50 text-[10px] uppercase tracking-widest text-gold-500 hover:bg-gold-500/10 transition-all font-bold items-center gap-2">
                 <LayoutDashboard className="w-4 h-4" />
                 Ver Panel
               </button>
            )}
            <button onClick={onLogout} className="w-10 h-10 border border-dark-600 flex items-center justify-center text-gray-500 hover:text-gold-500 hover:border-gold-500 transition-all">
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-8 flex flex-col md:flex-row gap-8">
        
        {/* Sidebar / Progress */}
        <aside className="w-full md:w-64 flex-shrink-0">
          <div className="bg-dark-800 border border-gold-500/30 p-6 sticky top-28">
            <div className="text-right mb-6 border-b border-white/10 pb-4">
               <p className="text-[10px] uppercase text-gray-500 mb-2">Tu Progreso</p>
               <div className="w-full h-1 bg-gray-800 rounded-full overflow-hidden mb-2">
                 <div 
                   className="bg-gold-500 h-full transition-all duration-1000"
                   style={{ width: `${progressPercentage}%` }}
                 ></div>
               </div>
               <span className="font-serif italic text-gold-500 text-xl font-bold">{progressPercentage}%</span>
            </div>
            
            <div className="space-y-4">
               <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Perfil del Alumno</p>
               <div className="space-y-2">
                 <div className="flex justify-between text-xs">
                   <span className="text-gray-400">Nivel</span>
                   <span className="text-gold-500">{user.onboardingData?.level}</span>
                 </div>
                 <div className="flex justify-between text-xs">
                   <span className="text-gray-400">Formato</span>
                   <span className="text-gold-500">{user.onboardingData?.format}</span>
                 </div>
                 <div className="flex justify-between text-xs">
                   <span className="text-gray-400">Unidades</span>
                   <span className="text-white">{completedCount} / {totalUnits}</span>
                 </div>
               </div>
            </div>
          </div>
        </aside>

        {/* Units List */}
        <section className="flex-1 space-y-4">
          <div className="text-[10px] uppercase text-gold-500/50 font-bold mb-4 tracking-widest border-b border-dark-600 pb-2">Unidades de Aprendizaje</div>
          <div className="grid gap-4">
            {courseData.map((unit, index) => {
              const isCompleted = user.progress.includes(unit.id);
              return (
                <button
                  key={unit.id}
                  onClick={() => onSelectUnit(unit.id)}
                  className="w-full text-left bg-dark-800 border border-gold-500/30 p-5 hover:border-gold-500 hover:bg-white/5 transition-all group flex items-start gap-4 relative overflow-hidden"
                >
                  {isCompleted && (
                    <div className="absolute top-0 right-0 p-4 opacity-50 pointer-events-none">
                       <CheckCircle className="w-24 h-24 text-gold-500" style={{ transform: 'translate(20%, -30%)' }} />
                    </div>
                  )}

                  <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center border border-gold-500/30 text-[10px] text-gold-500 group-hover:border-gold-500 transition-colors">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  
                  <div className="flex-1 relative z-10">
                    <div className="text-[10px] font-bold tracking-widest text-gold-500 mb-1 uppercase">Módulo {index + 1}</div>
                    <h4 className={`text-xl font-display italic mb-2 ${isCompleted ? 'text-white' : 'text-gray-300'}`}>
                      {unit.title}
                    </h4>
                    <p className="text-xs text-gray-400 leading-relaxed max-w-xl">
                      {unit.description}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </section>
      </main>
    </div>
  );
}
