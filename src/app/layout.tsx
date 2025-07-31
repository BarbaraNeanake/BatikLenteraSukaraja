import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Unbounded, Great_Vibes } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import AOSInit from "@/components/AOSInit";

// Load Google Fonts
const PlusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

const UnboundedFont = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin"],
});

const GreatVibes = Great_Vibes({
  variable: "--font-vibes",
  subsets: ["latin"],
  weight: "400",
});

// Metadata for SEO
export const metadata: Metadata = {
  title: "Digital Catalog Batik Lentera Sukaraja",
  description: "by KKN-PPM UGM PELITA NUSANTARA 2025",
  icons: {
    icon: "/icon/LogoBatik.png",
  },
};

// Main Layout
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${PlusJakartaSans.variable} ${UnboundedFont.variable} ${GreatVibes.variable}`}
    >
      <body className="antialiased min-h-screen flex flex-col">
        <AOSInit />
        <main className="flex-1">{children}</main>

        {/* Footer */}
        <footer className="bg-black bg-opacity-70 text-white px-6 py-10 lg:px-10">
          <div className="flex justify-between items-center">
            {/* Bagian kiri */}
              <div className="flex items-center gap-6">
              <Image
                src="/icon/LogoBatik.png"
                alt="Lentera Sukaraja"
                width={80}
                height={90}
                className="object-contain"
              />
              <div>
                <p className="text-sm">DIGITAL CATALOG</p>
                <h1 className="text-2xl font-bold">BATIK LENTERA SUKARAJA</h1>
              </div>
            </div>
            {/* Bagian kanan: logo + copyright */}
            <div className="flex flex-col items-center gap-2">
              <div className="flex gap-6 justify-center">
                <Image
                  src="/icon/ugm.png"
                  alt="Universitas Gadjah Mada"
                  width={80}
                  height={80}
                  className="object-contain"
                />
                <Image
                  src="/icon/PELINUS.png"
                  alt="Pelita Nusantara"
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
              <p className="text-xs text-gray-300 mt-1">© Pelita Nusantara 2025</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
