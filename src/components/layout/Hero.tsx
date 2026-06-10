"use client";

import { useState, useMemo, useCallback } from "react";
import Image from "next/image";
import { DISHES } from "@/lib/constants";
import { cn } from "@/lib/cn";
import { useAutoPlay } from "@/hooks/useAutoPlay";
import { useKeyboardNav } from "@/hooks/useKeyboardNav";

const particles = Array.from({ length: 30 }, () => ({
  id: Math.random(),
  top: `${Math.random() * 100}%`,
  left: `${Math.random() * 100}%`,
  duration: `${2 + Math.random() * 3}s`,
}));

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const [autoPlay, setAutoPlay] = useState(true);

  const activeDish = useMemo(() => DISHES[activeIndex], [activeIndex]);

  const prev = useCallback(() => {
    setIsAnimating(true);
    setTimeout(() => {
      setActiveIndex((i) => (i - 1 + DISHES.length) % DISHES.length);
      setIsAnimating(false);
    }, 300);
  }, []);

  const next = useCallback(() => {
    setIsAnimating(true);
    setTimeout(() => {
      setActiveIndex((i) => (i + 1) % DISHES.length);
      setIsAnimating(false);
    }, 300);
  }, []);

  useAutoPlay(next, autoPlay, 4000);
  useKeyboardNav(prev, next);

  const handleWheel = useCallback(
    (e: React.WheelEvent) => {
      if (e.deltaY > 0) next();
      else prev();
    },
    [next, prev]
  );

  const handleAddToCart = () => {
    alert(`Added ${quantity} ${activeDish.title}`);
  };

  return (
    <section
      onWheel={handleWheel}
      className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-yellow-50 via-white to-orange-100"
    >
      <div className="absolute inset-0 z-0">
        {particles.map((p) => (
          <div
            key={p.id}
            className="absolute w-2 h-2 bg-orange-300 rounded-full opacity-30 animate-ping"
            style={{
              top: p.top,
              left: p.left,
              animationDuration: p.duration,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between px-6 py-10 gap-10 min-h-screen">
        <div className="flex-1 space-y-6 text-center lg:text-left">
          {activeDish.isBestSeller && (
            <span className="inline-block px-4 py-1 bg-orange-500 text-white rounded-full text-xs shadow-lg">
              Best Seller
            </span>
          )}

          <h1
            className={cn(
              "text-5xl font-extrabold transition-all duration-500",
              isAnimating ? "opacity-0 -translate-y-4" : "opacity-100"
            )}
          >
            {activeDish.title}
          </h1>

          <p className="text-gray-600 max-w-md mx-auto lg:mx-0">{activeDish.description}</p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-3">
            <span className="bg-green-100 px-3 py-1 rounded-lg text-sm">{activeDish.delivery}</span>
            <span className="bg-red-100 px-3 py-1 rounded-lg text-sm">
              Spice: {activeDish.spice}
            </span>
          </div>

          <div className="flex items-center justify-center lg:justify-start gap-4">
            <span className="text-4xl font-bold text-orange-500">₹{activeDish.price}</span>
            <span className="line-through text-gray-400">
              ₹{Math.round(activeDish.price * 1.2)}
            </span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start">
            <div className="flex items-center bg-white shadow rounded-full">
              <button
                type="button"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-4 py-2 hover:text-primary transition-colors"
                aria-label="Decrease quantity"
              >
                -
              </button>
              <span className="px-4 min-w-[2rem] text-center">{quantity}</span>
              <button
                type="button"
                onClick={() => setQuantity((q) => q + 1)}
                className="px-4 py-2 hover:text-primary transition-colors"
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>

            <button
              type="button"
              onClick={handleAddToCart}
              className="px-6 py-3 bg-orange-500 text-white rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition-all"
            >
              Add to Cart
            </button>

            <button
              type="button"
              className="px-6 py-3 border-2 border-gray-200 rounded-full hover:border-primary hover:text-primary transition-colors"
            >
              View Menu
            </button>
          </div>
        </div>

        <div className="flex-1 flex justify-center relative">
          <div className="w-80 h-80 relative">
            <div className="absolute inset-0 bg-orange-200 blur-3xl rounded-full" />

            <Image
              src={activeDish.src}
              alt={activeDish.title}
              fill
              className="object-contain drop-shadow-2xl"
              priority
            />
          </div>

          <div className="absolute top-0 right-10 w-20 h-20 rounded-full overflow-hidden shadow-lg">
            <Image
              src={DISHES[(activeIndex + 1) % DISHES.length].src}
              alt="Next dish"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4">
        <button
          type="button"
          onClick={prev}
          className="w-10 h-10 bg-white rounded-full shadow hover:shadow-lg transition-shadow"
          aria-label="Previous dish"
        >
          &larr;
        </button>

        <div className="flex gap-2">
          {DISHES.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActiveIndex(i)}
              className={cn(
                "h-2 rounded-full cursor-pointer transition-all duration-300",
                i === activeIndex ? "w-8 bg-orange-500" : "w-2 bg-gray-300 hover:bg-gray-400"
              )}
              aria-label={`Go to dish ${i + 1}`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={next}
          className="w-10 h-10 bg-white rounded-full shadow hover:shadow-lg transition-shadow"
          aria-label="Next dish"
        >
          &rarr;
        </button>
      </div>

      <button
        type="button"
        onClick={() => setAutoPlay(!autoPlay)}
        className="absolute top-6 right-6 px-4 py-2 bg-white shadow rounded-full text-sm hover:shadow-lg transition-shadow"
      >
        {autoPlay ? "Pause" : "Play"}
      </button>
    </section>
  );
}
