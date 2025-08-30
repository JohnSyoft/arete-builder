import React from "react";
import { Element } from "@craftjs/core";
import { Text as CraftText } from "@/components/blocks/Basic/Text";
import { Button as CraftButton } from "@/components/blocks/Basic/Button";
import { Image as CraftImage } from "@/components/blocks/Basic/Image";
import { Card } from "@/components/blocks/Basic/Card";
import { Box } from "@/components/blocks/Basic/Box";
import { Flex } from "@/components/blocks/Basic/Flex";

export interface ProductCardProps {
  // Data Selection
  productId?: string; // API identifier for which product to fetch

  // Content Overrides (when user wants custom content instead of API data)
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
  linkUrl?: string; // Custom URL or will use product slug from API
  openInNewTab?: boolean;
}

// This would come from your API in production
const getProductData = async (productId: string) => {
  // Mock API response structure
  const mockProducts: Record<string, any> = {
    "product-1": {
      id: "product-1",
      name: "Premium Wireless Headphones",
      description:
        "High-quality wireless headphones with noise cancellation and 30-hour battery life. Perfect for music lovers and professionals.",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80",
      price: "$199.99",
      originalPrice: "$249.99",
      brand: "AudioTech",
      category: "Electronics",
      rating: 4.8,
      reviewCount: 234,
      slug: "premium-wireless-headphones",
      inStock: true,
      features: ["Noise Cancellation", "30h Battery", "Wireless"],
    },
    "product-2": {
      id: "product-2",
      name: "Organic Cotton T-Shirt",
      description:
        "Comfortable, sustainable organic cotton t-shirt made from 100% certified organic materials. Available in multiple colors.",
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80",
      price: "$29.99",
      originalPrice: "$39.99",
      brand: "EcoWear",
      category: "Clothing",
      rating: 4.6,
      reviewCount: 89,
      slug: "organic-cotton-t-shirt",
      inStock: true,
      features: ["Organic Cotton", "Eco-Friendly", "Soft Fabric"],
    },
    "product-3": {
      id: "product-3",
      name: "Smart Fitness Watch",
      description:
        "Advanced fitness tracking watch with heart rate monitoring, GPS, and smartphone connectivity. Perfect for active lifestyles.",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80",
      price: "$299.99",
      originalPrice: "",
      brand: "FitTech",
      category: "Wearables",
      rating: 4.9,
      reviewCount: 456,
      slug: "smart-fitness-watch",
      inStock: true,
      features: ["GPS Tracking", "Heart Rate Monitor", "Waterproof"],
    },
  };

  return mockProducts[productId] || null;
};

