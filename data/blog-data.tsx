import BlogOne from "@/assets/01.jpg";
import BlogTwo from "@/assets/02.jpg";
import BlogThree from "@/assets/03.webp";
import BlogFour from "@/assets/04.webp";
import BlogFive from "@/assets/05.webp";
import BlogSix from "@/assets/06.webp";
import BlogSeven from "@/assets/07.webp";
import BlogEight from "@/assets/08.webp";
import BlogNine from "@/assets/09.webp";
import BlogTen from "@/assets/10.webp";
import BlogEleven from "@/assets/11.webp";
import BlogTweleve from "@/assets/12.webp";
import BlogThirteen from "@/assets/13.webp";
import BlogFourteen from "@/assets/14.jpg";
import BlogFifteen from "@/assets/15.jpg";
import BlogSixteen from "@/assets/16.jpg";
import BlogSeventeen from "@/assets/17.jpg";
import BlogEighteen from "@/assets/18.jpg";
import BlogNineteen from "@/assets/19.jpg";
import BlogTwenty from "@/assets/20.jpg";
import BlogTwentyOne from "@/assets/21.jpg";
import BlogTwentyTwo from "@/assets/22.jpg";
import BlogTwentyThree from "@/assets/23.jpg";
import BlogTwentyFour from "@/assets/24.jpg";
import BlogTwentyFive from "@/assets/25.jpg";
import BlogTwentySix from "@/assets/26.jpg";
import BlogTwentySeven from "@/assets/27.jpg";
import BlogTwentyEight from "@/assets/28.jpeg";
import BlogTwentyNine from "@/assets/29.jpeg";
import BlogThirty from "@/assets/30.jpeg";

export const blog_categories = [
  {
    id: 1,
    title: "Electronics",
    slug: "electronics",
  },
  {
    id: 2,
    title: "Clothing",
    slug: "clothing",
  },
  {
    id: 3,
    title: "Home Decor",
    slug: "home-decor",
  },
  {
    id: 4,
    title: "Sports & Outdoors",
    slug: "sports-outdoors",
  },
  {
    id: 5,
    title: "Books & Literature",
    slug: "books-literature",
  },
  {
    id: 6,
    title: "Health & Wellness",
    slug: "health-wellness",
  },
  {
    id: 7,
    title: "Automotive",
    slug: "automotive",
  },
  {
    id: 8,
    title: "Gourmet Food",
    slug: "gourmet-food",
  },
  {
    id: 9,
    title: "Travel & Adventure",
    slug: "travel-adventure",
  },
  {
    id: 10,
    title: "Art & Crafts",
    slug: "art-crafts",
  },
];

export const users = [
  {
    id: 1,
    name: "John Doe",
    user_name: "johndoe",
  },
  {
    id: 2,
    name: "Jane Smith",
    user_name: "janesmith",
  },
  {
    id: 3,
    name: "Alice Johnson",
    user_name: "alicejohnson",
  },
  {
    id: 4,
    name: "Bob Brown",
    user_name: "bobbrown",
  },
  {
    id: 5,
    name: "Eva Davis",
    user_name: "evadavis",
  },
  {
    id: 6,
    name: "Michael Wilson",
    user_name: "michaelwilson",
  },
  {
    id: 7,
    name: "Olivia White",
    user_name: "oliviawhite",
  },
  {
    id: 8,
    name: "David Lee",
    user_name: "davidlee",
  },
  {
    id: 9,
    name: "Sophia Martinez",
    user_name: "sophiamartinez",
  },
  {
    id: 10,
    name: "Liam Anderson",
    user_name: "liamanderson",
  },
];

