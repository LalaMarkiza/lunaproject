import React from 'react';

interface ProgressBarProps {
  progress: number;
  phase: 'inhale' | 'hold' | 'exhale';
}

export function ProgressBar({ progress, phase }: ProgressBarProps) {
  const getColor = () => {
    switch (phase) {
      case 'inhale':
        return 'bg-[#E6E6FA]';
      case 'hold':
        return 'bg-[#F8B3D1]';
      case 'exhale':
        return 'bg-[#E6E6FA]';
      default:
        return 'bg-[#E6E6FA]';
    }
  };

  return (
    <div className="w-full bg-gray-100 rounded-full h-2 mb-4">
      <div 
        className={`h-2 rounded-full transition-all duration-100 ${getColor()}`}
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}