import React from 'react';
import { format, addMonths, subMonths } from 'date-fns';
import { fr } from 'date-fns/locale';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CalendarHeaderProps {
  currentMonth: Date;
  onMonthChange: (date: Date) => void;
}

export const CalendarHeader: React.FC<CalendarHeaderProps> = ({
  currentMonth,
  onMonthChange
}) => {
  return (
    <div className="flex items-center justify-between mb-4">
      <button
        onClick={() => onMonthChange(subMonths(currentMonth, 1))}
        className="p-2 hover:bg-gray-100 rounded-full transition-colors"
      >
        <ChevronLeft size={20} />
      </button>

      <h2 className="text-lg font-semibold text-gray-900">
        {format(currentMonth, 'MMMM yyyy', { locale: fr })}
      </h2>

      <button
        onClick={() => onMonthChange(addMonths(currentMonth, 1))}
        className="p-2 hover:bg-gray-100 rounded-full transition-colors"
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
};