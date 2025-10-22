import { useState, useEffect } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import batak1 from '../images/batak1.jpeg';  // Hero background
import batak4 from '../images/batak6.jpeg';  // Our Story background
import batak5 from '../images/batak7.jpeg';  // Why We Started background
import miegomak from '../images/miegomak.jpeg';  // Mie Gomak
import ikan from '../images/ikan.jpeg';  // Arsik Ikan Mas
import babi from '../images/babi.jpeg';  // Saksang Babi
import Navbar from '../components/Navbar';
// Footer global di App.js

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Local images for visuals (fallback if DB image_url empty)
  const localImages = [miegomak, ikan, babi];

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        console.log('Frontend consuming DB via API for menu & description...');
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
        <div className="text-center py-8">Loading menu & description from DB...</div>
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="bg-batak-krem min-h-screen flex items-center justify-center">
        <Navbar />
        <div className="text-center py-8">No menu data in products table. Run SQL insert in pgAdmin.</div>
      </div>
    );
  }

  return (
    <div className="bg-batak-krem min-h-screen">
      <Navbar />
      
      {/* Hero Section: Enlarged (h-screen for full viewport height) */}
      <motion.section 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        className="relative h-screen bg-cover bg-center flex items-center justify-center"  // Changed h-96 to h-screen for larger size
        style={{ backgroundImage: `url(${batak1})` }}  // Background lokal batak1
      >
        <div className="absolute inset-0 bg-batak-red/50 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">Welcome to Lapo Batak</h1>  
            <p className="text-xl md:text-2xl mb-6">Nationwide Presence, Deep Local Commitment</p>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">We ensure authentic Batak cuisine is easily accessible to every Indonesian household.</p>
          </div>
        </div>
      </motion.section>

      {/* Section Our Story – Dengan batak4, no overlay, adjust height to image, white text */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
        className="py-20 relative bg-cover bg-center bg-no-repeat bg-fixed h-auto"  // h-auto to fit image
        style={{ backgroundImage: `url(${batak4})` }}  // Background lokal batak4
      >
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center py-20">  
          <motion.h2 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }}
            className="text-4xl font-serif font-bold mb-8 text-white"  // White text for contrast
          >
            🍽️ OUR STORY
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-white leading-relaxed mb-6 font-serif"  // White text, serif font
          >
            From a small kitchen in Medan, Lapo was born with one mission — to bring the authentic flavors of Batak cuisine to everyone. Inspired by family gatherings filled with laughter, stories, and warm bowls of mie gomak or rich saksang babi, we believe that food is more than just a meal — it’s a connection.
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-white leading-relaxed font-serif"
          >
            Each dish we serve is crafted with care, using traditional recipes passed down through generations, so you can experience the true taste and spirit of Batak culture.
          </motion.p>
        </div>
      </motion.section>

      {/* Section Our Favorites Menu – Consume API for name & description + local images */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
        className="py-20 bg-batak-krem"
      >
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-batak-red">🥘 OUR FAVORITES MENU</h2>
          <div className="relative mb-12">
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
                  src={localImages[currentSlide]}  // Local image for visuals
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
          {/* Grid Images: local miegomak, ikan, babi */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <motion.img 
              whileHover={{ scale: 1.05 }} 
              src={miegomak}  // miegomak for Mie Gomak
              alt="Mie Gomak" 
              className="rounded-xl shadow-lg w-full h-48 object-cover" 
            />
            <motion.img 
              whileHover={{ scale: 1.05 }} 
              src={ikan}  // ikan for Arsik Ikan Mas
              alt="Arsik Ikan Mas" 
              className="rounded-xl shadow-lg w-full h-48 object-cover" 
            />
            <motion.img 
              whileHover={{ scale: 1.05 }} 
              src={babi}  // babi for Saksang Babi
              alt="Saksang Babi" 
              className="rounded-xl shadow-lg w-full h-48 object-cover" 
            />
          </div>
        </div>
      </motion.section>

      {/* Section Why We Started – Dengan batak5, no overlay, adjust height to image, white text */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
        className="py-20 relative bg-cover bg-center bg-no-repeat bg-fixed h-auto"  // h-auto to fit image
        style={{ backgroundImage: `url(${batak5})` }}  // Background lokal batak5
      >
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center py-20">  
          <motion.h2 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }}
            className="text-4xl font-serif font-bold mb-8 text-white"  // White text for contrast
          >
            WHY WE STARTED
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-white leading-relaxed mb-6 font-serif"  // White text, serif font
          >
            Lapo was created from a longing for home-cooked flavors and a passion to share the richness of Batak culinary heritage with the world.
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-white leading-relaxed font-serif"
          >
            We believe that preserving our traditions while embracing modern tastes can bring people closer together.
            Through every plate we serve, we aim to share the warmth, authenticity, and pride of Indonesian culture — one delicious meal at a time.
          </motion.p>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;