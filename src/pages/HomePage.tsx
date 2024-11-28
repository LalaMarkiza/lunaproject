import React from 'react';
import { Calendar, MessageCircle, BookOpen, Moon } from 'lucide-react';
import { Card } from '../components/common/Card';
import { useAppStore } from '../store/appStore';

export const HomePage: React.FC = () => {
  const { setCurrentPage } = useAppStore();

  const mainFeatures = [
    {
      icon: <Calendar className="w-8 h-8 text-primary" />,
      title: "Suivi de cycle",
      description: "Suivez votre cycle et comprenez ses différentes phases",
      page: 'calendar'
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-primary" />,
      title: "Chat avec Luna",
      description: "Votre compagne bien-être disponible 24/7",
      page: 'chat'
    },
    {
      icon: <BookOpen className="w-8 h-8 text-primary" />,
      title: "Ressources",
      description: "Articles, exercices et méditations adaptés",
      page: 'resources'
    }
  ];

  return (
    <div className="min-h-screen bg-background py-6">
      <div className="max-w-lg mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Moon className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-3xl font-semibold text-gray-900 mb-3">
            Bienvenue sur Luna
          </h1>
          <p className="text-gray-600 text-lg">
            Votre guide pour un cycle épanoui
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-4 mb-8">
          {mainFeatures.map((feature, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(feature.page as any)}
              className="w-full text-left"
            >
              <Card className="p-4 hover:shadow-md transition-all cursor-pointer bg-white/50 backdrop-blur-sm">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 rounded-full p-3">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </Card>
            </button>
          ))}
        </div>

        {/* Quick Actions */}
        <Card className="p-6 mb-6">
          <h2 className="font-medium text-gray-900 mb-4">
            Actions rapides
          </h2>
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => setCurrentPage('calendar')}
              className="p-3 text-sm text-center rounded-lg bg-primary/5 text-primary hover:bg-primary/10 transition-colors"
            >
              Noter mes règles
            </button>
            <button
              onClick={() => setCurrentPage('chat')}
              className="p-3 text-sm text-center rounded-lg bg-primary/5 text-primary hover:bg-primary/10 transition-colors"
            >
              Parler à Luna
            </button>
          </div>
        </Card>

        {/* Daily Insight */}
        <Card className="p-6">
          <h2 className="font-medium text-gray-900 mb-4">
            Inspiration du jour
          </h2>
          <p className="text-gray-600 leading-relaxed">
            "Chaque phase de votre cycle est une opportunité de vous reconnecter à votre sagesse intérieure. 
            Prenez un moment aujourd'hui pour écouter ce que votre corps souhaite vous dire."
          </p>
        </Card>
      </div>
    </div>
  );
};