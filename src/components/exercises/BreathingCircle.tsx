import React from 'react';

interface BreathingCircleProps {
  phase: 'inhale' | 'hold' | 'exhale';
  progress: number;
  duration: number;
}

export function BreathingCircle({ phase, progress, duration }: BreathingCircleProps) {
  const scale = phase === 'inhale' 
    ? 1 + (progress / 200)
    : phase === 'exhale' 
      ? 1 - (progress / 200)
      : 1;

  return (
    <div className="relative w-32 h-32 mb-4">
      <div 
        className="absolute inset-0 breathing-circle"
        style={{
          transform: `scale(${scale})`,
          backgroundColor: phase === 'hold' ? '#F8B3D1' : '#E6E6FA',
          opacity: phase === 'hold' ? 0.8 : 1
        }}
      />
      <div className="absolute inset-0 flex items-center justify-center text-[#2C3E50] font-medium">
        {Math.ceil((duration * (100 - progress)) / 100)}s
      </div>
    </div>
  );
}