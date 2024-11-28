import React from 'react';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import { X, Plus } from 'lucide-react';
import { useCalendarStore } from '../../store/calendarStore';
import { Card } from '../common/Card';

const DEFAULT_SYMPTOMS = [
  'Crampes',
  'Maux de tête',
  'Fatigue',
  'Nausées',
  'Seins sensibles',
  'Ballonnements',
  'Acné',
  'Troubles du sommeil'
];

interface DayDetailsProps {
  date: Date;
}

export const DayDetails: React.FC<DayDetailsProps> = ({ date }) => {
  const {
    symptoms,
    notes,
    flow,
    addSymptom,
    removeSymptom,
    addNote,
    setFlow,
    customSymptoms,
    addCustomSymptom,
    removeCustomSymptom
  } = useCalendarStore();

  const [newSymptom, setNewSymptom] = React.useState('');
  const [showAddSymptom, setShowAddSymptom] = React.useState(false);

  const dateKey = format(date, 'yyyy-MM-dd');
  const currentSymptoms = symptoms[dateKey] || [];
  const currentNote = notes[dateKey] || '';
  const currentFlow = flow[dateKey];

  const allSymptoms = [...DEFAULT_SYMPTOMS, ...customSymptoms];

  const handleSymptomToggle = (symptom: string) => {
    if (currentSymptoms.includes(symptom)) {
      removeSymptom(dateKey, symptom);
    } else {
      addSymptom(dateKey, symptom);
    }
  };

  const handleAddCustomSymptom = (e: React.FormEvent) => {
    e.preventDefault();
    if (newSymptom.trim()) {
      addCustomSymptom(newSymptom.trim());
      addSymptom(dateKey, newSymptom.trim());
      setNewSymptom('');
      setShowAddSymptom(false);
    }
  };

  const handleNoteChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    addNote(dateKey, e.target.value);
  };

  const handleFlowChange = (value: string) => {
    setFlow(dateKey, value);
  };

  return (
    <Card className="p-4">
      <h3 className="text-lg font-semibold mb-4">
        {format(date, 'EEEE d MMMM', { locale: fr })}
      </h3>

      {/* Intensité du flux */}
      <div className="mb-6">
        <h4 className="text-sm font-medium text-gray-700 mb-2">Flux</h4>
        <div className="flex gap-2">
          {['light', 'medium', 'heavy'].map((intensity) => (
            <div
              key={intensity}
              onClick={() => handleFlowChange(intensity)}
              className={`
                px-3 py-1.5 rounded-full text-sm cursor-pointer
                transition-all duration-200
                ${currentFlow === intensity
                  ? 'bg-primary/10 text-primary'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }
              `}
            >
              {intensity === 'light' ? 'Léger' : 
               intensity === 'medium' ? 'Moyen' : 'Abondant'}
            </div>
          ))}
        </div>
      </div>

      {/* Symptômes */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <h4 className="text-sm font-medium text-gray-700">Symptômes</h4>
          <div
            onClick={() => setShowAddSymptom(true)}
            className="text-sm text-primary cursor-pointer flex items-center gap-1"
          >
            <Plus size={16} />
            <span>Ajouter</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {allSymptoms.map(symptom => (
            <div
              key={symptom}
              onClick={() => handleSymptomToggle(symptom)}
              className={`
                px-3 py-1.5 rounded-full text-sm cursor-pointer
                transition-all duration-200 flex items-center gap-2
                ${currentSymptoms.includes(symptom)
                  ? 'bg-primary/10 text-primary'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }
              `}
            >
              <span>{symptom}</span>
              {customSymptoms.includes(symptom) && (
                <X
                  size={14}
                  className="text-gray-400 hover:text-gray-600"
                  onClick={(e) => {
                    e.stopPropagation();
                    removeCustomSymptom(symptom);
                  }}
                />
              )}
            </div>
          ))}
        </div>

        {showAddSymptom && (
          <form onSubmit={handleAddCustomSymptom} className="mt-2">
            <div className="flex gap-2">
              <input
                type="text"
                value={newSymptom}
                onChange={(e) => setNewSymptom(e.target.value)}
                placeholder="Nouveau symptôme..."
                className="flex-1 px-3 py-1.5 rounded-full text-sm border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <button
                type="submit"
                className="px-3 py-1.5 rounded-full text-sm bg-primary text-white"
              >
                Ajouter
              </button>
              <button
                type="button"
                onClick={() => setShowAddSymptom(false)}
                className="px-3 py-1.5 rounded-full text-sm bg-gray-100 text-gray-600"
              >
                Annuler
              </button>
            </div>
          </form>
        )}
      </div>

      {/* Notes */}
      <div>
        <h4 className="text-sm font-medium text-gray-700 mb-2">Notes</h4>
        <textarea
          value={currentNote}
          onChange={handleNoteChange}
          placeholder="Ajouter une note..."
          className="w-full px-3 py-2 rounded-lg text-sm border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 min-h-[100px]"
        />
      </div>
    </Card>
  );
};