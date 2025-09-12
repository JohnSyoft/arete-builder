import React from 'react';
import Link from 'next/link';

interface CardData {
  title?: string;
  description?: string;
  image?: string;
  date?: string;
  link?: string;
  category?: string;
  author?: string;
  price?: string;
  rating?: number;
  tags?: string[];
  isExternal?: boolean;
}

interface BaseCardProps {
  item: any;
  index: number;
  data: CardData;
  className?: string;
}

// Utility function to strip HTML tags
const stripHtmlTags = (html: string): string => {
  if (!html || typeof html !== 'string') return '';
  
  // Remove HTML tags using regex
  return html
    .replace(/<[^>]*>/g, '') // Remove all HTML tags
    .replace(/&nbsp;/g, ' ') // Replace &nbsp; with regular space
    .replace(/&amp;/g, '&') // Replace &amp; with &
    .replace(/&lt;/g, '<') // Replace &lt; with <
    .replace(/&gt;/g, '>') // Replace &gt; with >
    .replace(/&quot;/g, '"') // Replace &quot; with "
    .replace(/&#39;/g, "'") // Replace &#39; with '
    .replace(/\s+/g, ' ') // Replace multiple spaces with single space
    .trim(); // Remove leading/trailing whitespace
};

// Utility function to get field value with fallbacks and HTML stripping
export const getFieldValue = (itemData: any, fieldName: string): string => {
  if (!itemData || !fieldName) return '';
  
  let value = '';
  
  // Try exact match first
  if (itemData[fieldName]) {
    value = itemData[fieldName];
  } else {
    // Try case-insensitive match
    const lowerFieldName = fieldName.toLowerCase();
    const upperFieldName = fieldName.charAt(0).toUpperCase() + fieldName.slice(1);
    
    value = itemData[lowerFieldName] || itemData[upperFieldName] || '';
  }
  
  // Strip HTML tags if the value contains them
  if (typeof value === 'string' && value.includes('<')) {
    value = stripHtmlTags(value);
  }
  
  return value;
};

// Base card wrapper with hover effects
const CardWrapper: React.FC<{ 
  children: React.ReactNode; 
  className?: string; 
  link?: string;
  isExternal?: boolean;
}> = ({ 
  children, 
  className = '', 
  link,
  isExternal = false
}) => {
  const baseClasses = "bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-[1.02]";
  
  if (link) {
    // External link - opens in new tab
    if (isExternal || link.startsWith('http') || link.startsWith('mailto:') || link.startsWith('tel:')) {
      return (
        <a 
          href={link} 
          className={`${baseClasses} ${className} cursor-pointer block`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
    }
    
    // Internal link - uses Next.js Link for client-side navigation
    return (
      <Link 
        href={link}
        className={`${baseClasses} ${className} cursor-pointer block`}
      >
        {children}
      </Link>
    );
  }
  
  return (
    <div className={`${baseClasses} ${className}`}>
      {children}
    </div>
  );
};

// Default Card Design
export const DefaultCard: React.FC<BaseCardProps> = ({ item, index, data, className = "" }) => (
  <CardWrapper 
    key={item._id || index} 
    className={`${className} max-w-sm`}
    link={data.link}
    isExternal={data.isExternal}
  >
    {data.image && (
      <div className="relative h-48 overflow-hidden">
        <img 
          src={data.image} 
          alt={data.title || 'Card image'} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
          loading="lazy"
        />
      </div>
    )}
    <div className="p-4">
      {data.title && (
        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 text-lg">
          {data.title}
        </h3>
      )}
      {data.description && (
        <p className="text-sm text-gray-600 mb-3 line-clamp-3 leading-relaxed">
          {data.description}
        </p>
      )}
      <div className="flex items-center justify-between text-xs text-gray-500">
        {data.date && (
          <span>{new Date(data.date).toLocaleDateString()}</span>
        )}
        {data.category && (
          <span className="bg-gray-100 px-2 py-1 rounded-full">{data.category}</span>
        )}
      </div>
    </div>
  </CardWrapper>
);

// Minimal Card Design
export const MinimalCard: React.FC<BaseCardProps> = ({ item, index, data, className = "" }) => (
  <CardWrapper 
    key={item._id || index} 
    className={`${className} p-6 border border-gray-200 hover:border-gray-300`}
    link={data.link}
    isExternal={data.isExternal}
  >
    {data.title && (
      <h3 className="font-semibold text-gray-900 mb-2 text-lg">
        {data.title}
      </h3>
    )}
    {data.description && (
      <p className="text-sm text-gray-600 line-clamp-2">
        {data.description}
      </p>
    )}
    {data.date && (
      <p className="text-xs text-gray-400 mt-3">
        {new Date(data.date).toLocaleDateString()}
      </p>
    )}
  </CardWrapper>
);

// Detailed Card Design
export const DetailedCard: React.FC<BaseCardProps> = ({ item, index, data, className = "" }) => (
  <CardWrapper 
    key={item._id || index} 
    className={`${className} max-w-md`}
    link={data.link}
    isExternal={data.isExternal}
  >
    {data.image && (
      <div className="relative h-56 overflow-hidden">
        <img 
          src={data.image} 
          alt={data.title || 'Card image'} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          loading="lazy"
        />
        {data.category && (
          <div className="absolute top-3 left-3 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-xs">
            {data.category}
          </div>
        )}
      </div>
    )}
    <div className="p-6">
      {data.title && (
        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
          {data.title}
        </h3>
      )}
      {data.author && (
        <p className="text-sm text-blue-600 mb-2 font-medium">
          By {data.author}
        </p>
      )}
      {data.description && (
        <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
          {data.description}
        </p>
      )}
      <div className="flex items-center justify-between text-sm">
        {data.date && (
          <span className="text-gray-500">
            {new Date(data.date).toLocaleDateString()}
          </span>
        )}
        {data.link && (
          <span className="text-blue-600 hover:text-blue-800 font-medium">
            Read more →
          </span>
        )}
      </div>
      {data.tags && data.tags.length > 0 && (
        <div className="flex flex-wrap gap-1 mt-3">
          {data.tags.slice(0, 3).map((tag, tagIndex) => (
            <span 
              key={tagIndex} 
              className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  </CardWrapper>
);

// Image Focused Card Design
export const ImageFocusedCard: React.FC<BaseCardProps> = ({ item, index, data, className = "" }) => (
  <CardWrapper 
    key={item._id || index} 
    className={`${className} relative group overflow-hidden`}
    link={data.link}
    isExternal={data.isExternal}
  >
    {data.image ? (
      <div className="relative h-80 overflow-hidden">
        <img 
          src={data.image} 
          alt={data.title || 'Card image'} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80"></div>
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          {data.title && (
            <h3 className="font-bold text-xl mb-2 line-clamp-2">
              {data.title}
            </h3>
          )}
          {data.description && (
            <p className="text-sm text-gray-200 line-clamp-2 mb-2">
              {data.description}
            </p>
          )}
          <div className="flex items-center justify-between text-xs text-gray-300">
            {data.date && (
              <span>{new Date(data.date).toLocaleDateString()}</span>
            )}
            {data.category && (
              <span className="bg-white bg-opacity-20 px-2 py-1 rounded">
                {data.category}
              </span>
            )}
          </div>
        </div>
      </div>
    ) : (
      <div className="h-80 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center p-6">
        <div className="text-center">
          {data.title && (
            <h3 className="font-bold text-xl text-gray-800 mb-2">
              {data.title}
            </h3>
          )}
          {data.description && (
            <p className="text-gray-600 line-clamp-3">
              {data.description}
            </p>
          )}
        </div>
      </div>
    )}
  </CardWrapper>
);

// Text Focused Card Design
export const TextFocusedCard: React.FC<BaseCardProps> = ({ item, index, data, className = "" }) => (
  <CardWrapper 
    key={item._id || index} 
    className={`${className} p-8 max-w-lg`}
    link={data.link}
    isExternal={data.isExternal}
  >
    {data.category && (
      <div className="text-xs text-blue-600 font-semibold uppercase tracking-wide mb-2">
        {data.category}
      </div>
    )}
    {data.title && (
      <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">
        {data.title}
      </h3>
    )}
    {data.description && (
      <p className="text-gray-700 mb-6 leading-relaxed text-base">
        {data.description}
      </p>
    )}
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-4 text-sm text-gray-500">
        {data.author && (
          <span className="font-medium">{data.author}</span>
        )}
        {data.date && (
          <span>{new Date(data.date).toLocaleDateString()}</span>
        )}
      </div>
      {data.link && (
        <span className="text-blue-600 hover:text-blue-800 font-medium text-sm">
          Read more →
        </span>
      )}
    </div>
  </CardWrapper>
);

// Compact Card Design
export const CompactCard: React.FC<BaseCardProps> = ({ item, index, data, className = "" }) => (
  <CardWrapper 
    key={item._id || index} 
    className={`${className} p-4 flex items-center space-x-4 max-w-2xl`}
    link={data.link}
    isExternal={data.isExternal}
  >
    {data.image && (
      <div className="w-20 h-20 flex-shrink-0">
        <img 
          src={data.image} 
          alt={data.title || 'Card image'} 
          className="w-full h-full object-cover rounded-lg"
          loading="lazy"
        />
      </div>
    )}
    <div className="flex-1 min-w-0">
      {data.title && (
        <h3 className="font-semibold text-gray-900 mb-1 line-clamp-1">
          {data.title}
        </h3>
      )}
      {data.description && (
        <p className="text-sm text-gray-600 mb-2 line-clamp-2">
          {data.description}
        </p>
      )}
      <div className="flex items-center space-x-3 text-xs text-gray-500">
        {data.date && (
          <span>{new Date(data.date).toLocaleDateString()}</span>
        )}
        {data.category && (
          <span className="bg-gray-100 px-2 py-1 rounded">
            {data.category}
          </span>
        )}
      </div>
    </div>
  </CardWrapper>
);

// Grid Card Design
export const GridCard: React.FC<BaseCardProps> = ({ item, index, data, className = "" }) => (
  <CardWrapper 
    key={item._id || index} 
    className={`${className} group relative`}
    link={data.link}
    isExternal={data.isExternal}
  >
    <div className="aspect-square overflow-hidden">
      {data.image ? (
        <img 
          src={data.image} 
          alt={data.title || 'Card image'} 
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
      ) : (
        <div className="w-full h-full bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
          <div className="text-center p-4">
            {data.title && (
              <h3 className="font-semibold text-gray-800 text-sm line-clamp-3">
                {data.title}
              </h3>
            )}
          </div>
        </div>
      )}
    </div>
    <div className="p-3">
      {data.title && (
        <h3 className="font-medium text-gray-900 text-sm line-clamp-2 mb-1">
          {data.title}
        </h3>
      )}
      {data.price && (
        <p className="text-lg font-bold text-blue-600">
          ${data.price}
        </p>
      )}
      {data.rating && (
        <div className="flex items-center mt-1">
          {[...Array(5)].map((_, i) => (
            <span 
              key={i} 
              className={`text-xs ${i < Math.floor(data.rating!) ? 'text-yellow-400' : 'text-gray-300'}`}
            >
              ★
            </span>
          ))}
          <span className="text-xs text-gray-500 ml-1">({data.rating})</span>
        </div>
      )}
    </div>
  </CardWrapper>
);

// Timeline Card Design
export const TimelineCard: React.FC<BaseCardProps> = ({ item, index, data, className = "" }) => (
  <div key={item._id || index} className={`${className} relative pl-8`}>
    <div className="absolute left-0 top-0 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow"></div>
    <div className="absolute left-2 top-4 w-0.5 bg-gray-200 h-full"></div>
    <CardWrapper className="ml-4 p-4">
      {data.date && (
        <div className="text-xs text-blue-600 font-semibold mb-2">
          {new Date(data.date).toLocaleDateString()}
        </div>
      )}
      {data.title && (
        <h3 className="font-semibold text-gray-900 mb-2">
          {data.title}
        </h3>
      )}
      {data.description && (
        <p className="text-sm text-gray-600 line-clamp-3">
          {data.description}
        </p>
      )}
    </CardWrapper>
  </div>
);

// Card type mapping
export const cardComponents = {
  default: DefaultCard,
  minimal: MinimalCard,
  detailed: DetailedCard,
  'image-focused': ImageFocusedCard,
  'text-focused': TextFocusedCard,
  compact: CompactCard,
  grid: GridCard,
  timeline: TimelineCard,
} as const;

export type CardDesignType = keyof typeof cardComponents;
