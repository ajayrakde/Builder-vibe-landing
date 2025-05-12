import { Fragment } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BackgroundElements from "@/components/decorative/BackgroundElements";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  ChevronLeft,
  Calendar,
  User,
} from "lucide-react";

// Mock blog post data
interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  coverImage: string;
  author: string;
  date: string;
  slug: string;
  tags: string[];
  content: string;
  authorImage?: string;
  authorBio?: string;
  related?: string[]; // Slugs of related posts
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "The Importance of Iron in Your Baby's Diet",
    excerpt:
      "Learn why iron is crucial for your baby's development and the best food sources to include in their diet.",
    category: "Nutrition",
    coverImage: "/placeholder.svg",
    author: "Dr. Anand Mehta",
    authorImage: "/placeholder.svg",
    authorBio:
      "Pediatric nutritionist with 15 years of experience in child development and nutrition.",
    date: "April 15, 2023",
    slug: "iron-in-baby-diet",
    tags: ["nutrition", "iron", "baby-development"],
    content: `
      <p>Iron is a vital nutrient for babies, especially as they reach the 6-month mark. It plays a crucial role in brain development, immune function, and overall growth.</p>
      
      <h2>Why Iron Matters for Babies</h2>
      
      <p>Iron helps transport oxygen throughout the body and is essential for brain development. Babies are born with iron stores that begin to deplete around 4-6 months of age. That's why introducing iron-rich foods becomes particularly important when starting solid foods.</p>
      
      <p>Iron deficiency in infancy has been linked to cognitive delays and behavioral problems that may persist even after iron levels are restored. This makes ensuring adequate iron intake a priority for parents.</p>
      
      <h2>Signs of Iron Deficiency</h2>
      
      <p>While a blood test is the only definitive way to diagnose iron deficiency, some signs to watch for include:</p>
      
      <ul>
        <li>Pale skin</li>
        <li>Fatigue or weakness</li>
        <li>Poor appetite</li>
        <li>Slow weight gain</li>
        <li>Frequent infections</li>
      </ul>
      
      <p>If you notice these symptoms, consult your pediatrician about testing your baby's iron levels.</p>
      
      <h2>Iron-Rich Foods for Babies</h2>
      
      <p>When introducing solids to your baby, consider these excellent sources of iron:</p>
      
      <h3>Iron-Fortified Baby Cereals</h3>
      
      <p>Iron-fortified baby cereals, like our Kanhaa Organic Ragi Cereal, are specifically designed to help meet babies' iron needs. They're often recommended as a first food because they're easy to digest and provide significant amounts of this crucial nutrient.</p>
      
      <h3>Meat and Poultry</h3>
      
      <p>Animal sources provide heme iron, which is more easily absorbed by the body. Pureed beef, chicken, and turkey are excellent options for babies starting solids.</p>
      
      <h3>Plant-Based Sources</h3>
      
      <p>For vegetarian families, lentils, beans, tofu, and dark leafy greens like spinach provide non-heme iron. While this form isn't absorbed as efficiently as heme iron, pairing these foods with vitamin C-rich fruits and vegetables can enhance absorption.</p>
      
      <h2>Enhancing Iron Absorption</h2>
      
      <p>To maximize the iron your baby gets from food:</p>
      
      <ul>
        <li>Serve iron-rich foods with sources of vitamin C (like strawberries, oranges, or bell peppers)</li>
        <li>Avoid serving calcium-rich foods (like dairy) at the same time as iron-rich foods, as calcium can interfere with iron absorption</li>
        <li>Cook in cast-iron cookware, which can increase the iron content of foods</li>
      </ul>
      
      <h2>Kanhaa's Approach to Iron</h2>
      
      <p>At Kanhaa, we recognize the importance of iron in your baby's diet. That's why many of our products, particularly those designed for babies 6+ months, contain naturally iron-rich ingredients or are thoughtfully fortified to help meet your baby's needs.</p>
      
      <p>Our Organic Ragi Cereal, for example, provides 40% of your baby's daily iron requirements per serving, making it an excellent choice for parents concerned about iron intake.</p>
      
      <h2>Conclusion</h2>
      
      <p>Ensuring your baby gets enough iron is one of the most important nutritional considerations during the transition to solid foods. By offering a variety of iron-rich foods and following tips to enhance absorption, you can support your baby's development and set the foundation for lifelong health.</p>
      
      <p>Always consult with your pediatrician if you have concerns about your baby's iron levels or if you're considering iron supplements, as too much iron can also be harmful.</p>
    `,
    related: [
      "finger-foods-recipes",
      "ready-for-solids",
      "organic-foods-impact",
    ],
  },
  {
    id: "2",
    title: "5 Easy Homemade Finger Foods for Toddlers",
    excerpt:
      "Simple, nutritious finger food recipes that your toddler will love and that support their development.",
    category: "Recipes",
    coverImage: "/placeholder.svg",
    author: "Meera Patel",
    authorImage: "/placeholder.svg",
    authorBio:
      "Food scientist specialized in developing nutritious, delicious baby food formulations.",
    date: "March 28, 2023",
    slug: "finger-foods-recipes",
    tags: ["recipes", "finger-foods", "toddlers"],
    content: `
      <p>Introducing finger foods is an exciting milestone in your baby's development. Not only does it help them practice their fine motor skills, but it also encourages independence and self-feeding. Here are five easy, nutritious finger food recipes that are perfect for little hands.</p>
      
      <h2>When to Introduce Finger Foods</h2>
      
      <p>Most babies are ready for finger foods around 8-10 months, when they can sit unassisted, grab objects with a pincer grasp (thumb and forefinger), and have started to develop chewing skills. Always supervise your baby during mealtimes and ensure that foods are soft enough to be mashed with gentle pressure between your fingers.</p>
      
      <h2>Recipe 1: Sweet Potato and Lentil Fingers</h2>
      
      <p><strong>Ingredients:</strong></p>
      <ul>
        <li>1 large sweet potato, peeled and diced</li>
        <li>1/2 cup red lentils, rinsed</li>
        <li>1/4 teaspoon cumin (optional)</li>
        <li>1/4 cup whole wheat flour</li>
      </ul>
      
      <p><strong>Method:</strong></p>
      <ol>
        <li>Steam sweet potato until soft, about 15 minutes.</li>
        <li>Cook lentils according to package directions until soft, then drain well.</li>
        <li>Mash sweet potato and lentils together in a bowl.</li>
        <li>Add cumin if using and flour, mix until a dough forms.</li>
        <li>Shape into small fingers about the size of your pinky.</li>
        <li>Bake at 180°C for 20 minutes, flipping halfway, until golden.</li>
      </ol>
      
      <p>These fingers are packed with protein, fiber, and beta-carotene. They can be stored in the refrigerator for up to 3 days or frozen for up to 3 months.</p>
      
      <h2>Recipe 2: Mini Spinach and Cheese Muffins</h2>
      
      <p><strong>Ingredients:</strong></p>
      <ul>
        <li>1 cup whole wheat flour</li>
        <li>1 teaspoon baking powder</li>
        <li>1 egg</li>
        <li>1/4 cup olive oil</li>
        <li>1/2 cup milk</li>
        <li>1 cup finely chopped spinach</li>
        <li>1/2 cup grated cheese</li>
      </ul>
      
      <p><strong>Method:</strong></p>
      <ol>
        <li>Preheat oven to 180°C and grease a mini muffin tin.</li>
        <li>Mix dry ingredients in a bowl.</li>
        <li>In another bowl, whisk egg, oil, and milk.</li>
        <li>Combine wet and dry ingredients, then fold in spinach and cheese.</li>
        <li>Spoon mixture into muffin tin and bake for 15-18 minutes until a toothpick comes out clean.</li>
        <li>Allow to cool before serving.</li>
      </ol>
      
      <p>These muffins provide iron from spinach and calcium from cheese, both essential nutrients for growing toddlers.</p>
      
      <h2>Recipe 3: Banana Oat Pancake Strips</h2>
      
      <p><strong>Ingredients:</strong></p>
      <ul>
        <li>1 ripe banana</li>
        <li>1 egg</li>
        <li>1/4 cup rolled oats</li>
        <li>Pinch of cinnamon (optional)</li>
      </ul>
      
      <p><strong>Method:</strong></p>
      <ol>
        <li>Mash banana in a bowl until smooth.</li>
        <li>Add egg and mix well.</li>
        <li>Stir in oats and cinnamon if using.</li>
        <li>Heat a non-stick pan over medium heat.</li>
        <li>Pour small pancakes (about 2 tablespoons of batter each) and cook until bubbles form, then flip.</li>
        <li>Once cooked, cut into strips for easy gripping.</li>
      </ol>
      
      <p>These simple pancakes require no added sugar, as the banana provides natural sweetness. They're rich in energy and fiber to fuel your active toddler.</p>
      
      <h2>Recipe 4: Vegetable Fritters</h2>
      
      <p><strong>Ingredients:</strong></p>
      <ul>
        <li>1 zucchini, grated</li>
        <li>1 carrot, grated</li>
        <li>1/4 cup corn kernels</li>
        <li>2 tablespoons whole wheat flour</li>
        <li>1 egg</li>
      </ul>
      
      <p><strong>Method:</strong></p>
      <ol>
        <li>Place grated zucchini in a clean kitchen towel and squeeze out excess moisture.</li>
        <li>In a bowl, combine all vegetables, flour, and egg.</li>
        <li>Heat a little oil in a pan over medium heat.</li>
        <li>Drop tablespoons of mixture into the pan and flatten slightly.</li>
        <li>Cook for 2-3 minutes each side until golden.</li>
        <li>Drain on paper towels before serving.</li>
      </ol>
      
      <p>These fritters are a wonderful way to incorporate multiple vegetables into your toddler's diet in a format they can easily manage.</p>
      
      <h2>Recipe 5: Apple and Oat Bars</h2>
      
      <p><strong>Ingredients:</strong></p>
      <ul>
        <li>1 apple, grated</li>
        <li>1 cup rolled oats</li>
        <li>1/4 cup unsweetened applesauce</li>
        <li>2 tablespoons melted coconut oil</li>
        <li>1/2 teaspoon cinnamon</li>
      </ul>
      
      <p><strong>Method:</strong></p>
      <ol>
        <li>Preheat oven to 160°C and line a small baking dish with parchment paper.</li>
        <li>Mix all ingredients in a bowl until well combined.</li>
        <li>Press mixture firmly into the baking dish.</li>
        <li>Bake for 25-30 minutes until golden and firm.</li>
        <li>Cool completely before cutting into small bars.</li>
      </ol>
      
      <p>These bars make a perfect snack on the go and can be stored in an airtight container for up to 5 days.</p>
      
      <h2>Tips for Successful Finger Food Introduction</h2>
      
      <ul>
        <li>Always supervise your baby or toddler during meals</li>
        <li>Start with soft foods that dissolve easily</li>
        <li>Cut foods into appropriate sizes to prevent choking (typically, pieces should be no larger than 1/2 inch for babies)</li>
        <li>Expect mess and embrace it as part of the learning process</li>
        <li>Offer a variety of flavors and textures to develop a broad palate</li>
      </ul>
      
      <p>Remember that it's normal for babies to reject new foods multiple times before accepting them. Continue offering a variety of options, and don't be discouraged if your first attempts aren't met with enthusiasm.</p>
      
      <p>At Kanhaa, we understand the importance of this stage in your baby's development. Our Ragi & Banana Cookies are specially formulated to be easy for little hands to hold and safe for developing eaters, while providing essential nutrients for growth.</p>
    `,
    related: ["ready-for-solids", "food-allergies", "positive-mealtime"],
  },
  {
    id: "3",
    title: "Signs Your Baby is Ready for Solid Foods",
    excerpt:
      "How to recognize when your baby is developmentally ready to start exploring solid foods.",
    category: "Parenting",
    coverImage: "/placeholder.svg",
    author: "Priya Sharma",
    authorImage: "/placeholder.svg",
    authorBio:
      "Founder of Kanhaa and mother of two, passionate about nutrition and providing the best start for babies.",
    date: "February 12, 2023",
    slug: "ready-for-solids",
    tags: ["first-foods", "baby-development", "parenting-tips"],
    content: `
      <p>Introducing solid foods is an exciting milestone in your baby's development, but knowing exactly when to start can be confusing for many parents. While the general recommendation is around 6 months, every baby develops at their own pace, and it's important to look for specific signs of readiness rather than just following the calendar.</p>
      
      <h2>Why Timing Matters</h2>
      
      <p>Starting solids too early may increase the risk of food allergies and digestive issues, as your baby's gut is still developing. On the other hand, delaying too long could potentially lead to nutritional gaps, particularly for iron, which becomes increasingly important after 6 months of age.</p>
      
      <p>The World Health Organization (WHO) and many pediatric associations recommend exclusive breastfeeding for the first six months, followed by the introduction of complementary foods while continuing breastfeeding. However, the right time to introduce solids should be based on your baby's developmental readiness.</p>
      
      <h2>5 Clear Signs Your Baby is Ready for Solids</h2>
      
      <h3>1. Good Head and Neck Control</h3>
      
      <p>Your baby should be able to hold their head up steadily and sit upright with minimal support. This is crucial for safe swallowing and reduces the risk of choking.</p>
      
      <h3>2. Loss of Tongue-Thrust Reflex</h3>
      
      <p>Younger babies naturally push food out of their mouths with their tongues. This protective reflex diminishes as they mature. When your baby can accept food and move it to the back of their mouth for swallowing, they're showing readiness.</p>
      
      <h3>3. Interest in Food</h3>
      
      <p>Does your baby watch intently when you eat, reach for your food, or open their mouth when you're eating? These are clear signs of curiosity about food, which indicates psychological readiness.</p>
      
      <h3>4. Development of the "Pincer Grasp"</h3>
      
      <p>While not essential for first purees, the ability to pick up small objects between thumb and forefinger (usually developing around 8-10 months) shows readiness for self-feeding. If your baby is starting to develop this skill, they may be ready for small, soft finger foods after initial introduction to purees.</p>
      
      <h3>5. Ability to Signal Fullness</h3>
      
      <p>Your baby should be able to communicate when they're full by turning their head away, closing their mouth, or showing decreased interest. This helps establish healthy eating patterns from the start.</p>
      
      <h2>Signs That May Be Misleading</h2>
      
      <p>Some behaviors are often misinterpreted as signs of readiness for solids but may actually indicate other needs:</p>
      
      <ul>
        <li><strong>Waking at night:</strong> Contrary to popular belief, starting solids rarely improves sleep patterns in babies younger than 6 months. Night waking is normal and may be due to developmental changes, comfort needs, or growth spurts.</li>
        <li><strong>Chewing fists:</strong> This is a normal developmental behavior and often signals teething rather than hunger.</li>
        <li><strong>Seeming dissatisfied after milk feeds:</strong> This might indicate a growth spurt that requires more frequent nursing or bottle feeding, not necessarily a need for solids.</li>
      </ul>
      
      <h2>How to Introduce First Foods</h2>
      
      <p>Once you've determined your baby is ready, here are some tips for a smooth introduction to solids:</p>
      
      <ul>
        <li>Start with single-ingredient foods, introducing one new food every 3-5 days to watch for possible allergic reactions</li>
        <li>Begin with iron-rich foods like iron-fortified baby cereal (such as our Kanhaa Organic Ragi Cereal), pureed meat, or well-cooked and pureed lentils</li>
        <li>Offer solids when your baby is alert and slightly hungry, but not starving</li>
        <li>Make early feedings tiny (1-2 teaspoons) and gradually increase as your baby shows interest</li>
        <li>Continue offering breast milk or formula as the primary nutrition source for the first year</li>
      </ul>
      
      <h2>Special Considerations</h2>
      
      <h3>Premature Babies</h3>
      
      <p>If your baby was born prematurely, you'll need to consider their corrected age (calculated from their due date, not birth date) when determining readiness for solids. Consult with your pediatrician for guidance specific to your baby's needs.</p>
      
      <h3>Babies with Developmental Delays</h3>
      
      <p>If your baby has any developmental concerns, work closely with your healthcare provider to determine the best approach to introducing solid foods. Some babies may need additional support or modified approaches.</p>
      
      <h2>Trust Your Baby and Your Instincts</h2>
      
      <p>Remember that starting solids is not a race. Some babies take to eating eagerly, while others approach new foods cautiously. Follow your baby's cues, be patient, and try to make mealtime a relaxed, positive experience for both of you.</p>
      
      <p>At Kanhaa, we understand this transition can be both exciting and overwhelming. That's why our Stage 1 foods are specially formulated to be gentle first foods that support your baby's nutritional needs during this important developmental phase.</p>
      
      <p>Always consult with your pediatrician if you have specific questions about your baby's readiness for solid foods or if you notice any concerns during the introduction process.</p>
    `,
    related: ["iron-in-baby-diet", "finger-foods-recipes", "baby-led-weaning"],
  },
];

