import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Priya Sharma",
    role: "Mother of 10-month-old",
    avatar: "/placeholder.svg",
    rating: 5,
    content:
      "I was constantly worried about what to feed my baby. Kanhaa's products have been a lifesaver - nutritious, convenient, and my daughter absolutely loves them!",
  },
  {
    id: "t2",
    name: "Rahul Verma",
    role: "Father of twins",
    avatar: "/placeholder.svg",
    rating: 5,
    content:
      "With twins, meal times can be chaotic. Kanhaa's organic cereals and finger foods have made feeding time so much easier, and I love that there's no added sugar.",
  },
  {
    id: "t3",
    name: "Ananya Patel",
    role: "Mom of 16-month-old",
    avatar: "/placeholder.svg",
    rating: 4,
    content:
      "The variety of flavors helps introduce my toddler to different tastes. The ragi cookies are his favorite - I even catch myself snacking on them sometimes!",
  },
  {
    id: "t4",
    name: "Dr. Meera Iyer",
    role: "Pediatric Nutritionist",
    avatar: "/placeholder.svg",
    rating: 5,
    content:
      "I recommend Kanhaa to parents in my practice. Their commitment to clean, preservative-free ingredients and age-appropriate nutrition is exactly what growing babies need.",
  },
  {
    id: "t5",
    name: "Vikram Singh",
    role: "Father of 8-month-old",
    avatar: "/placeholder.svg",
    rating: 5,
    content:
      "The subscription service is so convenient - never running out of my son's favorite purees! The packaging is also eco-friendly, which I appreciate.",
  },
];

const TestimonialsSection = () => {
  const isMobile = useIsMobile();

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-[#FEF6E4]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">
            What Parents Say
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Join thousands of happy parents who trust Kanhaa for their baby's
            nutrition journey.
          </p>
        </div>

        <Carousel
          className="w-full"
          opts={{
            align: "start",
            loop: true,
            slidesToScroll: isMobile ? 1 : 2,
          }}
        >
          <CarouselContent className="-ml-4">
            {testimonials.map((testimonial) => (
              <CarouselItem
                key={testimonial.id}
                className="pl-4 md:basis-1/2 lg:basis-1/3"
              >
                <TestimonialCard testimonial={testimonial} />
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="flex justify-center mt-8">
            <CarouselPrevious className="static mx-2 transform-none" />
            <CarouselNext className="static mx-2 transform-none" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  return (
    <Card className="h-full bg-white border-none shadow-sm">
      <CardContent className="p-6">
        <div className="flex items-center mb-4">
          <img
            src={testimonial.avatar}
            alt={testimonial.name}
            className="w-12 h-12 rounded-full mr-4 object-cover"
          />
          <div>
            <h4 className="font-semibold text-slate-800">{testimonial.name}</h4>
            <p className="text-slate-500 text-sm">{testimonial.role}</p>
          </div>
        </div>

        <div className="flex mb-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <span
              key={i}
              className={cn(
                "text-lg",
                i < testimonial.rating ? "text-yellow-400" : "text-gray-300",
              )}
            >
              ★
            </span>
          ))}
        </div>

        <p className="text-slate-600">"{testimonial.content}"</p>
      </CardContent>
    </Card>
  );
};

export default TestimonialsSection;
