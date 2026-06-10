export interface Dish {
  title: string;
  description: string;
  price: number;
  serves: string;
  spice: "Mild" | "Medium" | "Hot";
  delivery: string;
  isBestSeller: boolean;
  src: string;
}

export interface NavLink {
  href: string;
  label: string;
}

export interface MenuItem {
  title: string;
  price: number;
  src: string;
}

export interface SidebarProps {
  onCategoryChange?: (category: string) => void;
}

export interface RightPanelProps {
  items?: MenuItem[];
  activeIndex?: number;
  onSelect?: (index: number) => void;
}
