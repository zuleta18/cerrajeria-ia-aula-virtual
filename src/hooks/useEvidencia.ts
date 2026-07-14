import { useState, useEffect } from 'react';
import { Evidencia } from '../types';
import { db } from '../firebase';
import { collection, doc, setDoc, updateDoc, onSnapshot } from 'firebase/firestore';

const EVIDENCIAS_KEY = 'cerrajeria_evidencias';

export function useEvidencia() {
  const [evidencias, setEvidencias] = useState<Evidencia[]>([]);

  useEffect(() => {
    // Try to use Firestore real-time listener
    try {
      const unsubscribe = onSnapshot(collection(db, 'evidencias'), (snapshot) => {
        const docs = snapshot.docs.map(d => d.data() as Evidencia);
        setEvidencias(docs);
        // Also sync to local storage for backup
        localStorage.setItem(EVIDENCIAS_KEY, JSON.stringify(docs));
      }, (error) => {
        console.error("Firestore error, using localStorage fallback:", error);
        loadLocalFallback();
      });

      return () => unsubscribe();
    } catch (err) {
      console.error("Failed to initialize Firestore listener", err);
      loadLocalFallback();
    }
  }, []);

  const loadLocalFallback = () => {
    try {
      const stored = localStorage.getItem(EVIDENCIAS_KEY);
      if (stored) {
        setEvidencias(JSON.parse(stored));
      }
    } catch (e) {
      console.error(e);
    }
  };

  const addEvidencia = async (evidencia: Evidencia) => {
    try {
      await setDoc(doc(db, 'evidencias', evidencia.id), evidencia);
    } catch (e) {
      console.error("Error adding to Firestore, using local fallback", e);
      // Fallback
      const existing = [...evidencias];
      const index = existing.findIndex(e => e.userId === evidencia.userId && e.unitId === evidencia.unitId);
      if (index >= 0) {
        existing[index] = evidencia;
      } else {
        existing.push(evidencia);
      }
      setEvidencias(existing);
      localStorage.setItem(EVIDENCIAS_KEY, JSON.stringify(existing));
    }
  };

  const updateEvidenciaStatus = async (id: string, status: 'pending' | 'approved' | 'rejected', rejectionReason?: string) => {
    try {
      const updateData: any = { status };
      if (rejectionReason) {
        updateData.rejectionReason = rejectionReason;
      }
      await updateDoc(doc(db, 'evidencias', id), updateData);
    } catch (e) {
      console.error("Error updating Firestore, using local fallback", e);
      // Fallback
      const existing = [...evidencias];
      const index = existing.findIndex(e => e.id === id);
      if (index >= 0) {
        existing[index].status = status;
        if (rejectionReason) {
          existing[index].rejectionReason = rejectionReason;
        }
        setEvidencias(existing);
        localStorage.setItem(EVIDENCIAS_KEY, JSON.stringify(existing));
      }
    }
  };

  const deleteEvidencia = async (id: string) => {
    try {
      // In a real app we'd import deleteDoc
      const { deleteDoc } = await import('firebase/firestore');
      await deleteDoc(doc(db, 'evidencias', id));
    } catch (e) {
      console.error("Error deleting from Firestore, using local fallback", e);
      const existing = evidencias.filter(e => e.id !== id);
      setEvidencias(existing);
      localStorage.setItem(EVIDENCIAS_KEY, JSON.stringify(existing));
    }
  };

  const getEvidenciaForUserAndUnit = (userId: string, unitId: string) => {
    return evidencias.find(e => e.userId === userId && e.unitId === unitId);
  };

  return {
    evidencias,
    addEvidencia,
    updateEvidenciaStatus,
    deleteEvidencia,
    getEvidenciaForUserAndUnit
  };
}
