import React from 'react';
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isSameDay, addMonths, subMonths } from 'date-fns';
import { fr } from 'date-fns/locale';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Card } from './Card';

interface DatePickerProps {
  selectedDate: Date | null;
  onSelect: (date: Date) => void;
  onClose: () => void;
  maxDate?: Date;
}

export const DatePicker: React.FC<DatePickerProps> = ({
  selectedDate,
  onSelect,
  onClose,
  maxDate = new Date()
}) => {
  const [currentMonth, setCurrentMonth] = React.useState(new Date());
  const days = eachDayOfInterval({
    start: startOfMonth(currentMonth),
    end: endOfMonth(currentMonth)
  });

  const handleDateSelect = (date: Date) => {
    if (maxDate && date > maxDate) return;
    onSelect(date);
  };

  return (
    <div className="fixed inset-0 bg-black/20 flex items-center justify-center z-50">
      <Card className="w-full max-w-sm p-4 mx-4">
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <ChevronLeft size={20} />
          </button>

          <h3 className="text-lg font-medium">
            {format(currentMonth, 'MMMM yyyy', { locale: fr })}
          </h3>

          <button
            onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}
            className="p-2 hover:bg-gray-100 rounded-full"
            disabled={isSameMonth(currentMonth, maxDate)}
          >
            <ChevronRight size={20} />
          </button>
        </div>

        <div className="grid grid-cols-7 mb-2">
          {['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'].map(day => (
            <div key={day} className="text-center text-sm text-gray-500 py-2">
              {day}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-1">
          {days.map(day => {
            const isSelected = selectedDate && isSameDay(day, selectedDate);
            const isDisabled = maxDate && day > maxDate;
            const isCurrentMonth = isSameMonth(day, currentMonth);

            return (
              <button
                key={day.toISOString()}
                onClick={() => handleDateSelect(day)}
                disabled={isDisabled}
                className={`
                  aspect-square p-1 rounded-full
                  flex items-center justify-center text-sm
                  ${isSelected ? 'bg-primary text-white' : 'hover:bg-gray-100'}
                  ${!isCurrentMonth ? 'text-gray-300' : ''}
                  ${isDisabled ? 'opacity-50 cursor-not-allowed' : ''}
                `}
              >
                {format(day, 'd')}
              </button>
            );
          })}
        </div>

        <div className="mt-4 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-full"
          >
            Fermer
          </button>
        </div>
      </Card>
    </div>
  );
};