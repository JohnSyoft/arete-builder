import { useNode, Element } from "@craftjs/core";
import { Text as CraftText } from "@/components/blocks/Basic/Text";
import { Image as CraftImage } from "@/components/blocks/Basic/Image";
import { Box } from "@/components/blocks/Basic/Box";
import { Flex } from "@/components/blocks/Basic/Flex";
import { Section, SectionProps } from "@/components/blocks/Basic/Section";

export interface CosmeticBeforeAfter1Props extends SectionProps {
  sectionTag?: string;
  mainTitle?: string;
  
  // Before/After Images
  beforeAfterImage1?: string;
  beforeAfterImage2?: string;
  
  // Statistics
  stat1Value?: string;
  stat1Unit?: string;
  stat1Title?: string;
  stat1Icon?: string;
  
  stat2Value?: string;
  stat2Unit?: string;
  stat2Title?: string;
  stat2Icon?: string;
  
  stat3Value?: string;
  stat3Unit?: string;
  stat3Title?: string;
  stat3Icon?: string;
  
  stat4Value?: string;
  stat4Unit?: string;
  stat4Title?: string;
  stat4Icon?: string;
  
  // Colors and styling
  backgroundColor?: string;
  textColor?: string;
  accentColor?: string;
  cardBackgroundColor?: string;
  [key: string]: any;
}

