import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-batak-red text-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo Kiri: Mirip Ladang Lima */}
          <Link to="/" className="text-2xl font-bold flex items-center">
            Lapo Batak
          </Link>

          {/* Menu Tengah: Horizontal */}
          <div className="hidden md:flex space-x-6 items-center">
            <Link to="/" className="hover:text-batak-krem transition-colors">Home</Link>
            <Link to="/about" className="hover:text-batak-krem transition-colors">About Us</Link>
            <Link to="/faq" className="hover:text-batak-krem transition-colors">FAQ</Link>
            <Link to="/products" className="hover:text-batak-krem transition-colors">Our Products</Link>
            <Link to="/articles" className="hover:text-batak-krem transition-colors">Article</Link>
            <Link to="/contact" className="hover:text-batak-krem transition-colors">Contact Us</Link>
          </div>

          {/* Social Kanan: Mirip Ladang Lima */}
          <div className="hidden md:flex space-x-4 items-center">
            <a href="#" className="text-xl hover:text-batak-krem transition-colors">📘</a> {/* Facebook */}
            <a href="#" className="text-xl hover:text-batak-krem transition-colors">📷</a> {/* Instagram */}
          </div>

          {/* Hamburger Mobile */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden p-2 text-xl"
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu: Slide Down Animasi */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }} 
              animate={{ opacity: 1, height: 'auto' }} 
              exit={{ opacity: 0, height: 0 }} 
              transition={{ duration: 0.3 }}
              className="md:hidden bg-batak-red space-y-4 px-4 py-4 border-t border-batak-krem/20"
            >
              <Link to="/" className="block py-2 hover:text-batak-krem" onClick={() => setIsOpen(false)}>Home</Link>
              <Link to="/about" className="block py-2 hover:text-batak-krem" onClick={() => setIsOpen(false)}>About Us</Link>
              <Link to="/faq" className="block py-2 hover:text-batak-krem" onClick={() => setIsOpen(false)}>FAQ</Link>
              <Link to="/products" className="block py-2 hover:text-batak-krem" onClick={() => setIsOpen(false)}>Our Products</Link>
              <Link to="/articles" className="block py-2 hover:text-batak-krem" onClick={() => setIsOpen(false)}>Article</Link>
              <Link to="/contact" className="block py-2 hover:text-batak-krem" onClick={() => setIsOpen(false)}>Contact Us</Link>
              <div className="flex space-x-4 pt-4 border-t border-batak-krem/20">
                <a href="#" className="text-xl hover:text-batak-krem">📘</a>
                <a href="#" className="text-xl hover:text-batak-krem">📷</a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;