export function ProductCard({
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
}: ProductCardProps) {
  // In production, this would use React Query or SWR to fetch product data
  const [productData, setProductData] = React.useState<any>(null);

  React.useEffect(() => {
    if (productId) {
      getProductData(productId).then(setProductData);
    }
  }, [productId]);

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

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log(`Adding product ${productId} to cart`);
    // In production, this would call your cart API
  };

  return (
    <Card
      variant="flat"
      shadow="md"
      borderRadius={cardBorderRadius}
      backgroundColor={cardBackgroundColor}
      borderColor="#e5e7eb"
      padding={cardPadding}
      margin="0"
      hoverable={true}
      clickable={!!finalLinkUrl}
      overflow="hidden"
    >
      <Element id="productCardContainer" is="div" canvas>
        {layout === "vertical" ? (
          // Vertical Layout
          <Element id="productCardContent" is="div">
            {/* Image */}
            {imagePosition === "top" && (
              <Element
                id="productCardImage"
                is={Box}
                backgroundColor="transparent"
                padding="0"
                margin="0"
                display="block"
                width="100%"
                height={imageHeight}
                canvas
              >
                <CraftImage
                  src={displayImage}
                  alt={displayName}
                  width="w-full"
                  height="h-full"
                  objectFit="object-cover"
                  borderRadius="rounded-t-lg"
                  margin=""
                  padding=""
                />
              </Element>
            )}

            {/* Content */}
            <Element
              id="productCardContent"
              is={Box}
              backgroundColor="transparent"
              padding="20px"
              margin="0"
              display="block"
              canvas
            >
              {/* Category & Brand */}
              {(showCategory || showBrand) && (
                <Element
                  id="productCardCategoryBrand"
                  is={Flex}
                  canvas
                  flexDirection="row"
                  justifyContent="between"
                  alignItems="center"
                  gap="gap-2"
                  margin="0 0 8px 0"
                  wrap="wrap"
                >
                  {showCategory && (
                    <Element
                      id="productCardCategory"
                      is={Box}
                      backgroundColor="transparent"
                      padding="0"
                      margin="0"
                      display="block"
                      canvas={false}
                    >
                      <CraftText
                        text={displayCategory}
                        tagName="span"
                        fontSize="text-xs"
                        fontWeight="font-medium"
                        color="text-blue-600"
                        textAlign="text-left"
                        textTransform="uppercase"
                        letterSpacing="tracking-wide"
                      />
                    </Element>
                  )}

                  {showBrand && (
                    <Element
                      id="productCardBrand"
                      is={Box}
                      backgroundColor="transparent"
                      padding="0"
                      margin="0"
                      display="block"
                      canvas={false}
                    >
                      <CraftText
                        text={displayBrand}
                        tagName="span"
                        fontSize="text-xs"
                        fontWeight="font-normal"
                        color="text-gray-500"
                        textAlign="text-right"
                      />
                    </Element>
                  )}
                </Element>
              )}

              {/* Product Name */}
              <Element
                id="productCardName"
                is={Box}
                backgroundColor="transparent"
                padding="0"
                margin="0 0 8px 0"
                display="block"
                canvas={false}
              >
                <CraftText
                  text={displayName}
                  tagName="h3"
                  fontSize={nameFontSize}
                  fontWeight="font-bold"
                  color={nameColor}
                  textAlign="text-left"
                  lineHeight="leading-tight"
                />
              </Element>

              {/* Rating */}
              {showRating && displayRating > 0 && (
                <Element
                  id="productCardRating"
                  is={Flex}
                  canvas
                  flexDirection="row"
                  justifyContent="start"
                  alignItems="center"
                  gap="gap-2"
                  margin="0 0 12px 0"
                  wrap="nowrap"
                >
                  <Element
                    id="productCardStars"
                    is={Box}
                    backgroundColor="transparent"
                    padding="0"
                    margin="0"
                    display="block"
                    canvas={false}
                  >
                    <CraftText
                      text={generateStars(displayRating)}
                      tagName="span"
                      fontSize="text-sm"
                      fontWeight="font-normal"
                      color="text-yellow-500"
                      textAlign="text-left"
                    />
                  </Element>

                  <Element
                    id="productCardReviews"
                    is={Box}
                    backgroundColor="transparent"
                    padding="0"
                    margin="0"
                    display="block"
                    canvas={false}
                  >
                    <CraftText
                      text={`${displayRating} (${displayReviewCount} reviews)`}
                      tagName="span"
                      fontSize="text-xs"
                      fontWeight="font-normal"
                      color="text-gray-500"
                      textAlign="text-left"
                    />
                  </Element>
                </Element>
              )}

              {/* Description */}
              {showDescription && (
                <Element
                  id="productCardDescription"
                  is={Box}
                  backgroundColor="transparent"
                  padding="0"
                  margin="0 0 16px 0"
                  display="block"
                  canvas={false}
                >
                  <CraftText
                    text={displayDescription}
                    tagName="p"
                    fontSize={descriptionFontSize}
                    fontWeight="font-normal"
                    color={descriptionColor}
                    textAlign="text-left"
                    lineHeight="leading-relaxed"
                  />
                </Element>
              )}

              {/* Price */}
              {showPrice && (
                <Element
                  id="productCardPrice"
                  is={Flex}
                  canvas
                  flexDirection="row"
                  justifyContent="start"
                  alignItems="center"
                  gap="gap-3"
                  margin="0 0 20px 0"
                  wrap="nowrap"
                >
                  <Element
                    id="productCardCurrentPrice"
                    is={Box}
                    backgroundColor="transparent"
                    padding="0"
                    margin="0"
                    display="block"
                    canvas={false}
                  >
                    <CraftText
                      text={displayPrice}
                      tagName="span"
                      fontSize={priceFontSize}
                      fontWeight="font-bold"
                      color={priceColor}
                      textAlign="text-left"
                    />
                  </Element>

                  {showOriginalPrice && displayOriginalPrice && (
                    <Element
                      id="productCardOriginalPrice"
                      is={Box}
                      backgroundColor="transparent"
                      padding="0"
                      margin="0"
                      display="block"
                      canvas={false}
                    >
                      <CraftText
                        text={displayOriginalPrice}
                        tagName="span"
                        fontSize="text-sm"
                        fontWeight="font-normal"
                        color="text-gray-400"
                        textAlign="text-left"
                        textDecoration="line-through"
                      />
                    </Element>
                  )}
                </Element>
              )}

              {/* Buttons */}
              <Element
                id="productCardButtons"
                is={Flex}
                canvas
                flexDirection="row"
                justifyContent="start"
                alignItems="center"
                gap="gap-3"
                margin="0"
                wrap="wrap"
              >
                {showAddToCartButton && (
                  <Element
                    id="productCardAddToCart"
                    is={Box}
                    backgroundColor="transparent"
                    padding="0"
                    margin="0"
                    display="block"
                    canvas={false}
                  >
                    <CraftButton
                      text={addToCartText}
                      variant={buttonVariant}
                      size="default"
                      href="#"
                      borderRadius="6px"
                      padding="px-4 py-2"
                      margin=""
                    />
                  </Element>
                )}

                {showViewDetailsButton && (
                  <Element
                    id="productCardViewDetails"
                    is={Box}
                    backgroundColor="transparent"
                    padding="0"
                    margin="0"
                    display="block"
                    canvas={false}
                  >
                    <CraftButton
                      text={viewDetailsText}
                      variant="outline"
                      size="default"
                      href={finalLinkUrl}
                      borderRadius="6px"
                      padding="px-4 py-2"
                      margin=""
                    />
                  </Element>
                )}
              </Element>
            </Element>
          </Element>
        ) : (
          // Horizontal Layout - Similar structure but with Flex layout
          <Element
            id="productCardHorizontal"
            is={Flex}
            canvas
            flexDirection="row"
            justifyContent="start"
            alignItems="start"
            gap="gap-6"
            margin="0"
            wrap="nowrap"
          >
            {/* Image */}
            {imagePosition === "left" && (
              <Element
                id="productCardImageLeft"
                is={Box}
                backgroundColor="transparent"
                padding="0"
                margin="0"
                display="block"
                width="200px"
                height={imageHeight}
                canvas
              >
                <CraftImage
                  src={displayImage}
                  alt={displayName}
                  width="w-full"
                  height="h-full"
                  objectFit="object-cover"
                  borderRadius="rounded-lg"
                  margin=""
                  padding=""
                />
              </Element>
            )}

            {/* Content - Same structure as vertical but in flex item */}
            <Element
              id="productCardContentHorizontal"
              is={Box}
              backgroundColor="transparent"
              padding="20px"
              margin="0"
              display="block"
              canvas
            >
              {/* Same content structure as vertical layout */}
            </Element>
          </Element>
        )}
      </Element>
    </Card>
  );
}

