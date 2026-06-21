import React, { useState } from 'react';
import { CourseUnit, User } from '../types';
import { ArrowLeft, CheckCircle2, ChevronRight, AlertCircle } from 'lucide-react';

interface LessonProps {
  unit: CourseUnit;
  user: User;
  onBack: () => void;
  onComplete: (unitId: string) => void;
}

export function Lesson({ unit, user, onBack, onComplete }: LessonProps) {
  const isAlreadyCompleted = user.progress.includes(unit.id);
  const quizBlock = unit.blocks.find(b => b.type === 'quiz');
  
  // Quiz state
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState(false);

  const handleOptionSelect = (qIndex: number, optIndex: number) => {
    if (showResults) return; // Prevent changing after submit
    setAnswers(prev => ({ ...prev, [qIndex]: optIndex }));
  };

  const handleQuizSubmit = () => {
    if (!quizBlock?.questions) return;
    setShowResults(true);

    const allCorrect = quizBlock.questions.every(
      (q, idx) => answers[idx] === q.correctAnswerIndex
    );

    if (allCorrect && !isAlreadyCompleted) {
      onComplete(unit.id);
    }
  };

  const allAnswered = quizBlock?.questions ? Object.keys(answers).length === quizBlock.questions.length : false;
  const isPerfectScore = quizBlock?.questions?.every((q, idx) => answers[idx] === q.correctAnswerIndex);

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
                  <div className="flex items-center justify-between">
                    <span className={`text-xs font-bold uppercase tracking-widest ${isPerfectScore ? 'text-green-500' : 'text-red-500'}`}>
                      {isPerfectScore ? 'Módulo Completado Exitosamente' : 'Errores en la evaluación'}
                    </span>
                    <button
                      onClick={onBack}
                      className="px-10 py-3 border border-gold-500 text-gold-500 font-bold uppercase text-[10px] tracking-[0.2em] hover:bg-gold-500 hover:text-black transition-all"
                    >
                      Volver al temario
                    </button>
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
