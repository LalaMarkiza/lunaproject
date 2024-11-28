import React from 'react';
import { format, isSameDay, isToday, addDays, isSameMonth, differenceInDays } from 'date-fns';
import { fr } from 'date-fns/locale';
import { useCalendarStore } from '../../store/calendarStore';
import { Droplet } from 'lucide-react';

interface CalendarGridProps {
  days: Date[];
  selectedDate: Date;
  currentMonth: Date;
  onSelectDate: (date: Date) => void;
}

const WEEKDAYS = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'];

export const CalendarGrid: React.FC<CalendarGridProps> = ({
  days,
  selectedDate,
  currentMonth,
  onSelectDate
}) => {
  const { 
    lastPeriodStart, 
    cycleLength, 
    isPeriodDay, 
    predictNextPeriod,
    getFertileWindow,
    flow
  } = useCalendarStore();

  const getCyclePhase = (date: Date): string => {
    if (!lastPeriodStart) return 'hover:bg-gray-100';

    // Vérifier si c'est un jour de règles prévu
    const nextPeriod = predictNextPeriod();
    if (nextPeriod && isSameDay(date, nextPeriod)) {
      return 'bg-red-50 ring-2 ring-red-200';
    }

    // Vérifier si c'est un jour fertile
    const fertileWindow = getFertileWindow();
    if (fertileWindow) {
      const isInFertileWindow = date >= fertileWindow.start && date <= fertileWindow.end;
      if (isInFertileWindow) {
        return 'bg-green-100';
      }
    }

    // Jour de règles actuel
    if (isPeriodDay(date)) {
      return 'bg-red-100';
    }

    const dayDiff = differenceInDays(date, lastPeriodStart);
    const cycleDay = ((dayDiff % cycleLength) + cycleLength) % cycleLength;

    if (cycleDay < 14) return 'bg-yellow-100';
    if (cycleDay < 17) return 'bg-green-100';
    return 'bg-purple-100';
  };

  const getFlowIndicator = (date: Date) => {
    const dateKey = format(date, 'yyyy-MM-dd');
    const flowIntensity = flow[dateKey];
    
    if (!flowIntensity) return null;

    const colors = {
      light: 'text-red-300',
      medium: 'text-red-400',
      heavy: 'text-red-500'
    };

    return (
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
        <Droplet size={12} className={colors[flowIntensity as keyof typeof colors]} />
      </div>
    );
  };

  return (
    <div>
      <div className="grid grid-cols-7 mb-2">
        {WEEKDAYS.map(day => (
          <div key={day} className="text-center text-sm text-gray-500">
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1">
        {days.map(day => {
          const isSelected = isSameDay(day, selectedDate);
          const dayPhase = getCyclePhase(day);
          const isCurrentMonth = isSameMonth(day, currentMonth);
          
          return (
            <button
              key={day.toISOString()}
              onClick={() => onSelectDate(day)}
              className={`
                relative
                aspect-square p-1 rounded-full
                flex items-center justify-center
                text-sm transition-all
                ${isSelected ? 'ring-2 ring-primary' : ''}
                ${isToday(day) ? 'font-bold' : ''}
                ${!isCurrentMonth ? 'text-gray-400' : ''}
                ${dayPhase}
              `}
            >
              {format(day, 'd')}
              {getFlowIndicator(day)}
            </button>
          );
        })}
      </div>
    </div>
  );
};