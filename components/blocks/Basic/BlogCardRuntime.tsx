import React from "react";

export interface BlogCardRuntimeProps {
  // Data Selection
  blogId?: string;

  // Content Overrides
  customTitle?: string;
  customDescription?: string;
  customImage?: string;
  customAuthor?: string;
  customDate?: string;
  customCategory?: string;

  // Display Options
  showAuthor?: boolean;
  showDate?: boolean;
  showCategory?: boolean;
  showDescription?: boolean;
  showReadMoreButton?: boolean;

  // Design Customization
  imageHeight?: string;
  titleFontSize?: string;
  titleColor?: string;
  descriptionFontSize?: string;
  descriptionColor?: string;
  cardBackgroundColor?: string;
  cardBorderRadius?: string;
  cardPadding?: string;

  // Layout Options
  layout?: "vertical" | "horizontal";
  imagePosition?: "top" | "left" | "right";

  // Button Customization
  buttonText?: string;
  buttonVariant?: "default" | "outline" | "ghost";

  // Link Settings
  linkUrl?: string;
  openInNewTab?: boolean;
}

// This would come from your API in production
const getBlogData = async (blogId: string) => {
  // In production, this would be an actual API call
  const response = await fetch(`/api/blogs/${blogId}`);
  if (!response.ok) return null;
  return response.json();
};

export const BlogCardRuntime = ({
  // Data Selection
  blogId = "blog-1",

  // Content Overrides
  customTitle,
  customDescription,
  customImage,
  customAuthor,
  customDate,
  customCategory,

  // Display Options
  showAuthor = true,
  showDate = true,
  showCategory = true,
  showDescription = true,
  showReadMoreButton = true,

  // Design Customization
  imageHeight = "200px",
  titleFontSize = "text-xl",
  titleColor = "text-gray-900",
  descriptionFontSize = "text-sm",
  descriptionColor = "text-gray-600",
  cardBackgroundColor = "#ffffff",
  cardBorderRadius = "8px",
  cardPadding = "0",

  // Layout Options
  layout = "vertical",
  imagePosition = "top",

  // Button Customization
  buttonText = "Read More",
  buttonVariant = "default",

  // Link Settings
  linkUrl,
  openInNewTab = false,
}: BlogCardRuntimeProps) => {
  const [blogData, setBlogData] = React.useState<any>(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    if (blogId) {
      getBlogData(blogId)
        .then(setBlogData)
        .finally(() => setLoading(false));
    }
  }, [blogId]);

  if (loading) {
    return (
      <div
        className="animate-pulse rounded-lg border bg-white p-6"
        style={{
          backgroundColor: cardBackgroundColor,
          borderRadius: cardBorderRadius,
          padding: cardPadding || "24px",
        }}
      >
        <div className="h-48 bg-gray-200 rounded mb-4"></div>
        <div className="h-4 bg-gray-200 rounded mb-2"></div>
        <div className="h-3 bg-gray-200 rounded mb-4"></div>
        <div className="h-8 bg-gray-200 rounded w-24"></div>
      </div>
    );
  }

  // Use custom content if provided, otherwise use API data
  const displayTitle = customTitle || blogData?.title || "Blog Title";
  const displayDescription =
    customDescription ||
    blogData?.description ||
    "Blog description will appear here...";
  const displayImage =
    customImage ||
    blogData?.image ||
    "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&q=80";
  const displayAuthor = customAuthor || blogData?.author || "Author Name";
  const displayDate = customDate || blogData?.publishedAt || "2024-01-01";
  const displayCategory = customCategory || blogData?.category || "Category";
  const finalLinkUrl =
    linkUrl || (blogData?.slug ? `/blog/${blogData.slug}` : "#");

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const handleClick = () => {
    if (finalLinkUrl && finalLinkUrl !== "#") {
      if (openInNewTab) {
        window.open(finalLinkUrl, "_blank");
      } else {
        window.location.href = finalLinkUrl;
      }
    }
  };

  const buttonStyles = {
    default: "bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 rounded",
    outline:
      "border border-blue-600 text-blue-600 hover:bg-blue-50 px-4 py-2 rounded",
    ghost: "text-blue-600 hover:bg-blue-50 px-4 py-2 rounded",
  };

  if (layout === "horizontal") {
    return (
      <div
        className="bg-white rounded-lg border shadow-md hover:shadow-lg transition-shadow cursor-pointer"
        style={{
          backgroundColor: cardBackgroundColor,
          borderRadius: cardBorderRadius,
          padding: cardPadding || "24px",
        }}
        onClick={handleClick}
      >
        <div className="flex gap-6">
          {imagePosition === "left" && (
            <div
              className="flex-shrink-0 w-48 rounded overflow-hidden"
              style={{ height: imageHeight }}
            >
              <img
                src={displayImage}
                alt={displayTitle}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          <div className="flex-1">
            {showCategory && (
              <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
                {displayCategory}
              </span>
            )}

            <h3 className={`font-bold ${titleFontSize} ${titleColor} mb-2`}>
              {displayTitle}
            </h3>

            {showDescription && (
              <p className={`${descriptionFontSize} ${descriptionColor} mb-4`}>
                {displayDescription}
              </p>
            )}

            <div className="flex items-center justify-between">
              <div>
                {showAuthor && (
                  <p className="text-sm font-medium text-gray-700">
                    By {displayAuthor}
                  </p>
                )}
                {showDate && (
                  <p className="text-xs text-gray-500">
                    {formatDate(displayDate)}
                  </p>
                )}
              </div>

              {showReadMoreButton && (
                <button
                  className={buttonStyles[buttonVariant]}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleClick();
                  }}
                >
                  {buttonText}
                </button>
              )}
            </div>
          </div>

          {imagePosition === "right" && (
            <div
              className="flex-shrink-0 w-48 rounded overflow-hidden"
              style={{ height: imageHeight }}
            >
              <img
                src={displayImage}
                alt={displayTitle}
                className="w-full h-full object-cover"
              />
            </div>
          )}
        </div>
      </div>
    );
  }

  // Vertical layout (default)
  return (
    <div
      className="bg-white rounded-lg border shadow-md hover:shadow-lg transition-shadow cursor-pointer overflow-hidden"
      style={{
        backgroundColor: cardBackgroundColor,
        borderRadius: cardBorderRadius,
      }}
      onClick={handleClick}
    >
      <div className="w-full overflow-hidden" style={{ height: imageHeight }}>
        <img
          src={displayImage}
          alt={displayTitle}
          className="w-full h-full object-cover"
        />
      </div>

      <div style={{ padding: cardPadding || "24px" }}>
        {showCategory && (
          <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider block mb-3">
            {displayCategory}
          </span>
        )}

        <h3 className={`font-bold ${titleFontSize} ${titleColor} mb-3`}>
          {displayTitle}
        </h3>

        {showDescription && (
          <p className={`${descriptionFontSize} ${descriptionColor} mb-4`}>
            {displayDescription}
          </p>
        )}

        <div className="flex items-center justify-between">
          <div>
            {showAuthor && (
              <p className="text-sm font-medium text-gray-700">
                By {displayAuthor}
              </p>
            )}
            {showDate && (
              <p className="text-xs text-gray-500 mt-1">
                {formatDate(displayDate)}
              </p>
            )}
          </div>

          {showReadMoreButton && (
            <button
              className={buttonStyles[buttonVariant]}
              onClick={(e) => {
                e.stopPropagation();
                handleClick();
              }}
            >
              {buttonText}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
