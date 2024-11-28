import React from 'react';
import { format } from 'date-fns';
import { Settings, Moon, Bell, Shield, HelpCircle, LogOut } from 'lucide-react';
import { Card } from '../components/common/Card';
import { useCalendarStore } from '../store/calendarStore';
import { Button } from '../components/common/Button';

export const ProfilePage: React.FC = () => {
  const { cycleLength, periodLength, lastPeriodStart } = useCalendarStore();

  const sections = [
    {
      title: 'Paramètres du cycle',
      icon: <Moon className="w-5 h-5 text-primary" />,
      items: [
        {
          label: 'Durée du cycle',
          value: `${cycleLength} jours`
        },
        {
          label: 'Durée des règles',
          value: `${periodLength} jours`
        },
        {
          label: 'Dernières règles',
          value: lastPeriodStart ? format(lastPeriodStart, 'dd/MM/yyyy') : 'Non défini'
        }
      ]
    },
    {
      title: 'Notifications',
      icon: <Bell className="w-5 h-5 text-primary" />,
      items: [
        {
          label: 'Rappels de cycle',
          type: 'toggle',
          value: true
        },
        {
          label: 'Conseils quotidiens',
          type: 'toggle',
          value: false
        }
      ]
    },
    {
      title: 'Confidentialité',
      icon: <Shield className="w-5 h-5 text-primary" />,
      items: [
        {
          label: 'Protection des données',
          description: 'Gérer vos données personnelles'
        },
        {
          label: 'Synchronisation',
          description: 'Paramètres de sauvegarde'
        }
      ]
    }
  ];

  const menuItems = [
    {
      icon: <HelpCircle className="w-5 h-5" />,
      label: 'Aide et support',
      action: () => {}
    },
    {
      icon: <Settings className="w-5 h-5" />,
      label: 'Paramètres',
      action: () => {}
    },
    {
      icon: <LogOut className="w-5 h-5" />,
      label: 'Déconnexion',
      action: () => {},
      danger: true
    }
  ];

  return (
    <div className="min-h-screen bg-background py-6">
      <div className="max-w-lg mx-auto px-4">
        <h1 className="text-2xl font-semibold text-gray-900 mb-6">
          Mon Profil
        </h1>

        {/* Profile Header */}
        <Card className="p-6 mb-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
              <Moon className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h2 className="text-lg font-medium text-gray-900">
                Luna
              </h2>
              <p className="text-sm text-gray-500">
                Version 1.0.0
              </p>
            </div>
          </div>
        </Card>

        {/* Sections */}
        <div className="space-y-6">
          {sections.map((section, index) => (
            <Card key={index} className="p-6">
              <div className="flex items-center gap-3 mb-4">
                {section.icon}
                <h2 className="font-medium text-gray-900">
                  {section.title}
                </h2>
              </div>
              <div className="space-y-4">
                {section.items.map((item, itemIndex) => (
                  <div 
                    key={itemIndex}
                    className="flex items-center justify-between"
                  >
                    <div>
                      <p className="text-gray-700">{item.label}</p>
                      {item.description && (
                        <p className="text-sm text-gray-500">{item.description}</p>
                      )}
                    </div>
                    {item.type === 'toggle' ? (
                      <button
                        className={`w-12 h-6 rounded-full transition-colors relative
                          ${item.value ? 'bg-primary' : 'bg-gray-200'}`}
                      >
                        <span 
                          className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-white transition-transform
                            ${item.value ? 'translate-x-6' : ''}`}
                        />
                      </button>
                    ) : item.value ? (
                      <span className="text-gray-600">{item.value}</span>
                    ) : null}
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Menu Items */}
        <Card className="p-2 mt-6">
          {menuItems.map((item, index) => (
            <button
              key={index}
              onClick={item.action}
              className={`w-full flex items-center gap-3 p-4 rounded-lg hover:bg-gray-50 transition-colors
                ${item.danger ? 'text-red-500' : 'text-gray-700'}`}
            >
              {item.icon}
              <span>{item.label}</span>
            </button>
          ))}
        </Card>

        {/* Version Info */}
        <p className="text-center text-sm text-gray-400 mt-6">
          Luna • Version 1.0.0
        </p>
      </div>
    </div>
  );
};