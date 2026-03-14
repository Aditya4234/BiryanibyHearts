import React from "react";

export default function Sidebar() {
  const menuItems = [
    "Lucknawi",
    "Hyderabadi",
    "Awadhi",
    "Kebabs",
    "Rolls",
  ];

  return (
    <aside className="h-screen lg:w-72 px-6 flex items-center">
      
      <div className="w-full">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">
          Menu
        </h2>

        <ul className="space-y-4">
          {menuItems.map((item) => (
            <li
              key={item}
              className="text-slate-700 hover:text-amber-700 cursor-pointer transition"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

    </aside>
  );
}