"use client";

import Link from "next/link";
import Navbar from "../../components/Navbar";

const products = [
  {
    name: "Neréa Blouse",
    color: "Porcelain",
    price: "Rp169.000",
    originalPrice: "Rp189.000",
    image: "/images/products/nerea-porcelain/FTO09606.JPG",
  },
  {
    name: "Neréa Blouse",
    color: "Powder Blue",
    price: "Rp169.000",
    originalPrice: "Rp189.000",
    image: "/images/products/nerea-powder-blue/FTO09686.JPG",
  },
  {
    name: "Neréa Blouse",
    color: "Truffle",
    price: "Rp169.000",
    originalPrice: "Rp189.000",
    image: "/images/products/nerea-truffle/FTO09640.JPG",
  },
];

export default function Shop() {
  return (
    <main className="min-h-screen bg-[#F7F3ED] text-[#102239]">
      <Navbar />

      {/* ================================================== */}
      {/* SHOP HEADER */}
      {/* ================================================== */}

      <section className="px-6 pb-12 pt-32 lg:px-12 lg:pb-16 lg:pt-36">
        <div className="mx-auto max-w-[1500px]">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            
            <div>
              <p className="text-[9px] uppercase tracking-[0.4em] text-[#9C7A42]">
                Collection 01
              </p>

              <h1 className="mt-4 font-serif text-5xl font-light tracking-[0.02em] sm:text-6xl">
                Neréa Series
              </h1>
            </div>

            <div className="max-w-[360px]">
              <p className="text-xs leading-7 text-[#102239]/50">
                A study of soft structure, subtle movement and timeless
                femininity.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* PRODUCTS */}
      {/* ================================================== */}

      <section className="px-6 pb-28 lg:px-12 lg:pb-36">
        <div className="mx-auto max-w-[1500px]">

          <div className="grid gap-x-6 gap-y-14 md:grid-cols-3">

            {products.map((product) => (
              <Link
                href="/product/nerea-blouse"
                key={product.color}
                className="group block"
              >

                {/* PRODUCT IMAGE */}
                <div className="relative overflow-hidden bg-[#E9E0D6]">

                  <img
                    src={product.image}
                    alt={`${product.name} ${product.color}`}
                    className="aspect-[3/4] w-full object-cover transition duration-700 ease-out group-hover:scale-[1.025]"
                  />

                  {/* HOVER OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#081321]/45 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

                  {/* VIEW PRODUCT */}
                  <span className="absolute bottom-5 left-1/2 -translate-x-1/2 translate-y-3 whitespace-nowrap bg-white/90 px-6 py-3 text-[8px] uppercase tracking-[0.25em] text-[#102239] opacity-0 backdrop-blur-sm transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    View Product
                  </span>

                  {/* LAUNCHING LABEL */}
                  <div className="absolute left-5 top-5 bg-[#102239]/90 px-4 py-2 backdrop-blur-sm">
                    <p className="text-[7px] uppercase tracking-[0.25em] text-white">
                      Launching Price
                    </p>
                  </div>

                </div>

                {/* PRODUCT INFO */}
                <div className="mt-5 flex items-start justify-between gap-5">

                  {/* NAME + COLOR */}
                  <div>
                    <p className="font-serif text-xl tracking-[0.01em]">
                      {product.name}
                    </p>

                    <p className="mt-2 text-[9px] uppercase tracking-[0.25em] text-[#102239]/45">
                      {product.color}
                    </p>
                  </div>

                  {/* PRICE */}
                  <div className="text-right">

                    <p className="text-[9px] tracking-wide text-[#102239]/35 line-through">
                      {product.originalPrice}
                    </p>

                    <p className="mt-1 text-sm tracking-wide text-[#102239]">
                      {product.price}
                    </p>

                  </div>

                </div>

              </Link>
            ))}

          </div>

        </div>
      </section>

      {/* ================================================== */}
      {/* COLLECTION STATEMENT */}
      {/* ================================================== */}

      <section className="border-t border-[#102239]/10 bg-[#E9E0D6] px-6 py-28 text-center lg:py-36">

        <div className="mx-auto max-w-[800px]">

          <p className="text-[9px] uppercase tracking-[0.4em] text-[#9C7A42]">
            Neréa
          </p>

          <h2 className="mt-6 font-serif text-4xl font-light leading-tight sm:text-5xl lg:text-6xl">
            Elegance, quietly
            <br />
            <span className="italic">expressed.</span>
          </h2>

          <div className="mx-auto mt-10 h-px w-12 bg-[#9C7A42]" />

          <p className="mx-auto mt-8 max-w-[500px] text-sm leading-8 text-[#102239]/55">
            Designed with intention, Neréa brings together soft structure,
            thoughtful details and a silhouette made to move with you.
          </p>

        </div>

      </section>

      {/* ================================================== */}
      {/* FOOTER */}
      {/* ================================================== */}

      <footer className="bg-[#06101C] px-6 py-16 text-white lg:px-16 lg:py-20">

        <div className="mx-auto max-w-[1500px]">

          <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr_1fr]">

            {/* BRAND */}
            <div>

              <p className="font-serif text-4xl tracking-[0.16em]">
                ZAVÉRA
              </p>

              <p className="mt-4 max-w-[280px] text-[9px] uppercase leading-6 tracking-[0.25em] text-white/35">
                Elegance Born From Depth
              </p>

              <p className="mt-6 max-w-[360px] text-xs leading-7 text-white/35">
                Designed with intention. Created for the woman who carries
                her own elegance.
              </p>

            </div>

            {/* EXPLORE */}
            <div>

              <p className="text-[9px] uppercase tracking-[0.3em] text-[#D7B77A]">
                Explore
              </p>

              <div className="mt-6 flex flex-col gap-4">

                <Link
                  href="/"
                  className="w-fit text-[9px] uppercase tracking-[0.2em] text-white/50 transition hover:text-white"
                >
                  Home
                </Link>

                <Link
                  href="/shop"
                  className="w-fit text-[9px] uppercase tracking-[0.2em] text-white/50 transition hover:text-white"
                >
                  Shop
                </Link>

                <Link
                  href="/our-story"
                  className="w-fit text-[9px] uppercase tracking-[0.2em] text-white/50 transition hover:text-white"
                >
                  Our Story
                </Link>

              </div>

            </div>

            {/* FOLLOW */}
            <div>

              <p className="text-[9px] uppercase tracking-[0.3em] text-[#D7B77A]">
                Follow
              </p>

              <div className="mt-6 flex flex-col gap-4">

                <a
                  href="https://instagram.com/zaveraco_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-fit text-[9px] uppercase tracking-[0.2em] text-white/50 transition hover:text-white"
                >
                  Instagram
                </a>

                <a
                  href="https://www.tiktok.com/@zaveraco"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-fit text-[9px] uppercase tracking-[0.2em] text-white/50 transition hover:text-white"
                >
                  TikTok
                </a>

              </div>

            </div>

            {/* CONTACT */}
            <div>

              <p className="text-[9px] uppercase tracking-[0.3em] text-[#D7B77A]">
                Contact
              </p>

              <div className="mt-6 flex flex-col gap-4">

                <a
                  href="https://wa.me/6289654249547"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-fit text-[9px] uppercase tracking-[0.2em] text-white/50 transition hover:text-white"
                >
                  WhatsApp
                </a>

                <p className="text-[9px] uppercase tracking-[0.2em] text-white/30">
                  Indonesia
                </p>

              </div>

            </div>

          </div>

          {/* DIVIDER */}
          <div className="mt-16 border-t border-white/10 pt-7">

            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">

              <p className="text-[8px] uppercase tracking-[0.25em] text-white/25">
                © 2026 ZAVÉRA. All rights reserved.
              </p>

              <p className="text-[8px] uppercase tracking-[0.25em] text-white/20">
                Elegance Born From Depth
              </p>

            </div>

          </div>

        </div>

      </footer>

    </main>
  );
}