export const CosmeticBeforeAfter1 = ({
  sectionTag = "SEE THE DIFFERENCE",
  mainTitle = "Our real patient transformation & stunning results",
  beforeAfterImage1 = "https://demo.awaikenthemes.com/glowix/wp-content/uploads/2025/04/before-after-1.jpg",
  beforeAfterImage2 = "https://demo.awaikenthemes.com/glowix/wp-content/uploads/2025/04/before-after-2.jpg",
  
  stat1Value = "25",
  stat1Unit = "+",
  stat1Title = "Years Of Experience",
  stat1Icon = "experience",
  
  stat2Value = "150",
  stat2Unit = "K+",
  stat2Title = "Satisfied Clients",
  stat2Icon = "clients",
  
  stat3Value = "30",
  stat3Unit = "+",
  stat3Title = "Countries Reached",
  stat3Icon = "countries",
  
  stat4Value = "2",
  stat4Unit = "K+",
  stat4Title = "Classes Conducted",
  stat4Icon = "classes",
  
  backgroundColor = "#F8F5F0",
  textColor = "#2D1810",
  accentColor = "#E67E22",
  cardBackgroundColor = "#FFFFFF",
  ...props
}: CosmeticBeforeAfter1Props) => {
  const {
    connectors: { connect, drag },
    selected,
    hovered,
  } = useNode((state) => ({
    selected: state.events.selected,
    hovered: state.events.hovered,
  }));

  // Set section defaults
  const sectionProps = {
    backgroundColor: backgroundColor,
    padding: "0",
    minHeight: "auto",
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    contentPadding:
      "px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24 lg:px-8 lg:py-32",
    ...props,
  };

  const getIconSvg = (iconType: string) => {
    switch (iconType) {
      case "experience":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="34" height="35" viewBox="0 0 34 35" fill="none">
            <path d="M10.9286 32.1549C16.2937 32.1549 20.6429 27.8057 20.6429 22.4406C20.6429 17.0756 16.2937 12.7263 10.9286 12.7263C5.56359 12.7263 1.21436 17.0756 1.21436 22.4406C1.21436 27.8057 5.56359 32.1549 10.9286 32.1549Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M23.0715 32.1549C28.4365 32.1549 32.7857 27.8057 32.7857 22.4406C32.7857 17.0756 28.4365 12.7263 23.0715 12.7263C17.7064 12.7263 13.3572 17.0756 13.3572 22.4406C13.3572 27.8057 17.7064 32.1549 23.0715 32.1549Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M17.0002 22.4405C22.3652 22.4405 26.7145 18.0913 26.7145 12.7262C26.7145 7.3612 22.3652 3.01196 17.0002 3.01196C11.6351 3.01196 7.28589 7.3612 7.28589 12.7262C7.28589 18.0913 11.6351 22.4405 17.0002 22.4405Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      case "clients":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="51" height="51" viewBox="0 0 51 51" fill="none">
            <path d="M25.6799 28.5959C30.611 28.5959 34.6085 24.5985 34.6085 19.6673C34.6085 14.7362 30.611 10.7388 25.6799 10.7388C20.7488 10.7388 16.7513 14.7362 16.7513 19.6673C16.7513 24.5985 20.7488 28.5959 25.6799 28.5959Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M10.4298 42.5246C12.0235 39.9086 14.2634 37.7465 16.9341 36.2463C19.6048 34.746 22.6166 33.958 25.6798 33.958C28.743 33.958 31.7548 34.746 34.4255 36.2463C37.0962 37.7465 39.3361 39.9086 40.9298 42.5246" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M25.6799 48.2386C38.5008 48.2386 48.8941 37.8452 48.8941 25.0243C48.8941 12.2034 38.5008 1.81006 25.6799 1.81006C12.859 1.81006 2.46558 12.2034 2.46558 25.0243C2.46558 37.8452 12.859 48.2386 25.6799 48.2386Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      case "countries":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="34" height="35" viewBox="0 0 34 35" fill="none">
            <path d="M7.89244 15.0402C11.5809 15.0402 14.571 12.0501 14.571 8.36168C14.571 4.6732 11.5809 1.68311 7.89244 1.68311C4.20397 1.68311 1.21387 4.6732 1.21387 8.36168C1.21387 12.0501 4.20397 15.0402 7.89244 15.0402Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M26.1063 15.0402C29.7948 15.0402 32.7849 12.0501 32.7849 8.36168C32.7849 4.6732 29.7948 1.68311 26.1063 1.68311C22.4178 1.68311 19.4277 4.6732 19.4277 8.36168C19.4277 12.0501 22.4178 15.0402 26.1063 15.0402Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M7.89244 33.2545C11.5809 33.2545 14.571 30.2644 14.571 26.5759C14.571 22.8874 11.5809 19.8973 7.89244 19.8973C4.20397 19.8973 1.21387 22.8874 1.21387 26.5759C1.21387 30.2644 4.20397 33.2545 7.89244 33.2545Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M26.1063 33.2546C29.7948 33.2546 32.7849 30.2645 32.7849 26.576C32.7849 22.8876 29.7948 19.8975 26.1063 19.8975C22.4178 19.8975 19.4277 22.8876 19.4277 26.576C19.4277 30.2645 22.4178 33.2546 26.1063 33.2546Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      case "classes":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="51" height="51" viewBox="0 0 51 51" fill="none">
            <path d="M12.349 20.9173L21.4204 6.41734C21.772 5.84423 22.266 5.37194 22.8543 5.04648C23.4427 4.72102 24.1053 4.55349 24.7776 4.5602V4.5602C25.3071 4.54109 25.835 4.62831 26.3302 4.81672C26.8255 5.00513 27.2779 5.2909 27.6608 5.65714C28.0437 6.02339 28.3492 6.46267 28.5595 6.94902C28.7697 7.43538 28.8803 7.95894 28.8847 8.48877V18.8816H44.5633C45.1426 18.9004 45.7114 19.0416 46.2323 19.296C46.7531 19.5503 47.2143 19.912 47.5854 20.3573C47.9564 20.8026 48.229 21.3214 48.3853 21.8796C48.5415 22.4377 48.5778 23.0227 48.4919 23.5959L45.6347 42.0245C45.5128 43.0093 45.0355 43.9158 44.2923 44.5735C43.5491 45.2311 42.5914 45.5947 41.599 45.5959H18.1704C17.0551 45.6003 15.9543 45.3434 14.9561 44.8459L12.3847 43.5602" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12.349 20.9175V43.4532" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3.88471 20.9175H12.349V43.4532H3.88471C3.41111 43.4532 2.95691 43.2651 2.62202 42.9302C2.28714 42.5953 2.099 42.1411 2.099 41.6675V22.7032C2.099 22.2296 2.28714 21.7754 2.62202 21.4405C2.95691 21.1056 3.41111 20.9175 3.88471 20.9175V20.9175Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      default:
        return (
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        );
    }
  };

  const statistics = [
    { value: stat1Value, unit: stat1Unit, title: stat1Title, icon: stat1Icon },
    { value: stat2Value, unit: stat2Unit, title: stat2Title, icon: stat2Icon },
    { value: stat3Value, unit: stat3Unit, title: stat3Title, icon: stat3Icon },
    { value: stat4Value, unit: stat4Unit, title: stat4Title, icon: stat4Icon },
  ];

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
      <Section {...sectionProps}>
        <Element
          id="cosmeticBeforeAfterContainer"
          is={Box}
          backgroundColor="transparent"
          padding="0"
          margin="0"
          display="block"
          canvas
        >
          {/* Header Section */}
          <Element
            is={Flex}
            canvas
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap="gap-6"
            margin="mb-16"
            wrap="nowrap"
          >
            {/* Section Tag */}
            <Element
              is={Box}
              backgroundColor="transparent"
              padding="0"
              margin="0"
              display="block"
              canvas={false}
            >
              <CraftText
                text={sectionTag}
                tagName="h3"
                fontSize="text-sm"
                fontWeight="font-semibold"
                color={`text-[${accentColor}]`}
                textAlign="text-center"
                letterSpacing="tracking-[0.2em]"
              />
            </Element>

            {/* Main Title */}
            <Element
              is={Box}
              backgroundColor="transparent"
              padding="0"
              margin="0"
              display="block"
              canvas={false}
            >
              <CraftText
                text={mainTitle}
                tagName="h2"
                fontSize="text-3xl md:text-4xl lg:text-5xl"
                fontWeight="font-bold"
                color={`text-[${textColor}]`}
                textAlign="text-center"
                margin="0"
                lineHeight="leading-tight"
              />
            </Element>
          </Element>

          {/* Before/After Images Section */}
          <Element
            is={Flex}
            canvas
            flexDirection="row"
            justifyContent="center"
            alignItems="stretch"
            gap="gap-8"
            margin="mb-20"
            wrap="wrap"
          >
            {/* First Before/After Set */}
            <Element
              is={Box}
              backgroundColor="transparent"
              padding="0"
              margin="0"
              display="block"
              width="auto"
              canvas
            >
              <Element
                is={Box}
                backgroundColor="transparent"
                padding="0"
                margin="0"
                display="block"
                canvas={false}
              >
                <div className="relative group">
                  <div className="grid grid-cols-2 gap-4 w-[400px] h-[300px]">
                    {/* Before Image */}
                    <div className="relative overflow-hidden rounded-2xl">
                      <Element
                        is={Box}
                        backgroundColor="transparent"
                        padding="0"
                        margin="0"
                        display="block"
                        width="100%"
                        height="100%"
                        canvas
                      >
                        <CraftImage
                          src={beforeAfterImage1}
                          alt="Before treatment result"
                          width="w-full"
                          height="h-full"
                          objectFit="object-cover"
                          borderRadius=""
                          margin=""
                          padding=""
                        />
                      </Element>
                      
                      {/* Before Label */}
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="bg-black bg-opacity-70 backdrop-blur-sm rounded-lg px-4 py-2">
                          <CraftText
                            text="Before"
                            tagName="h3"
                            fontSize="text-lg"
                            fontWeight="font-bold"
                            color="text-white"
                            textAlign="text-center"
                            margin="0"
                          />
                        </div>
                      </div>
                    </div>

                    {/* After Image */}
                    <div className="relative overflow-hidden rounded-2xl">
                      <Element
                        is={Box}
                        backgroundColor="transparent"
                        padding="0"
                        margin="0"
                        display="block"
                        width="100%"
                        height="100%"
                        canvas
                      >
                        <CraftImage
                          src={beforeAfterImage1}
                          alt="After treatment result"
                          width="w-full"
                          height="h-full"
                          objectFit="object-cover"
                          borderRadius=""
                          margin=""
                          padding=""
                        />
                      </Element>
                      
                      {/* After Label */}
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="bg-black bg-opacity-70 backdrop-blur-sm rounded-lg px-4 py-2">
                          <CraftText
                            text="After"
                            tagName="h3"
                            fontSize="text-lg"
                            fontWeight="font-bold"
                            color="text-white"
                            textAlign="text-center"
                            margin="0"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Element>
            </Element>

            {/* Second Before/After Set */}
            <Element
              is={Box}
              backgroundColor="transparent"
              padding="0"
              margin="0"
              display="block"
              width="auto"
              canvas
            >
              <Element
                is={Box}
                backgroundColor="transparent"
                padding="0"
                margin="0"
                display="block"
                canvas={false}
              >
                <div className="relative group">
                  <div className="grid grid-cols-2 gap-4 w-[400px] h-[300px]">
                    {/* Before Image */}
                    <div className="relative overflow-hidden rounded-2xl">
                      <Element
                        is={Box}
                        backgroundColor="transparent"
                        padding="0"
                        margin="0"
                        display="block"
                        width="100%"
                        height="100%"
                        canvas
                      >
                        <CraftImage
                          src={beforeAfterImage2}
                          alt="Before treatment result"
                          width="w-full"
                          height="h-full"
                          objectFit="object-cover"
                          borderRadius=""
                          margin=""
                          padding=""
                        />
                      </Element>
                      
                      {/* Before Label */}
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="bg-black bg-opacity-70 backdrop-blur-sm rounded-lg px-4 py-2">
                          <CraftText
                            text="Before"
                            tagName="h3"
                            fontSize="text-lg"
                            fontWeight="font-bold"
                            color="text-white"
                            textAlign="text-center"
                            margin="0"
                          />
                        </div>
                      </div>
                    </div>

                    {/* After Image */}
                    <div className="relative overflow-hidden rounded-2xl">
                      <Element
                        is={Box}
                        backgroundColor="transparent"
                        padding="0"
                        margin="0"
                        display="block"
                        width="100%"
                        height="100%"
                        canvas
                      >
                        <CraftImage
                          src={beforeAfterImage2}
                          alt="After treatment result"
                          width="w-full"
                          height="h-full"
                          objectFit="object-cover"
                          borderRadius=""
                          margin=""
                          padding=""
                        />
                      </Element>
                      
                      {/* After Label */}
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="bg-black bg-opacity-70 backdrop-blur-sm rounded-lg px-4 py-2">
                          <CraftText
                            text="After"
                            tagName="h3"
                            fontSize="text-lg"
                            fontWeight="font-bold"
                            color="text-white"
                            textAlign="text-center"
                            margin="0"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Element>
            </Element>
          </Element>

          {/* Statistics Section */}
          <Element
            is={Flex}
            canvas
            flexDirection="row"
            justifyContent="center"
            alignItems="stretch"
            gap="gap-8"
            margin="0"
            wrap="wrap"
          >
            {statistics.map((stat, index) => (
              <Element
                key={index}
                is={Box}
                backgroundColor="transparent"
                padding="0"
                margin="0"
                display="block"
                width="auto"
                canvas
              >
                {/* Statistic Card */}
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
                  {/* Icon */}
                  <Element
                    is={Box}
                    backgroundColor="transparent"
                    padding="0"
                    margin="0"
                    display="block"
                    canvas={false}
                  >
                    <div className={`w-12 h-12 text-[${accentColor}] flex items-center justify-center`}>
                      {getIconSvg(stat.icon)}
                    </div>
                  </Element>

                  {/* Content */}
                  <Element
                    is={Box}
                    backgroundColor="transparent"
                    padding="0"
                    margin="0"
                    display="block"
                    canvas
                  >
                    {/* Number with Unit */}
                    <Element
                      is={Flex}
                      canvas
                      flexDirection="row"
                      justifyContent="start"
                      alignItems="baseline"
                      gap="gap-1"
                      margin="mb-1"
                      wrap="nowrap"
                    >
                      <Element
                        is={Box}
                        backgroundColor="transparent"
                        padding="0"
                        margin="0"
                        display="block"
                        canvas={false}
                      >
                        <CraftText
                          text={stat.value}
                          tagName="span"
                          fontSize="text-2xl md:text-3xl"
                          fontWeight="font-bold"
                          color={`text-[${textColor}]`}
                          textAlign="text-left"
                          margin="0"
                        />
                      </Element>

                      <Element
                        is={Box}
                        backgroundColor="transparent"
                        padding="0"
                        margin="0"
                        display="block"
                        canvas={false}
                      >
                        <CraftText
                          text={stat.unit}
                          tagName="span"
                          fontSize="text-xl md:text-2xl"
                          fontWeight="font-bold"
                          color={`text-[${accentColor}]`}
                          textAlign="text-left"
                          margin="0"
                        />
                      </Element>
                    </Element>

                    {/* Title */}
                    <Element
                      is={Box}
                      backgroundColor="transparent"
                      padding="0"
                      margin="0"
                      display="block"
                      canvas={false}
                    >
                      <CraftText
                        text={stat.title}
                        tagName="h3"
                        fontSize="text-sm md:text-base"
                        fontWeight="font-medium"
                        color={`text-[${textColor}]`}
                        textAlign="text-left"
                        margin="0"
                      />
                    </Element>
                  </Element>
                </Element>
              </Element>
            ))}
          </Element>
        </Element>
      </Section>
    </div>
  );
};

