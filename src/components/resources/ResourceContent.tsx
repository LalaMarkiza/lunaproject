import React from 'react';
import { Resource } from '../../types/resources';
import { resourceContent } from '../../data/resourceContent';
import '../../styles/article.css';

interface ResourceContentProps {
  resource: Resource;
  onClose: () => void;
}

export const ResourceContent: React.FC<ResourceContentProps> = ({ resource }) => {
  const content = resourceContent[resource.id];

  const renderContent = () => {
    if (resource.category === 'video' && content?.videoUrl) {
      return (
        <div className="aspect-video mb-6 rounded-lg overflow-hidden">
          <iframe
            src={content.videoUrl}
            className="w-full h-full"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      );
    }

    if (content?.content) {
      return (
        <div 
          className="article-content prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: content.content }} 
        />
      );
    }

    return (
      <div className="text-center py-12">
        <p className="text-gray-500">Contenu non disponible</p>
      </div>
    );
  };

  return (
    <div className="p-6">
      {resource.imageUrl && (
        <div className="mb-6 rounded-xl overflow-hidden">
          <img
            src={resource.imageUrl}
            alt={resource.title}
            className="w-full h-48 object-cover"
          />
        </div>
      )}

      {renderContent()}
    </div>
  );
};