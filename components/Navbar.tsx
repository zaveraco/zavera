"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#081321]/90 text-white backdrop-blur-xl">
        <div className="mx-auto flex h-[74px] max-w-[1500px] items-center justify-between px-6 lg:px-12">

          {/* LOGO */}
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="font-serif text-[25px] tracking-[0.18em]"
          >
            ZAVÉRA
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden items-center gap-10 md:flex">

            {/* HOME */}
            <Link
              href="/"
              className="text-[10px] uppercase tracking-[0.22em] text-white/65 transition hover:text-white"
            >
              Home
            </Link>

            {/* SHOP */}
            <Link
              href="/shop"
              className="text-[10px] uppercase tracking-[0.22em] text-white/65 transition hover:text-white"
            >
              Shop
            </Link>

            {/* OUR STORY */}
            <Link
              href="/our-story"
              className="text-[10px] uppercase tracking-[0.22em] text-white/65 transition hover:text-white"
            >
              Our Story
            </Link>

          </nav>

          {/* BAG + MOBILE BUTTON */}
          <div className="flex items-center gap-6">

            {/* BAG */}
            <button
              type="button"
              className="text-[10px] uppercase tracking-[0.2em] text-white/80 transition hover:text-white"
            >
              Bag (0)
            </button>

            {/* MOBILE MENU BUTTON */}
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex h-8 w-8 flex-col items-center justify-center gap-[5px] md:hidden"
              aria-label="Open menu"
              aria-expanded={menuOpen}
            >
              <span
                className={`h-px w-5 bg-white transition ${
                  menuOpen ? "translate-y-[3px] rotate-45" : ""
                }`}
              />

              <span
                className={`h-px w-5 bg-white transition ${
                  menuOpen ? "-translate-y-[3px] -rotate-45" : ""
                }`}
              />
            </button>

          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-0 z-40 bg-[#081321] text-white transition duration-500 md:hidden ${
          menuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex h-full flex-col items-center justify-center gap-9">

          {/* HOME */}
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="font-serif text-4xl"
          >
            Home
          </Link>

          {/* SHOP */}
          <Link
            href="/shop"
            onClick={() => setMenuOpen(false)}
            className="font-serif text-4xl"
          >
            Shop
          </Link>

          {/* OUR STORY */}
          <Link
            href="/our-story"
            onClick={() => setMenuOpen(false)}
            className="font-serif text-4xl"
          >
            Our Story
          </Link>

          {/* BAG */}
          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            className="mt-5 border border-white/20 px-8 py-4 text-[9px] uppercase tracking-[0.25em]"
          >
            Bag (0)
          </button>

        </div>
      </div>
    </>
  );
}