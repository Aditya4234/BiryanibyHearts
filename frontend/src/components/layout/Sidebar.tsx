"use client";

import { useState } from "react";
import { MENU_CATEGORIES } from "@/lib/constants";
import { cn } from "@/lib/cn";
import { Search } from "lucide-react";
import type { SidebarProps } from "@/types/dish";

export default function Sidebar({ onCategoryChange }: SidebarProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("Lucknawi");

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
    onCategoryChange?.(category);
  };

  const filteredItems = MENU_CATEGORIES.filter((item) =>
    item.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <aside className="h-screen lg:w-72 px-4 lg:px-6 flex items-center">
      <div className="w-full">
        <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-5">
          <h2 className="text-xl font-bold text-slate-900 mb-4">Menu</h2>

          <div className="relative mb-5">
            <input
              type="text"
              placeholder="Search dishes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-200"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          </div>

          <ul className="space-y-1">
            {filteredItems.map((item) => {
              const isActive = activeCategory === item;
              return (
                <li key={item}>
                  <button
                    type="button"
                    onClick={() => handleCategoryClick(item)}
                    className={cn(
                      "w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 relative",
                      isActive
                        ? "text-primary bg-primary/10 font-semibold"
                        : "text-slate-600 hover:text-slate-900 hover:bg-gray-50"
                    )}
                  >
                    {isActive && (
                      <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-primary rounded-r-full" />
                    )}
                    {item}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </aside>
  );
}
