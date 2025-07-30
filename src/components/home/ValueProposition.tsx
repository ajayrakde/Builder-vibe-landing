import { cn } from "@/lib/utils";

interface Feature {
  id: string;
  title: string;
  description: string;
  iconSvg: React.ReactNode;
  color: string;
}

const features: Feature[] = [
  {
    id: "organic",
    title: "100% Organic",
    description:
      "All ingredients are certified organic, grown without harmful pesticides or synthetic fertilizers.",
    color: "bg-green-50 text-green-700",
    iconSvg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
        <path d="M7.5 12L10.5 15L16.5 9" />
      </svg>
    ),
  },
  {
    id: "zero-sugar",
    title: "Zero Added Sugar",
    description:
      "We never add refined sugars to our products. Any sweetness comes naturally from fruits.",
    color: "bg-blue-50 text-blue-700",
    iconSvg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M18 6L6 18" />
        <path d="M6 6L18 18" />
      </svg>
    ),
  },
  {
    id: "preservative-free",
    title: "No Preservatives",
    description:
      "Free from artificial preservatives, colors, and flavors. Just pure, natural goodness.",
    color: "bg-purple-50 text-purple-700",
    iconSvg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M20.5 7.27783L12 12.0001L3.5 7.27783V17.5001C3.5 18.3285 4.17157 19.0001 5 19.0001H19C19.8284 19.0001 20.5 18.3285 20.5 17.5001V7.27783Z" />
        <path d="M12 12L12 3" />
        <path d="M8.5 5.5L12 3L15.5 5.5" />
      </svg>
    ),
  },
  {
    id: "nutrient-rich",
    title: "Nutrient Rich",
    description:
      "Packed with essential vitamins, minerals, and nutrients critical for your baby's development.",
    color: "bg-amber-50 text-amber-700",
    iconSvg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M4.5 9.5C4.5 11.433 6.067 13 8 13C9.933 13 11.5 11.433 11.5 9.5C11.5 7.567 9.933 6 8 6C6.067 6 4.5 7.567 4.5 9.5Z" />
        <path d="M12.5 16.5C12.5 18.433 14.067 20 16 20C17.933 20 19.5 18.433 19.5 16.5C19.5 14.567 17.933 13 16 13C14.067 13 12.5 14.567 12.5 16.5Z" />
        <path d="M11 9L16 15" />
      </svg>
    ),
  },
];

const ValueProposition = () => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">
            Our Promise to Your Little One
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            At Kanhaa, we believe that what goes into your baby's body matters.
            Our commitment to quality and nutrition is unwavering.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-white rounded-xl shadow-sm p-6 flex flex-col items-center text-center"
            >
              <div className={cn("rounded-full p-3 mb-4", feature.color)}>
                {feature.iconSvg}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-800">
                {feature.title}
              </h3>
              <p className="text-slate-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
