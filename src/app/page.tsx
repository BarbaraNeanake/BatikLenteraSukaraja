"use client";
import React from "react";
import { LiquidGlassFilters } from "@gracefullight/liquid-glass";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full h-fit max-w-screen overflow-x-hidden">
      <div className="relative w-full">
        {/* Background Section */}
        <div className="relative flex min-h-screen w-full items-center justify-center bg-[url(/hero/batik.gif)] bg-bottom bg-cover bg-no-repeat">
          <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-black to-transparent z-[0]" />

          <div className="px-6 py-10 lg:px-[127px] lg:py-[83px] flex flex-col lg:flex-row gap-y-10 lg:gap-x-10 items-start w-full z-10">
            {/* Left Content */}
            <div className="lg:w-1/2 w-full flex flex-col gap-y-6">
              {/* Heading */}
              <h1
                className="font-plus-jakarta-sans font-medium text-white text-3xl sm:text-4xl md:text-5xl lg:text-[70px] leading-tight text-start"
                data-aos="fade-up"
              >
                Selamat Datang di
                <br />
                <span className="font-black">BATIK LENTERA SUKARAJA</span>
              </h1>

              {/* Paragraph */}
              <p
                className="font-plus-jakarta-sans font-normal text-sm sm:text-base md:text-lg text-white text-justify break-words"
                data-aos="fade-up"
              >
                Batik Lentera adalah UMKM yang berkomitmen untuk melestarikan budaya batik Indonesia melalui produk berkualitas tinggi yang dibuat dengan penuh cinta dan dedikasi. Kami berlokasi di Desa Sukaraja, Sepaku, Penajam Paser Utara, Kalimantan Timur. Kami percaya bahwa setiap helai batik adalah karya seni yang mengandung nilai-nilai budaya dan tradisi yang kaya. Dengan semangat tersebut, kami berkomitmen untuk terus berinovasi dan menghadirkan produk-produk batik yang tidak hanya indah, tetapi juga bermakna.
              </p>

              {/* Quote */}
              <h2
                className="font-plus-jakarta-sans font-bold text-center lg:text-start text-xl sm:text-2xl md:text-3xl lg:text-[70px] text-white leading-tight"
                data-aos="fade-up"
              >
                “Karya Seni yang Hidup dari Tradisi”
              </h2>

              {/* Main Button */}
              <Link
                href="/ID-AboutUs"
                className="relative w-full max-w-xs text-center text-white font-semibold py-3 px-6 text-base sm:text-lg lg:text-xl rounded-full border border-white/30 backdrop-blur-sm hover:bg-green-500/20 transition-all duration-300 ease-in-out overflow-hidden z-10"
              >
                <LiquidGlassFilters />
                <span className="relative z-10">Kenal Kami Lebih Dalam</span>
              </Link>
            </div>

            {/* Right Content (Buttons) */}
            <div className="lg:w-1/2 w-full flex flex-col gap-6 relative">
              {/* Sticky Button Bar */}
              <div className="sticky top-6 z-30 flex flex-col sm:flex-row flex-wrap gap-4 justify-center sm:justify-start w-full">
                {/* TENTANG KAMI */}
                <Link
                  href="/ID-AboutUs"
                  className="relative w-full sm:w-auto text-center text-white font-semibold py-3 px-6 text-base sm:text-lg rounded-full border border-white/30 backdrop-blur-sm hover:bg-yellow-500/20 transition-all duration-300 ease-in-out overflow-hidden"
                  data-aos="fade-up"
                >
                  <LiquidGlassFilters />
                  <span className="relative z-10">TENTANG KAMI</span>
                </Link>

                {/* GALERI */}
                <Link
                  href="/ID-Galery"
                  className="relative w-full sm:w-auto text-center text-white font-semibold py-3 px-6 text-base sm:text-lg rounded-full border border-white/30 backdrop-blur-sm hover:bg-yellow-500/20 transition-all duration-300 ease-in-out overflow-hidden"
                  data-aos="fade-up"
                >
                  <LiquidGlassFilters />
                  <span className="relative z-10">GALERI</span>
                </Link>

                {/* KONTAK */}
                <Link
                  href="/ID-Contact"
                  className="relative w-full sm:w-auto text-center text-white font-semibold py-3 px-6 text-base sm:text-lg rounded-full border border-white/30 backdrop-blur-sm hover:bg-yellow-500/20 transition-all duration-300 ease-in-out overflow-hidden"
                  data-aos="fade-up"
                >
                  <LiquidGlassFilters />
                  <span className="relative z-10">KONTAK</span>
                </Link>
              </div>

              {/* English Toggle Button */}
              <div className="absolute top-0 right-0 z-50">
                <Link
                  href="/English"
                  className="pointer-events-auto flex items-center gap-2 justify-center min-w-[120px] text-white font-semibold py-2.5 px-5 text-sm rounded-full border border-white/30 backdrop-blur-sm hover:bg-yellow-500/20 transition-all duration-300 ease-in-out overflow-hidden"
                  data-aos="fade-up"
                >
                  <Image
                    src="/icon/uk-flag.png"
                    alt="English"
                    width={20}
                    height={20}
                    className="rounded-sm"
                  />
                  <span className="relative z-10">ENG</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
