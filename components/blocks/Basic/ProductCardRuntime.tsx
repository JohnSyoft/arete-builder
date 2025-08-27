import React from "react";

export interface ProductCardRuntimeProps {
  // Data Selection
  productId?: string;

  // Content Overrides
  customName?: string;
  customDescription?: string;
  customImage?: string;
  customPrice?: string;
  customOriginalPrice?: string;
  customBrand?: string;
  customCategory?: string;
  customRating?: number;
  customReviewCount?: number;

  // Display Options
  showPrice?: boolean;
  showOriginalPrice?: boolean;
  showBrand?: boolean;
  showCategory?: boolean;
  showDescription?: boolean;
  showRating?: boolean;
  showAddToCartButton?: boolean;
  showViewDetailsButton?: boolean;

  // Design Customization
  imageHeight?: string;
  nameFontSize?: string;
  nameColor?: string;
  descriptionFontSize?: string;
  descriptionColor?: string;
  priceFontSize?: string;
  priceColor?: string;
  cardBackgroundColor?: string;
  cardBorderRadius?: string;
  cardPadding?: string;

  // Layout Options
  layout?: "vertical" | "horizontal";
  imagePosition?: "top" | "left" | "right";

  // Button Customization
  addToCartText?: string;
  viewDetailsText?: string;
  buttonVariant?: "default" | "outline" | "ghost";

  // Link Settings
  linkUrl?: string;
  openInNewTab?: boolean;
}

// This would come from your API in production
const getProductData = async (productId: string) => {
  // In production, this would be an actual API call
  const response = await fetch(`/api/products/${productId}`);
  if (!response.ok) return null;
  return response.json();
};

