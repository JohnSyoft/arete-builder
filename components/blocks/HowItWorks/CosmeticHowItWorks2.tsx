import { useNode, Element } from "@craftjs/core";
import { Text as CraftText } from "@/components/blocks/Basic/Text";
import { Button as CraftButton } from "@/components/blocks/Basic/Button";
import { Box } from "@/components/blocks/Basic/Box";
import { Flex } from "@/components/blocks/Basic/Flex";
import { Section, SectionProps } from "@/components/blocks/Basic/Section";

export interface CosmeticHowItWorks2Props extends SectionProps {
  sectionTag?: string;
  mainTitle?: string;
  description?: string;
  buttonText?: string;
  step1Number?: string;
  step1Title?: string;
  step1Description?: string;
  step1Icon?: string;
  step2Number?: string;
  step2Title?: string;
  step2Description?: string;
  step2Icon?: string;
  step3Number?: string;
  step3Title?: string;
  step3Description?: string;
  step3Icon?: string;
  step4Number?: string;
  step4Title?: string;
  step4Description?: string;
  step4Icon?: string;
  backgroundColor?: string;
  textColor?: string;
  accentColor?: string;
  buttonColor?: string;
  cardBackgroundColor?: string;
  [key: string]: any;
}

export const CosmeticHowItWorks2 = ({
  sectionTag = "HOW IT WORK",
  mainTitle = "Simple steps to stunning transformations",
  description = "Discover a seamless process designed to enhance your beauty personalized consultations to expert procedures and dedicated aftercare, we guide you every step of the way toward achieving stunning.",
  buttonText = "Contact Us",
  step1Number = "01",
  step1Title = "Comprehensive Consultation",
  step1Description = "Our Comprehensive Consultation is a thorough meeting with one of our specialists to understand your goals.",
  step1Icon = `<svg xmlns="http://www.w3.org/2000/svg" width="34" height="35" viewBox="0 0 34 35" fill="none"><path d="M18.1416 17.5134C17.7814 17.6699 17.3928 17.7506 17.0001 17.7506C16.6074 17.7506 16.2189 17.6699 15.8587 17.5134L2.01585 11.102C1.79106 10.9886 1.60216 10.8151 1.47018 10.6007C1.33819 10.3863 1.26831 10.1395 1.26831 9.88773C1.26831 9.63597 1.33819 9.38915 1.47018 9.17476C1.60216 8.96037 1.79106 8.78682 2.01585 8.67345L15.8587 2.21345C16.2189 2.05703 16.6074 1.97632 17.0001 1.97632C17.3928 1.97632 17.7814 2.05703 18.1416 2.21345L31.9844 8.62488C32.2092 8.73825 32.3981 8.9118 32.5301 9.12619C32.6621 9.34058 32.732 9.5874 32.732 9.83916C32.732 10.0909 32.6621 10.3377 32.5301 10.5521C32.3981 10.7665 32.2092 10.9401 31.9844 11.0534L18.1416 17.5134Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M32.7858 18.6062L17.9715 25.4305C17.6551 25.5748 17.3114 25.6495 16.9636 25.6495C16.6159 25.6495 16.2722 25.5748 15.9558 25.4305L1.21436 18.6062" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M32.7858 26.4993L17.9715 33.3236C17.6551 33.4679 17.3114 33.5426 16.9636 33.5426C16.6159 33.5426 16.2722 33.4679 15.9558 33.3236L1.21436 26.4993" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>`,
  step2Number = "02",
  step2Title = "Personalized Treatment Plan",
  step2Description = "Our Comprehensive Consultation is a thorough meeting with one of our specialists to understand your goals.",
  step2Icon = `<svg xmlns="http://www.w3.org/2000/svg" width="34" height="35" viewBox="0 0 34 35" fill="none"><path d="M7.89244 15.0402C11.5809 15.0402 14.571 12.0501 14.571 8.36168C14.571 4.6732 11.5809 1.68311 7.89244 1.68311C4.20397 1.68311 1.21387 4.6732 1.21387 8.36168C1.21387 12.0501 4.20397 15.0402 7.89244 15.0402Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M26.1063 15.0402C29.7948 15.0402 32.7849 12.0501 32.7849 8.36168C32.7849 4.6732 29.7948 1.68311 26.1063 1.68311C22.4178 1.68311 19.4277 4.6732 19.4277 8.36168C19.4277 12.0501 22.4178 15.0402 26.1063 15.0402Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M7.89244 33.2545C11.5809 33.2545 14.571 30.2644 14.571 26.5759C14.571 22.8874 11.5809 19.8973 7.89244 19.8973C4.20397 19.8973 1.21387 22.8874 1.21387 26.5759C1.21387 30.2644 4.20397 33.2545 7.89244 33.2545Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M26.1063 33.2546C29.7948 33.2546 32.7849 30.2645 32.7849 26.576C32.7849 22.8876 29.7948 19.8975 26.1063 19.8975C22.4178 19.8975 19.4277 22.8876 19.4277 26.576C19.4277 30.2645 22.4178 33.2546 26.1063 33.2546Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>`,
  step3Number = "03",
  step3Title = "Expert Procedures",
  step3Description = "Our Comprehensive Consultation is a thorough meeting with one of our specialists to understand your goals.",
  step3Icon = `<svg xmlns="http://www.w3.org/2000/svg" width="34" height="35" viewBox="0 0 34 35" fill="none"><path d="M10.9286 32.1549C16.2937 32.1549 20.6429 27.8057 20.6429 22.4406C20.6429 17.0756 16.2937 12.7263 10.9286 12.7263C5.56359 12.7263 1.21436 17.0756 1.21436 22.4406C1.21436 27.8057 5.56359 32.1549 10.9286 32.1549Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M23.0715 32.1549C28.4365 32.1549 32.7857 27.8057 32.7857 22.4406C32.7857 17.0756 28.4365 12.7263 23.0715 12.7263C17.7064 12.7263 13.3572 17.0756 13.3572 22.4406C13.3572 27.8057 17.7064 32.1549 23.0715 32.1549Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M17.0002 22.4405C22.3652 22.4405 26.7145 18.0913 26.7145 12.7262C26.7145 7.3612 22.3652 3.01196 17.0002 3.01196C11.6351 3.01196 7.28589 7.3612 7.28589 12.7262C7.28589 18.0913 11.6351 22.4405 17.0002 22.4405Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>`,
  step4Number = "04",
  step4Title = "Ongoing Support & Follow-Up",
  step4Description = "Our Comprehensive Consultation is a thorough meeting with one of our specialists to understand your goals.",
  step4Icon = `<svg xmlns="http://www.w3.org/2000/svg" width="34" height="35" viewBox="0 0 34 35" fill="none"><path d="M3.64244 14.8644H6.07101C6.39306 14.8644 6.70192 14.9923 6.92964 15.22C7.15736 15.4478 7.2853 15.7566 7.2853 16.0787V22.1501C7.2853 22.4721 7.15736 22.781 6.92964 23.0087C6.70192 23.2364 6.39306 23.3644 6.07101 23.3644H3.64244C2.99834 23.3644 2.38062 23.1085 1.92518 22.6531C1.46973 22.1976 1.21387 21.5799 1.21387 20.9358V17.293C1.21387 16.6489 1.46973 16.0311 1.92518 15.5757C2.38062 15.1202 2.99834 14.8644 3.64244 14.8644V14.8644Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M30.3567 23.3644H27.9281C27.6061 23.3644 27.2972 23.2364 27.0695 23.0087C26.8418 22.781 26.7138 22.4721 26.7138 22.1501V16.0787C26.7138 15.7566 26.8418 15.4478 27.0695 15.22C27.2972 14.9923 27.6061 14.8644 27.9281 14.8644H30.3567C31.0008 14.8644 31.6185 15.1202 32.074 15.5757C32.5294 16.0311 32.7853 16.6489 32.7853 17.293V20.9358C32.7853 21.5799 32.5294 22.1976 32.074 22.6531C31.6185 23.1085 31.0008 23.3644 30.3567 23.3644V23.3644Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M23.0713 30.043C24.3595 30.043 25.5949 29.5312 26.5058 28.6203C27.4167 27.7094 27.9284 26.474 27.9284 25.1858V23.3644" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20.035 27.0073C20.8401 27.0073 21.6123 27.3272 22.1816 27.8965C22.7509 28.4658 23.0707 29.2379 23.0707 30.043C23.0707 30.8482 22.7509 31.6203 22.1816 32.1896C21.6123 32.7589 20.8401 33.0788 20.035 33.0788H16.3922C15.587 33.0788 14.8149 32.7589 14.2456 32.1896C13.6763 31.6203 13.3564 30.8482 13.3564 30.043C13.3564 29.2379 13.6763 28.4658 14.2456 27.8965C14.8149 27.3272 15.587 27.0073 16.3922 27.0073H20.035Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M6.07129 14.8643V12.4358C6.07129 9.53734 7.22269 6.75761 9.27219 4.70811C11.3217 2.6586 14.1014 1.5072 16.9999 1.5072C19.8983 1.5072 22.678 2.6586 24.7275 4.70811C26.777 6.75761 27.9284 9.53734 27.9284 12.4358V14.8643" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M13.3564 10.0072V13.6501" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20.6425 10.0072V13.6501" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M13.3564 18.5072C13.3564 21.7372 20.6422 21.7372 20.6422 18.5072" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>`,
  backgroundColor = "#ffffff",
  textColor = "#2D1810",
  accentColor = "#E67E22",
  buttonColor = "#E67E22",
  cardBackgroundColor = "#FFFFFF",
  ...props
}: CosmeticHowItWorks2Props) => {
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

  const steps = [
    {
      number: step1Number,
      title: step1Title,
      description: step1Description,
      icon: step1Icon,
    },
    {
      number: step2Number,
      title: step2Title,
      description: step2Description,
      icon: step2Icon,
    },
    {
      number: step3Number,
      title: step3Title,
      description: step3Description,
      icon: step3Icon,
    },
    {
      number: step4Number,
      title: step4Title,
      description: step4Description,
      icon: step4Icon,
    },
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
      <Element
        id="cosmetic-how-it-works-2-section"
        is={Section}
        {...sectionProps}
        canvas
      >
        <Element
          id="cosmetic-how-it-works-2-container"
          is={Flex}
          direction="row"
          align="start"
          justify="start"
          gap="8"
          className="w-full"
          canvas
        >
          {/* Left Column - Text Content */}
          <Element
            id="cosmetic-how-it-works-2-left-column"
            is={Box}
            className="w-full lg:w-1/3 lg:sticky lg:top-8"
            canvas
          >
            <Element
              id="cosmetic-how-it-works-2-content-wrapper"
              is={Flex}
              direction="column"
              gap="6"
              canvas
            >
              {/* Section Tag */}
              <Element
                id="cosmetic-how-it-works-2-tag"
                is={CraftText}
                text={sectionTag}
                fontSize="sm"
                fontWeight="600"
                color={accentColor}
                letterSpacing="wider"
                textTransform="uppercase"
                className="animate-fade-in-up"
              />

              {/* Main Title */}
              <Element
                id="cosmetic-how-it-works-2-title"
                is={CraftText}
                text={mainTitle}
                fontSize="4xl"
                fontWeight="700"
                color={textColor}
                lineHeight="tight"
                className="lg:text-5xl animate-fade-in-up animation-delay-100"
              />

              {/* Description */}
              <Element
                id="cosmetic-how-it-works-2-description"
                is={CraftText}
                text={description}
                fontSize="lg"
                color="#6B7280"
                lineHeight="relaxed"
                className="animate-fade-in-up animation-delay-200"
              />

              {/* Contact Button */}
              <Element
                id="cosmetic-how-it-works-2-button"
                is={CraftButton}
                text={buttonText}
                backgroundColor={buttonColor}
                textColor="#FFFFFF"
                padding="12px 24px"
                borderRadius="8px"
                fontSize="base"
                fontWeight="600"
                border="none"
                className="w-fit hover:opacity-90 transition-opacity duration-200 animate-fade-in-up animation-delay-300"
                icon={`<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none"><path d="M12.157 4.14171L1.7154 14.5833L0 12.8679L10.4404 2.42631H1.23863V0H14.5833V13.3447H12.157V4.14171Z" fill="currentColor"></path></svg>`}
                iconPosition="right"
              />
            </Element>
          </Element>

          {/* Right Column - Steps Grid */}
          <Element
            id="cosmetic-how-it-works-2-right-column"
            is={Box}
            className="w-full lg:w-2/3"
            canvas
          >
            <Element
              id="cosmetic-how-it-works-2-steps-grid"
              is={Box}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              canvas
            >
              {steps.map((step, index) => (
                <Element
                  key={index}
                  id={`cosmetic-how-it-works-2-step-${index + 1}`}
                  is={Box}
                  className={`bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 animate-fade-in-up`}
                  style={{
                    animationDelay: `${(index + 1) * 100}ms`,
                    backgroundColor: cardBackgroundColor,
                  }}
                  canvas
                >
                  <Element
                    id={`cosmetic-how-it-works-2-step-${index + 1}-content`}
                    is={Flex}
                    direction="column"
                    gap="4"
                    canvas
                  >
                    {/* Icon */}
                    <Element
                      id={`cosmetic-how-it-works-2-step-${index + 1}-icon`}
                      is={Box}
                      className="w-12 h-12 flex items-center justify-center rounded-full"
                      style={{
                        backgroundColor: `${accentColor}20`,
                        color: accentColor,
                      }}
                      dangerouslySetInnerHTML={{ __html: step.icon }}
                    />

                    {/* Title with Number */}
                    <Element
                      id={`cosmetic-how-it-works-2-step-${index + 1}-title`}
                      is={CraftText}
                      text={`${step.number}. ${step.title}`}
                      fontSize="xl"
                      fontWeight="700"
                      color={textColor}
                      lineHeight="snug"
                    />

                    {/* Description */}
                    <Element
                      id={`cosmetic-how-it-works-2-step-${
                        index + 1
                      }-description`}
                      is={CraftText}
                      text={step.description}
                      fontSize="base"
                      color="#6B7280"
                      lineHeight="relaxed"
                    />
                  </Element>
                </Element>
              ))}
            </Element>
          </Element>
        </Element>
      </Element>

      {/* Craft.js Selection Indicator */}
      {(selected || hovered) && (
        <div className="absolute top-0 left-0 bg-blue-500 text-white text-xs px-2 py-1 rounded-br z-10">
          Cosmetic How It Works 2
        </div>
      )}

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .animation-delay-100 {
          animation-delay: 100ms;
        }

        .animation-delay-200 {
          animation-delay: 200ms;
        }

        .animation-delay-300 {
          animation-delay: 300ms;
        }
      `}</style>
    </div>
  );
};

CosmeticHowItWorks2.craft = {
  displayName: "Cosmetic How It Works 2",
  props: {
    sectionTag: "HOW IT WORK",
    mainTitle: "Simple steps to stunning transformations",
    description:
      "Discover a seamless process designed to enhance your beauty personalized consultations to expert procedures and dedicated aftercare, we guide you every step of the way toward achieving stunning.",
    buttonText: "Contact Us",
    step1Number: "01",
    step1Title: "Comprehensive Consultation",
    step1Description:
      "Our Comprehensive Consultation is a thorough meeting with one of our specialists to understand your goals.",
    step1Icon: `<svg xmlns="http://www.w3.org/2000/svg" width="34" height="35" viewBox="0 0 34 35" fill="none"><path d="M18.1416 17.5134C17.7814 17.6699 17.3928 17.7506 17.0001 17.7506C16.6074 17.7506 16.2189 17.6699 15.8587 17.5134L2.01585 11.102C1.79106 10.9886 1.60216 10.8151 1.47018 10.6007C1.33819 10.3863 1.26831 10.1395 1.26831 9.88773C1.26831 9.63597 1.33819 9.38915 1.47018 9.17476C1.60216 8.96037 1.79106 8.78682 2.01585 8.67345L15.8587 2.21345C16.2189 2.05703 16.6074 1.97632 17.0001 1.97632C17.3928 1.97632 17.7814 2.05703 18.1416 2.21345L31.9844 8.62488C32.2092 8.73825 32.3981 8.9118 32.5301 9.12619C32.6621 9.34058 32.732 9.5874 32.732 9.83916C32.732 10.0909 32.6621 10.3377 32.5301 10.5521C32.3981 10.7665 32.2092 10.9401 31.9844 11.0534L18.1416 17.5134Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M32.7858 18.6062L17.9715 25.4305C17.6551 25.5748 17.3114 25.6495 16.9636 25.6495C16.6159 25.6495 16.2722 25.5748 15.9558 25.4305L1.21436 18.6062" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M32.7858 26.4993L17.9715 33.3236C17.6551 33.4679 17.3114 33.5426 16.9636 33.5426C16.6159 33.5426 16.2722 33.4679 15.9558 33.3236L1.21436 26.4993" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>`,
    step2Number: "02",
    step2Title: "Personalized Treatment Plan",
    step2Description:
      "Our Comprehensive Consultation is a thorough meeting with one of our specialists to understand your goals.",
    step2Icon: `<svg xmlns="http://www.w3.org/2000/svg" width="34" height="35" viewBox="0 0 34 35" fill="none"><path d="M7.89244 15.0402C11.5809 15.0402 14.571 12.0501 14.571 8.36168C14.571 4.6732 11.5809 1.68311 7.89244 1.68311C4.20397 1.68311 1.21387 4.6732 1.21387 8.36168C1.21387 12.0501 4.20397 15.0402 7.89244 15.0402Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M26.1063 15.0402C29.7948 15.0402 32.7849 12.0501 32.7849 8.36168C32.7849 4.6732 29.7948 1.68311 26.1063 1.68311C22.4178 1.68311 19.4277 4.6732 19.4277 8.36168C19.4277 12.0501 22.4178 15.0402 26.1063 15.0402Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M7.89244 33.2545C11.5809 33.2545 14.571 30.2644 14.571 26.5759C14.571 22.8874 11.5809 19.8973 7.89244 19.8973C4.20397 19.8973 1.21387 22.8874 1.21387 26.5759C1.21387 30.2644 4.20397 33.2545 7.89244 33.2545Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M26.1063 33.2546C29.7948 33.2546 32.7849 30.2645 32.7849 26.576C32.7849 22.8876 29.7948 19.8975 26.1063 19.8975C22.4178 19.8975 19.4277 22.8876 19.4277 26.576C19.4277 30.2645 22.4178 33.2546 26.1063 33.2546Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>`,
    step3Number: "03",
    step3Title: "Expert Procedures",
    step3Description:
      "Our Comprehensive Consultation is a thorough meeting with one of our specialists to understand your goals.",
    step3Icon: `<svg xmlns="http://www.w3.org/2000/svg" width="34" height="35" viewBox="0 0 34 35" fill="none"><path d="M10.9286 32.1549C16.2937 32.1549 20.6429 27.8057 20.6429 22.4406C20.6429 17.0756 16.2937 12.7263 10.9286 12.7263C5.56359 12.7263 1.21436 17.0756 1.21436 22.4406C1.21436 27.8057 5.56359 32.1549 10.9286 32.1549Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M23.0715 32.1549C28.4365 32.1549 32.7857 27.8057 32.7857 22.4406C32.7857 17.0756 28.4365 12.7263 23.0715 12.7263C17.7064 12.7263 13.3572 17.0756 13.3572 22.4406C13.3572 27.8057 17.7064 32.1549 23.0715 32.1549Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M17.0002 22.4405C22.3652 22.4405 26.7145 18.0913 26.7145 12.7262C26.7145 7.3612 22.3652 3.01196 17.0002 3.01196C11.6351 3.01196 7.28589 7.3612 7.28589 12.7262C7.28589 18.0913 11.6351 22.4405 17.0002 22.4405Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>`,
    step4Number: "04",
    step4Title: "Ongoing Support & Follow-Up",
    step4Description:
      "Our Comprehensive Consultation is a thorough meeting with one of our specialists to understand your goals.",
    step4Icon: `<svg xmlns="http://www.w3.org/2000/svg" width="34" height="35" viewBox="0 0 34 35" fill="none"><path d="M3.64244 14.8644H6.07101C6.39306 14.8644 6.70192 14.9923 6.92964 15.22C7.15736 15.4478 7.2853 15.7566 7.2853 16.0787V22.1501C7.2853 22.4721 7.15736 22.781 6.92964 23.0087C6.70192 23.2364 6.39306 23.3644 6.07101 23.3644H3.64244C2.99834 23.3644 2.38062 23.1085 1.92518 22.6531C1.46973 22.1976 1.21387 21.5799 1.21387 20.9358V17.293C1.21387 16.6489 1.46973 16.0311 1.92518 15.5757C2.38062 15.1202 2.99834 14.8644 3.64244 14.8644V14.8644Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M30.3567 23.3644H27.9281C27.6061 23.3644 27.2972 23.2364 27.0695 23.0087C26.8418 22.781 26.7138 22.4721 26.7138 22.1501V16.0787C26.7138 15.7566 26.8418 15.4478 27.0695 15.22C27.2972 14.9923 27.6061 14.8644 27.9281 14.8644H30.3567C31.0008 14.8644 31.6185 15.1202 32.074 15.5757C32.5294 16.0311 32.7853 16.6489 32.7853 17.293V20.9358C32.7853 21.5799 32.5294 22.1976 32.074 22.6531C31.6185 23.1085 31.0008 23.3644 30.3567 23.3644V23.3644Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M23.0713 30.043C24.3595 30.043 25.5949 29.5312 26.5058 28.6203C27.4167 27.7094 27.9284 26.474 27.9284 25.1858V23.3644" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20.035 27.0073C20.8401 27.0073 21.6123 27.3272 22.1816 27.8965C22.7509 28.4658 23.0707 29.2379 23.0707 30.043C23.0707 30.8482 22.7509 31.6203 22.1816 32.1896C21.6123 32.7589 20.8401 33.0788 20.035 33.0788H16.3922C15.587 33.0788 14.8149 32.7589 14.2456 32.1896C13.6763 31.6203 13.3564 30.8482 13.3564 30.043C13.3564 29.2379 13.6763 28.4658 14.2456 27.8965C14.8149 27.3272 15.587 27.0073 16.3922 27.0073H20.035Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M6.07129 14.8643V12.4358C6.07129 9.53734 7.22269 6.75761 9.27219 4.70811C11.3217 2.6586 14.1014 1.5072 16.9999 1.5072C19.8983 1.5072 22.678 2.6586 24.7275 4.70811C26.777 6.75761 27.9284 9.53734 27.9284 12.4358V14.8643" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M13.3564 10.0072V13.6501" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20.6425 10.0072V13.6501" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M13.3564 18.5072C13.3564 21.7372 20.6422 21.7372 20.6422 18.5072" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>`,
    backgroundColor: "#ffffff",
    textColor: "#2D1810",
    accentColor: "#E67E22",
    buttonColor: "#E67E22",
    cardBackgroundColor: "#FFFFFF",
  },
  rules: {
    canDrag: () => true,
    canDrop: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
};
