import type { NavLink, Dish } from "@/types/dish";

export const NAV_LINKS: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const DISHES: Dish[] = [
  {
    title: "Awadhi Mutton Biryani",
    description:
      "Authentic Lucknowi taste, slow-cooked dum biryani with aromatic spices and tender meat.",
    price: 400,
    serves: "1-2",
    spice: "Medium",
    delivery: "25-35 min",
    isBestSeller: true,
    src: "/image/biryani-1.png",
  },
  {
    title: "Lucknawi Chicken Biryani",
    description: "Traditional spices with tender chicken pieces, cooked in dum style.",
    price: 420,
    serves: "1-2",
    spice: "Mild",
    delivery: "25-35 min",
    isBestSeller: false,
    src: "/image/biryani-2.png",
  },
  {
    title: "Dum Ke Biryani",
    description: "Aromatic basmati rice layered with royal spices and tender meat.",
    price: 380,
    serves: "2",
    spice: "Hot",
    delivery: "30-40 min",
    isBestSeller: false,
    src: "/image/biryani-3.png",
  },
];

export const MENU_CATEGORIES = [
  "Lucknawi",
  "Hyderabadi",
  "Awadhi",
  "Kebabs",
  "Rolls",
  "Breads",
  "Drinks",
  "Desserts",
];

export const SITE_CONFIG = {
  name: "Biryani ByHearts",
  tagline: "Authentic Lucknowi Biryani",
  description:
    "Experience the authentic taste of Lucknowi biryani, slow-cooked dum biryani with traditional spices.",
  email: "hello@biryanibyhearts.com",
  phone: "+91-123-456-7890",
  address: "Lucknow, Uttar Pradesh, India",
} as const;
