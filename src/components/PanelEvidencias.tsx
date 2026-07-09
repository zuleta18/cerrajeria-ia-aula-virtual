import React from 'react';
import { Evidencia, User } from '../types';
import { CheckCircle, XCircle, ExternalLink } from 'lucide-react';
import { courseData } from '../data/courseData';

interface PanelEvidenciasProps {
  evidencias: Evidencia[];
  users: User[];
  onApprove: (evidenciaId: string, userId: string, unitId: string) => void;
  onReject: (evidenciaId: string) => void;
}

export function PanelEvidencias({ evidencias, users, onApprove, onReject }: PanelEvidenciasProps) {
  const pendingEvidencias = evidencias.filter(e => e.status === 'pending');
  const reviewedEvidencias = evidencias.filter(e => e.status !== 'pending');

  const getUserName = (userId: string) => users.find(u => u.id === userId)?.name || userId;
  const getUnitName = (unitId: string) => courseData.find(u => u.id === unitId)?.title || unitId;

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-white text-xs font-bold uppercase tracking-widest mb-4">Evidencias Pendientes ({pendingEvidencias.length})</h2>
        {pendingEvidencias.length === 0 ? (
          <p className="text-gray-500 text-xs">No hay evidencias pendientes por revisar.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {pendingEvidencias.map(ev => (
              <div key={ev.id} className="border border-dark-600 p-4 bg-dark-800">
                <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">{getUnitName(ev.unitId)}</p>
                <p className="text-white font-bold text-sm mb-4">{getUserName(ev.userId)}</p>
                
                <a href={ev.fileUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-gold-500 text-[10px] uppercase tracking-widest hover:text-white transition-colors mb-6">
                  <ExternalLink className="w-4 h-4" /> Ver Archivo Subido
                </a>

                <div className="flex gap-2">
                  <button onClick={() => onApprove(ev.id, ev.userId, ev.unitId)} className="flex-1 flex items-center justify-center gap-2 px-3 py-2 border border-green-500/50 text-green-500 hover:bg-green-500/10 transition-colors text-[10px] uppercase font-bold tracking-widest">
                    <CheckCircle className="w-3 h-3" /> Aprobar
                  </button>
                  <button onClick={() => onReject(ev.id)} className="flex-1 flex items-center justify-center gap-2 px-3 py-2 border border-red-500/50 text-red-500 hover:bg-red-500/10 transition-colors text-[10px] uppercase font-bold tracking-widest">
                    <XCircle className="w-3 h-3" /> Rechazar
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div>
        <h2 className="text-white text-xs font-bold uppercase tracking-widest mb-4">Historial de Revisiones</h2>
        <div className="space-y-2">
          {reviewedEvidencias.map(ev => (
            <div key={ev.id} className="flex items-center justify-between p-3 border border-dark-600 bg-black">
              <div>
                <p className="text-white text-xs font-bold">{getUserName(ev.userId)}</p>
                <p className="text-gray-500 text-[10px] uppercase tracking-widest">{getUnitName(ev.unitId)}</p>
              </div>
              <div>
                {ev.status === 'approved' ? (
                  <span className="text-green-500 text-[10px] uppercase font-bold tracking-widest flex items-center gap-1"><CheckCircle className="w-3 h-3" /> Aprobada</span>
                ) : (
                  <span className="text-red-500 text-[10px] uppercase font-bold tracking-widest flex items-center gap-1"><XCircle className="w-3 h-3" /> Rechazada</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
