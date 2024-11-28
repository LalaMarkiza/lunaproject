import React from 'react';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import { Calendar as CalendarIcon, Minus, Plus } from 'lucide-react';
import { useCalendarStore } from '../../store/calendarStore';
import { Button } from '../common/Button';
import { Card } from '../common/Card';
import { DatePicker } from '../common/DatePicker';

export const CycleSetup: React.FC = () => {
  const { 
    lastPeriodStart,
    cycleLength,
    periodLength,
    setLastPeriodStart,
    setCycleLength,
    setPeriodLength 
  } = useCalendarStore();

  const [showDatePicker, setShowDatePicker] = React.useState(false);

  const handleDateSelect = (date: Date) => {
    setLastPeriodStart(date);
    setShowDatePicker(false);
  };

  const adjustCycleLength = (amount: number) => {
    const newLength = Math.max(21, Math.min(35, cycleLength + amount));
    setCycleLength(newLength);
  };

  const adjustPeriodLength = (amount: number) => {
    const newLength = Math.max(2, Math.min(7, periodLength + amount));
    setPeriodLength(newLength);
  };

  return (
    <Card className="p-6 max-w-md mx-auto">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">
        Configuration de votre cycle
      </h2>

      <div className="space-y-8">
        {/* Sélection du premier jour des règles */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Premier jour de vos dernières règles
          </label>
          <Button
            variant="outline"
            onClick={() => setShowDatePicker(true)}
            className="w-full justify-between"
          >
            <span>
              {lastPeriodStart 
                ? format(lastPeriodStart, 'dd MMMM yyyy', { locale: fr })
                : 'Sélectionner une date'
              }
            </span>
            <CalendarIcon size={20} />
          </Button>
        </div>

        {/* Durée du cycle */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Durée moyenne de votre cycle
          </label>
          <div className="flex items-center gap-4">
            <button
              onClick={() => adjustCycleLength(-1)}
              className="p-2 rounded-full hover:bg-gray-100"
            >
              <Minus size={20} />
            </button>
            <span className="text-lg font-medium w-16 text-center">
              {cycleLength} jours
            </span>
            <button
              onClick={() => adjustCycleLength(1)}
              className="p-2 rounded-full hover:bg-gray-100"
            >
              <Plus size={20} />
            </button>
          </div>
          <p className="mt-1 text-sm text-gray-500">
            La durée moyenne d'un cycle est de 28 jours
          </p>
        </div>

        {/* Durée des règles */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Durée moyenne de vos règles
          </label>
          <div className="flex items-center gap-4">
            <button
              onClick={() => adjustPeriodLength(-1)}
              className="p-2 rounded-full hover:bg-gray-100"
            >
              <Minus size={20} />
            </button>
            <span className="text-lg font-medium w-16 text-center">
              {periodLength} jours
            </span>
            <button
              onClick={() => adjustPeriodLength(1)}
              className="p-2 rounded-full hover:bg-gray-100"
            >
              <Plus size={20} />
            </button>
          </div>
        </div>

        {/* Informations */}
        <div className="bg-primary/5 p-4 rounded-lg">
          <p className="text-sm text-gray-600">
            Ces informations nous permettront de :
          </p>
          <ul className="mt-2 text-sm text-gray-600 space-y-1">
            <li>• Prédire vos prochaines règles</li>
            <li>• Identifier votre période fertile</li>
            <li>• Suivre les phases de votre cycle</li>
          </ul>
        </div>
      </div>

      {showDatePicker && (
        <DatePicker
          selectedDate={lastPeriodStart}
          onSelect={handleDateSelect}
          onClose={() => setShowDatePicker(false)}
          maxDate={new Date()}
        />
      )}
    </Card>
  );
};