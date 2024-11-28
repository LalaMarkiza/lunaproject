import React from 'react';
import { Resource } from '../../types/resources';
import { ResourceCard } from './ResourceCard';
import { useResourceStore } from '../../store/resourceStore';

interface ResourceListProps {
  resources: Resource[];
  onSelectResource: (resource: Resource) => void;
}

export const ResourceList: React.FC<ResourceListProps> = ({
  resources,
  onSelectResource,
}) => {
  const { addFavorite, removeFavorite, isFavorite } = useResourceStore();

  if (resources.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 mb-2">Aucune ressource trouvée</p>
        <p className="text-sm text-gray-400">Essayez de modifier vos critères de recherche</p>
      </div>
    );
  }

  return (
    <div className="grid gap-6">
      {resources.map(resource => (
        <ResourceCard
          key={resource.id}
          resource={{
            ...resource,
            isFavorite: isFavorite(resource.id)
          }}
          onToggleFavorite={() => {
            if (isFavorite(resource.id)) {
              removeFavorite(resource.id);
            } else {
              addFavorite(resource.id);
            }
          }}
          onSelect={() => onSelectResource(resource)}
        />
      ))}
    </div>
  );
};