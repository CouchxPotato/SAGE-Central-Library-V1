import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Almirah as AlmirahType } from '../data/books';
import { BookMarked, ExternalLink, SplitSquareVertical } from 'lucide-react';

interface AlmirahProps {
  almirah: AlmirahType;
}

export function Almirah({ almirah }: AlmirahProps) {
  const navigate = useNavigate();
  const almirahPageUrl = `/almirah/${almirah.id}`;
  const qrCodeUrl = `${window.location.origin}${almirahPageUrl}`;

  return (
    <div className="relative perspective-1000">
      <div className="card-hover w-full">
        {/* Almirah Number Plate */}
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10 bg-gradient-to-b from-uni-maroon to-uni-red 
                    text-white px-4 py-1.5 rounded-lg shadow-lg border border-uni-orange
                    transform-gpu transition-all duration-300 group-hover:-translate-y-1">
          <span className="text-base font-bold whitespace-nowrap">Almirah {almirah.id}</span>
        </div>

        <div className="relative bg-white rounded-lg p-8 pt-12
                    shadow-[0_8px_16px_rgba(0,0,0,0.1),inset_0_2px_4px_rgba(255,255,255,0.9)]
                    border-2 border-slate-300 transition-all duration-500
                    transform-gpu hover:shadow-2xl">
          {/* Wood Texture Lines */}
          <div className="absolute inset-0 opacity-20">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="h-px bg-slate-700 transform"
                style={{ top: `${i * 14 + 10}%` }}
              />
            ))}
          </div>

          <div className="relative flex flex-col items-center gap-4">
            <div className="bg-uni-yellow p-4 rounded-full shadow-inner transform-gpu transition-all duration-300 hover:scale-110 hover:rotate-12">
              <SplitSquareVertical className="w-10 h-10 text-uni-red" />
            </div>

            {/* Subject Name */}
            <div className="text-center mb-4">
              <h3 className="text-lg font-semibold text-uni-maroon">{almirah.subject}</h3>
            </div>
              
            {/* QR Code Section */}
            <div className="bg-gradient-to-br from-uni-yellow to-uni-gold p-4 rounded-xl shadow-inner
                         transition-all duration-300 hover:shadow-md hover:scale-[1.02]">
              <img 
                src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(qrCodeUrl)}`}
                alt={`QR Code for Almirah ${almirah.id}`}
                className="w-32 h-32 mx-auto transition-transform duration-300 hover:scale-105"
              />
              <p className="text-center mt-3 text-sm text-slate-600">
                Scan to view contents
              </p>
            </div>

            {/* Open Almirah Button */}
            <button
              onClick={() => navigate(almirahPageUrl)}
              className="btn-hover mt-4 w-full bg-uni-red text-white px-4 py-2 rounded-lg
                     flex items-center justify-center gap-2 shadow-md hover:bg-uni-maroon transition-all"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Open Almirah</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}