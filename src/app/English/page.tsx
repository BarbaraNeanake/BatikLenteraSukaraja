"use client";
import React from "react";
import { LiquidGlassFilters } from "@gracefullight/liquid-glass";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full min-h-screen overflow-x-hidden">
      <div className="relative w-full overflow-hidden">
        {/* Background Section */}
        <div className="relative flex min-h-screen w-full items-center justify-center bg-[url(/hero/batik.gif)] bg-bottom bg-cover bg-no-repeat">
          {/* Gradient Overlay */}
          <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-black to-transparent z-0" />

          {/* Main Content */}
          <div className="px-6 py-10 lg:px-[127px] lg:py-[83px] flex flex-col lg:flex-row gap-10 items-start w-full z-10 max-w-screen">
            {/* Kiri */}
            <div className="lg:w-1/2 w-full flex flex-col gap-y-6">
              <h1
                className="font-plus-jakarta-sans font-medium text-white text-3xl sm:text-4xl md:text-5xl lg:text-[70px] leading-tight"
                data-aos="fade-up"
              >
                Welcome to
                <br />
                <span className="font-black">BATIK LENTERA SUKARAJA</span>
              </h1>
              <p
                className="font-plus-jakarta-sans font-normal text-sm sm:text-base md:text-lg text-white text-justify"
                data-aos="fade-up"
              >
                Batik Lentera is a local micro-enterprise (UMKM) committed to preserving Indonesian batik culture through high-quality products made with love and dedication. We are located in Sukaraja Village, Sepaku, North Penajam Paser, East Kalimantan. We believe that every piece of batik is a work of art that carries rich cultural values and traditions. With this spirit, we are dedicated to continuously innovating and offering batik products that are not only beautiful but also meaningful.
              </p>

              <h2
                className="font-plus-jakarta-sans font-bold text-xl sm:text-2xl md:text-3xl lg:text-[70px] text-white text-center lg:text-start leading-tight"
                data-aos="fade-up"
              >
                “A Living Work of Art from Tradition”
              </h2>

              <Link
                href="/ENG-AboutUs"
                className="relative w-full max-w-xs text-center text-white font-semibold py-3 px-6 text-base sm:text-lg lg:text-xl rounded-full border border-white/30 backdrop-blur-sm hover:bg-green-500/20 transition-all duration-300 ease-in-out overflow-hidden z-10"
              >
                <LiquidGlassFilters />
                <span className="relative z-10">Get to Know Us Better</span>
              </Link>
            </div>

            {/* Kanan */}
            <div className="lg:w-1/2 w-full flex flex-col items-start gap-6 relative">
              {/* Tombol Navigasi */}
              <div className="flex flex-col sm:flex-row flex-wrap gap-4 w-full z-10">
                {[
                  { label: "ABOUT US", href: "/ENG-AboutUs" },
                  { label: "GALLERY", href: "/ENG-Galery" },
                  { label: "CONTACT US", href: "/ENG-Contact" },
                ].map(({ label, href }) => (
                  <Link
                    key={label}
                    href={href}
                    className="relative w-full sm:w-auto text-center text-white font-semibold py-3 px-6 text-base sm:text-lg rounded-full border border-white/30 backdrop-blur-sm hover:bg-yellow-500/20 transition-all duration-300 ease-in-out overflow-hidden"
                    data-aos="fade-up"
                  >
                    <LiquidGlassFilters />
                    <span className="relative z-10">{label}</span>
                  </Link>
                ))}
              </div>

              {/* Indo Toggle Button */}
              <div className="w-full flex justify-center sm:justify-end mt-4 z-10">
                <Link
                  href="/"
                  className="flex items-center gap-2 justify-center min-w-[120px] text-white font-semibold py-2.5 px-5 text-sm rounded-full border border-white/30 backdrop-blur-sm hover:bg-yellow-500/20 transition-all duration-300 ease-in-out overflow-hidden"
                  data-aos="fade-up"
                >
                  <Image
                    src="/icon/id-flag.png"
                    alt="English"
                    width={20}
                    height={20}
                    className="rounded-sm"
                  />
                  <span className="relative z-10">INDONESIA</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
