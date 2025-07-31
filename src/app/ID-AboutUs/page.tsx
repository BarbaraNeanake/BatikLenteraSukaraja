"use client";

import React from "react";
import { LiquidGlassFilters } from "@gracefullight/liquid-glass";
import Link from "next/link";
import { Home } from "lucide-react";

const IDAboutUs = () => {
  return (
    <div className="flex flex-col w-full h-fit relative">
      {/* Sticky Home Icon */}
      <Link
        href="/"
        className="fixed top-4 right-4 sm:top-6 sm:right-6 md:top-8 md:right-8 lg:top-12 lg:right-12 z-[800] p-2 bg-white/60 backdrop-blur-md rounded-full border border-black/10 hover:bg-black hover:text-white transition"
      >
        <Home className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
      </Link>

      {/* Hero Section */}
      <section className="relative w-full min-h-screen bg-[url(/hero/batik2.png)] bg-bottom bg-cover bg-no-repeat">
        <div className="absolute w-full h-full bg-gradient-to-b from-black to-transparent z-0" />
        <div className="relative z-10 w-full flex flex-col gap-5 sm:gap-6 md:gap-8 px-6 sm:px-10 md:px-20 lg:px-[127px] py-16 md:py-[83px]">
          <div className="flex flex-col gap-2 sm:gap-3 lg:gap-4">
            <h5 className="font-unbounded font-semibold text-sm sm:text-base lg:text-[24px] text-white tracking-widest uppercase" data-aos="fade-up">
              Tentang Kami
            </h5>
            <h1 className="font-unbounded font-bold text-3xl sm:text-5xl lg:text-[96px] text-white leading-tight" data-aos="fade-up">
              Batik <br /> Lentera Sukaraja
            </h1>
          </div>

          <div className="w-full lg:w-1/2 flex flex-col gap-4 sm:gap-6 lg:gap-10" data-aos="fade-up">
            <p className="font-plus-jakarta-sans text-base sm:text-lg lg:text-[24px] text-white text-justify">
              <span className="font-bold">Lentera Sukaraja</span> adalah gerakan membatik yang tumbuh sejak tahun <span className="font-bold">2023</span>, bermula dari semangat warga yang mulai belajar membatik sejak <span className="font-bold">2022</span>. Kami memberdayakan ibu rumah tangga di Desa Sukaraja untuk terus berkarya dan mandiri.
            </p>
            <p className="font-plus-jakarta-sans text-base sm:text-lg lg:text-[24px] text-white text-justify">
              Nama <span className="italic font-bold">Lentera</span> kami maknai sebagai simbol semangat. Selama ada minyak, lentera akan terus menyala. Selama ada semangat, kami takkan padam. <span className="font-bold">Semangat adalah bahan bakar kami.</span>
            </p>
            <p className="font-plus-jakarta-sans text-base sm:text-lg lg:text-[24px] text-white text-justify">
              Motif khas batik kami terinspirasi dari <span className="font-bold">sawit</span> yang tumbuh subur di sekitar desa, serta semangat baru dari <span className="font-bold">IKN Nusantara</span>. Kami bangga menjadi bagian dari inisiatif menjadikan desa sekitar IKN sebagai kampung batik masa depan.
            </p>

            <Link
              className="relative w-full sm:w-auto text-center text-white font-semibold transition-all duration-300 ease-in-out overflow-hidden py-3 px-6 text-base sm:text-lg lg:text-[24px] rounded-full z-0 hover:bg-green-500/20 focus:bg-green-500/30 backdrop-blur-sm border border-white/30"
              href="/ID-AboutUs"
            >
              <LiquidGlassFilters />
              <span className="relative z-10">Jelajahi Galeri Kami!</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Section: Sosok di balik Batik */}
      <section className="w-full bg-black py-20 px-6 sm:px-10 lg:px-[127px]">
        <div className="flex flex-col lg:flex-row gap-10 items-center lg:items-start justify-between w-full">
          {/* Foto */}
          <div className="w-full lg:w-[40%] flex justify-center lg:justify-start" data-aos="fade-up">
            <div className="relative mt-20 sm:mt-40 w-[80%] max-w-[400px] aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl translate-x-4 translate-y-4 hover:-translate-y-1 hover:scale-105 transition-all duration-500 ease-in-out hover:shadow-[0_15px_40px_rgba(255,255,255,0.2)]">
              <img src="/images/suhartini.jpeg" alt="Ibu Suhartini" className="w-full h-full object-cover object-top" />
            </div>
          </div>

          {/* Konten */}
          <div className="w-full lg:w-[55%] flex flex-col gap-5 sm:gap-6 lg:gap-10 text-right items-end" data-aos="fade-up">
            <div className="flex flex-col gap-2 sm:gap-3 lg:gap-4 text-right w-full">
              <h5 className="font-unbounded font-semibold text-sm sm:text-base lg:text-[24px] text-white tracking-widest uppercase">
                Berkenalan dengan
              </h5>
              <h1 className="font-unbounded font-bold text-xl sm:text-3xl lg:text-[80px] text-white leading-none">
                Sosok di balik <br /> Batik Lentera Sukaraja
              </h1>
            </div>
            <div className="flex flex-col gap-4 sm:gap-5 lg:gap-8 text-base sm:text-lg lg:text-[24px] text-white font-plus-jakarta-sans text-right">
              <p>Di balik nama <span className="font-bold">Lentera Sukaraja</span>, berdiri sosok perempuan tangguh bernama <span className="font-bold">Ibu Suhartini</span>...</p>
              <p>Berbekal ketekunan dan cinta terhadap budaya lokal...</p>
              <p>Dalam perjalanannya, Ibu Suhartini tidak sendiri...</p>
              <p>Bagi mereka, batik bukan sekadar kain...</p>
            </div>
          </div>
        </div>

        {/* Grid Foto */}
        <div className="mt-16 flex flex-wrap justify-center gap-4 sm:gap-6" data-aos="fade-up">
          {["timbatik", "timbatik2", "timbatik3"].map((img, i) => (
            <img key={i} src={`/images/${img}.jpg`} alt={`Tim Batik ${i}`} className="w-[45%] sm:w-[250px] h-auto aspect-[3/4] object-cover rounded-xl shadow-lg" />
          ))}
        </div>
      </section>

      {/* Section: Lokasi */}
      <section className="w-full bg-black py-20 px-6 sm:px-10 lg:px-[127px]">
        <div className="flex flex-col lg:flex-row gap-10 items-center justify-between w-full">
          {/* Teks */}
          <div className="w-full lg:w-[50%] flex flex-col gap-6 sm:gap-8 lg:gap-10 text-left items-start" data-aos="fade-up">
            <div className="flex flex-col gap-2 sm:gap-3 lg:gap-4">
              <h5 className="font-unbounded font-semibold text-sm sm:text-base lg:text-[24px] text-white tracking-widest uppercase">Lokasi Kami</h5>
              <h1 className="font-unbounded font-bold text-2xl sm:text-3xl lg:text-[64px] text-white leading-tight">
                Temukan Rumah Batik <br /> Lentera Sukaraja
              </h1>
            </div>
            <div className="text-base sm:text-lg lg:text-[24px] text-white font-plus-jakarta-sans leading-relaxed">
              <p>Kami berada di jantung Desa Sukaraja...</p>
              <p className="mt-4">Di sinilah setiap helai batik kami bermula...</p>
            </div>
            <a
              href="https://maps.app.goo.gl/2H2GjtMmeV942Vu38"
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-full sm:w-auto text-center text-white font-semibold transition-all duration-300 ease-in-out overflow-hidden py-3 px-6 text-base sm:text-lg lg:text-[24px] rounded-full z-0 hover:bg-green-500/20 focus:bg-green-500/30 backdrop-blur-sm border border-white/30"
            >
              <LiquidGlassFilters />
              <span className="relative z-10">Lokasi Kami via Google Maps</span>
            </a>
          </div>

          {/* Gambar */}
          <div className="flex flex-col gap-6 items-center w-full max-w-3xl mx-auto">
            {["rumah-batik", "maps-batik"].map((img, i) => (
              <div key={i} className="w-full max-w-md rounded-3xl overflow-hidden shadow-lg hover:scale-105 transition-all duration-300 ease-in-out">
                <img src={`/images/${img}.jpg`} alt={`Image ${i}`} className="w-full h-auto object-cover object-center" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default IDAboutUs;
