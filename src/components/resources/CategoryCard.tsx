import React from 'react';
import { Calendar, Heart, Apple, Activity, Moon, Smile } from 'lucide-react';
import { ResourceCategory } from '../../types/resources';

interface CategoryCardProps {
  category: ResourceCategory;
  isSelected: boolean;
  onClick: () => void;
}

const icons: Record<string, React.ComponentType<any>> = {
  calendar: Calendar,
  heart: Heart,
  apple: Apple,
  activity: Activity,
  moon: Moon,
  smile: Smile
};

export const CategoryCard: React.FC<CategoryCardProps> = ({
  category,
  isSelected,
  onClick
}) => {
  const Icon = icons[category.icon] || Heart;

  return (
    <button 
      onClick={onClick}
      className={`
        w-full p-4 rounded-xl cursor-pointer transition-all duration-200
        ${isSelected 
          ? 'bg-primary/10 text-primary ring-2 ring-primary/20' 
          : 'bg-white text-gray-600 hover:bg-gray-50'
        }
      `}
    >
      <div className="flex flex-col items-center">
        <Icon 
          className={`mb-2 transition-transform duration-200 ${isSelected ? 'scale-110' : ''}`} 
          size={24} 
        />
        <h3 className={`text-sm font-medium transition-colors duration-200`}>
          {category.name}
        </h3>
      </div>
    </button>
  );
};