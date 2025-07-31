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
        className="fixed top-8 right-8 md:top-12 md:right-12 z-[800] p-2 bg-white/60 backdrop-blur-md rounded-full border border-black/10 hover:bg-black hover:text-white transition"
      >
        <Home className="w-8 h-8 md:w-10 md:h-10" />
      </Link>

      {/* Hero Section */}
      <section className="relative w-full min-h-screen bg-[url(/hero/batik2.png)] bg-bottom bg-cover bg-no-repeat">
        {/* Overlay */}
        <div className="absolute w-full h-full bg-gradient-to-b from-black to-transparent z-0" />

        {/* Content */}
        <div className="lg:px-[127px] lg:py-[83px] p-10 gap-x-10 gap-y-5 lg:gap-y-10 flex flex-col justify-start items-start relative z-10 w-full">
          {/* Headings */}
          <div className="flex flex-col lg:gap-y-4 gap-y-2 w-full">
            <h5
              className="font-unbounded font-semibold text-[16px] lg:text-[24px] text-white tracking-widest uppercase"
              data-aos="fade-up"
            >
              Tentang Kami
            </h5>
            <h1
              className="font-unbounded font-bold text-[30px] lg:text-[96px] text-white leading-none"
              data-aos="fade-up"
            >
              Batik <br /> Lentera Sukaraja
            </h1>
          </div>

          {/* Paragraphs + Buttons */}
          <div
            className="lg:w-1/2 flex flex-col lg:gap-y-10 gap-y-5"
            data-aos="fade-up"
          >
            <p className="font-plus-jakarta-sans font-normal text-[20px] lg:text-[24px] text-white text-justify">
              <span className="font-bold">Lentera Sukaraja</span> adalah gerakan membatik yang tumbuh sejak tahun{" "}
              <span className="font-bold">2023</span>, bermula dari semangat warga yang mulai belajar membatik sejak{" "}
              <span className="font-bold">2022</span>. Kami memberdayakan ibu rumah tangga di Desa Sukaraja untuk terus berkarya dan mandiri.
            </p>
            <p className="font-plus-jakarta-sans font-normal text-[20px] lg:text-[24px] text-white text-justify">
              Nama <span className="italic font-bold">Lentera</span> kami maknai sebagai simbol semangat. Selama ada minyak, lentera akan terus menyala. Selama ada semangat, kami takkan padam.{" "}
              <span className="font-bold">Semangat adalah bahan bakar kami.</span>
            </p>
            <p className="font-plus-jakarta-sans font-normal text-[20px] lg:text-[24px] text-white text-justify">
              Motif khas batik kami terinspirasi dari <span className="font-bold">sawit</span> yang tumbuh subur di sekitar desa, serta semangat baru dari <span className="font-bold">IKN Nusantara</span>. Kami bangga menjadi bagian dari inisiatif menjadikan desa sekitar IKN sebagai kampung batik masa depan.
            </p>

            {/* Button*/}
              <Link
                className="relative w-full text-center text-white font-semibold transition-all duration-300 ease-in-out overflow-hidden py-3 px-6 text-[18px] lg:text-[24px] rounded-full max-w-sm z-0 hover:bg-green-500/20 focus:bg-green-500/30 backdrop-blur-sm border border-white/30"
                href="/ID-Galery"
              >
                <LiquidGlassFilters />
                <span className="relative z-10">Jelajahi Galeri Kami!</span>
              </Link>
          </div>
        </div>
      </section>
      {/* Section: Sosok di balik Batik */}
      <section className="w-full bg-black py-20 px-8">
        <div className="lg:px-[127px] lg:py-[83px] p-10 flex flex-col lg:flex-row gap-10 items-center lg:items-start justify-between w-full">
          
          {/* Foto Ibu Suhartini */}
          <div
            className="w-full lg:w-[40%] flex justify-center lg:justify-start"
            data-aos="fade-up"
          >
          <div className="relative mt-80 w-[340px] h-[460px] lg:w-[400px] lg:h-[520px] rounded-3xl overflow-hidden shadow-2xl translate-x-4 translate-y-4 hover:-translate-y-1 hover:scale-[1.03] transition-all duration-500 ease-in-out hover:shadow-[0_15px_40px_rgba(255,255,255,0.2)]">
            <img
              src="/images/suhartini.jpeg"
              alt="Ibu Suhartini"
              className="w-full h-full object-cover object-top"
            />
          </div>
          </div>

          {/* Text Konten */}
          <div
            className="lg:w-[55%] flex flex-col gap-y-5 lg:gap-y-10 text-right items-end"
            data-aos="fade-up"
          >
            <div className="flex flex-col gap-y-2 lg:gap-y-4 text-right items-end w-full">
              <h5 className="font-unbounded font-semibold text-[16px] lg:text-[24px] text-white tracking-widest uppercase">
                Berkenalan dengan
              </h5>
              <h1 className="font-unbounded font-bold text-[24px] lg:text-[80px] text-white leading-none">
                Sosok di balik <br /> Batik Lentera Sukaraja
              </h1>
            </div>

            <div className="flex flex-col gap-y-5 lg:gap-y-8 text-[20px] lg:text-[24px] text-white font-plus-jakarta-sans text-right">
              <p>
                Di balik nama <span className="font-bold">Lentera Sukaraja</span>, berdiri sosok perempuan tangguh bernama <span className="font-bold">Ibu Suhartini</span>. Ia bukan hanya penggerak utama, tapi juga lentera yang menerangi jalan komunitas membatik di desanya.
              </p>
              <p>
                Berbekal ketekunan dan cinta terhadap budaya lokal, Ibu Suhartini mulai mengajarkan teknik membatik kepada para ibu rumah tangga sejak <span className="font-bold">2022</span>. Dari halaman rumahnya, gerakan ini tumbuh menjadi ruang berkarya bersama yang memberdayakan banyak perempuan.
              </p>
              <p>
                Dalam perjalanannya, Ibu Suhartini tidak sendiri. Ia didampingi oleh tim perempuan kreatif yang penuh semangat: ibu-ibu dan warga lokal, yang bersama-sama menjaga nyala lentera agar terus terang. Bersama, mereka menjadikan batik sebagai bentuk perjuangan, warisan, dan sumber penghidupan.
              </p>
              <p>
                Bagi mereka, batik bukan sekadar kain, tetapi simbol identitas, ketekunan, dan harapan. Lewat <span className="italic font-bold">Lentera</span>, mereka ingin semangat terus menyala, dan warisan budaya terus hidup di tengah perubahan zaman.
              </p>
            </div>
          </div>
        </div>

        {/* Grid Foto Tim */}
        <div
          className="mt-16 flex flex-wrap justify-center gap-6 px-4 lg:px-[127px]"
          data-aos="fade-up"
        >
          <img src="/images/timbatik.jpg" alt="Tim Batik" className="w-[250px] h-[330px] object-cover rounded-xl shadow-lg" />
          <img src="/images/timbatik2.jpg" alt="Tim Batik" className="w-[250px] h-[330px] object-cover rounded-xl shadow-lg" />
          <img src="/images/timbatik3.jpg" alt="Tim Batik" className="w-[250px] h-[330px] object-cover rounded-xl shadow-lg" />
        </div>
      </section>

      {/* Section: Lokasi */}
      <section className="w-full bg-black py-20 px-8">
        <div className="lg:px-[127px] lg:py-[83px] p-10 flex flex-col lg:flex-row gap-10 items-center lg:items-start justify-between w-full">
          
          {/* Konten Teks */}
          <div
            className="lg:w-[50%] flex flex-col gap-y-6 lg:gap-y-10 text-left items-start"
            data-aos="fade-up"
          >
            <div className="flex flex-col gap-y-2 lg:gap-y-4 text-left items-start w-full">
              <h5 className="font-unbounded font-semibold text-[16px] lg:text-[24px] text-white tracking-widest uppercase">
                Lokasi Kami
              </h5>
              <h1 className="font-unbounded font-bold text-[24px] lg:text-[64px] text-white leading-tight">
                Temukan Rumah Batik <br /> Lentera Sukaraja
              </h1>
            </div>

            <div className="text-[20px] lg:text-[24px] text-white font-plus-jakarta-sans leading-relaxed">
              <p>
                Kami berada di jantung Desa Sukaraja, tepatnya di <span className="font-bold">Batik Sepaku Nusantara</span>, Jl. Cempaka No. 22, RT.14, Dusun Panca Karya, Sukaraja, Kec. Sepaku, Kabupaten Penajam Paser Utara, Kalimantan Timur, <span className="font-bold">76148</span>.
              </p>
              <p className="mt-4">
                Di sinilah setiap helai batik kami bermula, dari halaman rumah yang sederhana, lahirlah karya yang sarat makna. Rumah Batik Lentera terbuka bagi siapa pun yang ingin berkunjung, berkolaborasi, atau sekadar berbagi cerita tentang semangat membatik yang tumbuh bersama warga.
              </p>
            </div>
            {/* Lokasi Button */}
            <a
              href="https://maps.app.goo.gl/2H2GjtMmeV942Vu38"
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-full text-center text-white font-semibold transition-all duration-300 ease-in-out overflow-hidden py-3 px-6 text-[18px] lg:text-[24px] rounded-full max-w-sm z-0 hover:bg-green-500/20 focus:bg-green-500/30 backdrop-blur-sm border border-white/30"
            >
              <LiquidGlassFilters />
              <span className="relative z-10">Lokasi Kami via Google Maps</span>
            </a>
          </div>

          <div className="flex flex-col gap-6 items-center w-full max-w-3xl mx-auto">
            <div className="w-full max-w-md rounded-3xl overflow-hidden shadow-lg hover:scale-[1.02] transition-all duration-300 ease-in-out">
              <img
                src="/images/rumah-batik.jpg"
                alt="Rumah Batik Sukaraja"
                className="w-full h-auto object-cover object-center"
              />
            </div>
            <div className="w-full max-w-md rounded-3xl overflow-hidden shadow-lg hover:scale-[1.02] transition-all duration-300 ease-in-out">
              <img
                src="/images/maps-batik.png"
                alt="Lokasi di Google Maps"
                className="w-full h-auto object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IDAboutUs;
