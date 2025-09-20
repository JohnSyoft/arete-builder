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

// Modern Gradient Card Design
export const ModernGradientCard: React.FC<BaseCardProps> = ({ item, index, data, className = "" }) => {
  return (
    <CardWrapper 
      key={item._id || index} 
      className={`${className} max-w-sm`}
      link={data.link}
      isExternal={data.isExternal}
    >
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 p-1 shadow-2xl hover:shadow-3xl transition-all duration-500 group">
        <div className="bg-white rounded-2xl p-6 h-full">
          {/* Category Badge */}
          {data.category && (
            <div className="inline-block">
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                {data.category}
              </span>
            </div>
          )}
          
          {/* Title */}
          {data.title && (
            <h3 className="text-xl font-bold text-gray-900 mt-4 mb-3 line-clamp-2 group-hover:text-purple-600 transition-colors">
              {data.title}
            </h3>
          )}
          
          {/* Description */}
          {data.description && (
            <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
              {data.description}
            </p>
          )}
          
          {/* Footer */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              {data.author && (
                <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">
                    {data.author.charAt(0).toUpperCase()}
                  </span>
                </div>
              )}
              <div>
                {data.author && (
                  <p className="text-sm font-semibold text-gray-900">{data.author}</p>
                )}
                {data.date && (
                  <p className="text-xs text-gray-500">
                    {new Date(data.date).toLocaleDateString()}
                  </p>
                )}
              </div>
            </div>
            <div className="text-purple-500 group-hover:text-purple-600 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </CardWrapper>
  );
};

// Glassmorphism Card Design
export const GlassmorphismCard: React.FC<BaseCardProps> = ({ item, index, data, className = "" }) => {
  return (
    <CardWrapper 
      key={item._id || index} 
      className={`${className} max-w-sm`}
      link={data.link}
      isExternal={data.isExternal}
    >
      <div className="relative overflow-hidden rounded-3xl backdrop-blur-lg bg-white/20 border border-white/30 shadow-2xl hover:shadow-3xl transition-all duration-500 group">
        {/* Background Image */}
        {data.image && (
          <div className="absolute inset-0">
            <img 
              src={data.image} 
              alt={data.title || 'Card image'} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
          </div>
        )}
        
        {/* Content */}
        <div className="relative p-6 text-white">
          {/* Category */}
          {data.category && (
            <div className="inline-block mb-4">
              <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full border border-white/30">
                {data.category}
              </span>
            </div>
          )}
          
          {/* Title */}
          {data.title && (
            <h3 className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-white transition-colors">
              {data.title}
            </h3>
          )}
          
          {/* Description */}
          {data.description && (
            <p className="text-white/80 mb-4 line-clamp-3 leading-relaxed">
              {data.description}
            </p>
          )}
          
          {/* Footer */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              {data.author && (
                <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
                  <span className="text-white font-bold">
                    {data.author.charAt(0).toUpperCase()}
                  </span>
                </div>
              )}
              <div>
                {data.author && (
                  <p className="text-sm font-semibold text-white">{data.author}</p>
                )}
                {data.date && (
                  <p className="text-xs text-white/70">
                    {new Date(data.date).toLocaleDateString()}
                  </p>
                )}
              </div>
            </div>
            <div className="text-white/60 group-hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </CardWrapper>
  );
};

// Floating Card Design
export const FloatingCard: React.FC<BaseCardProps> = ({ item, index, data, className = "" }) => {
  return (
    <CardWrapper 
      key={item._id || index} 
      className={`${className} max-w-sm`}
      link={data.link}
      isExternal={data.isExternal}
    >
      <div className="relative bg-white rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 group hover:-translate-y-2 overflow-hidden">
        {/* Image */}
        {data.image && (
          <div className="relative overflow-hidden h-48">
            <img 
              src={data.image} 
              alt={data.title || 'Card image'} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            
            {/* Floating Category */}
            {data.category && (
              <div className="absolute top-4 left-4">
                <span className="bg-white/90 backdrop-blur-sm text-gray-900 text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                  {data.category}
                </span>
              </div>
            )}
          </div>
        )}
        
        {/* Content */}
        <div className="p-6">
          {/* Title */}
          {data.title && (
            <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
              {data.title}
            </h3>
          )}
          
          {/* Description */}
          {data.description && (
            <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed">
              {data.description}
            </p>
          )}
          
          {/* Author and Date */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              {data.author && (
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">
                    {data.author.charAt(0).toUpperCase()}
                  </span>
                </div>
              )}
              <div>
                {data.author && (
                  <p className="text-sm font-semibold text-gray-900">{data.author}</p>
                )}
                {data.date && (
                  <p className="text-xs text-gray-500">
                    {new Date(data.date).toLocaleDateString()}
                  </p>
                )}
              </div>
            </div>
            <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-blue-500 transition-colors">
              <svg className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </CardWrapper>
  );
};

// Minimalist Card Design
export const MinimalistCard: React.FC<BaseCardProps> = ({ item, index, data, className = "" }) => {
  return (
    <CardWrapper 
      key={item._id || index} 
      className={`${className} max-w-sm`}
      link={data.link}
      isExternal={data.isExternal}
    >
      <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-gray-300 transition-all duration-300 group">
        {/* Image */}
        {data.image && (
          <div className="relative overflow-hidden aspect-video">
            <img 
              src={data.image} 
              alt={data.title || 'Card image'} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
          </div>
        )}
        
        {/* Content */}
        <div className="p-6">
          {/* Category */}
          {data.category && (
            <div className="mb-3">
              <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                {data.category}
              </span>
            </div>
          )}
          
          {/* Title */}
          {data.title && (
            <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2 group-hover:text-gray-700 transition-colors">
              {data.title}
            </h3>
          )}
          
          {/* Description */}
          {data.description && (
            <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed">
              {data.description}
            </p>
          )}
          
          {/* Footer */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
            <div className="flex items-center space-x-3">
              {data.author && (
                <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-gray-600 font-medium text-sm">
                    {data.author.charAt(0).toUpperCase()}
                  </span>
                </div>
              )}
              <div>
                {data.author && (
                  <p className="text-sm font-medium text-gray-900">{data.author}</p>
                )}
                {data.date && (
                  <p className="text-xs text-gray-500">
                    {new Date(data.date).toLocaleDateString()}
                  </p>
                )}
              </div>
            </div>
            <div className="text-gray-400 group-hover:text-gray-600 transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </CardWrapper>
  );
};

// Neon Card Design
export const NeonCard: React.FC<BaseCardProps> = ({ item, index, data, className = "" }) => {
  return (
    <CardWrapper 
      key={item._id || index} 
      className={`${className} max-w-sm`}
      link={data.link}
      isExternal={data.isExternal}
    >
      <div className="relative bg-black rounded-2xl p-1 shadow-2xl hover:shadow-cyan-500/25 transition-all duration-500 group">
        <div className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-2xl p-6 h-full">
          {/* Glowing Border Effect */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
          
          {/* Category */}
          {data.category && (
            <div className="relative mb-4">
              <span className="inline-block bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg shadow-cyan-500/25">
                {data.category}
              </span>
            </div>
          )}
          
          {/* Title */}
          {data.title && (
            <h3 className="relative text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-cyan-300 transition-colors">
              {data.title}
            </h3>
          )}
          
          {/* Description */}
          {data.description && (
            <p className="relative text-gray-300 mb-6 line-clamp-3 leading-relaxed">
              {data.description}
            </p>
          )}
          
          {/* Footer */}
          <div className="relative flex items-center justify-between">
            <div className="flex items-center space-x-3">
              {data.author && (
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg shadow-cyan-500/25">
                  <span className="text-white font-bold text-sm">
                    {data.author.charAt(0).toUpperCase()}
                  </span>
                </div>
              )}
              <div>
                {data.author && (
                  <p className="text-sm font-semibold text-white">{data.author}</p>
                )}
                {data.date && (
                  <p className="text-xs text-gray-400">
                    {new Date(data.date).toLocaleDateString()}
                  </p>
                )}
              </div>
            </div>
            <div className="text-cyan-400 group-hover:text-cyan-300 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </CardWrapper>
  );
};

// 3D Perspective Card Design
export const Perspective3DCard: React.FC<BaseCardProps> = ({ item, index, data, className = "" }) => {
  return (
    <CardWrapper 
      key={item._id || index} 
      className={`${className} max-w-sm`}
      link={data.link}
      isExternal={data.isExternal}
    >
      <div className="relative group perspective-1000">
        <div className="relative transform-gpu transition-all duration-700 group-hover:rotate-y-12 group-hover:rotate-x-6 group-hover:scale-105">
          <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-3xl p-6 shadow-2xl border border-slate-200">
            {/* Image with 3D effect */}
            {data.image && (
              <div className="relative -m-6 mb-6 overflow-hidden rounded-t-3xl">
                <img 
                  src={data.image} 
                  alt={data.title || 'Card image'} 
                  className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                
                {/* Floating Category */}
                {data.category && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/90 backdrop-blur-sm text-slate-900 text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                      {data.category}
                    </span>
                  </div>
                )}
              </div>
            )}
            
            {/* Content */}
            <div className="space-y-4">
              {/* Title */}
              {data.title && (
                <h3 className="text-xl font-bold text-slate-900 line-clamp-2 group-hover:text-blue-600 transition-colors">
                  {data.title}
                </h3>
              )}
              
              {/* Description */}
              {data.description && (
                <p className="text-slate-600 line-clamp-3 leading-relaxed">
                  {data.description}
                </p>
              )}
              
              {/* Author and Date */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                <div className="flex items-center space-x-3">
                  {data.author && (
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-sm">
                        {data.author.charAt(0).toUpperCase()}
                      </span>
                    </div>
                  )}
                  <div>
                    {data.author && (
                      <p className="text-sm font-semibold text-slate-900">{data.author}</p>
                    )}
                    {data.date && (
                      <p className="text-xs text-slate-500">
                        {new Date(data.date).toLocaleDateString()}
                      </p>
                    )}
                  </div>
                </div>
                <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center group-hover:bg-blue-500 transition-colors">
                  <svg className="w-5 h-5 text-slate-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </CardWrapper>
  );
};

// Magazine Style Card Design
export const MagazineCard: React.FC<BaseCardProps> = ({ item, index, data, className = "" }) => {
  return (
    <CardWrapper 
      key={item._id || index} 
      className={`${className} max-w-sm`}
      link={data.link}
      isExternal={data.isExternal}
    >
      <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group">
        {/* Image with Magazine Layout */}
        {data.image && (
          <div className="relative aspect-[4/3] overflow-hidden">
            <img 
              src={data.image} 
              alt={data.title || 'Card image'} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            
            {/* Magazine-style Category */}
            {data.category && (
              <div className="absolute top-4 left-4">
                <span className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-sm uppercase tracking-wider">
                  {data.category}
                </span>
              </div>
            )}
            
            {/* Magazine-style Date */}
            {data.date && (
              <div className="absolute top-4 right-4">
                <div className="bg-white/90 backdrop-blur-sm text-slate-900 text-xs font-bold px-2 py-1 rounded">
                  {new Date(data.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                </div>
              </div>
            )}
          </div>
        )}
        
        {/* Content */}
        <div className="p-6">
          {/* Title with Magazine Typography */}
          {data.title && (
            <h3 className="text-2xl font-bold text-slate-900 mb-3 line-clamp-2 leading-tight group-hover:text-red-600 transition-colors">
              {data.title}
            </h3>
          )}
          
          {/* Description */}
          {data.description && (
            <p className="text-slate-600 mb-6 line-clamp-3 leading-relaxed text-sm">
              {data.description}
            </p>
          )}
          
          {/* Author with Magazine Style */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-100">
            <div className="flex items-center space-x-3">
              {data.author && (
                <div className="w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center">
                  <span className="text-slate-600 font-bold text-xs">
                    {data.author.charAt(0).toUpperCase()}
                  </span>
                </div>
              )}
              <div>
                {data.author && (
                  <p className="text-sm font-semibold text-slate-900">{data.author}</p>
                )}
                <p className="text-xs text-slate-500">Contributor</p>
              </div>
            </div>
            <div className="text-slate-400 group-hover:text-red-600 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </CardWrapper>
  );
};

// Social Media Style Card Design
export const SocialCard: React.FC<BaseCardProps> = ({ item, index, data, className = "" }) => {
  return (
    <CardWrapper 
      key={item._id || index} 
      className={`${className} max-w-sm`}
      link={data.link}
      isExternal={data.isExternal}
    >
      <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-100">
          <div className="flex items-center space-x-3">
            {data.author && (
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">
                  {data.author.charAt(0).toUpperCase()}
                </span>
              </div>
            )}
            <div>
              {data.author && (
                <p className="text-sm font-semibold text-gray-900">{data.author}</p>
              )}
              {data.date && (
                <p className="text-xs text-gray-500">
                  {new Date(data.date).toLocaleDateString()}
                </p>
              )}
            </div>
          </div>
          <div className="text-gray-400 hover:text-gray-600 cursor-pointer">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
            </svg>
          </div>
        </div>
        
        {/* Content */}
        <div className="p-4">
          {/* Title */}
          {data.title && (
            <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
              {data.title}
            </h3>
          )}
          
          {/* Description */}
          {data.description && (
            <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
              {data.description}
            </p>
          )}
          
          {/* Image */}
          {data.image && (
            <div className="relative rounded-lg overflow-hidden mb-4">
              <img 
                src={data.image} 
                alt={data.title || 'Card image'} 
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          )}
          
          {/* Category */}
          {data.category && (
            <div className="mb-4">
              <span className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">
                #{data.category}
              </span>
            </div>
          )}
        </div>
        
        {/* Footer with Social Actions */}
        <div className="px-4 py-3 border-t border-gray-100 bg-gray-50">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <button className="flex items-center space-x-1 text-gray-500 hover:text-red-500 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                <span className="text-sm font-medium">24</span>
              </button>
              <button className="flex items-center space-x-1 text-gray-500 hover:text-blue-500 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                <span className="text-sm font-medium">8</span>
              </button>
              <button className="flex items-center space-x-1 text-gray-500 hover:text-green-500 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                </svg>
                <span className="text-sm font-medium">Share</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </CardWrapper>
  );
};

// Elegant Luxury Card Design
export const ElegantCard: React.FC<BaseCardProps> = ({ item, index, data, className = "" }) => {
  return (
    <CardWrapper 
      key={item._id || index} 
      className={`${className} max-w-sm`}
      link={data.link}
      isExternal={data.isExternal}
    >
      <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-700 group">
        {/* Gold Accent Border */}
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 opacity-0 group-hover:opacity-20 transition-opacity duration-700 rounded-3xl"></div>
        
        {/* Image */}
        {data.image && (
          <div className="relative aspect-video overflow-hidden">
            <img 
              src={data.image} 
              alt={data.title || 'Card image'} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>
            
            {/* Elegant Category */}
            {data.category && (
              <div className="absolute top-6 left-6">
                <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-slate-900 text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider shadow-lg">
                  {data.category}
                </span>
              </div>
            )}
          </div>
        )}
        
        {/* Content */}
        <div className="p-8 text-white">
          {/* Title */}
          {data.title && (
            <h3 className="text-2xl font-bold mb-4 line-clamp-2 group-hover:text-yellow-400 transition-colors leading-tight">
              {data.title}
            </h3>
          )}
          
          {/* Description */}
          {data.description && (
            <p className="text-slate-300 mb-6 line-clamp-3 leading-relaxed">
              {data.description}
            </p>
          )}
          
          {/* Author and Date */}
          <div className="flex items-center justify-between pt-6 border-t border-slate-700">
            <div className="flex items-center space-x-4">
              {data.author && (
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-slate-900 font-bold text-lg">
                    {data.author.charAt(0).toUpperCase()}
                  </span>
                </div>
              )}
              <div>
                {data.author && (
                  <p className="text-lg font-semibold text-white">{data.author}</p>
                )}
                {data.date && (
                  <p className="text-sm text-slate-400">
                    {new Date(data.date).toLocaleDateString()}
                  </p>
                )}
              </div>
            </div>
            <div className="w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center group-hover:bg-yellow-500 transition-colors">
              <svg className="w-6 h-6 text-slate-300 group-hover:text-slate-900 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </CardWrapper>
  );
};

// Decor Store Style Card Design
export const DecorStoreCard: React.FC<BaseCardProps> = ({ item, index, data, className = "" }) => {
  return (
    <CardWrapper 
      key={item._id || index} 
      className={`${className} max-w-sm`}
      link={data.link}
      isExternal={data.isExternal}
    >
      <div className="bg-transparent border-0 h-full group">
        {/* Image with border radius */}
        {data.image && (
          <div className="relative overflow-hidden rounded-md mb-6">
            <img 
              src={data.image} 
              alt={data.title || 'Card image'} 
              className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
          </div>
        )}
        
        {/* Content */}
        <div className="px-0 pt-0 pb-6">
          {/* Category and Date on same line */}
          <div className="flex items-center justify-between mb-3">
            {data.category && (
              <span className="text-xs uppercase font-semibold text-gray-700 hover:text-gray-900 transition-colors">
                {data.category}
              </span>
            )}
            {data.date && (
              <span className="text-xs text-gray-600 hover:text-gray-900 transition-colors">
                {new Date(data.date).toLocaleDateString('en-US', { 
                  day: 'numeric', 
                  month: 'long', 
                  year: 'numeric' 
                })}
              </span>
            )}
          </div>
          
          {/* Title */}
          {data.title && (
            <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2 leading-tight group-hover:text-gray-700 transition-colors">
              {data.title}
            </h3>
          )}
          
          {/* Description */}
          {data.description && (
            <p className="text-sm text-gray-600 mb-4 line-clamp-2 leading-relaxed">
              {data.description}
            </p>
          )}
          
          {/* Author */}
          {data.author && (
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center">
                <span className="text-gray-600 font-medium text-xs">
                  {data.author.charAt(0).toUpperCase()}
                </span>
              </div>
              <span className="text-xs text-gray-500">{data.author}</span>
            </div>
          )}
        </div>
      </div>
    </CardWrapper>
  );
};

// Feature Box Style Card Design
export const FeatureBoxCard: React.FC<BaseCardProps> = ({ item, index, data, className = "" }) => {
  return (
    <CardWrapper 
      key={item._id || index} 
      className={`${className} max-w-sm`}
      link={data.link}
      isExternal={data.isExternal}
    >
      <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-200">
        <div className="flex items-center space-x-4">
          {/* Icon/Image */}
          <div className="flex-shrink-0">
            {data.image ? (
              <div className="w-16 h-12 flex items-center justify-center">
                <img 
                  src={data.image} 
                  alt={data.title || 'Feature icon'} 
                  className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
            ) : (
              <div className="w-16 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            )}
          </div>
          
          {/* Content */}
          <div className="flex-1 min-w-0">
            {/* Title */}
            {data.title && (
              <h3 className="text-lg font-semibold text-gray-900 mb-1 line-clamp-1 group-hover:text-blue-600 transition-colors">
                {data.title}
              </h3>
            )}
            
            {/* Description */}
            {data.description && (
              <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed">
                {data.description}
              </p>
            )}
            
            {/* Category */}
            {data.category && (
              <div className="mt-2">
                <span className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">
                  {data.category}
                </span>
              </div>
            )}
          </div>
        </div>
        
        {/* Optional Footer */}
        {(data.author || data.date) && (
          <div className="mt-4 pt-4 border-t border-gray-100">
            <div className="flex items-center justify-between text-xs text-gray-500">
              {data.author && (
                <span>By {data.author}</span>
              )}
              {data.date && (
                <span>{new Date(data.date).toLocaleDateString()}</span>
              )}
            </div>
          </div>
        )}
      </div>
    </CardWrapper>
  );
};

// Blog Classic Style Card Design
export const BlogClassicCard: React.FC<BaseCardProps> = ({ item, index, data, className = "" }) => {
  return (
    <CardWrapper 
      key={item._id || index} 
      className={`${className} max-w-sm`}
      link={data.link}
      isExternal={data.isExternal}
    >
      <div className="bg-transparent border-0 h-full group">
        {/* Image with border radius */}
        {data.image && (
          <div className="relative overflow-hidden rounded-md mb-6">
            <img 
              src={data.image} 
              alt={data.title || 'Card image'} 
              className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
          </div>
        )}
        
        {/* Content */}
        <div className="px-0 pt-0 pb-6">
          {/* Category and Date on same line */}
          <div className="flex items-center justify-between mb-3">
            {data.category && (
              <span className="text-xs uppercase font-semibold text-gray-700 hover:text-gray-900 transition-colors">
                {data.category}
              </span>
            )}
            {data.date && (
              <span className="text-xs text-gray-600 hover:text-gray-900 transition-colors">
                {new Date(data.date).toLocaleDateString('en-US', { 
                  day: 'numeric', 
                  month: 'long', 
                  year: 'numeric' 
                })}
              </span>
            )}
          </div>
          
          {/* Title */}
          {data.title && (
            <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2 leading-tight group-hover:text-gray-700 transition-colors">
              {data.title}
            </h3>
          )}
          
          {/* Description */}
          {data.description && (
            <p className="text-sm text-gray-600 mb-4 line-clamp-2 leading-relaxed">
              {data.description}
            </p>
          )}
          
          {/* More Reading Link */}
          <div className="flex items-center space-x-1 text-xs uppercase font-bold text-gray-700 hover:text-gray-900 transition-colors group-hover:translate-x-1">
            <span>More reading</span>
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </CardWrapper>
  );
};

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
  'modern-gradient': ModernGradientCard,
  'glassmorphism': GlassmorphismCard,
  'floating': FloatingCard,
  'minimalist': MinimalistCard,
  'neon': NeonCard,
  '3d-perspective': Perspective3DCard,
  'magazine': MagazineCard,
  'social': SocialCard,
  'elegant': ElegantCard,
  'decor-store': DecorStoreCard,
  'feature-box': FeatureBoxCard,
  'blog-classic': BlogClassicCard,
} as const;

export type CardDesignType = keyof typeof cardComponents;