export const blogs = [
  {
    id: 1,
    title: "Introduction to Electronics",
    content:
      "This blog introduces the world of electronics and its various components.",
    image: BlogOne,
    user_id: 1,
    category_id: 1,
    slug: "introduction-to-electronics",
  },
  {
    id: 2,
    title: "Fashion Trends in 2023",
    content:
      "Explore the latest fashion trends for the year 2023 in this blog.",
    image: BlogTwo,
    user_id: 2,
    category_id: 2,
    slug: "fashion-trends-in-2023",
  },
  {
    id: 3,
    title: "Decorating Your Home on a Budget",
    content:
      "Learn how to decorate your home beautifully without breaking the bank.",
    image: BlogThree,
    user_id: 3,
    category_id: 3,
    slug: "decorating-your-home-on-a-budget",
  },
  {
    id: 4,
    title: "Outdoor Adventures: Hiking Tips",
    content: "Discover essential hiking tips for your next outdoor adventure.",
    image: BlogFour,
    user_id: 4,
    category_id: 4,
    slug: "outdoor-adventures-hiking-tips",
  },
  {
    id: 5,
    title: "Book Recommendations for Bookworms",
    content: "Explore a list of must-read books for all book lovers out there.",
    image: BlogFive,
    user_id: 5,
    category_id: 5,
    slug: "book-recommendations-for-bookworms",
  },
  {
    id: 6,
    title: "Healthy Living: Tips and Tricks",
    content: "Stay fit and healthy with these practical tips and tricks.",
    image: BlogSix,
    user_id: 6,
    category_id: 6,
    slug: "healthy-living-tips-and-tricks",
  },
  {
    id: 7,
    title: "Maintaining Your Car: DIY Guide",
    content: "Learn how to perform basic car maintenance with this DIY guide.",
    image: BlogSeven,
    user_id: 7,
    category_id: 7,
    slug: "maintaining-your-car-diy-guide",
  },
  {
    id: 8,
    title: "Gourmet Food Recipes",
    content:
      "Indulge in delicious gourmet food with these mouthwatering recipes.",
    image: BlogEight,
    user_id: 8,
    category_id: 8,
    slug: "gourmet-food-recipes",
  },
  {
    id: 9,
    title: "Travel Tales: Exploring New Horizons",
    content: "Embark on exciting travel adventures and explore new horizons.",
    image: BlogNine,
    user_id: 9,
    category_id: 9,
    slug: "travel-tales-exploring-new-horizons",
  },
  {
    id: 10,
    title: "Art & Craft Projects",
    content: "Get creative with these art and craft project ideas.",
    image: BlogTen,
    user_id: 10,
    category_id: 10,
    slug: "art-and-craft-projects",
  },
  {
    id: 11,
    title: "Electronics Troubleshooting",
    content:
      "Learn how to troubleshoot common electronics problems and fix them.",
    image: BlogEleven,
    user_id: 1,
    category_id: 1,
    slug: "electronics-troubleshooting",
  },
  {
    id: 12,
    title: "Fashion Tips for All Seasons",
    content: "Discover fashion tips that work for every season and occasion.",
    image: BlogTweleve,
    user_id: 2,
    category_id: 2,
    slug: "fashion-tips-for-all-seasons",
  },
  {
    id: 13,
    title: "DIY Home Decor Ideas",
    content: "Transform your home with creative DIY home decor ideas.",
    image: BlogThirteen,
    user_id: 3,
    category_id: 3,
    slug: "diy-home-decor-ideas",
  },
  {
    id: 14,
    title: "Camping and Outdoor Adventures",
    content: "Plan your next camping trip with these outdoor adventure tips.",
    image: BlogFourteen,
    user_id: 4,
    category_id: 4,
    slug: "camping-and-outdoor-adventures",
  },
  {
    id: 15,
    title: "Bestseller Book Reviews",
    content:
      "Read reviews of bestselling books and find your next favorite read.",
    image: BlogFifteen,
    user_id: 5,
    category_id: 5,
    slug: "bestseller-book-reviews",
  },
  {
    id: 16,
    title: "Holistic Health and Wellness",
    content:
      "Embrace holistic wellness with these practices for mind and body.",
    image: BlogSixteen,
    user_id: 6,
    category_id: 6,
    slug: "holistic-health-and-wellness",
  },
  {
    id: 17,
    title: "Car Maintenance Tips",
    content: "Keep your car in top shape with these car maintenance tips.",
    image: BlogSeventeen,
    user_id: 7,
    category_id: 7,
    slug: "car-maintenance-tips",
  },
  {
    id: 18,
    title: "Exquisite Gourmet Dishes",
    content: "Create exquisite gourmet dishes that will impress your guests.",
    image: BlogEighteen,
    user_id: 8,
    category_id: 8,
    slug: "exquisite-gourmet-dishes",
  },
  {
    id: 19,
    title: "Travel Stories and Adventures",
    content:
      "Embark on incredible journeys through captivating travel stories.",
    image: BlogNineteen,
    user_id: 9,
    category_id: 9,
    slug: "travel-stories-and-adventures",
  },
  {
    id: 20,
    title: "Creative Art and Craft Ideas",
    content:
      "Unleash your creativity with a variety of art and craft project ideas.",
    image: BlogTwenty,
    user_id: 10,
    category_id: 10,
    slug: "creative-art-and-craft-ideas",
  },
  {
    id: 21,
    title: "Electronics Projects for Beginners",
    content: "Get started with electronics through beginner-friendly projects.",
    image: BlogTwentyOne,
    user_id: 1,
    category_id: 1,
    slug: "electronics-projects-for-beginners",
  },
  {
    id: 22,
    title: "Seasonal Fashion Trends",
    content: "Stay in style with the latest seasonal fashion trends.",
    image: BlogTwentyTwo,
    user_id: 2,
    category_id: 2,
    slug: "seasonal-fashion-trends",
  },
  {
    id: 23,
    title: "Creative Home Decor Solutions",
    content:
      "Revamp your home with creative and budget-friendly decor solutions.",
    image: BlogTwentyThree,
    user_id: 3,
    category_id: 3,
    slug: "creative-home-decor-solutions",
  },
  {
    id: 24,
    title: "Adventurous Backpacking Trips",
    content: "Plan thrilling backpacking trips to remote destinations.",
    image: BlogTwentyFour,
    user_id: 4,
    category_id: 4,
    slug: "adventurous-backpacking-trips",
  },
  {
    id: 25,
    title: "Literary Gems and Book Reviews",
    content: "Explore literary gems and insightful book reviews.",
    image: BlogTwentyFive,
    user_id: 5,
    category_id: 5,
    slug: "literary-gems-and-book-reviews",
  },
  {
    id: 26,
    title: "Mental and Physical Wellbeing",
    content:
      "Achieve holistic mental and physical wellbeing with expert guidance.",
    image: BlogTwentySix,
    user_id: 6,
    category_id: 6,
    slug: "mental-and-physical-wellbeing",
  },
  {
    id: 27,
    title: "DIY Car Maintenance Tips",
    content:
      "Learn to perform car maintenance tasks on your own with these tips.",
    image: BlogTwentySeven,
    user_id: 7,
    category_id: 7,
    slug: "diy-car-maintenance-tips",
  },
  {
    id: 28,
    title: "Gourmet Delights from Around the World",
    content:
      "Delight your taste buds with gourmet dishes from diverse cuisines.",
    image: BlogTwentyEight,
    user_id: 8,
    category_id: 8,
    slug: "gourmet-delights-from-around-the-world",
  },
  {
    id: 29,
    title: "Travel Stories and Adventures",
    content:
      "Embark on incredible journeys through captivating travel stories.",
    image: BlogTwentyNine,
    user_id: 9,
    category_id: 9,
    slug: "travel-stories-and-adventures-2",
  },
  {
    id: 30,
    title: "Creative Art and Craft Ideas",
    content:
      "Unleash your creativity with a variety of art and craft project ideas.",
    image: BlogThirteen,
    user_id: 10,
    category_id: 10,
    slug: "creative-art-and-craft-ideas-2",
  },
];
