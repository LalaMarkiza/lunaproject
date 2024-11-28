import React from 'react';
import { Search, X } from 'lucide-react';
import { categories, resources } from '../data/resources';
import { Resource } from '../types/resources';
import { ResourceCard } from '../components/resources/ResourceCard';
import { CategoryCard } from '../components/resources/CategoryCard';
import { ResourceModal } from '../components/resources/ResourceModal';
import { useResourceStore } from '../store/resourceStore';

export const ResourcesPage: React.FC = () => {
  const { selectedCategory, setSelectedCategory, addFavorite, removeFavorite, isFavorite } = useResourceStore();
  const [searchQuery, setSearchQuery] = React.useState('');
  const [selectedResource, setSelectedResource] = React.useState<Resource | null>(null);

  const filteredResources = React.useMemo(() => {
    return resources.filter(resource => {
      const matchesCategory = !selectedCategory || resource.tags.includes(selectedCategory);
      const matchesSearch = !searchQuery || 
        resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        resource.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        resource.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleToggleFavorite = (resourceId: string) => {
    if (isFavorite(resourceId)) {
      removeFavorite(resourceId);
    } else {
      addFavorite(resourceId);
    }
  };

  return (
    <div className="min-h-screen bg-background py-6">
      <div className="max-w-2xl mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-semibold text-gray-900">
            Bibliothèque
          </h1>
          <span className="text-sm text-gray-500">
            {filteredResources.length} ressources
          </span>
        </div>

        {/* Search bar */}
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Rechercher par titre, description ou tag..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-12 py-3 rounded-full border border-gray-200 
              focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 
                hover:text-gray-600 p-1 rounded-full hover:bg-gray-100 transition-colors"
            >
              <X size={16} />
            </button>
          )}
        </div>

        {/* Categories */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
          {categories.map(category => (
            <CategoryCard
              key={category.id}
              category={category}
              isSelected={selectedCategory === category.id}
              onClick={() => setSelectedCategory(selectedCategory === category.id ? null : category.id)}
            />
          ))}
        </div>

        {/* Resources list */}
        <div className="grid gap-6">
          {filteredResources.map(resource => (
            <ResourceCard
              key={resource.id}
              resource={{
                ...resource,
                isFavorite: isFavorite(resource.id)
              }}
              onToggleFavorite={() => handleToggleFavorite(resource.id)}
              onSelect={() => setSelectedResource(resource)}
            />
          ))}
        </div>

        {/* Resource modal */}
        {selectedResource && (
          <ResourceModal
            resource={{
              ...selectedResource,
              isFavorite: isFavorite(selectedResource.id)
            }}
            onClose={() => setSelectedResource(null)}
            onToggleFavorite={() => handleToggleFavorite(selectedResource.id)}
          />
        )}
      </div>
    </div>
  );
};