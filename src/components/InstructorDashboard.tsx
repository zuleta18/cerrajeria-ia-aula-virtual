import React from 'react';
import { User } from '../types';
import { courseData } from '../data/courseData';
import { LogOut, Users, Search, AppWindow } from 'lucide-react';

interface InstructorDashboardProps {
  users: User[];
  onLogout: () => void;
  onSwitchView?: () => void;
}

export function InstructorDashboard({ users, onLogout, onSwitchView }: InstructorDashboardProps) {
  const students = users.filter(u => u.role === 'student');
  const [searchTerm, setSearchTerm] = React.useState('');

  const filteredStudents = students.filter(s => 
    s.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    s.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalUnits = courseData.length;

  return (
    <div className="min-h-screen bg-black pb-20">
      <header className="bg-dark-800 border-b border-gold-500/20 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-3">
             <div className="w-10 h-10 bg-gold-500/10 border border-gold-500 flex items-center justify-center font-display italic font-bold text-gold-500 text-xl">I</div>
             <div>
               <h1 className="font-display font-bold italic text-gold-500 tracking-wider text-xl leading-none">CerrajeríaIA</h1>
               <span className="text-[8px] uppercase tracking-[0.2em] text-gray-500">Panel Instructor</span>
             </div>
          </div>
          <div className="flex items-center space-x-4">
            {onSwitchView && (
              <button onClick={onSwitchView} className="px-4 py-2 border border-gold-500/50 text-[10px] uppercase tracking-widest text-gold-500 hover:bg-gold-500/10 transition-all font-bold hidden sm:flex items-center gap-2">
                <AppWindow className="w-4 h-4" />
                Vista Alumno
              </button>
            )}
            <button onClick={onLogout} className="px-6 py-2 border border-dark-600 text-[10px] uppercase tracking-widest text-gray-500 hover:text-gold-500 hover:border-gold-500 transition-all font-bold">
              Cerrar Sesión
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <aside className="w-full md:w-64 flex-shrink-0">
          <div className="bg-dark-800 border border-gold-500/30 p-6 sticky top-28">
            <h2 className="text-[10px] uppercase text-gold-500 font-bold mb-4 tracking-widest border-b border-dark-600 pb-2">Resumen</h2>
            <div className="text-right">
               <span className="font-serif italic text-gold-500 text-3xl font-bold">{students.length}</span>
               <p className="text-[10px] uppercase text-gray-500 mt-1 font-bold">Alumnos Totales</p>
            </div>
            
            <div className="relative w-full mt-6">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-gold-500/50" />
              </div>
              <input
                type="text"
                placeholder="Buscar alumno..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-3 py-3 border border-dark-600 bg-black text-white placeholder-gray-600 focus:outline-none focus:border-gold-500 text-xs transition-colors"
              />
            </div>
          </div>
        </aside>

        <div className="flex-1 bg-dark-800 border border-gold-500/30 p-1">
          <div className="overflow-x-auto">
            <table className="w-full text-left whitespace-nowrap">
              <thead>
                <tr className="bg-black/50 border-b border-gold-500/20">
                  <th className="px-6 py-4 text-[10px] font-bold text-gray-500 uppercase tracking-widest">Alumno</th>
                  <th className="px-6 py-4 text-[10px] font-bold text-gray-500 uppercase tracking-widest">Perfil</th>
                  <th className="px-6 py-4 text-[10px] font-bold text-gray-500 uppercase tracking-widest">Progreso</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-dark-600">
                {filteredStudents.length > 0 ? (
                  filteredStudents.map((student) => {
                    const completed = student.progress?.length || 0;
                    const pct = Math.round((completed / totalUnits) * 100);
                    const hasOnboarding = !!student.onboardingData;

                    return (
                      <tr key={student.id} className="hover:bg-white/5 transition-colors">
                        <td className="px-6 py-5">
                          <div className="flex flex-col text-xs space-y-1">
                            <span className="font-bold text-gold-500 tracking-wider uppercase">{student.name}</span>
                            <span className="text-gray-500 text-[10px] uppercase">{student.email}</span>
                          </div>
                        </td>
                        <td className="px-6 py-5">
                          {hasOnboarding ? (
                            <div className="flex flex-col text-xs space-y-1">
                              <span className="text-white font-serif italic">{student.onboardingData!.level}</span>
                              <span className="text-gray-500 text-[10px] uppercase">Obj: {student.onboardingData!.goal}</span>
                            </div>
                          ) : (
                            <span className="text-[10px] font-bold text-gray-600 uppercase tracking-widest border border-white/10 px-2 py-1">
                              Pendiente Setup
                            </span>
                          )}
                        </td>
                        <td className="px-6 py-5">
                          <div className="flex items-center gap-3">
                            <span className="text-sm font-serif font-bold text-gold-500">{pct}%</span>
                            <div className="w-24 bg-gray-800 h-1 rounded-none overflow-hidden">
                              <div 
                                className="bg-gold-500 h-full" 
                                style={{ width: `${pct}%` }}
                              ></div>
                            </div>
                          </div>
                          <div className="text-[10px] text-gray-500 mt-2 uppercase tracking-widest">{completed} / {totalUnits} completados</div>
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td colSpan={3} className="px-6 py-12 text-center text-gray-500 text-xs uppercase tracking-widest">
                      <Users className="mx-auto h-8 w-8 text-dark-600 mb-3" />
                      No se encontraron registros
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
