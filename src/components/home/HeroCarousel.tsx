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
    backgroundColor: "bg-gradient-to-br from-white via-orange-50 to-orange-100",
    type: "topSeller",
  },
  {
    id: "slide2",
    title: "New! Organic Ragi Cookies",
    description: "Introducing our new finger food for growing toddlers.",
    ctaText: "Discover Now",
    ctaLink: "/product/ragi-banana-cookies",
    imageSrc: "/placeholder.svg",
    backgroundColor: "bg-gradient-to-br from-white via-green-50 to-emerald-100",
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
    backgroundColor: "bg-gradient-to-br from-white via-yellow-50 to-amber-100",
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
    backgroundColor: "bg-gradient-to-br from-white via-purple-50 to-purple-100",
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
  offer: "bg-gradient-to-r from-orange-500 to-red-500 text-white border-0 shadow-lg",
  topSeller: "bg-gradient-to-r from-blue-500 to-indigo-600 text-white border-0 shadow-lg",
  newLaunch: "bg-gradient-to-r from-emerald-500 to-green-600 text-white border-0 shadow-lg",
  promotion: "bg-gradient-to-r from-purple-500 to-pink-600 text-white border-0 shadow-lg",
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
        setApi={(carouselApi) => {
          setApi(carouselApi);
          carouselApi?.on("select", () => {
            setActiveIndex(carouselApi.selectedScrollSnap());
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
                  "border-0 overflow-hidden rounded-2xl shadow-2xl backdrop-blur-sm",
                  slide.backgroundColor,
                )}
              >
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row h-full">
                    <div className="p-6 md:p-10 flex flex-col justify-center md:w-1/2">
                      <span
                        className={cn(
                          "inline-block px-4 py-4 rounded-full text-base font-medium mb-4 border font-quicksand w-auto self-start",
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
                          className="rounded-full px-8 font-quicksand bg-gradient-to-r from-[#1a5de6] to-[#2662d9] hover:from-[#1548c4] hover:to-[#1e56c7] shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
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

            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3 z-10">
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  className={cn(
                    "rounded-full transition-all duration-300 border-2 shadow-lg",
                    activeIndex === index
                      ? "bg-white w-12 h-3 border-white shadow-xl scale-110 animate-pulse"
                      : "w-3 h-3 bg-white/60 border-white/80 hover:bg-white/80 hover:scale-105",
                  )}
                  onClick={() => {
                    api?.scrollTo(index);
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
