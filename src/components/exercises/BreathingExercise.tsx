import React, { useState, useEffect } from 'react';
import { Pause, Play } from 'lucide-react';
import { Exercise } from '../../types/chat';
import { BreathingCircle } from './BreathingCircle';
import { ProgressBar } from './ProgressBar';

interface BreathingExerciseProps {
  exercise: Exercise;
  onComplete: () => void;
}

export function BreathingExercise({ exercise, onComplete }: BreathingExerciseProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    if (!isActive) return;

    const step = exercise.steps[currentStep];
    const interval = 100; // Update every 100ms for smooth animation
    const totalSteps = step.duration * 10; // 10 updates per second
    let currentProgress = 0;

    const timer = setInterval(() => {
      currentProgress++;
      setProgress((currentProgress / totalSteps) * 100);

      if (currentProgress >= totalSteps) {
        if (currentStep < exercise.steps.length - 1) {
          setCurrentStep(prev => prev + 1);
          setProgress(0);
        } else {
          setIsActive(false);
          onComplete();
        }
      }
    }, interval);

    return () => clearInterval(timer);
  }, [currentStep, isActive, exercise, onComplete]);

  const step = exercise.steps[currentStep];

  return (
    <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm">
      <BreathingCircle 
        phase={step.phase}
        progress={progress}
        duration={step.duration}
      />

      <p className="text-lg font-medium text-[#2C3E50] mb-4">
        {step.instruction}
      </p>
      
      <ProgressBar 
        progress={progress}
        phase={step.phase}
      />

      <button
        onClick={() => setIsActive(!isActive)}
        className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#E6E6FA] text-[#2C3E50] 
          hover:bg-[#d8d8f7] transition-colors"
      >
        {isActive ? (
          <>
            <Pause size={18} />
            <span>Pause</span>
          </>
        ) : (
          <>
            <Play size={18} />
            <span>Reprendre</span>
          </>
        )}
      </button>
    </div>
  );
}