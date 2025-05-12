import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface AgeCategory {
  id: string;
  age: string;
  title: string;
  description: string;
  backgroundClass: string;
  iconSrc: string;
}

const ageCategories: AgeCategory[] = [
  {
    id: "stage1",
    age: "0-6 months",
    title: "First Tastes",
    description:
      "Gentle first foods to introduce your baby to solid food journey.",
    backgroundClass: "bg-[#D4EDDA]",
    iconSrc: "/placeholder.svg",
  },
  {
    id: "stage2",
    age: "6-12 months",
    title: "Exploring Flavors",
    description: "Diverse textures and flavors as your baby's palate develops.",
    backgroundClass: "bg-[#F8D7DA]",
    iconSrc: "/placeholder.svg",
  },
  {
    id: "stage3",
    age: "12-24 months",
    title: "Growing Toddlers",
    description: "Nutrient-rich foods for your active toddler's growing needs.",
    backgroundClass: "bg-[#E2D9F3]",
    iconSrc: "/placeholder.svg",
  },
  {
    id: "stage4",
    age: "24+ months",
    title: "Little Foodies",
    description: "Delicious meals that transition to family-style eating.",
    backgroundClass: "bg-[#FEF6E4]",
    iconSrc: "/placeholder.svg",
  },
];

const AgeBasedSection = () => {
  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold text-slate-800 mb-4">
          Age-Appropriate Nutrition
        </h2>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Every stage of your baby's growth requires specific nutrients. Our
          products are carefully crafted for each developmental milestone.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {ageCategories.map((category) => (
          <div
            key={category.id}
            className={cn(
              "rounded-xl p-6 flex flex-col items-center text-center transition-transform hover:scale-[1.02]",
              category.backgroundClass,
            )}
          >
            <div className="w-20 h-20 mb-4 rounded-full bg-white/30 flex items-center justify-center">
              <img
                src={category.iconSrc}
                alt={category.title}
                className="w-12 h-12"
              />
            </div>
            <span className="bg-white/50 text-sm rounded-full px-3 py-1 mb-3">
              {category.age}
            </span>
            <h3 className="text-xl font-semibold mb-2 text-slate-800">
              {category.title}
            </h3>
            <p className="text-slate-600 mb-5 text-sm">
              {category.description}
            </p>
            <Button
              asChild
              variant="outline"
              className="mt-auto bg-white hover:bg-white/80 rounded-full"
            >
              <Link to={`/shop?age=${category.age.replace(/ /g, "-")}`}>
                Shop Now
              </Link>
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AgeBasedSection;
