import { Element } from "@craftjs/core";
import { Text as CraftText } from "@/components/blocks/Basic/Text";
import { Image as CraftImage } from "@/components/blocks/Basic/Image";
import { Flex } from "@/components/blocks/Basic/Flex";
import { Grid } from "@/components/blocks/Basic/Grid";
import { Card } from "@/components/blocks/Basic/Card";
import { Box } from "@/components/blocks/Basic/Box";
import { Section, SectionProps } from "@/components/blocks/Basic/Section";

interface ModernTestimonials1Props extends SectionProps {
  // Header content
  sectionTitle?: string;
  sectionDescription?: string;
  
  // Testimonials
  testimonials?: Array<{
    id: string;
    quote: string;
    author: string;
    role: string;
    company: string;
    avatar: string;
    rating: number;
    companyLogo?: string;
  }>;
  
  // Stats
  stats?: Array<{
    id: string;
    number: string;
    label: string;
  }>;
  
  // Styling
  primaryColor?: string;
  accentColor?: string;
}

export function ModernTestimonials1({
  sectionTitle = "Loved by Thousands of Users Worldwide",
  sectionDescription = "Don't just take our word for it. See what real customers are saying about their experience.",
  testimonials = [
    {
      id: "testimonial-1",
      quote: "This platform has completely transformed how our team works. The AI features are incredible and save us hours every day.",
      author: "Sarah Chen",
      role: "Product Manager",
      company: "TechFlow Inc.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b577?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      companyLogo: "https://via.placeholder.com/100x40/4F46E5/FFFFFF?text=TechFlow"
    },
    {
      id: "testimonial-2", 
      quote: "The best investment we've made for our startup. Incredible ROI and the support team is always there when we need them.",
      author: "Marcus Rodriguez",
      role: "CEO & Founder",
      company: "StartupXYZ",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      companyLogo: "https://via.placeholder.com/100x40/7C3AED/FFFFFF?text=StartupXYZ"
    },
    {
      id: "testimonial-3",
      quote: "We tried 10+ tools before finding this one. Nothing comes close to the features and ease of use. Game changer!",
      author: "Emily Johnson",
      role: "Head of Operations",
      company: "Scale Corp",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      companyLogo: "https://via.placeholder.com/100x40/059669/FFFFFF?text=ScaleCorp"
    },
    {
      id: "testimonial-4",
      quote: "The analytics dashboard gives us insights we never had before. Data-driven decisions are now possible for our entire team.",
      author: "David Kim",
      role: "Data Scientist",
      company: "Analytics Pro",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      companyLogo: "https://via.placeholder.com/100x40/DC2626/FFFFFF?text=AnalyticsPro"
    },
    {
      id: "testimonial-5",
      quote: "Seamless integration with our existing workflow. The learning curve was practically non-existent.",
      author: "Lisa Wang",
      role: "Engineering Lead",
      company: "DevForward",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      companyLogo: "https://via.placeholder.com/100x40/EA580C/FFFFFF?text=DevForward"
    },
    {
      id: "testimonial-6",
      quote: "Customer support is outstanding. They helped us migrate all our data without any downtime. Highly recommended!",
      author: "Alex Thompson",
      role: "CTO",
      company: "MegaCorp Solutions",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      companyLogo: "https://via.placeholder.com/100x40/8B5CF6/FFFFFF?text=MegaCorp"
    }
  ],
  stats = [
    { id: "customers", number: "10,000+", label: "Happy Customers" },
    { id: "satisfaction", number: "98%", label: "Satisfaction Rate" },
    { id: "reviews", number: "4.9/5", label: "Average Rating" },
    { id: "support", number: "24/7", label: "Support Available" }
  ],
  primaryColor = "#4F46E5",
  accentColor = "#F59E0B",
  ...props
}: ModernTestimonials1Props) {
  
  // Set section defaults
  const testimonialsProps = {
    backgroundColor: "#ffffff",
    padding: "0",
    minHeight: "auto", 
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    contentPadding: "px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24 lg:px-8 lg:py-32",
    ...props,
  };

  return (
    <Section {...testimonialsProps}>
      <Element
        id="modernTestimonialsContent"
        is={Box}
        backgroundColor="transparent"
        padding="0"
        margin="0"
        display="block"
        canvas
      >
        {/* Header Section */}
        <Element
          is={Box}
          backgroundColor="transparent"
          padding="0"
          margin="0 0 64px 0"
          display="block"
          canvas
        >
          {/* Section Title */}
          <Element
            is={Box}
            backgroundColor="transparent"
            padding="0"
            margin="0 0 16px 0"
            display="flex"
            justifyContent="center"
            canvas={false}
          >
            <CraftText
              text={sectionTitle}
              tagName="h2"
              fontSize="text-4xl sm:text-5xl lg:text-6xl"
              fontWeight="font-black"
              color="text-gray-900"
              textAlign="text-center"
              margin="0"
              lineHeight="leading-tight"
            />
          </Element>

          {/* Section Description */}
          <Element
            is={Box}
            backgroundColor="transparent"
            padding="0"
            margin="0"
            display="flex"
            justifyContent="center"
            canvas={false}
          >
            <div className="max-w-3xl">
              <CraftText
                text={sectionDescription}
                tagName="p"
                fontSize="text-xl"
                fontWeight="font-normal"
                color="text-gray-600"
                textAlign="text-center"
                lineHeight="leading-relaxed"
                margin="0"
              />
            </div>
          </Element>
        </Element>

        {/* Stats Section */}
        <Element
          is={Box}
          backgroundColor="transparent"
          padding="0"
          margin="0 0 64px 0"
          display="block"
          canvas
        >
          <Element
            is={Grid}
            canvas
            columns={4}
            autoFit={true}
            minColumnWidth="200px"
            gap="32px"
            autoRows="auto"
          >
            {stats.map((stat) => (
              <Element
                key={stat.id}
                id={`stat-${stat.id}`}
                is={Box}
                backgroundColor="transparent"
                padding="24px"
                margin="0"
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                borderRadius="16px"
                border="1px solid rgba(0, 0, 0, 0.1)"
                canvas
              >
                {/* Stat Number */}
                <Element
                  is={Box}
                  backgroundColor="transparent"
                  padding="0"
                  margin="0 0 8px 0"
                  display="block"
                  canvas={false}
                >
                  <CraftText
                    text={stat.number}
                    tagName="div"
                    fontSize="text-3xl sm:text-4xl"
                    fontWeight="font-black"
                    color={primaryColor}
                    textAlign="text-center"
                    margin="0"
                  />
                </Element>

                {/* Stat Label */}
                <Element
                  is={Box}
                  backgroundColor="transparent"
                  padding="0"
                  margin="0"
                  display="block"
                  canvas={false}
                >
                  <CraftText
                    text={stat.label}
                    tagName="div"
                    fontSize="text-sm"
                    fontWeight="font-medium"
                    color="text-gray-600"
                    textAlign="text-center"
                    margin="0"
                  />
                </Element>
              </Element>
            ))}
          </Element>
        </Element>

        {/* Testimonials Grid */}
        <Element
          is={Grid}
          canvas
          columns={3}
          autoFit={true}
          minColumnWidth="350px"
          gap="32px"
          autoRows="auto"
        >
          {testimonials.map((testimonial) => (
            <Element
              key={testimonial.id}
              id={`testimonialCard-${testimonial.id}`}
              is={Card}
              variant="flat"
              shadow="lg"
              borderRadius="20px"
              backgroundColor="#ffffff"
              borderColor="rgba(0, 0, 0, 0.1)"
              padding="32px"
              margin="0"
              hoverable={true}
              clickable={false}
              
              canvas
            >
              {/* Quote */}
              <Element
                is={Box}
                backgroundColor="transparent"
                padding="0"
                margin="0 0 24px 0"
                display="block"
                canvas={false}
              >
                <div className="text-4xl text-gray-300 mb-4">"</div>
                <CraftText
                  text={testimonial.quote}
                  tagName="blockquote"
                  fontSize="text-lg"
                  fontWeight="font-normal"
                  color="text-gray-700"
                  textAlign="text-left"
                  lineHeight="leading-relaxed"
                  margin="0"
                />
              </Element>

              {/* Rating Stars */}
              <Element
                is={Flex}
                canvas
                flexDirection="row"
                justifyContent="start"
                alignItems="center"
                gap="gap-1"
                margin="mb-6"
                wrap="nowrap"
              >
                {[1, 2, 3, 4, 5].map((star) => (
                  <Element
                    key={`${testimonial.id}-star-${star}`}
                    is={Box}
                    backgroundColor="transparent"
                    padding="0"
                    margin="0"
                    display="block"
                    canvas={false}
                  >
                    <div className="w-5 h-5">
                      <svg
                        viewBox="0 0 24 24"
                        fill={star <= testimonial.rating ? accentColor : "#E5E7EB"}
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    </div>
                  </Element>
                ))}
              </Element>

              {/* Author Info */}
              <Element
                is={Flex}
                canvas
                flexDirection="row"
                justifyContent="start"
                alignItems="center"
                gap="gap-4"
                margin="0"
                wrap="nowrap"
              >
                {/* Avatar */}
                <Element
                  is={Box}
                  backgroundColor="transparent"
                  padding="0"
                  margin="0"
                  display="block"
                  width="60px"
                  height="60px"
                  borderRadius="50%"
                  
                  flexShrink="0"
                  canvas
                >
                  <CraftImage
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    width="w-full"
                    height="h-full"
                    objectFit="object-cover"
                    borderRadius="rounded-full"
                    margin=""
                    padding=""
                  />
                </Element>

                {/* Author Details */}
                <Element
                  is={Box}
                  backgroundColor="transparent"
                  padding="0"
                  margin="0"
                  display="block"
                  canvas
                >
                  {/* Author Name */}
                  <Element
                    is={Box}
                    backgroundColor="transparent"
                    padding="0"
                    margin="0 0 4px 0"
                    display="block"
                    canvas={false}
                  >
                    <CraftText
                      text={testimonial.author}
                      tagName="div"
                      fontSize="text-lg"
                      fontWeight="font-bold"
                      color="text-gray-900"
                      textAlign="text-left"
                      margin="0"
                    />
                  </Element>

                  {/* Role & Company */}
                  <Element
                    is={Box}
                    backgroundColor="transparent"
                    padding="0"
                    margin="0 0 8px 0"
                    display="block"
                    canvas={false}
                  >
                    <CraftText
                      text={`${testimonial.role} at ${testimonial.company}`}
                      tagName="div"
                      fontSize="text-sm"
                      fontWeight="font-medium"
                      color="text-gray-600"
                      textAlign="text-left"
                      margin="0"
                    />
                  </Element>

                  {/* Company Logo */}
                  {testimonial.companyLogo && (
                    <Element
                      is={Box}
                      backgroundColor="transparent"
                      padding="0"
                      margin="0"
                      display="block"
                      width="80px"
                      height="24px"
                      canvas
                    >
                      <CraftImage
                        src={testimonial.companyLogo}
                        alt={testimonial.company}
                        width="w-full"
                        height="h-full"
                        objectFit="object-contain"
                        borderRadius=""
                        margin=""
                        padding=""
                      />
                    </Element>
                  )}
                </Element>
              </Element>
            </Element>
          ))}
        </Element>

        {/* Bottom Trust Section */}
        <Element
          is={Box}
          backgroundColor="transparent"
          padding="96px 0 0 0"
          margin="0"
          display="block"
          canvas
        >
          <Element
            is={Box}
            backgroundColor="rgba(79, 70, 229, 0.05)"
            padding="48px"
            margin="0"
            borderRadius="24px"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            canvas
          >
            {/* Trust Badge */}
            <Element
              is={Box}
              backgroundColor="transparent"
              padding="0"
              margin="0 0 24px 0"
              display="block"
              canvas={false}
            >
              <CraftText
                text="Trusted by industry leaders worldwide"
                tagName="h3"
                fontSize="text-2xl"
                fontWeight="font-bold"
                color="text-gray-900"
                textAlign="text-center"
                margin="0"
              />
            </Element>

            {/* Company Logos */}
            <Element
              is={Flex}
              canvas
              flexDirection="row"
              justifyContent="center"
              alignItems="center"
              gap="gap-8"
              margin="0"
              wrap="wrap"
            >
              {testimonials.slice(0, 5).map((testimonial) => (
                testimonial.companyLogo && (
                  <Element
                    key={`company-${testimonial.id}`}
                    is={Box}
                    backgroundColor="transparent"
                    padding="0"
                    margin="0"
                    display="block"
                    width="120px"
                    height="40px"
                    canvas
                  >
                    <CraftImage
                      src={testimonial.companyLogo}
                      alt={testimonial.company}
                      width="w-full"
                      height="h-full"
                      objectFit="object-contain"
                      borderRadius=""
                      margin=""
                      padding=""
                    />
                  </Element>
                )
              ))}
            </Element>
          </Element>
        </Element>
      </Element>
    </Section>
  );
}

