import React, { useState, useEffect } from 'react';
import { CourseUnit, User } from '../types';
import { ArrowLeft, CheckCircle2, ChevronRight, AlertCircle, FileText, Youtube, RefreshCcw } from 'lucide-react';
import { useEvidencia } from '../hooks/useEvidencia';
import { EvidenciaUploader } from './EvidenciaUploader';

interface LessonProps {
  unit: CourseUnit;
  user: User;
  onBack: () => void;
  onComplete: (unitId: string) => void;
  onResetProgress?: (unitId: string) => void;
}

export function Lesson({ unit, user, onBack, onComplete, onResetProgress }: LessonProps) {
  const isAlreadyCompleted = user.progress.includes(unit.id);
  const quizBlock = unit.blocks.find(b => b.type === 'quiz');
  
  // Evidencia state
  const { getEvidenciaForUserAndUnit, addEvidencia, deleteEvidencia } = useEvidencia();
  const existingEvidencia = getEvidenciaForUserAndUnit(user.id, unit.id);
  const evidenciaAprobada = existingEvidencia?.status === 'approved';
  
  const hasPassedQuizPreviously = isAlreadyCompleted || existingEvidencia !== undefined;
  
  // Quiz state
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState(hasPassedQuizPreviously);

  const handleOptionSelect = (qIndex: number, optIndex: number) => {
    if (showResults || hasPassedQuizPreviously) return; // Prevent changing after submit
    setAnswers(prev => ({ ...prev, [qIndex]: optIndex }));
  };

  const handleQuizSubmit = () => {
    if (!quizBlock?.questions) return;
    setShowResults(true);
  };

  const allAnswered = quizBlock?.questions ? Object.keys(answers).length === quizBlock.questions.length : false;
  const correctCount = quizBlock?.questions ? quizBlock.questions.filter((q, idx) => answers[idx] === q.correctAnswerIndex).length : 0;
  const isPassing = hasPassedQuizPreviously || (quizBlock?.questions ? correctCount === quizBlock.questions.length : false);

  useEffect(() => {
    if (isPassing && evidenciaAprobada && !isAlreadyCompleted) {
      onComplete(unit.id);
    }
  }, [isPassing, evidenciaAprobada, isAlreadyCompleted, onComplete, unit.id]);

  const handleEvidenceUploaded = (fileUrl: string) => {
    addEvidencia({
      id: Math.random().toString(36).substr(2, 9),
      userId: user.id,
      unitId: unit.id,
      fileUrl,
      status: 'pending',
      submittedAt: Date.now()
    });
  };

  return (
    <div className="min-h-screen flex flex-col h-screen bg-black">
      <header className="h-20 border-b border-gold-500/20 px-4 md:px-8 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button onClick={onBack} className="text-gray-400 hover:text-gold-500 transition-colors border border-white/10 p-2">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div className="flex flex-col">
            <h2 className="font-display text-lg md:text-2xl text-white italic truncate max-w-sm sm:max-w-xl">{unit.title}</h2>
            <p className="text-[10px] uppercase tracking-widest text-gold-500">Módulo formativo</p>
          </div>
        </div>
      </header>

      {/* Intro could go here, but omitted to fit the grid model, or merged as a block. We'll use the grid from the design html */}
      <div className="flex-1 p-4 md:p-8 overflow-y-auto">
        <div className="mb-6 border-l border-gold-500 pl-4">
          <p className="text-sm text-gray-400 italic max-w-3xl">{unit.description}</p>
          {(unit.driveLink || unit.youtubeLink) && (
            <div className="flex flex-wrap gap-4 mt-4">
              {unit.driveLink && (
                <a href={unit.driveLink} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-gold-500 hover:text-white transition-colors border border-gold-500/30 px-3 py-2">
                  <FileText className="w-4 h-4" /> Material del Ebook
                </a>
              )}
              {unit.youtubeLink && (
                <a href={unit.youtubeLink} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-red-500 hover:text-white transition-colors border border-red-500/30 px-3 py-2">
                  <Youtube className="w-4 h-4" /> Ver Clase en YouTube
                </a>
              )}
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {unit.blocks.map((block, index) => {
            if (block.type === 'quiz') return null;
            
            return (
              <div key={index} className="bg-dark-800 border border-gold-500/30 p-6 flex flex-col hover:border-gold-500/50 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-gold-500 font-display text-4xl opacity-40">{String(index + 1).padStart(2, '0')}</span>
                  <h3 className="uppercase text-[11px] font-bold tracking-widest text-gold-500">{block.title}</h3>
                </div>
                {block.type === 'case' ? (
                  <div className="flex-1 italic text-sm text-gray-400 border-l border-gold-500/30 pl-4">"{block.content}"</div>
                ) : (
                  <p className="text-sm leading-relaxed text-gray-300">{block.content}</p>
                )}
              </div>
            );
          })}
          
          {quizBlock && quizBlock.questions && (
            <div className="bg-dark-800 border border-gold-500/30 p-6 flex flex-col justify-between col-span-1 md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-gold-500 font-display text-4xl opacity-40">QZ</span>
                <h3 className="uppercase text-[11px] font-bold tracking-widest text-gold-500">{quizBlock.title || "Test Rápido"}</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                {quizBlock.questions.map((q, qIndex) => (
                  <div key={qIndex} className="flex flex-col">
                    <p className="text-xs text-white mb-4 italic">{qIndex + 1}. {q.question}</p>
                    <div className="space-y-2 flex-1">
                      {q.options.map((opt, optIndex) => {
                        const isSelected = answers[qIndex] === optIndex;
                        const isCorrect = optIndex === q.correctAnswerIndex;
                        let btnClass = "w-full text-left p-2 border text-[11px] transition-colors flex justify-between items-center ";
                        
                        if (!showResults) {
                          btnClass += isSelected 
                            ? "border-gold-500 bg-gold-500/10 text-gold-500" 
                            : "border-white/10 text-gray-400 hover:border-gold-500 cursor-pointer";
                        } else {
                          if (isCorrect) {
                            btnClass += "border-green-500 bg-green-500/10 text-green-400";
                          } else if (isSelected && !isCorrect) {
                            btnClass += "border-red-500 bg-red-500/10 text-red-500";
                          } else {
                            btnClass += "border-white/10 text-gray-600 opacity-50";
                          }
                        }

                        return (
                          <div
                            key={optIndex}
                            onClick={() => handleOptionSelect(qIndex, optIndex)}
                            className={btnClass}
                          >
                            <span>{String.fromCharCode(65 + optIndex)}) {opt}</span>
                            {showResults && isCorrect && <CheckCircle2 className="w-4 h-4 text-green-500" />}
                            {showResults && isSelected && !isCorrect && <AlertCircle className="w-4 h-4 text-red-500" />}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-gold-500/20 pt-6">
                {!showResults ? (
                  <button
                    disabled={!allAnswered}
                    onClick={handleQuizSubmit}
                    className="px-10 py-3 bg-gold-500 text-black font-bold uppercase text-[10px] tracking-[0.2em] shadow-[0_0_20px_rgba(212,175,55,0.3)] disabled:opacity-50 disabled:shadow-none transition-all flex items-center ml-auto"
                  >
                    Evaluar <ChevronRight className="ml-2 w-4 h-4" />
                  </button>
                ) : (
                  <div className="flex flex-col gap-6">
                    <div className="flex items-center justify-between">
                      <div className="flex flex-col">
                        <span className={`text-xs font-bold uppercase tracking-widest ${isPassing ? 'text-green-500' : 'text-red-500'}`}>
                          {isPassing ? 'Evaluación Teórica Aprobada' : 'No aprobado'}
                        </span>
                        {!hasPassedQuizPreviously && (
                          <span className="text-[10px] text-gray-500 uppercase tracking-widest mt-1">
                            Puntaje: {correctCount} / {quizBlock.questions.length} (Mínimo {quizBlock.questions.length})
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-4">
                        {!isPassing && (
                          <button
                            onClick={() => {
                              setShowResults(false);
                              setAnswers({});
                            }}
                            className="px-6 py-3 border border-white/20 text-gray-400 hover:text-white font-bold uppercase text-[10px] tracking-[0.2em] transition-all flex items-center gap-2"
                          >
                            <RefreshCcw className="w-4 h-4" /> Reintentar
                          </button>
                        )}
                        <button
                          onClick={onBack}
                          className="px-10 py-3 border border-gold-500 text-gold-500 font-bold uppercase text-[10px] tracking-[0.2em] hover:bg-gold-500 hover:text-black transition-all"
                        >
                          Volver al temario
                        </button>
                      </div>
                    </div>
                    
                    {isPassing && !evidenciaAprobada && (
                      <div className="border-t border-gold-500/20 pt-6">
                        <EvidenciaUploader 
                          userId={user.id} 
                          unitId={unit.id} 
                          onUploaded={handleEvidenceUploaded}
                          existingStatus={existingEvidencia?.status}
                          existingRejectionReason={existingEvidencia?.rejectionReason}
                        />
                      </div>
                    )}
                    
                    {isPassing && evidenciaAprobada && (
                      <div className="p-6 border border-green-500/30 bg-green-500/5 text-center mt-6">
                        <CheckCircle2 className="w-8 h-8 text-green-500 mx-auto mb-2" />
                        <h3 className="text-green-500 font-bold uppercase tracking-widest text-xs">Módulo Completado</h3>
                        <p className="text-gray-400 text-[10px] mt-2">Has aprobado la evaluación teórica y tu evidencia práctica fue validada.</p>
                      </div>
                    )}

                    {user.role === 'instructor' && onResetProgress && isAlreadyCompleted && (
                      <div className="mt-4 text-center">
                        <button
                          onClick={() => {
                            if (existingEvidencia) {
                              deleteEvidencia(existingEvidencia.id);
                            }
                            setAnswers({});
                            setShowResults(false);
                            onResetProgress(unit.id);
                          }}
                          className="px-6 py-2 border border-red-500/30 text-red-500 text-[10px] uppercase font-bold hover:bg-red-500/10 transition-colors"
                        >
                          🔄 Resetear progreso de este módulo (Instructor)
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
