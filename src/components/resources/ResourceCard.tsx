import React from 'react';
import { Clock, Bookmark, BookOpen, PlayCircle, Dumbbell, Moon } from 'lucide-react';
import { Resource } from '../../types/resources';

interface ResourceCardProps {
  resource: Resource & { isFavorite?: boolean };
  onToggleFavorite: () => void;
  onSelect: () => void;
}

export const ResourceCard: React.FC<ResourceCardProps> = ({ 
  resource,
  onToggleFavorite,
  onSelect 
}) => {
  const formatDuration = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    return `${minutes} min`;
  };

  const getCategoryIcon = () => {
    switch (resource.category) {
      case 'article':
        return <BookOpen size={16} className="mr-1" />;
      case 'video':
        return <PlayCircle size={16} className="mr-1" />;
      case 'exercise':
        return <Dumbbell size={16} className="mr-1" />;
      case 'meditation':
        return <Moon size={16} className="mr-1" />;
      default:
        return null;
    }
  };

  return (
    <div 
      className="overflow-hidden bg-white rounded-xl border border-gray-100 hover:shadow-md transition-all cursor-pointer group"
      onClick={onSelect}
    >
      <div className="flex">
        {resource.imageUrl && (
          <div className="w-1/3 relative overflow-hidden">
            <img
              src={resource.imageUrl}
              alt={resource.title}
              className="h-full w-full object-cover transition-transform group-hover:scale-105"
            />
            {resource.category === 'video' && (
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center transform group-hover:scale-110 transition-transform">
                  <div className="w-0 h-0 border-t-8 border-b-8 border-l-12 border-transparent border-l-primary ml-1" />
                </div>
              </div>
            )}
          </div>
        )}

        <div className="flex-1 p-4 flex flex-col">
          <div className="flex justify-between items-start mb-2">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="inline-flex items-center text-xs text-primary font-medium bg-primary/10 px-2 py-0.5 rounded-full">
                  {getCategoryIcon()}
                  {resource.category.charAt(0).toUpperCase() + resource.category.slice(1)}
                </span>
              </div>
              <h3 className="font-medium text-gray-900 group-hover:text-primary transition-colors">
                {resource.title}
              </h3>
              <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                {resource.description}
              </p>
            </div>
            <button 
              onClick={(e) => {
                e.stopPropagation();
                onToggleFavorite();
              }}
              className="p-1 hover:bg-gray-100 rounded-full transition-colors"
            >
              <Bookmark 
                size={20} 
                className={resource.isFavorite ? "fill-current text-primary" : "text-gray-400"}
              />
            </button>
          </div>

          <div className="flex items-center gap-4 mt-auto">
            {resource.duration && (
              <span className="inline-flex items-center text-sm text-gray-500">
                <Clock size={16} className="mr-1" />
                {formatDuration(resource.duration)}
              </span>
            )}
            <span className="text-sm text-primary font-medium ml-auto group-hover:translate-x-1 transition-transform">
              {resource.category === "article" ? "Lire l'article" : "Commencer"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};