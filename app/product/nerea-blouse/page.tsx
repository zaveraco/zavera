"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Navbar from "../../../components/Navbar";

const imagesByColor = {
  Porcelain: [
    "/images/products/nerea-porcelain/FTO09616.jpg",
    "/images/products/nerea-porcelain/FTO09606.jpg",
    "/images/products/nerea-porcelain/FTO09609.jpg",
    "/images/products/nerea-porcelain/FTO09611.jpg",
    "/images/products/nerea-porcelain/FTO09618.jpg",
    "/images/products/nerea-porcelain/FTO09625.jpg",
    "/images/products/nerea-porcelain/FTO09629.jpg",
  ],

  "Powder Blue": [
    "/images/products/nerea-powder-blue/FTO09686.jpg",
    "/images/products/nerea-powder-blue/FTO09690.jpg",
    "/images/products/nerea-powder-blue/FTO09700.jpg",
    "/images/products/nerea-powder-blue/FTO09705.jpg",
    "/images/products/nerea-powder-blue/FTO09709.jpg",
    "/images/products/nerea-powder-blue/FTO09723.jpg",
    "/images/products/nerea-powder-blue/FTO09725.jpg",
  ],

  Truffle: [
    "/images/products/nerea-truffle/FTO09640.jpg",
    "/images/products/nerea-truffle/FTO09644.jpg",
    "/images/products/nerea-truffle/FTO09647.jpg",
    "/images/products/nerea-truffle/FTO09652.jpg",
    "/images/products/nerea-truffle/FTO09657.jpg",
    "/images/products/nerea-truffle/FTO09662.jpg",
    "/images/products/nerea-truffle/FTO09673.jpg",
    "/images/products/nerea-truffle/FTO09681.jpg",
  ],
};

type ColorName = keyof typeof imagesByColor;