export const ProductCardRuntime = ({
  // Data Selection
  productId = "product-1",

  // Content Overrides
  customName,
  customDescription,
  customImage,
  customPrice,
  customOriginalPrice,
  customBrand,
  customCategory,
  customRating,
  customReviewCount,

  // Display Options
  showPrice = true,
  showOriginalPrice = true,
  showBrand = true,
  showCategory = true,
  showDescription = true,
  showRating = true,
  showAddToCartButton = true,
  showViewDetailsButton = false,

  // Design Customization
  imageHeight = "200px",
  nameFontSize = "text-lg",
  nameColor = "text-gray-900",
  descriptionFontSize = "text-sm",
  descriptionColor = "text-gray-600",
  priceFontSize = "text-xl",
  priceColor = "text-green-600",
  cardBackgroundColor = "#ffffff",
  cardBorderRadius = "8px",
  cardPadding = "0",

  // Layout Options
  layout = "vertical",
  imagePosition = "top",

  // Button Customization
  addToCartText = "Add to Cart",
  viewDetailsText = "View Details",
  buttonVariant = "default",

  // Link Settings
  linkUrl,
  openInNewTab = false,
}: ProductCardRuntimeProps) => {
  const [productData, setProductData] = React.useState<any>(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    if (productId) {
      getProductData(productId)
        .then(setProductData)
        .finally(() => setLoading(false));
    }
  }, [productId]);

  if (loading) {
    return (
      <div
        className="animate-pulse rounded-lg border bg-white p-6"
        style={{
          backgroundColor: cardBackgroundColor,
          borderRadius: cardBorderRadius,
          padding: cardPadding || "20px",
        }}
      >
        <div className="h-48 bg-gray-200 rounded mb-4"></div>
        <div className="h-4 bg-gray-200 rounded mb-2"></div>
        <div className="h-3 bg-gray-200 rounded mb-4"></div>
        <div className="flex gap-2 mb-4">
          <div className="h-6 bg-gray-200 rounded w-16"></div>
          <div className="h-6 bg-gray-200 rounded w-20"></div>
        </div>
        <div className="h-8 bg-gray-200 rounded w-32"></div>
      </div>
    );
  }

  // Use custom content if provided, otherwise use API data
  const displayName = customName || productData?.name || "Product Name";
  const displayDescription =
    customDescription ||
    productData?.description ||
    "Product description will appear here...";
  const displayImage =
    customImage ||
    productData?.image ||
    "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&q=80";
  const displayPrice = customPrice || productData?.price || "$0.00";
  const displayOriginalPrice =
    customOriginalPrice || productData?.originalPrice || "";
  const displayBrand = customBrand || productData?.brand || "Brand";
  const displayCategory = customCategory || productData?.category || "Category";
  const displayRating = customRating || productData?.rating || 0;
  const displayReviewCount = customReviewCount || productData?.reviewCount || 0;
  const finalLinkUrl =
    linkUrl || (productData?.slug ? `/products/${productData.slug}` : "#");

  const generateStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    return (
      "★".repeat(fullStars) +
      (hasHalfStar ? "☆" : "") +
      "☆".repeat(5 - Math.ceil(rating))
    );
  };

  const handleAddToCart = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    // In production, this would call your cart API
    try {
      const response = await fetch("/api/cart/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          productId,
          quantity: 1,
        }),
      });

      if (response.ok) {
        // Show success message or update cart UI
        console.log("Product added to cart successfully");
      }
    } catch (error) {
      console.error("Failed to add product to cart:", error);
    }
  };

  const handleViewDetails = () => {
    if (finalLinkUrl && finalLinkUrl !== "#") {
      if (openInNewTab) {
        window.open(finalLinkUrl, "_blank");
      } else {
        window.location.href = finalLinkUrl;
      }
    }
  };

  const buttonStyles = {
    default:
      "bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 rounded transition-colors",
    outline:
      "border border-blue-600 text-blue-600 hover:bg-blue-50 px-4 py-2 rounded transition-colors",
    ghost: "text-blue-600 hover:bg-blue-50 px-4 py-2 rounded transition-colors",
  };

  if (layout === "horizontal") {
    return (
      <div
        className="bg-white rounded-lg border shadow-md hover:shadow-lg transition-shadow"
        style={{
          backgroundColor: cardBackgroundColor,
          borderRadius: cardBorderRadius,
          padding: cardPadding || "20px",
        }}
      >
        <div className="flex gap-6">
          {imagePosition === "left" && (
            <div
              className="flex-shrink-0 w-48 rounded overflow-hidden"
              style={{ height: imageHeight }}
            >
              <img
                src={displayImage}
                alt={displayName}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          <div className="flex-1">
            {(showCategory || showBrand) && (
              <div className="flex justify-between items-center mb-2">
                {showCategory && (
                  <span className="text-xs font-medium text-blue-600 uppercase tracking-wide">
                    {displayCategory}
                  </span>
                )}
                {showBrand && (
                  <span className="text-xs text-gray-500">{displayBrand}</span>
                )}
              </div>
            )}

            <h3 className={`font-bold ${nameFontSize} ${nameColor} mb-2`}>
              {displayName}
            </h3>

            {showRating && displayRating > 0 && (
              <div className="flex items-center gap-2 mb-3">
                <span className="text-sm text-yellow-500">
                  {generateStars(displayRating)}
                </span>
                <span className="text-xs text-gray-500">
                  {displayRating} ({displayReviewCount} reviews)
                </span>
              </div>
            )}

            {showDescription && (
              <p className={`${descriptionFontSize} ${descriptionColor} mb-4`}>
                {displayDescription}
              </p>
            )}

            {showPrice && (
              <div className="flex items-center gap-3 mb-5">
                <span className={`font-bold ${priceFontSize} ${priceColor}`}>
                  {displayPrice}
                </span>
                {showOriginalPrice && displayOriginalPrice && (
                  <span className="text-sm text-gray-400 line-through">
                    {displayOriginalPrice}
                  </span>
                )}
              </div>
            )}

            <div className="flex gap-3">
              {showAddToCartButton && (
                <button
                  className={buttonStyles[buttonVariant]}
                  onClick={handleAddToCart}
                >
                  {addToCartText}
                </button>
              )}

              {showViewDetailsButton && (
                <button
                  className={buttonStyles.outline}
                  onClick={handleViewDetails}
                >
                  {viewDetailsText}
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
                alt={displayName}
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
      className="bg-white rounded-lg border shadow-md hover:shadow-lg transition-shadow overflow-hidden"
      style={{
        backgroundColor: cardBackgroundColor,
        borderRadius: cardBorderRadius,
      }}
    >
      <div className="w-full overflow-hidden" style={{ height: imageHeight }}>
        <img
          src={displayImage}
          alt={displayName}
          className="w-full h-full object-cover"
        />
      </div>

      <div style={{ padding: cardPadding || "20px" }}>
        {(showCategory || showBrand) && (
          <div className="flex justify-between items-center mb-2">
            {showCategory && (
              <span className="text-xs font-medium text-blue-600 uppercase tracking-wide">
                {displayCategory}
              </span>
            )}
            {showBrand && (
              <span className="text-xs text-gray-500">{displayBrand}</span>
            )}
          </div>
        )}

        <h3 className={`font-bold ${nameFontSize} ${nameColor} mb-2`}>
          {displayName}
        </h3>

        {showRating && displayRating > 0 && (
          <div className="flex items-center gap-2 mb-3">
            <span className="text-sm text-yellow-500">
              {generateStars(displayRating)}
            </span>
            <span className="text-xs text-gray-500">
              {displayRating} ({displayReviewCount} reviews)
            </span>
          </div>
        )}

        {showDescription && (
          <p className={`${descriptionFontSize} ${descriptionColor} mb-4`}>
            {displayDescription}
          </p>
        )}

        {showPrice && (
          <div className="flex items-center gap-3 mb-5">
            <span className={`font-bold ${priceFontSize} ${priceColor}`}>
              {displayPrice}
            </span>
            {showOriginalPrice && displayOriginalPrice && (
              <span className="text-sm text-gray-400 line-through">
                {displayOriginalPrice}
              </span>
            )}
          </div>
        )}

        <div className="flex gap-3 flex-wrap">
          {showAddToCartButton && (
            <button
              className={buttonStyles[buttonVariant]}
              onClick={handleAddToCart}
            >
              {addToCartText}
            </button>
          )}

          {showViewDetailsButton && (
            <button
              className={buttonStyles.outline}
              onClick={handleViewDetails}
            >
              {viewDetailsText}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
