import { useNode, Element } from "@craftjs/core";
import { Text as CraftText } from "@/components/blocks/Basic/Text";
import { Button as CraftButton } from "@/components/blocks/Basic/Button";
import { Image as CraftImage } from "@/components/blocks/Basic/Image";
import { Box } from "@/components/blocks/Basic/Box";
import { Flex } from "@/components/blocks/Basic/Flex";
import { Section, SectionProps } from "@/components/blocks/Basic/Section";

interface EcommerceHero1Props extends SectionProps {
  // Main content
  tagline?: string;
  mainTitle?: string;
  description?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;

  // Product showcase
  featuredProductImage?: string;
  productImage1?: string;
  productImage2?: string;
  productImage3?: string;

  // Social proof
  customerCount?: string;
  reviewRating?: string;
  reviewCount?: string;

  // Offer
  discountText?: string;
  originalPrice?: string;
  salePrice?: string;

  // Brand logos
  brandLogo1?: string;
  brandLogo2?: string;
  brandLogo3?: string;

  // Styling
  primaryColor?: string;
  accentColor?: string;
}

export function EcommerceHero1({
  tagline = "NEW COLLECTION LAUNCH",
  mainTitle = "Style That Speaks Your Language",
  description = "Discover our curated collection of premium fashion pieces. From timeless classics to cutting-edge trends, find your perfect style with free shipping worldwide.",
  primaryButtonText = "Shop Now",
  secondaryButtonText = "View Collection",
  featuredProductImage = "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500&h=600&fit=crop",
  productImage1 = "https://images.unsplash.com/photo-1560243563-062bfc001d68?w=300&h=400&fit=crop",
  productImage2 = "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=300&h=400&fit=crop",
  productImage3 = "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=300&h=400&fit=crop",
  customerCount = "50,000+",
  reviewRating = "4.8",
  reviewCount = "12,500",
  discountText = "40% OFF",
  originalPrice = "$299",
  salePrice = "$179",
  brandLogo1 = "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=120&h=60&fit=crop",
  brandLogo2 = "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=120&h=60&fit=crop",
  brandLogo3 = "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=120&h=60&fit=crop",
  primaryColor = "#1f2937",
  accentColor = "#ec4899",
  ...props
}: EcommerceHero1Props) {
  const {
    connectors: { connect, drag },
    selected,
    hovered,
  } = useNode((state) => ({
    selected: state.events.selected,
    hovered: state.events.hovered,
  }));

  return (
    <div
      ref={(ref) => {
        if (ref) {
          connect(drag(ref));
        }
      }}
      className={`relative ${selected ? "ring-2 ring-blue-500" : ""} ${
        hovered ? "ring-1 ring-blue-300" : ""
      }`}
    >
      <Element
        id="ecommerceHero1-section"
        is={Section}
        canvas
        backgroundColor="#fefefe"
        padding="0px"
        minHeight="700px"
        {...props}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 2px 2px, #000 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          ></div>
        </div>

        {/* Sale Badge */}
        <Element
          id="ecommerceHero1-saleBadge"
          is={Box}
          position="absolute"
          top="20px"
          right="20px"
          backgroundColor={accentColor}
          color="white"
          padding="8px 16px"
          borderRadius="20px"
          fontSize="sm"
          fontWeight="bold"
          zIndex="10"
          transform="rotate(12deg)"
        >
          <Element
            id="ecommerceHero1-saleText"
            is={CraftText}
            text={discountText}
            color="white"
            fontSize="sm"
            fontWeight="bold"
          />
        </Element>

        <Element
          id="ecommerceHero1-container"
          is={Box}
          padding="px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24 lg:px-12 lg:py-32"
          maxWidth="7xl"
          margin="0 auto"
          position="relative"
        >
          <Element
            id="ecommerceHero1-grid"
            is={Flex}
            direction="column"
            gap="48px"
            lg={{ direction: "row", alignItems: "center" }}
          >
            {/* Left Content */}
            <Element
              id="ecommerceHero1-content"
              is={Box}
              flex="1"
              maxWidth="600px"
            >
              {/* Tagline */}
              <Element
                id="ecommerceHero1-tagline"
                is={CraftText}
                text={tagline}
                fontSize="sm"
                fontWeight="semibold"
                color={accentColor}
                letterSpacing="wide"
                textTransform="uppercase"
                margin="0 0 16px 0"
              />

              {/* Main Title */}
              <Element
                id="ecommerceHero1-title"
                is={CraftText}
                text={mainTitle}
                fontSize="4xl"
                sm={{ fontSize: "5xl" }}
                lg={{ fontSize: "6xl" }}
                fontWeight="bold"
                color={primaryColor}
                lineHeight="tight"
                margin="0 0 24px 0"
              />

              {/* Description */}
              <Element
                id="ecommerceHero1-description"
                is={CraftText}
                text={description}
                fontSize="lg"
                color="#6b7280"
                lineHeight="relaxed"
                margin="0 0 32px 0"
                maxWidth="500px"
              />

              {/* Price */}
              <Element
                id="ecommerceHero1-priceContainer"
                is={Flex}
                alignItems="center"
                gap="16px"
                margin="0 0 32px 0"
              >
                <Element
                  id="ecommerceHero1-salePrice"
                  is={CraftText}
                  text={salePrice}
                  fontSize="3xl"
                  fontWeight="bold"
                  color={accentColor}
                />
                <Element
                  id="ecommerceHero1-originalPrice"
                  is={CraftText}
                  text={originalPrice}
                  fontSize="xl"
                  color="#9ca3af"
                  textDecoration="line-through"
                />
              </Element>

              {/* Social Proof */}
              <Element
                id="ecommerceHero1-socialProof"
                is={Flex}
                alignItems="center"
                gap="24px"
                margin="0 0 32px 0"
                flexWrap="wrap"
              >
                <Element
                  id="ecommerceHero1-reviews"
                  is={Flex}
                  alignItems="center"
                  gap="8px"
                >
                  <Element
                    id="ecommerceHero1-stars"
                    is={CraftText}
                    text="⭐⭐⭐⭐⭐"
                    fontSize="lg"
                  />
                  <Element
                    id="ecommerceHero1-rating"
                    is={CraftText}
                    text={`${reviewRating} (${reviewCount} reviews)`}
                    fontSize="sm"
                    color="#6b7280"
                  />
                </Element>

                <Element id="ecommerceHero1-customers" is={Box}>
                  <Element
                    id="ecommerceHero1-customerCount"
                    is={CraftText}
                    text={customerCount}
                    fontSize="sm"
                    fontWeight="semibold"
                    color={primaryColor}
                  />
                  <Element
                    id="ecommerceHero1-customerLabel"
                    is={CraftText}
                    text="Happy Customers"
                    fontSize="xs"
                    color="#9ca3af"
                  />
                </Element>
              </Element>

              {/* Buttons */}
              <Element
                id="ecommerceHero1-buttons"
                is={Flex}
                direction="column"
                gap="16px"
                sm={{ direction: "row" }}
                margin="0 0 40px 0"
              >
                <Element
                  id="ecommerceHero1-primaryButton"
                  is={CraftButton}
                  text={primaryButtonText}
                  backgroundColor={accentColor}
                  color="white"
                  padding="14px 32px"
                  borderRadius="8px"
                  fontSize="base"
                  fontWeight="semibold"
                  _hover={{ backgroundColor: "#db2777" }}
                  transition="all 0.3s"
                />

                <Element
                  id="ecommerceHero1-secondaryButton"
                  is={CraftButton}
                  text={secondaryButtonText}
                  backgroundColor="transparent"
                  color={primaryColor}
                  border={`2px solid ${primaryColor}`}
                  padding="12px 32px"
                  borderRadius="8px"
                  fontSize="base"
                  fontWeight="semibold"
                  _hover={{ backgroundColor: primaryColor, color: "white" }}
                  transition="all 0.3s"
                />
              </Element>

              {/* Trust Brands */}
              <Element id="ecommerceHero1-brands" is={Box}>
                <Element
                  id="ecommerceHero1-brandsTitle"
                  is={CraftText}
                  text="Trusted by leading brands:"
                  fontSize="sm"
                  color="#9ca3af"
                  margin="0 0 16px 0"
                />
                <Element
                  id="ecommerceHero1-brandsLogos"
                  is={Flex}
                  gap="24px"
                  alignItems="center"
                  opacity="0.6"
                >
                  <Element
                    id="ecommerceHero1-brandLogo1"
                    is={CraftImage}
                    src={brandLogo1}
                    alt="Brand 1"
                    height="30px"
                    filter="grayscale(100%)"
                    _hover={{ filter: "grayscale(0%)" }}
                    transition="all 0.3s"
                  />
                  <Element
                    id="ecommerceHero1-brandLogo2"
                    is={CraftImage}
                    src={brandLogo2}
                    alt="Brand 2"
                    height="30px"
                    filter="grayscale(100%)"
                    _hover={{ filter: "grayscale(0%)" }}
                    transition="all 0.3s"
                  />
                  <Element
                    id="ecommerceHero1-brandLogo3"
                    is={CraftImage}
                    src={brandLogo3}
                    alt="Brand 3"
                    height="30px"
                    filter="grayscale(100%)"
                    _hover={{ filter: "grayscale(0%)" }}
                    transition="all 0.3s"
                  />
                </Element>
              </Element>
            </Element>

            {/* Right Product Showcase */}
            <Element
              id="ecommerceHero1-productContainer"
              is={Box}
              flex="1"
              position="relative"
              height="600px"
            >
              {/* Main Featured Product */}
              <Element
                id="ecommerceHero1-featuredProduct"
                is={Box}
                position="absolute"
                top="0"
                right="20px"
                width="300px"
                height="400px"
                borderRadius="16px"
                overflow="hidden"
                shadow="2xl"
                zIndex="3"
                backgroundColor="white"
                padding="16px"
              >
                <Element
                  id="ecommerceHero1-featuredImage"
                  is={CraftImage}
                  src={featuredProductImage}
                  alt="Featured Product"
                  objectFit="cover"
                  width="100%"
                  height="280px"
                  borderRadius="8px"
                  margin="0 0 16px 0"
                />
                <Element id="ecommerceHero1-productInfo" is={Box}>
                  <Element
                    id="ecommerceHero1-productName"
                    is={CraftText}
                    text="Premium Designer Jacket"
                    fontSize="sm"
                    fontWeight="semibold"
                    color={primaryColor}
                    margin="0 0 8px 0"
                  />
                  <Element
                    id="ecommerceHero1-productPrice"
                    is={Flex}
                    alignItems="center"
                    gap="8px"
                  >
                    <Element
                      id="ecommerceHero1-currentPrice"
                      is={CraftText}
                      text={salePrice}
                      fontSize="lg"
                      fontWeight="bold"
                      color={accentColor}
                    />
                    <Element
                      id="ecommerceHero1-oldPrice"
                      is={CraftText}
                      text={originalPrice}
                      fontSize="sm"
                      color="#9ca3af"
                      textDecoration="line-through"
                    />
                  </Element>
                </Element>
              </Element>

              {/* Small Product 1 */}
              <Element
                id="ecommerceHero1-product1"
                is={Box}
                position="absolute"
                top="80px"
                left="0"
                width="160px"
                height="220px"
                borderRadius="12px"
                overflow="hidden"
                shadow="lg"
                zIndex="2"
                backgroundColor="white"
                padding="12px"
              >
                <Element
                  id="ecommerceHero1-product1Image"
                  is={CraftImage}
                  src={productImage1}
                  alt="Product 1"
                  objectFit="cover"
                  width="100%"
                  height="140px"
                  borderRadius="6px"
                  margin="0 0 12px 0"
                />
                <Element
                  id="ecommerceHero1-product1Name"
                  is={CraftText}
                  text="Classic Shirt"
                  fontSize="xs"
                  fontWeight="medium"
                  color={primaryColor}
                  margin="0 0 4px 0"
                />
                <Element
                  id="ecommerceHero1-product1Price"
                  is={CraftText}
                  text="$89"
                  fontSize="sm"
                  fontWeight="bold"
                  color={accentColor}
                />
              </Element>

              {/* Small Product 2 */}
              <Element
                id="ecommerceHero1-product2"
                is={Box}
                position="absolute"
                bottom="120px"
                left="40px"
                width="160px"
                height="220px"
                borderRadius="12px"
                overflow="hidden"
                shadow="lg"
                zIndex="1"
                backgroundColor="white"
                padding="12px"
                transform="rotate(-3deg)"
              >
                <Element
                  id="ecommerceHero1-product2Image"
                  is={CraftImage}
                  src={productImage2}
                  alt="Product 2"
                  objectFit="cover"
                  width="100%"
                  height="140px"
                  borderRadius="6px"
                  margin="0 0 12px 0"
                />
                <Element
                  id="ecommerceHero1-product2Name"
                  is={CraftText}
                  text="Luxury Bag"
                  fontSize="xs"
                  fontWeight="medium"
                  color={primaryColor}
                  margin="0 0 4px 0"
                />
                <Element
                  id="ecommerceHero1-product2Price"
                  is={CraftText}
                  text="$249"
                  fontSize="sm"
                  fontWeight="bold"
                  color={accentColor}
                />
              </Element>

              {/* Floating Offers */}
              <Element
                id="ecommerceHero1-freeShipping"
                is={Box}
                position="absolute"
                bottom="20px"
                right="20px"
                backgroundColor="white"
                padding="12px 16px"
                borderRadius="8px"
                shadow="lg"
                border="2px solid #f3f4f6"
                zIndex="4"
              >
                <Element
                  id="ecommerceHero1-shippingIcon"
                  is={CraftText}
                  text="🚚"
                  fontSize="lg"
                  margin="0 0 4px 0"
                />
                <Element
                  id="ecommerceHero1-shippingText"
                  is={CraftText}
                  text="Free Shipping"
                  fontSize="xs"
                  fontWeight="semibold"
                  color={primaryColor}
                />
              </Element>
            </Element>
          </Element>
        </Element>
      </Element>
    </div>
  );
}

EcommerceHero1.craft = {
  displayName: "Ecommerce Hero 1",
  props: {},
  rules: {
    canDrag: () => true,
    canDrop: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
};