CosmeticBeforeAfter1.craft = {
  displayName: "Cosmetic Before After 1",
  props: {
    sectionTag: "SEE THE DIFFERENCE",
    mainTitle: "Our real patient transformation & stunning results",
    beforeAfterImage1: "https://demo.awaikenthemes.com/glowix/wp-content/uploads/2025/04/before-after-1.jpg",
    beforeAfterImage2: "https://demo.awaikenthemes.com/glowix/wp-content/uploads/2025/04/before-after-2.jpg",
    
    stat1Value: "25",
    stat1Unit: "+",
    stat1Title: "Years Of Experience",
    stat1Icon: "experience",
    
    stat2Value: "150",
    stat2Unit: "K+",
    stat2Title: "Satisfied Clients",
    stat2Icon: "clients",
    
    stat3Value: "30",
    stat3Unit: "+",
    stat3Title: "Countries Reached",
    stat3Icon: "countries",
    
    stat4Value: "2",
    stat4Unit: "K+",
    stat4Title: "Classes Conducted",
    stat4Icon: "classes",
    
    backgroundColor: "#F8F5F0",
    textColor: "#2D1810",
    accentColor: "#E67E22",
    cardBackgroundColor: "#FFFFFF",
  },
  rules: {
    canDrag: () => true,
    canDrop: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
};
