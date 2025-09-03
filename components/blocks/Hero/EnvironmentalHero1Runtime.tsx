import React from "react";

interface EnvironmentalHero1RuntimeProps {
  mainTitle?: string;
  description?: string;
  image1?: string;
  image2?: string;
  image3?: string;
  image4?: string;
  backgroundColor?: string;
  textColor?: string;
  shapeColor?: string;
  children?: React.ReactNode;
  [key: string]: any;
}

export const EnvironmentalHero1Runtime: React.FC<
  EnvironmentalHero1RuntimeProps
> = ({
  mainTitle = "Protect the planet for future generations",
  description = "Every step we take towards sustainability is a commitment to preserving nature's beauty and resources, for today and tomorrow.",
  image1 = "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop",
  image2 = "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=300&h=600&fit=crop",
  image3 = "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&h=300&fit=crop",
  image4 = "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&h=600&fit=crop",
  backgroundColor = "#F5F5DC",
  textColor = "#2D4A3A",
  shapeColor = "#E8F5E8",
  children,
  ...props
}) => {
  return (
    <section
      className="relative py-14 min-h-[800px]"
      style={{ backgroundColor }}
      {...props}
    >
      {/* Wavy Background Shape */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120' preserveAspectRatio='none'%3E%3Cpath d='M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z' fill='%23${shapeColor.replace(
            "#",
            ""
          )}'/%3E%3C/svg%3E")`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      />

      {/* Main Content Container */}
      <div className="container mx-auto px-4 relative z-10">
        {/* CSS Grid Layout */}
        <div
          className="relative z-10"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(12, 1fr)",
            gridTemplateRows: "repeat(13, 40px)",
            gap: "24px",
            minHeight: "600px",
          }}
        >
          {/* Title and Text Section */}
          <div
            style={{ gridArea: "1 / 8 / 10 / 13" }}
            className="flex flex-col justify-center p-6 z-10"
          >
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8"
              style={{ color: textColor }}
            >
              {mainTitle}
            </h1>

            <p
              className="text-lg md:text-xl leading-relaxed"
              style={{ color: textColor }}
            >
              {description}
            </p>
          </div>

          {/* Image 1 - Top Left */}
          <div style={{ gridArea: "1 / 1 / 5 / 5" }} className="z-20">
            <img
              src={image1}
              alt="Environmental conservation wildlife"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Image 2 - Center Tall */}
          <div
            style={{ gridArea: "1 / 5 / 10 / 8" }}
            className="z-30 hidden lg:block"
          >
            <img
              src={image2}
              alt="Sustainable forest conservation"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Image 3 - Bottom Left */}
          <div
            style={{ gridArea: "5 / 1 / 14 / 5" }}
            className="z-40 hidden lg:block"
          >
            <img
              src={image4}
              alt="Beach cleanup environmental action"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Image 4 - Bottom Wide */}
          <div
            style={{ gridArea: "10 / 5 / 14 / 13" }}
            className="z-50 hidden lg:block"
          >
            <img
              src={image3}
              alt="Wind turbines renewable energy"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>

      {children}
    </section>
  );
};
