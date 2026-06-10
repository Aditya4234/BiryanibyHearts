"use client";

import Image from "next/image";
import { cn } from "@/lib/cn";
import type { RightPanelProps } from "@/types/dish";

const defaultItems = [
  { title: "Lucknawi Chicken", price: 420, src: "/image/biryani-2.png" },
  { title: "Awadhi Mutton", price: 400, src: "/image/biryani-3.png" },
  { title: "Dum Ke Biryani", price: 380, src: "/image/biryani-1.png" },
  { title: "Kacche Gosht", price: 450, src: "/image/biryani-2.png" },
];

export default function RightPanel({ items, activeIndex = 0, onSelect }: RightPanelProps) {
  const menuItems = items?.length ? items : defaultItems;

  return (
    <aside className="hidden xl:block absolute right-4 2xl:right-8 bottom-28">
      <div className="grid grid-cols-2 gap-3">
        {menuItems.map((item, idx) => {
          const isActive = idx === activeIndex;

          return (
            <button
              key={item.title}
              type="button"
              onClick={() => onSelect?.(idx)}
              className={cn(
                "text-center p-2.5 rounded-xl transition-all duration-300",
                isActive
                  ? "bg-white shadow-lg ring-2 ring-primary/60 scale-105"
                  : "bg-white/70 hover:bg-white hover:shadow-md hover:scale-102"
              )}
            >
              <div
                className={cn(
                  "relative w-24 h-24 mx-auto rounded-lg overflow-hidden transition-all duration-300",
                  isActive ? "ring-2 ring-primary" : "ring-1 ring-gray-100"
                )}
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className={cn(
                    "object-cover transition-transform duration-300",
                    !isActive ? "hover:scale-110" : "scale-105"
                  )}
                />
              </div>

              <p className="mt-2 text-xs font-semibold text-slate-700 line-clamp-1">{item.title}</p>
              <p className="mt-0.5 text-xs font-bold text-primary">₹{item.price}</p>
            </button>
          );
        })}
      </div>
    </aside>
  );
}
