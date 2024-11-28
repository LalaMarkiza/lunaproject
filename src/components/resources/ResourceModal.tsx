import React from 'react';
import { Resource } from '../../types/resources';
import { ResourceContent } from './ResourceContent';
import { X, Heart } from 'lucide-react';

interface ResourceModalProps {
  resource: Resource;
  onClose: () => void;
  onToggleFavorite: () => void;
}

export const ResourceModal: React.FC<ResourceModalProps> = ({
  resource,
  onClose,
  onToggleFavorite
}) => {
  // Prevent scroll on body when modal is open
  React.useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div 
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative animate-fade-in">
        <div className="sticky top-0 bg-white z-10 px-6 py-4 border-b border-gray-100 flex items-center justify-between">
          <h1 className="text-2xl font-semibold text-gray-900">{resource.title}</h1>
          <div className="flex items-center gap-2">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onToggleFavorite();
              }}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              <Heart
                className={resource.isFavorite ? "fill-current text-primary" : "text-gray-400"}
                size={20}
              />
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              <X size={20} className="text-gray-400" />
            </button>
          </div>
        </div>

        <ResourceContent resource={resource} onClose={onClose} />
      </div>
    </div>
  );
};