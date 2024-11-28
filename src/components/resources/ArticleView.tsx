import React from 'react';
import { Resource } from '../../types/resources';
import { resourceContent } from '../../data/resourceContent';

interface ArticleViewProps {
  resource: Resource;
}

export const ArticleView: React.FC<ArticleViewProps> = ({ resource }) => {
  const content = resourceContent[resource.id];

  if (!content?.content) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">Contenu non disponible</p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <article 
        className="prose prose-sm sm:prose lg:prose-lg mx-auto"
        dangerouslySetInnerHTML={{ __html: content.content }}
      />
    </div>
  );
};