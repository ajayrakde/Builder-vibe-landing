import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { useIsMobile } from "@/hooks/use-mobile";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface HeroSlide {
  id: string;
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  imageSrc: string;
  backgroundColor: string;
  type: "offer" | "topSeller" | "newLaunch" | "promotion";
}

const heroSlides: HeroSlide[] = [
  {
    id: "slide1",
    title: "Naturally Nutritious Baby Food",
    description:
      "Zero preservatives, zero added sugar - just real food for your little one.",
    ctaText: "Shop Bestsellers",
    ctaLink: "/shop",
    imageSrc: "/placeholder.svg",
    backgroundColor: "bg-gradient-to-r from-blue-50 to-blue-100",
    type: "topSeller",
  },
  {
    id: "slide2",
    title: "New! Organic Ragi Cookies",
    description: "Introducing our new finger food for growing toddlers.",
    ctaText: "Discover Now",
    ctaLink: "/product/ragi-banana-cookies",
    imageSrc: "/placeholder.svg",
    backgroundColor: "bg-gradient-to-r from-slate-50 to-blue-50",
    type: "newLaunch",
  },
  {
    id: "slide3",
    title: "25% Off First Subscription",
    description:
      "Never run out of your baby's favorite food with our subscription.",
    ctaText: "Get Started",
    ctaLink: "/subscriptions",
    imageSrc: "/placeholder.svg",
    backgroundColor: "bg-gradient-to-r from-blue-100 to-slate-100",
    type: "offer",
  },
  {
    id: "slide4",
    title: "Join Kanhaa Moms Community",
    description:
      "Get exclusive recipes, parenting tips and early access to new products.",
    ctaText: "Join Now",
    ctaLink: "/community",
    imageSrc: "/placeholder.svg",
    backgroundColor: "bg-gradient-to-r from-slate-100 to-blue-50",
    type: "promotion",
  },
];

const typeLabels = {
  offer: "Limited Time Offer",
  topSeller: "Customer Favorite",
  newLaunch: "New Launch",
  promotion: "Kanhaa Exclusive",
};

const typeColors = {
  offer: "bg-orange-100 text-orange-800 border-orange-200",
  topSeller: "bg-blue-100 text-blue-800 border-blue-200",
  newLaunch: "bg-green-100 text-green-800 border-green-200",
  promotion: "bg-purple-100 text-purple-800 border-purple-200",
};

const HeroCarousel = () => {
  const isMobile = useIsMobile();
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const [api, setApi] = useState<any>();

  useEffect(() => {
    let intervalId: number | undefined;

    if (autoplay && api) {
      intervalId = window.setInterval(() => {
        api.scrollNext();
      }, 5000);
    }

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [autoplay, api]);

  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-6 md:py-10 overflow-hidden">
      <Carousel
        className="w-full relative"
        setApi={(api) => {
          api?.on("select", () => {
            setActiveIndex(api.selectedScrollSnap());
          });
        }}
        opts={{
          align: "start",
          loop: true,
        }}
        onMouseEnter={() => setAutoplay(false)}
        onMouseLeave={() => setAutoplay(true)}
      >
        <CarouselContent>
          {heroSlides.map((slide) => (
            <CarouselItem key={slide.id}>
              <Card
                className={cn(
                  "border-0 overflow-hidden rounded-xl shadow-sm",
                  slide.backgroundColor,
                )}
              >
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row h-full">
                    <div className="p-6 md:p-10 flex flex-col justify-center md:w-1/2">
                      <span
                        className={cn(
                          "inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 border font-quicksand",
                          typeColors[slide.type],
                        )}
                      >
                        {typeLabels[slide.type]}
                      </span>
                      <h2 className="text-2xl md:text-4xl font-bold mb-4 text-slate-800 font-quicksand">
                        {slide.title}
                      </h2>
                      <p className="text-slate-600 mb-6 font-quicksand">
                        {slide.description}
                      </p>
                      <div>
                        <Button
                          size="lg"
                          className="rounded-full px-8 font-quicksand"
                        >
                          {slide.ctaText}
                        </Button>
                      </div>
                    </div>
                    <div className="md:w-1/2 h-48 md:h-auto flex items-center justify-center">
                      <img
                        src={slide.imageSrc}
                        alt={slide.title}
                        className="h-full md:h-80 w-auto object-contain"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              className={cn(
                "w-2 h-2 rounded-full transition-all",
                activeIndex === index
                  ? "bg-primary w-8"
                  : "bg-gray-300 hover:bg-gray-400",
              )}
              onClick={() => {
                setActiveIndex(index);
              }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <CarouselPrevious
          className={cn(
            isMobile ? "hidden" : "left-4 bg-white/80 hover:bg-white",
          )}
        />
        <CarouselNext
          className={cn(
            isMobile ? "hidden" : "right-4 bg-white/80 hover:bg-white",
          )}
        />
      </Carousel>
    </section>
  );
};

export default HeroCarousel;
