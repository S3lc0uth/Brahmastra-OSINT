import React, { useState } from 'react';
import { ExternalLink, Bookmark, BookmarkCheck } from 'lucide-react';
import { Tool } from '../types';
import * as SiIcons from 'react-icons/si';

interface ToolCardProps {
  tool: Tool;
}

const ToolCard: React.FC<ToolCardProps> = ({ tool }) => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  
  const toggleBookmark = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsBookmarked(!isBookmarked);
  };

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      'search-engines': 'bg-blue-500',
      'social-media': 'bg-purple-500',
      'domain-ip': 'bg-green-500',
      'images-media': 'bg-yellow-500',
      'Geo Int': 'bg-red-500',
      'darkweb': 'bg-gray-800',
      'communication': 'bg-indigo-500',
      'utilities': 'bg-teal-500'
    };
    
    return colors[category] || 'bg-gray-500';
  };

  // Dynamically get the icon component from react-icons/si
  const IconComponent = tool.icon ? (SiIcons as any)[tool.icon] : null;

  return (
    <a 
      href={tool.url} 
      target="_blank" 
      rel="noopener noreferrer"
      className="block group h-full"
    >
      <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-5 flex flex-col h-full shadow-lg transition-transform hover:scale-105">
        <div className="flex justify-between items-start">
          <div>
            <div className="flex items-center mb-2">
              <div className={`h-2 w-2 rounded-full mr-2 ${getCategoryColor(tool.category)}`}></div>
              {IconComponent && <IconComponent className="mr-2 text-xl align-middle" />}
              <h3 className="font-medium text-neutral-100 group-hover:text-blue-400 transition-colors">
                {tool.name}
              </h3>
            </div>
          </div>
          
          <button 
            onClick={toggleBookmark}
            className="text-gray-400 hover:text-yellow-500 dark:text-gray-500 dark:hover:text-yellow-400 transition-colors"
            aria-label={isBookmarked ? "Remove bookmark" : "Bookmark tool"}
          >
            {isBookmarked ? (
              <BookmarkCheck className="w-5 h-5" />
            ) : (
              <Bookmark className="w-5 h-5" />
            )}
          </button>
        </div>
        
        <p className="text-sm text-neutral-300 mt-1 mb-3 flex-grow">
          {tool.description}
        </p>
        
        <div className="flex items-center justify-between mt-auto">
          <div className="flex flex-wrap gap-1">
            {tool.tags.slice(0, 2).map((tag) => (
              <span 
                key={tag} 
                className="inline-block text-xs px-2 py-1 bg-neutral-800 text-neutral-300 rounded-full"
              >
                {tag}
              </span>
            ))}
            {tool.tags.length > 2 && (
              <span className="inline-block text-xs px-2 py-1 bg-neutral-800 text-neutral-300 rounded-full">
                +{tool.tags.length - 2}
              </span>
            )}
          </div>
          
          <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-500 dark:text-gray-500 dark:group-hover:text-blue-400 transition-colors" />
        </div>
      </div>
    </a>
  );
};

export default ToolCard;
