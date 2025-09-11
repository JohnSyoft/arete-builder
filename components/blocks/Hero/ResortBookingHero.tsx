import { Button } from "@/components/blocks/Basic/Button";
import { Image } from "@/components/blocks/Basic/Image";
import { Section, SectionProps } from "@/components/blocks/Basic/Section";

export interface ResortBookingHeroProps extends SectionProps {
  mainTitle?: string;
  subtitle?: string;
  description?: string;
  heroImage?: string;
  logoImage?: string;
  bookingButtonText?: string;
  checkInLabel?: string;
  checkOutLabel?: string;
  guestsLabel?: string;
  roomsLabel?: string;
  searchButtonText?: string;
  trustBadge1?: string;
  trustBadge2?: string;
  ratingText?: string;
  reviewsText?: string;
}

export function ResortBookingHero({
  mainTitle = "Escape to Paradise",
  subtitle = "Luxury Resort & Spa",
  description = "Experience unparalleled luxury at our world-class resort with pristine beaches, award-winning spa, and exceptional dining.",
  heroImage = "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2160&q=80",
  logoImage = "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
  bookingButtonText = "Book Your Stay",
  checkInLabel = "Check In",
  checkOutLabel = "Check Out",
  guestsLabel = "Guests",
  roomsLabel = "Rooms",
  searchButtonText = "Search Availability",
  trustBadge1 = "5-Star Luxury",
  trustBadge2 = "Award Winning",
  ratingText = "4.9/5",
  reviewsText = "2,847 reviews",
  ...props
}: ResortBookingHeroProps) {
  const heroProps = {
    backgroundColor: "transparent",
    padding: "0",
    minHeight: "100vh",
    hasContentWrapper: false,
    ...props,
  };

  return (
    <Section {...heroProps}>
      <div className="relative w-full h-[100vh] flex items-center justify-center overflow-hidden">
        {/* Resort Image Background */}
        <Image
          src={heroImage}
          alt="Luxury Resort"
          width="w-full"
          height="h-full"
          objectFit="object-cover"
          className="absolute inset-0 w-full h-full z-0"
        />
        {/* Overlay for contrast */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/40 to-black/80 z-10" />

        {/* Main Content Overlay */}
        <div className="relative z-20 w-full max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Resort Info */}
          <div className="flex flex-col gap-6 text-white">
            <div className="flex gap-3 mb-2">
              <span className="bg-white/10 text-xs font-semibold px-3 py-1 rounded-full">
                {trustBadge1}
              </span>
              <span className="bg-white/10 text-xs font-semibold px-3 py-1 rounded-full">
                {trustBadge2}
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-2 drop-shadow-lg">
              {mainTitle}
            </h1>
            <h2 className="text-lg md:text-2xl font-light text-yellow-300 mb-2">
              {subtitle}
            </h2>
            <p className="text-base md:text-lg text-gray-200 mb-4 max-w-xl">
              {description}
            </p>
            <div className="flex items-center gap-3 mb-4">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <span className="font-semibold text-white text-base">
                {ratingText}
              </span>
              <span className="text-sm text-gray-300">{reviewsText}</span>
            </div>
            <Button
              text={bookingButtonText}
              backgroundColor="#D4AF37"
              textColor="#FFFFFF"
              borderRadius="8px"
              padding="px-8 py-4"
              width="w-auto"
            />
          </div>

          {/* Right: Booking Card */}
          <div className="bg-white/95 rounded-2xl shadow-xl p-8 flex flex-col gap-6 w-full max-w-md mx-auto">
            <h3 className="text-xl font-bold text-gray-900 text-center mb-2">
              Book Your Perfect Stay
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {checkInLabel}
                </label>
                <input
                  type="date"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {checkOutLabel}
                </label>
                <input
                  type="date"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {guestsLabel}
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent">
                  <option value="1">1 Guest</option>
                  <option value="2">2 Guests</option>
                  <option value="3">3 Guests</option>
                  <option value="4">4 Guests</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {roomsLabel}
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent">
                  <option value="1">1 Room</option>
                  <option value="2">2 Rooms</option>
                  <option value="3">3 Rooms</option>
                </select>
              </div>
            </div>
            <Button
              text={searchButtonText}
              backgroundColor="#D4AF37"
              textColor="#FFFFFF"
              borderRadius="8px"
              padding="px-8 py-4"
              width="w-full"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}

ResortBookingHero.craft = {
  displayName: "Resort Booking Hero",
  props: {
    mainTitle: "Escape to Paradise",
    subtitle: "Luxury Resort & Spa",
    description:
      "Experience unparalleled luxury at our world-class resort with pristine beaches, award-winning spa, and exceptional dining.",
    heroImage:
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2160&q=80",
    logoImage:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    bookingButtonText: "Book Your Stay",
    checkInLabel: "Check In",
    checkOutLabel: "Check Out",
    guestsLabel: "Guests",
    roomsLabel: "Rooms",
    searchButtonText: "Search Availability",
    trustBadge1: "5-Star Luxury",
    trustBadge2: "Award Winning",
    ratingText: "4.9/5",
    reviewsText: "2,847 reviews",
  },
  rules: {
    canDrag: () => true,
    canDrop: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
};
