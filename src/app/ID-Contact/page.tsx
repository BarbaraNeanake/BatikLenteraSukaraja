"use client";
import React from "react";
import { LiquidGlassFilters } from "@gracefullight/liquid-glass";
import Link from "next/link";
import { Home, Mail, MapPin, Instagram, Phone } from "lucide-react";

const ContactUs = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-fit relative">
      {/* Sticky Home Icon */}
      <Link
        href="/"
        className="fixed top-8 right-8 md:top-12 md:right-12 z-[800] p-2 bg-white/60 backdrop-blur-md rounded-full border border-black/10 hover:bg-black hover:text-white transition"
      >
        <Home className="w-8 h-8 md:w-10 md:h-10" />
      </Link>

      {/* Main Content */}
      <div className="relative flex w-full h-full">
        <div className="relative flex min-h-screen w-full bg-[url(/hero/batikbg.jpg)] bg-bottom bg-cover bg-no-repeat">
          <div className="w-full h-full bg-gradient-to-b from-black to-transparent absolute z-[0]"></div>
          <div className="lg:px-[127px] lg:py-[83px] p-10 gap-x-10 gap-y-5 lg:gap-y-10 flex flex-col justify-start items-start">
            <div className="flex flex-row lg:gap-y-10 relative z-10 w-full">
              <h1
                className="font-unbounded font-bold text-[30px] lg:text-[96px] text-white flex-grow leading-none"
                data-aos="fade-up"
              >
                Hubungi Kami
              </h1>
            </div>

            <div
              className="lg:w-1/2 flex flex-col lg:gap-y-6 gap-y-4 relative text-white"
              data-aos="fade-up"
            >
              <p className="font-plus-jakarta-sans font-normal text-[18px] lg:text-[22px] text-white/90 text-justify">
                Di balik setiap karya batik yang indah, terdapat tim yang bekerja dengan penuh dedikasi, menggabungkan nilai-nilai tradisi dengan sentuhan kreativitas modern. Setiap helai batik tak hanya sebuah produk, melainkan kisah yang hidup, hasil dari proses yang penuh makna. <br /><br />
                Kami terbuka untuk berbagai bentuk kolaborasi, baik dalam bentuk kemitraan usaha, promosi bersama, hingga inisiatif pelestarian budaya. Jangan ragu untuk menghubungi kami, kami dengan senang hati menyambut setiap peluang untuk tumbuh dan berkarya bersama.
              </p>

              <div className="space-y-3 text-[16px] lg:text-[20px] font-plus-jakarta-sans">
                <div className="flex items-start gap-3">
                  <MapPin className="w-6 h-6 shrink-0 mt-1" />
                  <span>
                    Jl. Cempaka No.22, RT.14, Dusun Panca Karya, Sukaraja, Kec. Sepaku, Kabupaten Penajam Paser Utara, Kalimantan Timur, 76148
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-6 h-6" />
                  <a href="https://wa.me/6281253364600" target="_blank" rel="noopener noreferrer" className="hover:underline">
                    +62 812-5336-4600 (WhatsApp)
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-6 h-6" />
                  <a href="mailto:Lenterasukaraja23@gmail.com" className="hover:underline">
                    Lenterasukaraja23@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Instagram className="w-6 h-6" />
                  <a href="https://instagram.com/lentera_sukaraja" target="_blank" rel="noopener noreferrer" className="hover:underline">
                    @lentera_sukaraja
                  </a>
                </div>
              </div>

              {/* Button 1 */}
              <Link
                className="relative w-full text-center text-white font-semibold transition-all duration-300 ease-in-out overflow-hidden py-3 px-6 text-[18px] lg:text-[22px] rounded-full max-w-sm z-0 hover:bg-yellow-500/20 focus:bg-yellow-500/30 backdrop-blur-sm border border-white/30"
                href="https://maps.app.goo.gl/2H2GjtMmeV942Vu38"
                target="_blank"
              >
                <LiquidGlassFilters />
                <span className="relative z-10">Lihat Lokasi via Google Maps</span>
              </Link>

              {/* WhatsApp Button */}
              <a
                href="https://wa.me/6281253364600"
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-full text-center text-white font-semibold transition-all duration-300 ease-in-out overflow-hidden py-3 px-6 text-[18px] lg:text-[22px] rounded-full max-w-sm z-0 hover:bg-green-500/20 focus:bg-green-500/30 backdrop-blur-sm border border-white/30"
              >
                <LiquidGlassFilters />
                <span className="relative z-10">Kontak WhatsApp Sekarang</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
