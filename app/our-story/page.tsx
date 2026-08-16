"use client";

import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";

const storyImages = [
  {
    src: "/images/our-story/nerea-porcelain.jpg",
    color: "PORCELAIN",
  },
  {
    src: "/images/our-story/nerea-truffle.jpg",
    color: "TRUFFLE",
  },
  {
    src: "/images/our-story/nerea-powder-blue.jpg",
    color: "POWDER BLUE",
  },
];

export default function OurStory() {
  const [current, setCurrent] = useState(0);

  const nextImage = () => {
    setCurrent((prev) => (prev + 1) % storyImages.length);
  };

  const prevImage = () => {
    setCurrent(
      (prev) => (prev - 1 + storyImages.length) % storyImages.length
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % storyImages.length);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  return (
  <>
    <Navbar />

    <main className="min-h-screen bg-[#071923] text-[#f5eee5]">
      {/* ================================================== */}
      {/* HERO */}
      {/* ================================================== */}

      <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">

        <p className="mb-7 text-[10px] tracking-[0.5em] text-[#b9a98d]">
          OUR STORY
        </p>

        <h1 className="font-serif text-5xl font-light leading-[1.05] tracking-[0.04em] sm:text-6xl md:text-8xl">
          ELEGANCE
          <br />
          <span className="italic">BORN FROM DEPTH</span>
        </h1>

        <div className="mt-10 max-w-xl">
          <p className="text-sm font-light leading-8 tracking-wide text-[#d8d0c6]">
            Inspired by the depth of the ocean, ZAVÉRA believes that true
            beauty lies beneath the surface. Like a pearl hidden in stillness,
            something extraordinary is always waiting to reveal its brilliance.
          </p>
        </div>

        <div className="mt-16 flex flex-col items-center gap-3">
          <span className="text-[8px] tracking-[0.4em] text-[#8d9ca0]">
            SCROLL
          </span>

          <span className="h-10 w-px bg-gradient-to-b from-[#b9a98d] to-transparent" />
        </div>

      </section>

      {/* ================================================== */}
      {/* PHILOSOPHY */}
      {/* ================================================== */}

      <section className="flex min-h-[85vh] items-center justify-center px-6">

        <div className="max-w-4xl text-center">

          <p className="mb-8 text-[10px] tracking-[0.45em] text-[#b9a98d]">
            BENEATH THE SURFACE
          </p>

          <h2 className="font-serif text-3xl font-light leading-relaxed sm:text-4xl md:text-6xl">
            True beauty is not always meant
            <br />
            to be seen at first glance.
          </h2>

          <div className="mx-auto mt-12 h-px w-16 bg-[#b9a98d]" />

          <p className="mx-auto mt-10 max-w-xl text-sm font-light leading-8 tracking-wide text-[#c7c0b8]">
            Like a pearl resting quietly within the ocean, every piece carries
            something waiting to be discovered.
          </p>

        </div>

      </section>

      {/* ================================================== */}
      {/* NEREA COLLECTION */}
      {/* ================================================== */}

      <section className="px-5 pb-32 pt-20 md:px-10 lg:px-16">

        {/* TITLE */}

        <div className="mx-auto mb-14 max-w-7xl text-center">

          <p className="mb-5 text-[10px] tracking-[0.45em] text-[#b9a98d]">
            THE PEARL
          </p>

          <h2 className="font-serif text-4xl font-light tracking-[0.08em] sm:text-5xl md:text-7xl">
            NERÉA BLOUSE
          </h2>

          <p className="mt-5 text-sm tracking-wide text-[#aaa29a]">
            An expression of quiet elegance.
          </p>

        </div>

        {/* SLIDER */}

        <div className="relative mx-auto max-w-7xl">

          <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#101f27] md:aspect-[16/9]">

            {/* IMAGES */}

            {storyImages.map((image, index) => (
              <img
                key={image.color}
                src={image.src}
                alt={`Nerea Blouse ${image.color}`}
                className={`absolute inset-0 h-full w-full object-cover transition-all duration-[1200ms] ease-in-out ${
                  current === index
                    ? "scale-100 opacity-100"
                    : "scale-[1.04] opacity-0"
                }`}
              />
            ))}

            {/* OVERLAY */}

            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/5 to-transparent" />

            {/* IMAGE INFO */}

            <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12">

              <p className="text-[9px] tracking-[0.4em] text-white/60">. 
                NERÉA BLOUSE
              </p>

              <p className="mt-3 font-serif text-2xl tracking-[0.15em] text-white md:text-3xl">
                {storyImages[current].color}
              </p>

            </div>

            {/* PREVIOUS */}

            <button
              type="button"
              onClick={prevImage}
              aria-label="Previous image"
              className="absolute left-5 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/20 text-white backdrop-blur-md transition duration-300 hover:bg-white hover:text-black"
            >
              ←
            </button>

            {/* NEXT */}

            <button
              type="button"
              onClick={nextImage}
              aria-label="Next image"
              className="absolute right-5 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/20 text-white backdrop-blur-md transition duration-300 hover:bg-white hover:text-black"
            >
              →
            </button>

          </div>

          {/* CONTROLS */}

          <div className="mt-7 flex items-center justify-center gap-5">

            <span className="text-[9px] tracking-[0.25em] text-[#777f82]">
              0{current + 1}
            </span>

            <div className="flex items-center gap-3">

              {storyImages.map((image, index) => (
                <button
                  key={image.color}
                  type="button"
                  onClick={() => setCurrent(index)}
                  aria-label={`View ${image.color}`}
                  className="flex h-5 items-center"
                >
                  <span
                    className={`h-px transition-all duration-500 ${
                      current === index
                        ? "w-12 bg-[#b9a98d]"
                        : "w-5 bg-[#59666b]"
                    }`}
                  />
                </button>
              ))}

            </div>

            <span className="text-[9px] tracking-[0.25em] text-[#777f82]">
              03
            </span>

          </div>

        </div>

      </section>

      {/* ================================================== */}
      {/* INTENTION */}
      {/* ================================================== */}

      <section className="flex min-h-[75vh] items-center justify-center px-6">

        <div className="max-w-3xl text-center">

          <p className="mb-8 text-[10px] tracking-[0.45em] text-[#b9a98d]">
            MADE WITH INTENTION
          </p>

          <h2 className="font-serif text-3xl font-light leading-relaxed sm:text-4xl md:text-6xl">
            Every detail carries
            <br />
            <span className="italic">a purpose.</span>
          </h2>

          <div className="mx-auto mt-12 h-px w-16 bg-[#b9a98d]" />

          <p className="mx-auto mt-10 max-w-xl text-sm font-light leading-8 tracking-wide text-[#c7c0b8]">
            We create with intention, where every detail carries a purpose —
            from what you wear to what you keep beyond it.
          </p>

        </div>

      </section>

      {/* ================================================== */}
      {/* FINAL STATEMENT */}
      {/* ================================================== */}

      <section className="flex min-h-[65vh] flex-col items-center justify-center border-t border-white/10 px-6 text-center">

        <p className="text-4xl font-serif font-light tracking-[0.18em] md:text-6xl">
          ZAVÉRA
        </p>

        <div className="mx-auto mt-8 h-px w-12 bg-[#b9a98d]" />

        <p className="mt-7 text-[9px] tracking-[0.5em] text-[#b9a98d]">
          ELEGANCE BORN FROM DEPTH
        </p>

        <p className="mt-8 max-w-md text-xs leading-7 text-[#8d9ca0]">
          Beauty does not need to announce itself.
          <br />
          Sometimes, it simply exists beneath the surface.
        </p>

      </section>

        </main>
  </>
  );
}