ProductCard.craft = {
  displayName: "Product Card",
  props: {
    // Data Selection
    productId: "product-1",

    // Content Overrides
    customName: "",
    customDescription: "",
    customImage: "",
    customPrice: "",
    customOriginalPrice: "",
    customBrand: "",
    customCategory: "",
    customRating: 0,
    customReviewCount: 0,

    // Display Options
    showPrice: true,
    showOriginalPrice: true,
    showBrand: true,
    showCategory: true,
    showDescription: true,
    showRating: true,
    showAddToCartButton: true,
    showViewDetailsButton: false,

    // Design Customization
    imageHeight: "200px",
    nameFontSize: "text-lg",
    nameColor: "text-gray-900",
    descriptionFontSize: "text-sm",
    descriptionColor: "text-gray-600",
    priceFontSize: "text-xl",
    priceColor: "text-green-600",
    cardBackgroundColor: "#ffffff",
    cardBorderRadius: "8px",
    cardPadding: "0",

    // Layout Options
    layout: "vertical",
    imagePosition: "top",

    // Button Customization
    addToCartText: "Add to Cart",
    viewDetailsText: "View Details",
    buttonVariant: "default",

    // Link Settings
    linkUrl: "",
    openInNewTab: false,
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
  isCanvas: false,
};
