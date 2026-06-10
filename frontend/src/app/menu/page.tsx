import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";

export const metadata: Metadata = {
  title: "Menu",
  description: "Explore our authentic Lucknowi biryani menu.",
};

const menuItems = [
  {
    category: "Biryani",
    items: [
      {
        name: "Awadhi Mutton Biryani",
        price: 400,
        desc: "Slow-cooked dum biryani with aromatic spices",
        src: "/image/biryani-1.png",
      },
      {
        name: "Lucknawi Chicken Biryani",
        price: 420,
        desc: "Traditional spices with tender chicken",
        src: "/image/biryani-2.png",
      },
      {
        name: "Dum Ke Biryani",
        price: 380,
        desc: "Aromatic basmati rice layered with royal spices",
        src: "/image/biryani-3.png",
      },
      {
        name: "Kacche Gosht Ki Biryani",
        price: 450,
        desc: "Raw meat dum biryani, a Lucknowi specialty",
        src: "/image/biryani-1.png",
      },
    ],
  },
  {
    category: "Kebabs",
    items: [
      {
        name: "Galouti Kebab",
        price: 350,
        desc: "Melt-in-mouth minced meat kebabs",
        src: "/image/biryani-2.png",
      },
      {
        name: "Seekh Kebab",
        price: 300,
        desc: "Spiced minced meat on skewers",
        src: "/image/biryani-3.png",
      },
    ],
  },
  {
    category: "Drinks",
    items: [
      {
        name: "Mango Lassi",
        price: 120,
        desc: "Creamy yogurt drink with mango",
        src: "/image/biryani-1.png",
      },
      {
        name: "Chai",
        price: 50,
        desc: "Traditional Indian spiced tea",
        src: "/image/biryani-2.png",
      },
    ],
  },
];

export default function MenuPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16 px-6 max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-2">Our Menu</h1>
        <p className="text-gray-600 mb-12">Authentic Lucknowi flavors, crafted with tradition.</p>

        <div className="space-y-16">
          {menuItems.map((section) => (
            <section key={section.category}>
              <h2 className="text-2xl font-bold text-slate-900 mb-6 pb-2 border-b border-gray-200">
                {section.category}
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {section.items.map((item) => (
                  <div
                    key={item.name}
                    className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    <div className="relative h-48 w-full bg-orange-50">
                      <Image src={item.src} alt={item.name} fill className="object-contain p-4" />
                    </div>
                    <div className="p-5">
                      <h3 className="font-bold text-slate-900 text-lg">{item.name}</h3>
                      <p className="text-gray-500 text-sm mt-1">{item.desc}</p>
                      <p className="text-primary font-bold text-xl mt-3">₹{item.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>
    </>
  );
}
