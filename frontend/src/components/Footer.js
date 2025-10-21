import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-batak-red text-white py-12">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">
        {/* Bagian Kiri: Logo & Deskripsi */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
          className="mb-8 md:mb-0"
        >
          <h3 className="text-2xl font-bold mb-4">Lapo Batak</h3>
          <p className="text-sm">Pionir Mie Gomak & Masakan Khas Batak sejak 2020. Menyediakan rasa autentik dari Tanah Batak ke seluruh Indonesia.</p>
        </motion.div>

        {/* Bagian Tengah: Main Menu */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h4 className="font-semibold mb-4">Main Menu</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-batak-krem">Home</a></li>
            <li><a href="/about" className="hover:text-batak-krem">About Us</a></li>
            <li><a href="/products" className="hover:text-batak-krem">Our Products</a></li>
            <li><a href="/contact" className="hover:text-batak-krem">Contact Us</a></li>
          </ul>
        </motion.div>

        {/* Bagian Kanan: Kontak & Jam Kerja */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h4 className="font-semibold mb-4">Kontak Kami</h4>
          <p className="text-sm mb-2">PT Lapo Batak Indonesia</p>
          <p className="text-sm mb-2">Jl. Batak No. 123, Medan, Sumut</p>
          <p className="text-sm">Working Hours: Senin-Jumat 08:00-17:00</p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-xl hover:text-batak-krem">📘</a> {/* FB */}
            <a href="#" className="text-xl hover:text-batak-krem">📷</a> {/* IG */}
          </div>
        </motion.div>
      </div>
      <div className="border-t border-batak-green/20 mt-8 pt-4 text-center text-sm">
        <p>&copy; 2025 Lapo Batak. Semua hak dilindungi.</p>
      </div>
    </footer>
  );
};

export default Footer;