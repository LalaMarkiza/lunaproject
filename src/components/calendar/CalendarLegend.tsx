import React from 'react';

export const CalendarLegend: React.FC = () => {
  const legends = [
    { color: 'bg-red-100', label: 'Règles' },
    { color: 'bg-yellow-100', label: 'Phase folliculaire' },
    { color: 'bg-green-100', label: 'Ovulation' },
    { color: 'bg-purple-100', label: 'Phase lutéale' },
    { color: 'bg-red-50', label: 'Prochaines règles (prévision)' }
  ];

  return (
    <div className="flex flex-wrap gap-3 mt-4">
      {legends.map(({ color, label }) => (
        <div key={label} className="flex items-center gap-2">
          <div className={`w-4 h-4 rounded-full ${color}`} />
          <span className="text-sm text-gray-600">{label}</span>
        </div>
      ))}
    </div>
  );
};