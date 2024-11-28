import React from 'react';
import { format, startOfMonth, endOfMonth, eachDayOfInterval, addDays } from 'date-fns';
import { fr } from 'date-fns/locale';
import { useCalendarStore } from '../../store/calendarStore';
import { CalendarHeader } from './CalendarHeader';
import { CalendarGrid } from './CalendarGrid';
import { CalendarLegend } from './CalendarLegend';
import { DayDetails } from './DayDetails';
import { Card } from '../common/Card';

export const Calendar: React.FC = () => {
  const { selectedDate, setSelectedDate } = useCalendarStore();
  const [currentMonth, setCurrentMonth] = React.useState(new Date());

  const days = eachDayOfInterval({
    start: startOfMonth(currentMonth),
    end: endOfMonth(currentMonth)
  });

  return (
    <div className="max-w-md mx-auto p-4 space-y-4">
      <Card className="p-4">
        <CalendarHeader 
          currentMonth={currentMonth}
          onMonthChange={setCurrentMonth}
        />
        
        <CalendarGrid 
          days={days}
          selectedDate={selectedDate}
          currentMonth={currentMonth}
          onSelectDate={setSelectedDate}
        />

        <CalendarLegend />
      </Card>

      <DayDetails 
        date={selectedDate}
      />
    </div>
  );
};