ModernTestimonials1.craft = {
  displayName: "Modern Testimonials 1",
  props: {
    // Section props
    backgroundColor: "#ffffff",
    padding: "0",
    minHeight: "auto",
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    contentPadding: "px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24 lg:px-8 lg:py-32",
    
    // Modern Testimonials specific props
    sectionTitle: "Loved by Thousands of Users Worldwide",
    sectionDescription: "Don't just take our word for it. See what real customers are saying about their experience.",
    testimonials: [
      {
        id: "testimonial-1",
        quote: "This platform has completely transformed how our team works. The AI features are incredible and save us hours every day.",
        author: "Sarah Chen",
        role: "Product Manager",
        company: "TechFlow Inc.",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b577?w=150&h=150&fit=crop&crop=face",
        rating: 5,
        companyLogo: "https://via.placeholder.com/100x40/4F46E5/FFFFFF?text=TechFlow"
      },
      {
        id: "testimonial-2", 
        quote: "The best investment we've made for our startup. Incredible ROI and the support team is always there when we need them.",
        author: "Marcus Rodriguez",
        role: "CEO & Founder",
        company: "StartupXYZ",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
        rating: 5,
        companyLogo: "https://via.placeholder.com/100x40/7C3AED/FFFFFF?text=StartupXYZ"
      },
      {
        id: "testimonial-3",
        quote: "We tried 10+ tools before finding this one. Nothing comes close to the features and ease of use. Game changer!",
        author: "Emily Johnson",
        role: "Head of Operations",
        company: "Scale Corp",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
        rating: 5,
        companyLogo: "https://via.placeholder.com/100x40/059669/FFFFFF?text=ScaleCorp"
      }
    ],
    stats: [
      { id: "customers", number: "10,000+", label: "Happy Customers" },
      { id: "satisfaction", number: "98%", label: "Satisfaction Rate" },
      { id: "reviews", number: "4.9/5", label: "Average Rating" },
      { id: "support", number: "24/7", label: "Support Available" }
    ],
    primaryColor: "#4F46E5",
    accentColor: "#F59E0B",
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
  isCanvas: false,
};