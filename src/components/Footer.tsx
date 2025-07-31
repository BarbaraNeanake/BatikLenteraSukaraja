import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0C0C0C] text-white border-t border-gray-700 mt-8">
      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Info */}
        <div>
          <h2 className="text-xl font-bold text-primary mb-2">Batik Lentera</h2>
          <p className="text-sm text-gray-400">
            UMKM Batik dari Desa Sukaraja yang melestarikan budaya melalui karya-karya batik berkualitas.
          </p>
        </div>

        {/* Navigasi */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Navigasi</h3>
          <ul className="space-y-1 text-sm">
            <li><Link href="/" className="hover:text-primary">Beranda</Link></li>
            <li><Link href="/tentang" className="hover:text-primary">Tentang</Link></li>
            <li><Link href="/produk" className="hover:text-primary">Produk</Link></li>
            <li><Link href="/galeri" className="hover:text-primary">Galeri</Link></li>
            <li><Link href="/kontak" className="hover:text-primary">Kontak</Link></li>
          </ul>
        </div>

        {/* Kontak */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Hubungi Kami</h3>
          <p className="text-sm text-gray-400">
            Desa Sukaraja, Kec. XYZ<br />Kab. ABC, Indonesia
          </p>
          <p className="text-sm text-gray-400 mt-2">📞 0821-XXXX-XXXX</p>
          <p className="text-sm text-gray-400">✉️ batiklentera@email.com</p>
        </div>
      </div>

      <div className="text-center text-xs text-gray-500 py-4 border-t border-gray-800">
        &copy; {new Date().getFullYear()} Batik Lentera Sukaraja. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
