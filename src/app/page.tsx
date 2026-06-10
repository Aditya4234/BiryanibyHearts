"use client";

import { useState, useCallback } from "react";
import Navbar from "@/components/layout/Navbar";
import Sidebar from "@/components/layout/Sidebar";
import Hero from "@/components/layout/Hero";
import { Menu, X } from "lucide-react";

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const closeSidebar = useCallback(() => setIsSidebarOpen(false), []);

  return (
    <div className="min-h-screen">
      <Navbar />

      <button
        onClick={() => setIsSidebarOpen(true)}
        className="fixed left-4 top-20 z-30 lg:hidden inline-flex items-center justify-center p-2 bg-white/90 backdrop-blur-sm rounded-xl shadow-md text-slate-600 hover:text-primary transition-colors"
        aria-label="Open menu"
      >
        <Menu className="h-6 w-6" />
      </button>

      {isSidebarOpen && (
        <div className="fixed inset-0 z-40 bg-black/50 lg:hidden" onClick={closeSidebar}>
          <div
            className="absolute left-0 top-0 bottom-0 w-72 bg-white shadow-xl z-50"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-end p-4">
              <button
                onClick={closeSidebar}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <Sidebar />
          </div>
        </div>
      )}

      <main className="w-full pt-16">
        <div className="flex flex-col lg:flex-row">
          <div className="hidden lg:block">
            <Sidebar />
          </div>
          <div className="w-full">
            <Hero />
          </div>
        </div>
      </main>
    </div>
  );
}