// Function to find a post by its slug
const findPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find((post) => post.slug === slug);
};

// Function to get related posts
const getRelatedPosts = (relatedSlugs: string[] = []): BlogPost[] => {
  return relatedSlugs
    .map((slug) => blogPosts.find((post) => post.slug === slug))
    .filter((post): post is BlogPost => post !== undefined)
    .slice(0, 3); // Limit to 3 related posts
};

const BlogPost = () => {
  const { postSlug } = useParams<{ postSlug: string }>();
  const navigate = useNavigate();

  const post = postSlug ? findPostBySlug(postSlug) : undefined;
  const relatedPosts = post?.related ? getRelatedPosts(post.related) : [];

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-semibold text-slate-800 mb-4">
              Blog Post Not Found
            </h1>
            <Link to="/blog" className="text-primary hover:underline">
              Back to Blog
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <Fragment>
      <BackgroundElements density="low" />
      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-grow">
          {/* Hero section */}
          <section className="bg-gradient-to-b from-[#E2D9F3] to-white pt-10 pb-16">
            <div className="max-w-4xl mx-auto px-4">
              <div className="mb-8">
                <Button
                  variant="ghost"
                  className="flex items-center text-slate-600"
                  onClick={() => navigate(-1)}
                >
                  <ChevronLeft className="mr-1 h-4 w-4" />
                  Back
                </Button>
              </div>

              <Badge className="mb-4" variant="outline">
                {post.category}
              </Badge>

              <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
                {post.title}
              </h1>

              <div className="flex items-center text-slate-600 text-sm mb-8">
                <div className="flex items-center mr-6">
                  <Calendar className="mr-2 h-4 w-4" />
                  {post.date}
                </div>
                <div className="flex items-center">
                  <User className="mr-2 h-4 w-4" />
                  {post.author}
                </div>
              </div>

              <div className="h-72 md:h-96 rounded-xl overflow-hidden">
                <img
                  src={post.coverImage}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </section>

          {/* Article content */}
          <section className="py-12 px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Article content - main area */}
                <div className="md:col-span-3">
                  <article className="prose prose-slate max-w-none">
                    <div dangerouslySetInnerHTML={{ __html: post.content }} />
                  </article>

                  {/* Tags */}
                  <div className="mt-8 pt-8 border-t">
                    <h3 className="text-sm font-medium text-slate-700 mb-4">
                      Tagged with:
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="outline"
                          className="capitalize"
                        >
                          {tag.replace(/-/g, " ")}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Social sharing */}
                  <div className="mt-8 pt-8 border-t">
                    <h3 className="text-sm font-medium text-slate-700 mb-4">
                      Share this article:
                    </h3>
                    <div className="flex space-x-4">
                      <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full"
                      >
                        <FacebookIcon className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full"
                      >
                        <TwitterIcon className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full"
                      >
                        <LinkedinIcon className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Sidebar */}
                <div className="md:col-span-1">
                  {/* Author info */}
                  <div className="mb-8 p-6 bg-slate-50 rounded-xl">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-16 h-16 rounded-full overflow-hidden mb-4">
                        <img
                          src={post.authorImage || "/placeholder.svg"}
                          alt={post.author}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h3 className="font-medium text-slate-800 mb-1">
                        {post.author}
                      </h3>
                      <p className="text-sm text-slate-600 mb-4">
                        {post.authorBio}
                      </p>
                      <Button
                        variant="outline"
                        className="w-full rounded-full text-sm"
                      >
                        View All Posts
                      </Button>
                    </div>
                  </div>

                  {/* Newsletter signup */}
                  <div className="p-6 bg-[#FEF6E4] rounded-xl">
                    <h3 className="font-medium text-slate-800 mb-4">
                      Subscribe to Our Newsletter
                    </h3>
                    <p className="text-sm text-slate-600 mb-4">
                      Get the latest articles and recipes delivered straight to
                      your inbox.
                    </p>
                    <Button className="w-full rounded-full">Subscribe</Button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Related articles */}
          {relatedPosts.length > 0 && (
            <section className="py-12 px-4 bg-slate-50">
              <div className="max-w-7xl mx-auto">
                <h2 className="text-2xl font-bold text-slate-800 mb-8">
                  Related Articles
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {relatedPosts.map((relatedPost) => (
                    <div
                      key={relatedPost.id}
                      className="bg-white rounded-xl overflow-hidden shadow-sm"
                    >
                      <div className="h-48">
                        <img
                          src={relatedPost.coverImage}
                          alt={relatedPost.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-6">
                        <Badge className="mb-3" variant="outline">
                          {relatedPost.category}
                        </Badge>
                        <h3 className="font-semibold text-lg mb-2 text-slate-800">
                          {relatedPost.title}
                        </h3>
                        <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                          {relatedPost.excerpt}
                        </p>
                        <Link
                          to={`/blog/${relatedPost.slug}`}
                          className="text-primary text-sm font-medium"
                        >
                          Read More
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}
        </main>

        <Footer />
      </div>
    </Fragment>
  );
};

export default BlogPost;
