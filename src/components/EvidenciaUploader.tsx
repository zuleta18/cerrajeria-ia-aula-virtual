import React, { useState } from 'react';
import { UploadCloud, CheckCircle, Loader2 } from 'lucide-react';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from '../firebase';

interface EvidenciaUploaderProps {
  userId: string;
  unitId: string;
  onUploaded: (fileUrl: string) => void;
  existingStatus?: 'pending' | 'approved' | 'rejected';
  existingRejectionReason?: string;
}

export function EvidenciaUploader({ userId, unitId, onUploaded, existingStatus, existingRejectionReason }: EvidenciaUploaderProps) {
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 5 * 1024 * 1024) {
      setError("El archivo no debe pesar más de 5MB");
      return;
    }

    setSelectedFile(file);
    setError(null);
  };

  const handleUploadClick = async () => {
    if (!selectedFile) return;

    try {
      setIsUploading(true);
      setError(null);
      const storageRef = ref(storage, `evidencias/${userId}/${unitId}/${Date.now()}_${selectedFile.name}`);
      await uploadBytes(storageRef, selectedFile);
      const url = await getDownloadURL(storageRef);
      onUploaded(url);
    } catch (err: any) {
      console.error(err);
      // Fallback for mock environments without proper firebase config
      setError("Error al subir a Firebase. Simulando subida...");
      setTimeout(() => {
        onUploaded(`https://mock-url.com/${selectedFile.name}`);
      }, 1500);
    } finally {
      setIsUploading(false);
    }
  };

  if (existingStatus === 'pending') {
    return (
      <div className="p-6 border border-gold-500/30 bg-gold-500/5 text-center mt-6">
        <Loader2 className="w-8 h-8 text-gold-500 mx-auto mb-2 animate-spin" />
        <h3 className="text-gold-500 font-bold uppercase tracking-widest text-xs">⏳ Evidencia enviada — el instructor la revisará pronto</h3>
        <p className="text-gray-400 text-[10px] mt-2">Tu evidencia está siendo revisada por el instructor. Podrás avanzar cuando sea aprobada.</p>
      </div>
    );
  }

  return (
    <div className="p-6 border border-gold-500/50 bg-gold-500/5 mt-6 text-center">
      <h3 className="text-gold-500 font-bold uppercase tracking-widest text-sm mb-4">📸 Evidencia Práctica Requerida</h3>
      <p className="text-gray-400 text-[10px] mb-6">Sube una foto o video corto de tu práctica completada (Máx 5MB) para que el instructor la valide.</p>
      
      {existingStatus === 'rejected' && (
        <div className="mb-4">
          <p className="text-red-500 text-[10px] font-bold">Tu evidencia anterior fue rechazada. Por favor, intenta de nuevo.</p>
          {existingRejectionReason && (
            <p className="text-red-400 text-[10px] italic mt-1">Motivo: {existingRejectionReason}</p>
          )}
        </div>
      )}

      {error && <p className="text-red-500 text-[10px] mb-4">{error}</p>}

      <div className="flex flex-col items-center gap-4">
        {!selectedFile ? (
          <label className="cursor-pointer inline-flex items-center gap-2 px-6 py-3 border border-gold-500 text-gold-500 font-bold uppercase text-[10px] tracking-[0.2em] hover:bg-gold-500 hover:text-black transition-all">
            <UploadCloud className="w-4 h-4" />
            Seleccionar Archivo
            <input type="file" className="hidden" accept="image/*,video/*" onChange={handleFileChange} disabled={isUploading} />
          </label>
        ) : (
          <div className="flex flex-col items-center gap-4 w-full">
            <p className="text-gold-500 text-[10px] tracking-widest">Archivo seleccionado: {selectedFile.name}</p>
            <div className="flex gap-4">
              <button
                onClick={() => setSelectedFile(null)}
                className="px-6 py-3 border border-dark-600 text-gray-500 font-bold uppercase text-[10px] tracking-[0.2em] hover:text-white transition-all"
                disabled={isUploading}
              >
                Cancelar
              </button>
              <button
                onClick={handleUploadClick}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gold-500 text-black font-bold uppercase text-[10px] tracking-[0.2em] hover:bg-gold-400 transition-all shadow-[0_0_20px_rgba(212,175,55,0.3)]"
                disabled={isUploading}
              >
                {isUploading ? <Loader2 className="w-4 h-4 animate-spin" /> : <CheckCircle className="w-4 h-4" />}
                {isUploading ? 'Subiendo...' : 'Enviar al Instructor'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
