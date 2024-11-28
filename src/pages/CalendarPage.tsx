import React from 'react';
import { Calendar } from '../components/calendar/Calendar';
import { CycleSetup } from '../components/onboarding/CycleSetup';
import { useCalendarStore } from '../store/calendarStore';

export const CalendarPage: React.FC = () => {
  const { lastPeriodStart } = useCalendarStore();

  return (
    <div className="min-h-screen bg-background py-6">
      <div className="max-w-lg mx-auto px-4">
        <h1 className="text-2xl font-semibold text-gray-900 mb-6">
          Mon Calendrier
        </h1>
        
        {lastPeriodStart ? (
          <Calendar />
        ) : (
          <CycleSetup />
        )}
      </div>
    </div>
  );
};