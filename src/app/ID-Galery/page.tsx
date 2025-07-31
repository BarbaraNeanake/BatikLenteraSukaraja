"use client";
import React from "react";
import Link from "next/link";
import { Home } from "lucide-react";
import Image from "next/image";

const images = [
  "/galery/batik1b.jpg",
  "/galery/batik2B.jpg",
  "/galery/batik8b.jpg",
  "/galery/batik9b.jpeg",
  "/galery/batik10b.jpeg",
  "/galery/batik6b.jpg",
  "/galery/batik3.jpeg",
  "/galery/batikz.jpg",
  "/galery/batik5.jpg",
  "/galery/batik7.jpg",
  "/galery/batik11.jpg",
  "/galery/batik12.jpg",
];

const IDGallery = () => {
  return (
    <div className="flex flex-col items-center w-full bg-black text-white">
      {/* Floating Home Button */}
      <Link
        href="/"
        className="fixed top-6 right-6 md:top-10 md:right-10 z-[800] p-2 bg-white/60 backdrop-blur-md rounded-full border border-black/10 hover:bg-black hover:text-white transition"
      >
        <Home className="w-7 h-7 md:w-9 md:h-9" />
      </Link>

      {/* Hero Section */}
      <div className="relative w-full h-[65vh] bg-[url(/galery/batikz.jpg)] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/60 to-transparent z-0" />
        <div className="relative z-10 h-full flex flex-col items-start justify-center px-6 lg:px-28 space-y-4">
          <h5 className="font-unbounded text-lg lg:text-2xl uppercase tracking-wider" data-aos="fade-up">
            Selamat Datang di
          </h5>
          <h1 className="font-unbounded font-bold text-[28px] lg:text-[72px] leading-tight" data-aos="fade-up">
            Galeri Batik Lentera Sukaraja
          </h1>
          <p className="max-w-3xl text-white/90 font-plus-jakarta-sans text-base lg:text-xl" data-aos="fade-up">
            Di balik setiap lembar batik yang memesona, terukir kisah kerja sama, ketekunan, dan cinta dari tim pengrajin kami. 
            Setiap motif adalah bukti semangat kolektif warga, dari ide sederhana di sudut rumah hingga menjadi karya seni yang membanggakan.
            Mari jelajahi setiap pola dan warna yang membawa jejak tangan dan hati yang menciptakannya.
          </p>
        </div>
      </div>

      {/* Gallery Section */}
      <section className="w-full px-6 lg:px-20 py-12 lg:py-20">
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          data-aos="fade-up"
        >
          {images.map((src, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-xl shadow-lg"
            >
              <Image
                src={src}
                alt={`Galeri Batik ${idx + 1}`}
                width={600}
                height={600}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 group-hover:brightness-110"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default IDGallery;
