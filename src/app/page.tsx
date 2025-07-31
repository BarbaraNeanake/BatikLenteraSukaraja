"use client";
import React from "react";
import { LiquidGlassFilters } from "@gracefullight/liquid-glass";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center lg:items-start :justify-start w-full h-fit z-0">
      <div className="relative flex w-full h-full">
        <div className="relative flex min-h-screen w-full items-center justify-center bg-[url(/hero/batik.gif)] bg-bottom bg-cover bg-no-repeat">          
        <div className="w-full h-full bg-gradient-to-r from-black to-transparent absolute z-[0]"></div>
          <div className="lg:px-[127px] lg:py-[83px] p-10 gap-x-10 gap-y-5 lg:gap-y-0 flex flex-col lg:flex-row justify-start items-start">
            <div className="lg:w-1/2 flex flex-col lg:gap-y-10 gap-y-5 relative z-0">
              <div className="flex flex-row">
                <h1
                  className="font-plus-jakarta-sans font-medium text-start lg:text-start text-[40px] lg:text-[70px] text-white flex-grow"
                  data-aos="fade-up"
                >
                  Selamat Datang di
                  <br />
                  <span className="font-black">BATIK LENTERA SUKARAJA</span>
                </h1>
                <div className="block lg:hidden">
                </div>
              </div>
              <p
                className="font-plus-jakarta-sans font-normal text-[18px] lg:text-[20px] text-white text-justify text-sm/relaxed"
                data-aos="fade-up"
              >
                Batik Lentera adalah UMKM yang berkomitmen untuk melestarikan<br />
                budaya batik Indonesia melalui produk berkualitas tinggi yang<br />
                dibuat dengan penuh cinta dan dedikasi. Kami berlokasi di Desa<br />  
                Sukaraja, Sepaku, Penajam Paser Utara, Kalimantan Timur.<br />
                Kami percaya bahwa setiap helai batik adalah karya seni yang<br />
                mengandung nilai-nilai budaya dan tradisi yang kaya. Dengan<br />
                semangat tersebut, kami berkomitmen untuk terus berinovasi dan<br />
                menghadirkan produk-produk batik yang tidak hanya indah, tetapi<br />
                juga bermakna.
              </p>
              <h2
                className="font-plus-jakarta-sans text-[30px] text-center lg:text-start lg:text-[70px] text-white font-bold lg:leading-none"
                data-aos="fade-up"
              >
                “Karya Seni yang Hidup dari Tradisi”
              </h2>
              {/* Button*/}
              <Link
                className="relative w-full text-center text-white font-semibold transition-all duration-300 ease-in-out overflow-hidden py-3 px-6 text-[18px] lg:text-[24px] rounded-full max-w-sm z-0 hover:bg-green-500/20 focus:bg-green-500/30 backdrop-blur-sm border border-white/30"
                href="/ID-AboutUs"
              >
                <LiquidGlassFilters />
                <span className="relative z-10">Kenal Kami Lebih Dalam</span>
              </Link>
            </div>

            <div className="lg:w-1/2 w-auto flex flex-col lg:flex-row lg:justify-start lg:items-start justify-center items-center gap-y-5 lg:gap-x-5 z-0">
            
            {/* Sticky Button Bar */}
            <div className="sticky top-6 z-30 flex gap-4 justify-start px-6">
              {/* TENTANG KAMI */}
              <Link
                className="relative min-w-[160px] text-center text-white font-semibold transition-all duration-300 ease-in-out overflow-hidden py-3 px-6 text-lg rounded-full hover:bg-yellow-500/20 focus:bg-yellow-500/30 backdrop-blur-sm border border-white/30"
                href="/ID-AboutUs"
                data-aos="fade-up"
              >
                <LiquidGlassFilters />
                <span className="relative z-10">TENTANG KAMI</span>
              </Link>

              {/* GALERI */}
              <Link
                className="relative min-w-[160px] text-center text-white font-semibold transition-all duration-300 ease-in-out overflow-hidden py-3 px-6 text-lg rounded-full hover:bg-yellow-500/20 focus:bg-yellow-500/30 backdrop-blur-sm border border-white/30"
                href="/ID-Galery"
                data-aos="fade-up"
              >
                <LiquidGlassFilters />
                <span className="relative z-10">GALERI</span>
              </Link>

              {/* CONTACT US */}
              <Link
                className="relative min-w-[160px] text-center text-white font-semibold transition-all duration-300 ease-in-out overflow-hidden py-3 px-6 text-lg rounded-full hover:bg-yellow-500/20 focus:bg-yellow-500/30 backdrop-blur-sm border border-white/30"
                href="/ID-Contact"
                data-aos="fade-up"
              >
                <LiquidGlassFilters />
                <span className="relative z-10">KONTAK</span>
              </Link>
            </div>

            {/* Tombol ENGLISH Terpisah di Pojok Kanan */}
            <div className="absolute top-6 right-6 z-20">
              <Link
                href="/English"
                className="flex items-center gap-2 min-w-[130px] justify-center text-white font-semibold transition-all duration-300 ease-in-out overflow-hidden py-2.5 px-5 text-sm rounded-full hover:bg-yellow-500/20 focus:bg-yellow-500/30 backdrop-blur-sm border border-white/30"
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