export default function NereaBlousePage() {
  const [selectedColor, setSelectedColor] =
    useState<ColorName>("Porcelain");

  const [activeImage, setActiveImage] = useState(0);

  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  const images = imagesByColor[selectedColor];

  const nextImage = () => {
    setActiveImage((current) => {
      if (current === images.length - 1) {
        return 0;
      }

      return current + 1;
    });
  };

  const previousImage = () => {
    setActiveImage((current) => {
      if (current === 0) {
        return images.length - 1;
      }

      return current - 1;
    });
  };

  const changeColor = (color: ColorName) => {
    setSelectedColor(color);
    setActiveImage(0);
  };

  useEffect(() => {
    if (!isGalleryOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsGalleryOpen(false);
      }

      if (event.key === "ArrowRight") {
        nextImage();
      }

      if (event.key === "ArrowLeft") {
        previousImage();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isGalleryOpen, images.length]);

  return (
  <>
    <Navbar />

    <main className="min-h-screen bg-[#F7F3ED] text-[#17263A]">
      {/* NAVBAR */}
      

      {/* PRODUCT */}
      <section className="mx-auto max-w-[1440px] px-5 py-10 lg:px-12 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          {/* GALLERY */}
          <div>
            {/* MOBILE */}
            <div
              className="flex snap-x snap-mandatory gap-3 overflow-x-auto lg:hidden"
              style={{ scrollbarWidth: "none" }}
            >
              {images.map((image, index) => (
                <button
                  key={image}
                  type="button"
                  onClick={() => {
                    setActiveImage(index);
                    setIsGalleryOpen(true);
                  }}
                  className="min-w-[88%] snap-center overflow-hidden bg-[#E8DED3]"
                >
                  <img
                    src={image}
                    alt={`Nerea Blouse ${selectedColor} ${index + 1}`}
                    className="aspect-[3/4] w-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* DESKTOP */}
            <div className="hidden lg:block">
              {/* MAIN IMAGE */}
              <button
                type="button"
                onClick={() => setIsGalleryOpen(true)}
                className="group relative block w-full overflow-hidden bg-[#E8DED3]"
              >
                <img
                  src={images[activeImage]}
                  alt={`Nerea Blouse ${selectedColor}`}
                  className="aspect-[4/5] w-full object-cover transition duration-[1200ms] ease-out group-hover:scale-[1.025]"
                />

                <span className="absolute bottom-5 right-5 bg-white/90 px-4 py-2 text-[9px] uppercase tracking-[0.18em] opacity-0 backdrop-blur-sm transition group-hover:opacity-100">
                  View Gallery
                </span>
              </button>

              {/* THUMBNAILS */}
              <div className="mt-5 grid grid-cols-8 gap-2">
                {images.map((image, index) => (
                  <button
                    key={image}
                    type="button"
                    onClick={() => setActiveImage(index)}
                    className={`group overflow-hidden border ${
                      activeImage === index
                        ? "border-[#17263A]"
                        : "border-transparent opacity-70 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={image}
                      alt=""
                      className="aspect-square w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* PRODUCT INFO */}
<div className="lg:sticky lg:top-28 lg:h-fit">
  <p className="text-[9px] uppercase tracking-[0.32em] text-[#9C7A42]">
    COLLECTION 01 · NERÉA SERIES
  </p>

  <h1 className="mt-5 font-serif text-4xl font-light tracking-[0.02em] lg:text-6xl">
    Neréa Blouse
  </h1>

  <div className="mt-5 flex items-center gap-3">
   <p className="text-sm line-through">
  Rp189.000
</p>

<p className="text-xl">
  Rp169.000
</p>

    <span className="border border-[#9C7A42]/30 px-2 py-1 text-[7px] uppercase tracking-[0.18em] text-[#9C7A42]">
      Launching Price
    </span>
  </div>

  <div className="my-8 h-px w-full bg-[#17263A]/10" />

  <p className="max-w-[470px] text-sm leading-8 text-[#17263A]/60">
    A timeless silhouette designed with a signature adjustable waist,
    created to naturally follow your shape while keeping its elegant
    character.
  </p>

  {/* COLOR */}
  <div className="mt-10">
    <div className="flex items-end justify-between">
      <div>
        <p className="text-[9px] uppercase tracking-[0.25em] text-[#17263A]/45">
          Color
        </p>

        <p className="mt-2 font-serif text-lg">
          {selectedColor}
        </p>
      </div>

      <p className="text-[8px] uppercase tracking-[0.2em] text-[#17263A]/35">
        Neréa Collection
      </p>
    </div>

    <div className="mt-5 flex gap-4">
      {/* PORCELAIN */}
      <button
        type="button"
        onClick={() => changeColor("Porcelain")}
        aria-label="Porcelain"
        className={`group relative h-10 w-10 rounded-full border-2 border-white shadow-sm ring-1 transition ${
          selectedColor === "Porcelain"
            ? "ring-[#17263A]"
            : "ring-[#17263A]/15"
        }`}
        style={{ backgroundColor: "#F5EDE3" }}
      >
        <span className="absolute left-1/2 top-14 -translate-x-1/2 whitespace-nowrap text-[7px] uppercase tracking-[0.15em] opacity-0 transition group-hover:opacity-100">
          Porcelain
        </span>
      </button>

      {/* POWDER BLUE */}
      <button
        type="button"
        onClick={() => changeColor("Powder Blue")}
        aria-label="Powder Blue"
        className={`group relative h-10 w-10 rounded-full border-2 border-white shadow-sm ring-1 transition ${
          selectedColor === "Powder Blue"
            ? "ring-[#17263A]"
            : "ring-[#17263A]/15"
        }`}
        style={{ backgroundColor: "#B8CEDD" }}
      >
        <span className="absolute left-1/2 top-14 -translate-x-1/2 whitespace-nowrap text-[7px] uppercase tracking-[0.15em] opacity-0 transition group-hover:opacity-100">
          Powder Blue
        </span>
      </button>

      {/* TRUFFLE */}
      <button
        type="button"
        onClick={() => changeColor("Truffle")}
        aria-label="Truffle"
        className={`group relative h-10 w-10 rounded-full border-2 border-white shadow-sm ring-1 transition ${
          selectedColor === "Truffle"
            ? "ring-[#17263A]"
            : "ring-[#17263A]/15"
        }`}
        style={{ backgroundColor: "#563C31" }}
      >
        <span className="absolute left-1/2 top-14 -translate-x-1/2 whitespace-nowrap text-[7px] uppercase tracking-[0.15em] opacity-0 transition group-hover:opacity-100">
          Truffle
        </span>
      </button>
    </div>
  </div>

            {/* ADD TO BAG */}
<button
  type="button"
  onClick={() => {
    const message = `Halo ZAVÉRA, saya ingin memesan Neréa Blouse.

Color: ${selectedColor}
Launching Price: Rp169.000

Mohon informasi mengenai proses pemesanannya. Terima kasih.`;

    const whatsappUrl = `https://wa.me/6289654249547?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");
  }}
  className="mt-10 w-full bg-[#102239] py-4 text-[10px] uppercase tracking-[0.2em] text-white transition hover:bg-[#17263A]"
>
  Add to Bag
</button>

            {/* DETAILS */}
            <div className="mt-10 border-t border-[#17263A]/10">
              <details className="border-b border-[#17263A]/10 py-5">
                <summary className="cursor-pointer text-[10px] uppercase tracking-[0.18em]">
                  Product Details
                </summary>

                <p className="mt-4 text-sm leading-7 text-[#17263A]/60">
                  Neréa Blouse features a signature adjustable waist
                  designed for a more personal and elegant silhouette.
                </p>
              </details>

              <details className="border-b border-[#17263A]/10 py-5">
                <summary className="cursor-pointer text-[10px] uppercase tracking-[0.18em]">
                  Material & Care
                </summary>

                <p className="mt-4 text-sm leading-7 text-[#17263A]/60">
                  Crafted with carefully selected fabric for a soft,
                  refined and comfortable feel. Follow the care label
                  instructions for best results.
                </p>
              </details>

              <details className="border-b border-[#17263A]/10 py-5">
                <summary className="cursor-pointer text-[10px] uppercase tracking-[0.18em]">
                  Shipping
                </summary>

                <p className="mt-4 text-sm leading-7 text-[#17263A]/60">
                  Your order will be carefully packed and prepared for
                  delivery after purchase confirmation.
                </p>
              </details>
            </div>
          </div>
        </div>
      </section>

      {/* FULLSCREEN GALLERY */}
      {isGalleryOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#081321]/95 p-5 backdrop-blur-md"
          onClick={() => setIsGalleryOpen(false)}
        >
          {/* TOP BAR */}
          <div className="absolute left-5 right-5 top-5 z-[110] flex items-center justify-between">
            <p className="text-[10px] uppercase tracking-[0.2em] text-white/70">
              {selectedColor}
            </p>

            <p className="text-[10px] tracking-[0.15em] text-white/70">
              {activeImage + 1} / {images.length}
            </p>

            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                setIsGalleryOpen(false);
              }}
              className="flex h-10 w-10 items-center justify-center text-3xl font-light text-white"
              aria-label="Close gallery"
            >
              ×
            </button>
          </div>

          {/* PREVIOUS */}
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              previousImage();
            }}
            className="absolute left-4 top-1/2 z-[110] hidden h-14 w-14 -translate-y-1/2 items-center justify-center text-5xl font-light text-white md:flex"
            aria-label="Previous image"
          >
            ‹
          </button>

          {/* IMAGE */}
          <div
            className="flex h-full w-full items-center justify-center pt-10"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={images[activeImage]}
              alt={`Nerea Blouse ${selectedColor} ${activeImage + 1}`}
              className="max-h-[88vh] max-w-[92vw] object-contain"
              draggable={false}
            />
          </div>

          {/* NEXT */}
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              nextImage();
            }}
            className="absolute right-4 top-1/2 z-[110] hidden h-14 w-14 -translate-y-1/2 items-center justify-center text-5xl font-light text-white md:flex"
            aria-label="Next image"
          >
            ›
          </button>

          {/* MOBILE CONTROLS */}
          <div className="absolute bottom-6 left-1/2 z-[110] flex -translate-x-1/2 items-center gap-6 md:hidden">
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                previousImage();
              }}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-2xl text-white"
              aria-label="Previous image"
            >
              ‹
            </button>

            <span className="text-[9px] uppercase tracking-[0.2em] text-white/60">
              Swipe
            </span>

            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                nextImage();
              }}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-2xl text-white"
              aria-label="Next image"
            >
              ›
            </button>
          </div>
        </div>
      )}
      <section className="w-full px-6 md:px-10 lg:px-16 py-24 bg-[#f8f5f0]">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-12">
      <p className="text-[10px] tracking-[0.35em] text-gray-500 mb-4">
        FROM THE WORLD OF ZAVÉRA
      </p>

      <h2 className="text-3xl md:text-4xl font-light tracking-[0.08em] text-[#1b1b1b]">
        Moments Beyond The Collection
      </h2>

      <p className="mt-4 text-sm text-gray-500 font-light">
        Discover the world behind Neréa.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      {[
        "/videos/FORWEBSITE-1.mp4",
        "/videos/FORWEBSITE-2.mp4",
        "/videos/FORWEBSITE-3.mp4",
      ].map((video, index) => (
        <div
          key={video}
          className="relative overflow-hidden bg-[#e9e5df] aspect-[4/5]"
        >
          <video
            src={video}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="w-full h-full object-cover"
          />

          <div className="absolute bottom-4 left-4">
            <span className="text-[9px] tracking-[0.3em] text-white/90">
              ZAVÉRA — {String(index + 1).padStart(2, "0")}
            </span>
          </div>
        </div>
      ))}
    </div>

    <div className="text-center mt-12">
      <p className="text-[10px] tracking-[0.3em] text-gray-400">
        FOLLOW THE JOURNEY
      </p>

      <div className="flex justify-center gap-8 mt-5 text-xs tracking-[0.2em]">
        <a
          href="https://instagram.com/zaveraco_"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-50 transition-opacity"
        >
          INSTAGRAM
        </a>

        <a
          href="https://www.tiktok.com/@zaveraco"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-50 transition-opacity"
        >
          TIKTOK
        </a>
      </div>
    </div>
  </div>
</section>
        </main>
  </>
  );
}