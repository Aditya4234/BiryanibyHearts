"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="w-full bg-white/70 backdrop-blur-sm shadow-sm">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-amber-500 flex items-center justify-center text-white font-bold shadow">
            B
          </div>
          <div>
            <h1 className="text-lg font-bold">
              <span className="text-slate-900">Biryani</span>
              <span className="text-amber-600">ByHearts</span>
            </h1>
          </div>
        </div>

        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-700">
          <li>
            <Link href="/" className="hover:text-amber-600">
              Home
            </Link>
          </li>

          <li>
            <Link href="/menu" className="hover:text-amber-600">
              Menu
            </Link>
          </li>

          <li>
            <Link href="/about" className="hover:text-amber-600">
              About
            </Link>
          </li>

          <li>
            <Link href="/contact" className="hover:text-amber-600">
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile menu button */}
        <button
          onClick={toggleMenu}
          className="md:hidden inline-flex items-center justify-center rounded-full bg-white/70 px-3 py-2 text-gray-500 shadow-sm hover:bg-white"
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"}
            />
          </svg>
        </button>

        <div className="flex items-center gap-4">
          <button className="inline-flex items-center justify-center rounded-full bg-white/70 px-3 py-2 text-gray-500 shadow-sm hover:bg-white">
            <span className="sr-only">Cart</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path d="M2.25 2.25a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 .71.5l.72 1.6h15.3a.75.75 0 0 1 .72.96l-2.25 9A.75.75 0 0 1 18 14.5H7.12l-.72-1.6H19.5a.75.75 0 0 1 0 1.5H5.56a.75.75 0 0 1-.71-.5L2.03 3.5H2.25z" />
              <path d="M7.5 18.75a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm11.25 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
            </svg>
          </button>
          <button className="inline-flex items-center justify-center rounded-full bg-white/70 px-3 py-2 text-gray-500 shadow-sm hover:bg-white">
            <span className="sr-only">Profile</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M12 2.25a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5zM3 17.25c0-2.485 2.014-4.5 4.5-4.5h9c2.486 0 4.5 2.015 4.5 4.5v.75a.75.75 0 0 1-.75.75h-16.5a.75.75 0 0 1-.75-.75v-.75z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur-sm border-t border-gray-200">
          <ul className="flex flex-col items-center gap-4 py-4 text-sm font-medium text-slate-700">
            <li>
              <Link href="/" className="hover:text-amber-600" onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/menu" className="hover:text-amber-600" onClick={toggleMenu}>
                Menu
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-amber-600" onClick={toggleMenu}>
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-amber-600" onClick={toggleMenu}>
                Contact
              </Link>
            </li>
            <li>
              <button className="inline-flex items-center justify-center rounded-full bg-amber-500 px-4 py-2 text-white shadow-sm hover:bg-amber-600">
                <span>Cart</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5 ml-2"
                >
                  <path d="M2.25 2.25a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 .71.5l.72 1.6h15.3a.75.75 0 0 1 .72.96l-2.25 9A.75.75 0 0 1 18 14.5H7.12l-.72-1.6H19.5a.75.75 0 0 1 0 1.5H5.56a.75.75 0 0 1-.71-.5L2.03 3.5H2.25z" />
                  <path d="M7.5 18.75a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm11.25 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                </svg>
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
