import { useState, useEffect } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar';
// Footer global di App.js

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        console.log('Frontend consuming DB via API...');
        const res = await axios.get('http://localhost:5000/api/products');
        console.log('Consume success from products table:', res.data.length, 'items');
        console.log('Sample consumed data:', res.data[0]);  // Debug: Konfirm dari DB
        setProducts(res.data || []);
      } catch (err) {
        console.error('Consume Error:', {
          message: err.message,
          status: err.response?.status,
          data: err.response?.data
        });
        setProducts([]);  // Kosong jika error
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();

    // Auto-slide
    const interval = setInterval(() => {
      if (products.length > 0) {
        setCurrentSlide((prev) => (prev + 1) % products.length);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);  // Fetch sekali

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % products.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + products.length) % products.length);

  if (loading) {
    return (
      <div className="bg-batak-krem min-h-screen flex items-center justify-center">
        <Navbar />
        <div className="text-center py-8">Loading data from DB products table...</div>
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="bg-batak-krem min-h-screen flex items-center justify-center">
        <Navbar />
        <div className="text-center py-8">Tidak ada data di tabel products. Jalankan SQL insert di pgAdmin.</div>
      </div>
    );
  }

  return (
    <div className="bg-batak-krem min-h-screen">
      <Navbar />
      
      {/* Hero – Fixed URL */}
      <motion.section 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        className="relative h-96 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: 'ur[](https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&h=400&fit=cover)' }}  // Fixed: url(
      >
        <div className="absolute inset-0 bg-batak-red/50 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl font-bold mb-4">Selamat Datang di Lapo Batak</h1>
            <p className="text-xl mb-6">Nationwide Presence, Deep Local Commitment</p>
            <p className="text-lg mb-8 max-w-2xl mx-auto">Kami memastikan masakan autentik Batak mudah diakses oleh setiap rumah tangga Indonesia.</p>
          </div>
        </div>
      </motion.section>

      {/* Slider – Consume data dari tabel products */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
        className="py-16 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-batak-red">Produk Unggulan Kami</h2>
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div 
                key={currentSlide}
                className="relative"
                initial={{ opacity: 0, x: 100 }} 
                animate={{ opacity: 1, x: 0 }} 
                exit={{ opacity: 0, x: -100 }} 
                transition={{ duration: 0.5 }}
              >
                <img 
                  src={products[currentSlide]?.image_url || 'https://via.placeholder.com/800x500/FF6B6B/FFFFFF?text=No+Image'} 
                  alt={products[currentSlide]?.name || ''} 
                  className="w-full h-[400px] md:h-[500px] object-cover rounded-xl shadow-2xl" 
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/40 text-white p-6 rounded-b-xl">
                  <h3 className="text-2xl font-bold mb-2">{products[currentSlide]?.name || ''}</h3>
                  <p className="text-lg leading-relaxed">{products[currentSlide]?.description || ''}</p>
                </div>
              </motion.div>
            </AnimatePresence>
            
            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {products.map((_, index) => (
                <motion.button 
                  key={index} 
                  onClick={() => setCurrentSlide(index)}
                  whileHover={{ scale: 1.2 }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-batak-red scale-125' : 'bg-gray-300 hover:bg-gray-400'}`}
                />
              ))}
            </div>
            
            {/* Arrows */}
            <button 
              onClick={prevSlide} 
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-batak-red/80 text-white p-3 rounded-full hover:bg-batak-red text-xl shadow-lg transition-all"
            >
              ‹
            </button>
            <button 
              onClick={nextSlide} 
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-batak-red/80 text-white p-3 rounded-full hover:bg-batak-red text-xl shadow-lg transition-all"
            >
              ›
            </button>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;