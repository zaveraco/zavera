"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";

const heroSlides = [
  {
    image: "/images/products/nerea-porcelain/FTO09606.JPG",
    color: "PORCELAIN",
  },
  {
    image: "/images/products/nerea-truffle/FTO09640.JPG",
    color: "TRUFFLE",
  },
  {
    image: "/images/products/nerea-powder-blue/FTO09686.JPG",
    color: "POWDER BLUE",
  },
];

const collections = [
  {
    name: "Neréa Blouse",
    color: "Porcelain",
    image: "/images/products/nerea-porcelain/FTO09606.JPG",
  },
  {
    name: "Neréa Blouse",
    color: "Powder Blue",
    image: "/images/products/nerea-powder-blue/FTO09686.JPG",
  },
  {
    name: "Neréa Blouse",
    color: "Truffle",
    image: "/images/products/nerea-truffle/FTO09640.JPG",
  },
];

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-[#F7F3ED] text-[#102239]">
      <Navbar />

      {/* ================================================== */}
{/* HERO SLIDESHOW */}
{/* ================================================== */}

<section className="relative h-screen min-h-[600px] overflow-hidden bg-[#081321] text-white">

  {/* HERO IMAGES */}
  {heroSlides.map((slide, index) => (
    <div
      key={slide.image}
      className={`absolute inset-0 transition-opacity duration-[1400ms] ease-in-out ${
        activeSlide === index ? "opacity-100" : "opacity-0"
      }`}
    >
      <img
        src={slide.image}
        alt={`Neréa Blouse ${slide.color}`}
        className={`h-full w-full object-cover transition-transform duration-[7000ms] ease-out ${
          activeSlide === index ? "scale-[1.05]" : "scale-100"
        }`}
      />
    </div>
  ))}

  {/* DARK OVERLAY */}
  <div className="absolute inset-0 bg-black/10" />

  {/* BOTTOM GRADIENT */}
  <div className="absolute inset-0 bg-gradient-to-t from-[#081321]/80 via-transparent to-[#081321]/10" />

  {/* TOP LABEL */}
  <div className="absolute left-6 top-24 z-20 lg:left-12 lg:top-28">
    <p className="text-[8px] uppercase tracking-[0.35em] text-white/70">
      Collection 01
    </p>

    <p className="mt-2 font-serif text-lg tracking-[0.08em]">
      Neréa
    </p>
  </div>

  {/* HERO TEXT */}
  <div className="absolute bottom-12 left-6 z-20 max-w-[650px] lg:bottom-16 lg:left-12">

    <p className="text-[8px] uppercase tracking-[0.4em] text-white/60">
      {heroSlides[activeSlide].color}
    </p>

    <h1 className="mt-4 font-serif text-4xl leading-[0.95] sm:text-5xl lg:text-7xl">
      Elegance
      <br />
      <span className="italic">Born From Depth.</span>
    </h1>

    <p className="mt-5 font-serif text-xl italic text-white/80">
      Neréa Blouse
    </p>

    <Link
      href="/product/nerea-blouse"
      className="mt-8 inline-block border border-white/40 px-7 py-3 text-[8px] uppercase tracking-[0.25em] text-white backdrop-blur-sm transition duration-300 hover:border-white hover:bg-white hover:text-[#102239]"
    >
      Discover Neréa
    </Link>

  </div>

  {/* SLIDE INDICATOR */}
  <div className="absolute bottom-12 right-6 z-20 lg:bottom-16 lg:right-12">

    <div className="flex items-center gap-4">

      <span className="text-[9px] tracking-[0.2em] text-white/70">
        {String(activeSlide + 1).padStart(2, "0")}
      </span>

      <div className="flex gap-2">

        {heroSlides.map((slide, index) => (
          <button
            key={slide.color}
            type="button"
            aria-label={`Go to ${slide.color}`}
            onClick={() => setActiveSlide(index)}
            className="group flex h-5 items-center"
          >
            <span
              className={`block h-px transition-all duration-500 ${
                activeSlide === index
                  ? "w-10 bg-white"
                  : "w-5 bg-white/35 group-hover:bg-white/70"
              }`}
            />
          </button>
        ))}

      </div>

      <span className="text-[9px] tracking-[0.2em] text-white/40">
        03
      </span>

    </div>

  </div>

</section>

      {/* ================================================== */}
      {/* PHILOSOPHY */}
      {/* ================================================== */}

      <section className="relative overflow-hidden bg-[#F7F3ED] px-6 py-28 lg:px-16 lg:py-40">
        <div className="absolute left-[-100px] top-1/2 h-[300px] w-[300px] rounded-full bg-[#D7B77A]/10 blur-[100px]" />

        <div className="relative mx-auto max-w-[1050px] text-center">
          <p className="text-[9px] uppercase tracking-[0.35em] text-[#9C7A42]">
            The Philosophy
          </p>

          <h2 className="mt-7 font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
            Clothing should not define
            <br />
            <span className="italic text-[#9C7A42]">who you are.</span>
          </h2>

          <p className="mx-auto mt-8 max-w-[650px] text-sm leading-8 text-[#102239]/55">
            ZAVÉRA was created around a simple belief: every woman already
            possesses her own elegance. Our role is simply to create pieces
            that allow it to be seen.
          </p>

          <div className="mx-auto mt-14 flex items-center justify-center gap-5">
            <span className="h-px w-12 bg-[#102239]/15" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#9C7A42]" />
            <span className="h-px w-12 bg-[#102239]/15" />
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* COLLECTION */}
      {/* ================================================== */}

      <section
        id="collection"
        className="bg-[#102239] px-6 py-24 text-white lg:px-16 lg:py-32"
      >
        <div className="mx-auto max-w-[1500px]">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-[9px] uppercase tracking-[0.35em] text-[#D7B77A]">
                Collection 01
              </p>

              <h2 className="mt-4 font-serif text-4xl sm:text-5xl">
                Neréa Series
              </h2>
            </div>

            <p className="max-w-[350px] text-xs leading-6 text-white/45">
              A study of soft structure, subtle movement and timeless
              femininity.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {collections.map((product) => (
              <Link
                href="/product/nerea-blouse"
                key={product.color}
                className="group"
              >
                <div className="relative overflow-hidden bg-[#1A2B3E]">
                  <img
                    src={product.image}
                    alt={`${product.name} ${product.color}`}
                    className="aspect-[3/4] w-full object-cover transition duration-700 group-hover:scale-[1.025]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#081321]/60 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

                  <span className="absolute bottom-5 right-5 translate-y-3 bg-white/90 px-4 py-2 text-[8px] uppercase tracking-[0.2em] text-[#102239] opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    View Product
                  </span>
                </div>

                <div className="mt-5 flex items-start justify-between">
                  <div>
                    <p className="font-serif text-xl">{product.name}</p>

                    <p className="mt-1 text-[9px] uppercase tracking-[0.2em] text-white/45">
                      {product.color}
                    </p>
                  </div>

                  <div className="text-right">
  <p className="text-[9px] tracking-wide text-white/35 line-through">
    Rp189.000
  </p>

  <p className="mt-1 text-sm tracking-wide text-white">
    Rp169.000
  </p>
</div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-14 flex justify-center">
            <Link
              href="/product/nerea-blouse"
              className="border border-white/20 px-8 py-4 text-[9px] uppercase tracking-[0.25em] text-white/80 transition hover:border-[#D7B77A] hover:text-[#D7B77A]"
            >
              Explore Neréa
            </Link>
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* ZAVÉRA CAMPAIGN VIDEO */}
      {/* ================================================== */}

      <section className="bg-[#F7F3ED] px-6 py-24 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-12 text-center">
            <p className="text-[9px] uppercase tracking-[0.4em] text-[#9C7A42]">
              The ZAVÉRA Edit
            </p>

            <h2 className="mt-5 font-serif text-4xl sm:text-5xl">
              A closer look at Neréa.
            </h2>

            <p className="mx-auto mt-5 max-w-[500px] text-sm leading-7 text-[#102239]/50">
              Movement, texture and silhouette — captured through the world
              of ZAVÉRA.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {/* VIDEO 01 */}
            <div className="group relative overflow-hidden bg-[#E9E0D6]">
              <video
                src="/videos/FORWEBSITE-1.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-[1.02]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#081321]/45 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

              <div className="absolute bottom-5 left-5 opacity-0 transition duration-500 group-hover:opacity-100">
                <p className="text-[8px] uppercase tracking-[0.3em] text-white/60">
                  Neréa
                </p>

                <p className="mt-1 font-serif text-xl text-white">
                  Movement
                </p>
              </div>
            </div>

            {/* VIDEO 02 */}
            <div className="group relative overflow-hidden bg-[#E9E0D6]">
              <video
                src="/videos/FORWEBSITE-2.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-[1.02]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#081321]/45 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

              <div className="absolute bottom-5 left-5 opacity-0 transition duration-500 group-hover:opacity-100">
                <p className="text-[8px] uppercase tracking-[0.3em] text-white/60">
                  Neréa
                </p>

                <p className="mt-1 font-serif text-xl text-white">
                  Silhouette
                </p>
              </div>
            </div>

            {/* VIDEO 03 */}
            <div className="group relative overflow-hidden bg-[#E9E0D6]">
              <video
                src="/videos/FORWEBSITE-3.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-[1.02]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#081321]/45 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

              <div className="absolute bottom-5 left-5 opacity-0 transition duration-500 group-hover:opacity-100">
                <p className="text-[8px] uppercase tracking-[0.3em] text-white/60">
                  Neréa
                </p>

                <p className="mt-1 font-serif text-xl text-white">
                  Detail
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* SIGNATURE DETAIL */}
      {/* ================================================== */}

      <section className="overflow-hidden bg-[#E9E0D6] px-6 py-24 lg:px-16 lg:py-32">
        <div className="mx-auto grid max-w-[1300px] items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-24">
          <div className="relative">
            <div className="overflow-hidden bg-[#D8CEC3]">
              <img
                src="/images/products/nerea-porcelain/FTO09609.jpg"
                alt="Neréa Blouse Signature Adjustable Waist"
                className="aspect-[4/5] w-full object-cover transition duration-700 hover:scale-[1.01]"
              />
            </div>

            <div className="absolute -bottom-6 -left-6 hidden h-28 w-28 border border-[#9C7A42]/40 md:block" />

            <div className="absolute bottom-6 left-6 bg-[#102239]/90 px-5 py-4 text-white backdrop-blur-sm">
              <p className="text-[8px] uppercase tracking-[0.3em] text-[#D7B77A]">
                Signature Detail
              </p>

              <p className="mt-1 font-serif text-lg">
                Adjustable Waist
              </p>
            </div>
          </div>

          <div>
            <p className="text-[9px] uppercase tracking-[0.35em] text-[#9C7A42]">
              Designed Around You
            </p>

            <h2 className="mt-6 font-serif text-5xl leading-[1.05] sm:text-6xl">
              Your shape.
              <br />
              <span className="italic">Your silhouette.</span>
            </h2>

            <p className="mt-8 max-w-[500px] text-sm leading-8 text-[#102239]/60">
              Neréa features a signature adjustable waist, allowing the
              silhouette to be styled according to your preference.
            </p>

            <p className="mt-5 max-w-[500px] text-sm leading-8 text-[#102239]/60">
              Because elegance should never feel restrictive. It should move,
              adapt and become part of you.
            </p>

            <Link
              href="/product/nerea-blouse"
              className="mt-9 inline-block border-b border-[#102239]/30 pb-2 text-[9px] uppercase tracking-[0.22em] transition hover:border-[#9C7A42] hover:text-[#9C7A42]"
            >
              Discover The Detail
            </Link>
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* THREE COLORS */}
      {/* ================================================== */}

      <section className="bg-[#F7F3ED] px-6 py-24 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-[1500px]">
          <div className="text-center">
            <p className="text-[9px] uppercase tracking-[0.35em] text-[#9C7A42]">
              The Palette
            </p>

            <h2 className="mt-5 font-serif text-4xl sm:text-5xl">
              Three expressions.
            </h2>

            <p className="mx-auto mt-5 max-w-[500px] text-sm leading-7 text-[#102239]/50">
              Three carefully selected tones created to express a different
              side of the Neréa woman.
            </p>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {collections.map((product) => (
              <Link
                href="/product/nerea-blouse"
                key={product.color}
                className="group relative overflow-hidden"
              >
                <img
                  src={product.image}
                  alt={product.color}
                  className="aspect-[3/4] w-full object-cover transition duration-700 group-hover:scale-[1.025]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#081321]/70 via-transparent to-transparent" />

                <div className="absolute bottom-7 left-7 text-white">
                  <p className="text-[8px] uppercase tracking-[0.3em] text-white/60">
                    Neréa
                  </p>

                  <p className="mt-1 font-serif text-3xl">
                    {product.color}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* STORY */}
      {/* ================================================== */}

      <section
        id="story"
        className="relative overflow-hidden bg-[#E9E0D6] px-6 py-28 lg:px-16 lg:py-40"
      >
        <div className="absolute right-0 top-0 h-full w-1/3 bg-[#D7B77A]/10" />

        <div className="relative mx-auto grid max-w-[1200px] items-center gap-16 lg:grid-cols-2">
          {/* STORY TEXT */}
          <div>
            <p className="text-[9px] uppercase tracking-[0.35em] text-[#9C7A42]">
              Our Story
            </p>

            <h2 className="mt-6 font-serif text-5xl leading-[1.05] sm:text-6xl">
              Made with
              <br />
              <span className="italic">intention.</span>
            </h2>

            <p className="mt-8 max-w-[500px] text-sm leading-8 text-[#102239]/60">
              Born from a deep appreciation for fashion, detail and
              craftsmanship, ZAVÉRA exists to make everyday elegance feel
              effortless.
            </p>

            <p className="mt-5 max-w-[500px] text-sm leading-8 text-[#102239]/60">
              Every silhouette is considered carefully — from the fabric we
              choose to the smallest finishing detail.
            </p>

            <div className="mt-10 flex items-center gap-4">
              <span className="h-px w-10 bg-[#9C7A42]/50" />

              <span className="text-[8px] uppercase tracking-[0.25em] text-[#9C7A42]">
                Elegance Born From Depth
              </span>
            </div>
          </div>

          {/* STORY IMAGES */}
          <div className="relative mx-auto h-[520px] w-full max-w-[500px]">
            {/* PORCELAIN */}
<div className="absolute left-0 top-0 h-[390px] w-[72%] overflow-hidden">
  <img
    src="/images/products/nerea-porcelain/FTO09606.JPG"
    alt="ZAVÉRA Neréa Porcelain"
    className="h-full w-full object-cover transition duration-700 hover:scale-[1.025]"
  />
</div>

{/* POWDER BLUE */}
<div className="absolute bottom-0 right-0 h-[250px] w-[52%] overflow-hidden border-8 border-[#E9E0D6]">
  <img
    src="/images/products/nerea-powder-blue/FTO09686.JPG"
    alt="ZAVÉRA Neréa Powder Blue"
    className="h-full w-full object-cover transition duration-700 hover:scale-[1.025]"
  />
</div>

{/* TRUFFLE */}
<div className="absolute bottom-10 left-[10%] h-[190px] w-[37%] overflow-hidden border-8 border-[#E9E0D6]">
  <img
    src="/images/products/nerea-truffle/FTO09640.JPG"
    alt="ZAVÉRA Neréa Truffle"
    className="h-full w-full object-cover transition duration-700 hover:scale-[1.025]"
  />
</div>

            <div className="absolute -bottom-5 -left-5 h-24 w-24 border border-[#9C7A42]/40" />
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* BRAND STATEMENT */}
      {/* ================================================== */}

      <section className="relative overflow-hidden bg-[#081321] px-6 py-32 text-center text-white lg:py-44">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D7B77A]/5 blur-[120px]" />

        <div className="relative mx-auto max-w-[1000px]">
          <p className="text-[9px] uppercase tracking-[0.4em] text-[#D7B77A]">
            ZAVÉRA
          </p>

          <h2 className="mt-8 font-serif text-5xl leading-tight sm:text-6xl lg:text-8xl">
            Elegance is not
            <br />
            <span className="italic text-[#D7B77A]">the destination.</span>
          </h2>

          <p className="mx-auto mt-8 max-w-[500px] text-sm leading-8 text-white/40">
            It is found in the details, the movement, and the quiet confidence
            of becoming yourself.
          </p>
        </div>
      </section>

      {/* ================================================== */}
      {/* CTA */}
      {/* ================================================== */}

      <section className="bg-[#F7F3ED] px-6 py-28 text-center lg:py-36">
        <p className="text-[9px] uppercase tracking-[0.35em] text-[#9C7A42]">
          Collection 01
        </p>

        <h2 className="mt-6 font-serif text-5xl sm:text-6xl lg:text-7xl">
          Find your silhouette.
        </h2>

        <p className="mx-auto mt-6 max-w-[450px] text-xs leading-7 text-[#102239]/50">
          Discover Neréa — designed to move with you, not define you.
        </p>

        <Link
          href="/product/nerea-blouse"
          className="mt-9 inline-block bg-[#102239] px-9 py-4 text-[9px] uppercase tracking-[0.25em] text-white transition hover:bg-[#D7B77A] hover:text-[#102239]"
        >
          Shop Neréa
        </Link>
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