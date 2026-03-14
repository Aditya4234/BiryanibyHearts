"use client";
import React, { useMemo, useState } from "react";
import Image from "next/image";
import RightPanel from "./RightPanel";

const dishes = [
  {
    title: "Awadhi Mutton Biryani",
    price: 400,
    src: "/image/biryani-1.png",
  },
  {
    title: "Lucknawi Chicken",
    price: 420,
    src: "/image/biryani-2.png",
  },
  {
    title: "Dum Ke Biryani",
    price: 380,
    src: "/image/biryani-3.png",
  },
  {
    title: "Kacche Gosht Biryani",
    price: 450,
    src: "/image/biryani-2.png",
  },
];

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeDish = useMemo(() => dishes[activeIndex], [activeIndex]);

  const prev = () =>
    setActiveIndex((index) => (index - 1 + dishes.length) % dishes.length);

  const next = () =>
    setActiveIndex((index) => (index + 1) % dishes.length);

  // Mouse wheel scroll handler
  const handleWheel = (e) => {
    if (e.deltaY > 0) {
      next(); // scroll down
    } else {
      prev(); // scroll up
    }
  };

  return (
    <section
      className="relative w-full h-[calc(100vh-64px)] bg-gradient"
      onWheel={handleWheel}
    >
      <div className="relative w-full h-full flex items-center justify-center">
       <div className="relative w-80 h-80 mx-auto">
  <Image
    src={activeDish.src}
    alt={activeDish.title}
    fill
    className="object-cover rounded-xl"
    priority
  />
</div>


        <div className="absolute inset-0 bg-gradient to-transparent" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white drop-shadow-lg">
            {activeDish.title}
          </h1>
          <p className="mt-2 sm:mt-3 text-xl sm:text-2xl font-semibold text-amber-100 drop-shadow-lg">
            ₹{activeDish.price}
          </p>
        </div>

        <div className="absolute top-4 right-4 sm:top-6 sm:right-6 w-16 h-16 sm:w-24 sm:h-24 rounded-full overflow-hidden shadow-2xl ring-2 sm:ring-4 ring-white">
          <Image
            src={dishes[(activeIndex + 1) % dishes.length].src}
            alt="Featured Biryani"
            fill
            className="object-cover"
          />
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3">
          <button
            onClick={prev}
            className="inline-flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white/80 text-gray-800 shadow-md backdrop-blur hover:bg-white"
          >
            <span className="text-lg sm:text-xl">‹</span>
          </button>

          <button
            onClick={next}
            className="inline-flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white/80 text-gray-800 shadow-md backdrop-blur hover:bg-white"
          >
            <span className="text-lg sm:text-xl">›</span>
          </button>
        </div>

        <RightPanel
          items={dishes}
          activeIndex={activeIndex}
          onSelect={setActiveIndex}
        />
      </div>
    </section>
  );
}
