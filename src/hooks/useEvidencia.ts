import { useState, useEffect } from 'react';
import { Evidencia } from '../types';

const EVIDENCIAS_KEY = 'cerrajeria_evidencias';

export function useEvidencia() {
  const [evidencias, setEvidencias] = useState<Evidencia[]>([]);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(EVIDENCIAS_KEY);
      if (stored) {
        setEvidencias(JSON.parse(stored));
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  const saveEvidencias = (newEvidencias: Evidencia[]) => {
    setEvidencias(newEvidencias);
    localStorage.setItem(EVIDENCIAS_KEY, JSON.stringify(newEvidencias));
  };

  const addEvidencia = (evidencia: Evidencia) => {
    // If an evidence for this user and unit already exists, replace it
    const existing = [...evidencias];
    const index = existing.findIndex(e => e.userId === evidencia.userId && e.unitId === evidencia.unitId);
    if (index >= 0) {
      existing[index] = evidencia;
    } else {
      existing.push(evidencia);
    }
    saveEvidencias(existing);
  };

  const updateEvidenciaStatus = (id: string, status: 'pending' | 'approved' | 'rejected') => {
    const existing = [...evidencias];
    const index = existing.findIndex(e => e.id === id);
    if (index >= 0) {
      existing[index].status = status;
      saveEvidencias(existing);
    }
  };

  const getEvidenciaForUserAndUnit = (userId: string, unitId: string) => {
    return evidencias.find(e => e.userId === userId && e.unitId === unitId);
  };

  return {
    evidencias,
    addEvidencia,
    updateEvidenciaStatus,
    getEvidenciaForUserAndUnit
  };
}
