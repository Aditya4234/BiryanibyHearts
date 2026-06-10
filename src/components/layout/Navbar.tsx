"use client";

import { useState } from "react";
import Link from "next/link";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/cn";
import { ShoppingCart, User, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("/");

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-white/80 backdrop-blur-md shadow-sm">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        <div className="flex items-center gap-6">
          <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-white font-bold shadow-md">
            B
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight">
              <span className="text-slate-900">Biryani</span>
              <span className="text-primary">ByHearts</span>
            </h1>
          </div>
        </div>

        <ul className="hidden md:flex items-center gap-10 text-base font-medium text-slate-700">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setActiveLink(link.href)}
                className={cn(
                  "relative py-1 transition-colors duration-200 hover:text-primary",
                  activeLink === link.href && "text-primary"
                )}
              >
                {link.label}
                {activeLink === link.href && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full" />
                )}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-4">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full bg-white/70 p-2.5 text-slate-600 shadow-sm hover:bg-white hover:text-primary transition-all duration-200"
            aria-label="Cart"
          >
            <ShoppingCart className="h-5 w-5" />
          </button>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full bg-white/70 p-2.5 text-slate-600 shadow-sm hover:bg-white hover:text-primary transition-all duration-200"
            aria-label="Profile"
          >
            <User className="h-5 w-5" />
          </button>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-2.5 text-white font-semibold shadow-md hover:bg-primary/90 hover:shadow-lg transition-all duration-200"
          >
            Order Now
          </button>
        </div>

        <div className="flex md:hidden items-center gap-3">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full bg-white/70 p-2.5 text-slate-600 shadow-sm hover:bg-white hover:text-primary transition-all duration-200"
            aria-label="Cart"
          >
            <ShoppingCart className="h-5 w-5" />
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center justify-center rounded-full bg-white/70 p-2.5 text-slate-600 shadow-sm hover:bg-white"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200">
          <ul className="flex flex-col items-center gap-4 py-6 text-base font-medium text-slate-700">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => {
                    setActiveLink(link.href);
                    setIsOpen(false);
                  }}
                  className={cn(
                    "relative py-2 px-4 transition-colors duration-200 hover:text-primary",
                    activeLink === link.href ? "text-primary font-semibold" : ""
                  )}
                >
                  {link.label}
                  {activeLink === link.href && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-primary rounded-full" />
                  )}
                </Link>
              </li>
            ))}
            <li className="mt-2">
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-white font-semibold shadow-md hover:bg-primary/90 transition-all duration-200"
              >
                Order Now
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
