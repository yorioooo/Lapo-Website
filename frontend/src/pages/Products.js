import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Products = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const products = [
    { id: 1, name: 'Mie Gomak', description: 'Mie halus khas Tapanuli dengan kuah santan pedas dan rempah andaliman segar.', image: 'https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=800&h=600&fit=crop' },
    { id: 2, name: 'Saksang Babi', description: 'Daging babi jeroan dimasak santan hitam, kaya protein dan rasa umami Batak autentik.', image: 'https://images.unsplash.com/photo-1633403913605-75d7d7c8c6f5?w=800&h=600&fit=crop' },
    { id: 3, name: 'Arsik Ikan Mas', description: 'Ikan mas segar dengan bumbu kuning serai dan kunyit, hidangan pesta Batak yang sehat.', image: 'https://images.unsplash.com/photo-1559314809-0f31657def5c?w=800&h=600&fit=crop' },
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % products.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + products.length) % products.length);

  return (
    <div className="bg-batak-krem min-h-screen">
      <Navbar />
      
      {/* Section Get Know Us Better: Mirip Screenshot – Dua Kolom Teaser */}
      <motion.section 
        initial={{ opacity: 0 }} 
        whileInView={{ opacity: 1 }} 
        transition={{ duration: 0.8 }}
        className="py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-8">
          {/* Kolom Kiri: Company Profile */}
          <motion.div 
            whileHover={{ scale: 1.02 }} 
            className="relative rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-batak-red/20 to-batak-krem"
          >
            <img 
              src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop"  // Gambar lapo tradisional
              alt="Lapo Profile" 
              className="w-full h-96 object-cover" 
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/20">
              <motion.div 
                whileHover={{ scale: 1.1 }} 
                className="text-center text-white"
              >
                <h2 className="text-3xl font-bold mb-4">GET KNOW US BETTER</h2>
                <h3 className="text-2xl mb-6">OUR COMPANY PROFILE</h3>
                <motion.div 
                  whileHover={{ scale: 1.2 }} 
                  className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4"
                >
                  <span className="text-2xl">▶</span>  {/* Play button */}
                </motion.div>
                <p className="text-lg">Tonton cerita kami dari Tanah Batak</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Kolom Kanan: Product Knowledge */}
          <motion.div 
            whileHover={{ scale: 1.02 }} 
            className="relative rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-batak-green/20 to-batak-krem"
          >
            <img 
              src="https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=600&h=400&fit=crop"  // Gambar mie gomak
              alt="Product Teaser" 
              className="w-full h-96 object-cover" 
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/20">
              <motion.div 
                whileHover={{ scale: 1.1 }} 
                className="text-center text-white"
              >
                <h2 className="text-3xl font-bold mb-4">GET KNOW US BETTER</h2>
                <h3 className="text-2xl mb-6">OUR PRODUCT KNOWLEDGE</h3>
                <motion.div 
                  whileHover={{ scale: 1.2 }} 
                  className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4"
                >
                  <span className="text-2xl">▶</span>
                </motion.div>
                <p className="text-lg">Eksplor rasa autentik Batak</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Slider Produk: Mirip Carousel Slide */}
      <motion.section 
        initial={{ opacity: 0, x: -50 }} 
        whileInView={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.8 }}
        className="py-20 bg-gray-100"
      >
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-batak-red">Produk Unggulan Kami</h2>
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.img 
                key={currentSlide}
                src={products[currentSlide].image} 
                alt={products[currentSlide].name} 
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl mx-auto"
                initial={{ opacity: 0, x: 100 }} 
                animate={{ opacity: 1, x: 0 }} 
                exit={{ opacity: 0, x: -100 }} 
                transition={{ duration: 0.5 }}
              />
            </AnimatePresence>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {products.map((_, index) => (
                <button 
                  key={index} 
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-batak-red' : 'bg-white'}`}
                />
              ))}
            </div>
            <button 
              onClick={prevSlide} 
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-batak-red/80 text-white p-2 rounded-full hover:bg-batak-red"
            >
              ‹
            </button>
            <button 
              onClick={nextSlide} 
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-batak-red/80 text-white p-2 rounded-full hover:bg-batak-red"
            >
              ›
            </button>
            <div className="text-center mt-8">
              <h3 className="text-2xl font-semibold mb-2">{products[currentSlide].name}</h3>
              <p className="text-gray-600 max-w-2xl mx-auto">{products[currentSlide].description}</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Grid Produk Artistik: 3 Kolom Mirip Screenshot, Tanpa Harga */}
      <motion.section 
        initial={{ opacity: 0 }} 
        whileInView={{ opacity: 1 }} 
        transition={{ duration: 0.8 }}
        className="py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-batak-green">Galeri Produk Kami</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {products.map((product, index) => (
              <motion.div 
                key={product.id} 
                initial={{ opacity: 0, y: 50 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }} 
                className="group relative rounded-2xl overflow-hidden shadow-lg bg-gray-50"
              >
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-semibold">{product.name}</h3>
                    <p className="text-sm">{product.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Section Penjelasan: Mirip "Why Gluten-Free..." – Adaptasi ke Batak */}
      <motion.section 
        initial={{ opacity: 0 }} 
        whileInView={{ opacity: 1 }} 
        transition={{ duration: 0.8 }}
        className="py-20 bg-batak-krem"
      >
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          {/* Gambar Latar: Cassava -> Andaliman/Batak Ingredients */}
          <motion.div 
            whileHover={{ scale: 1.05 }} 
            className="md:w-1/2"
          >
            <img 
              src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop"  // Ganti dengan gambar rempah Batak
              alt="Batak Ingredients" 
              className="rounded-2xl shadow-xl" 
            />
          </motion.div>
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold mb-8 text-batak-green">Why Batak Food is a Good Choice</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-batak-red">Rasa Autentik & Sehat</h3>
                <p className="text-gray-600">Menggunakan rempah segar seperti andaliman, makanan Batak membantu pencernaan dan kaya antioksidan alami.</p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-batak-red">Dukung Lokal</h3>
                <p className="text-gray-600">Setiap hidangan sumber dari petani Batak, memastikan kesegaran dan mendukung ekonomi daerah.</p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-batak-red">Nutrisi Lengkap</h3>
                <p className="text-gray-600">Protein tinggi dari daging segar dan karbo dari mie tradisional, ideal untuk gaya hidup aktif.</p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
};

export default Products;