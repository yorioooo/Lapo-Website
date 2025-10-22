import { useState, useEffect } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import batak1 from '../images/batak1.jpeg';  // Hero background
import miegomak from '../images/miegomak.jpeg';  // Mie Gomak
import ikan from '../images/ikan.jpeg';  // Arsik Ikan Mas
import babi from '../images/babi.jpeg';  // Saksang Babi
import Navbar from '../components/Navbar';
// Footer global di App.js

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        console.log('Fetching products from API...');
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
  }, []);  // Fetch sekali

  // Map local image based on product id
  const getLocalImage = (productId) => {
    switch (productId) {
      case 1:
        return miegomak;
      case 2:
        return babi;
      case 3:
        return ikan;
      default:
        return 'https://via.placeholder.com/400x300?text=No+Image';
    }
  };

  if (loading) {
    return (
      <div className="bg-batak-krem min-h-screen flex items-center justify-center">
        <Navbar />
        <div className="text-center py-8">Loading products from DB...</div>
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="bg-batak-krem min-h-screen flex items-center justify-center">
        <Navbar />
        <div className="text-center py-8">No products data in table. Run SQL insert in pgAdmin.</div>
      </div>
    );
  }

  return (
    <div className="bg-batak-krem min-h-screen">
      <Navbar />
      
      {/* Hero Section: Background dengan batak1, elegant intro */}
      <motion.section 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        className="relative h-screen bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${batak1})` }}  // Background lokal batak1
      >
        <div className="absolute inset-0 bg-batak-red/50 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <motion.h1 
              initial={{ y: 50, opacity: 0 }} 
              animate={{ y: 0, opacity: 1 }} 
              transition={{ duration: 0.8 }}
              className="text-6xl md:text-8xl font-serif font-bold mb-6"
            >
              Our Products
            </motion.h1>
            <motion.p 
              initial={{ y: 50, opacity: 0 }} 
              animate={{ y: 0, opacity: 1 }} 
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-2xl md:text-3xl mb-8"
            >
              Discover Authentic Batak Flavors
            </motion.p>
            <motion.p 
              initial={{ y: 50, opacity: 0 }} 
              animate={{ y: 0, opacity: 1 }} 
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto"
            >
              Explore our handcrafted selection of traditional Batak dishes, each one a masterpiece of spice and heritage, sourced fresh from North Sumatra's heartland.
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Section Product Grid – Consume API, detailed cards with local images */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
        className="py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-batak-red">Our Signature Products</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div 
                key={product.id} 
                initial={{ opacity: 0, y: 50 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }} 
                className="group relative rounded-2xl overflow-hidden shadow-2xl bg-gray-50 hover:bg-white transition-all duration-500"
              >
                <img 
                  src={getLocalImage(product.id)}  // Local image based on id
                  alt={product.name} 
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" 
                />
                <div className="p-6">
                  <h3 className="text-2xl font-serif font-bold mb-3 text-batak-red">{product.name}</h3>
                  <p className="text-lg text-gray-700 leading-relaxed mb-4">{product.description}</p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center">
                      <span className="text-batak-green font-semibold">Ingredients:</span>
                      <p className="ml-2 text-sm text-gray-600">Fresh local spices, andaliman, santan, and premium proteins.</p>
                    </div>
                    <div className="flex items-center">
                      <span className="text-batak-green font-semibold">Preparation:</span>
                      <p className="ml-2 text-sm text-gray-600">Slow-cooked with traditional Batak techniques for maximum flavor infusion.</p>
                    </div>
                    <div className="flex items-center">
                      <span className="text-batak-green font-semibold">Serving Suggestion:</span>
                      <p className="ml-2 text-sm text-gray-600">Pair with steamed rice and fresh ulam for an authentic Batak feast.</p>
                    </div>
                  </div>
                  <motion.button 
                    whileHover={{ scale: 1.05 }} 
                    className="w-full bg-batak-red text-white py-3 rounded-lg font-bold hover:bg-red-700 transition-colors"
                  >
                    EXPLORE MORE
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Section Why Choose Our Products – Detailed explanations, integrated design */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
        className="py-20 bg-batak-krem"
      >
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-serif font-bold text-center mb-16 text-batak-red">Why Choose Our Products</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 50 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ scale: 1.02 }} 
              className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500"
            >
              <h3 className="text-2xl font-serif font-bold mb-4 text-batak-green">Authentic Batak Heritage</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Every product is rooted in generations-old recipes from the highlands of North Sumatra, using rare andaliman spices and traditional cooking methods that capture the true essence of Batak culture. We don't just serve food; we serve stories, ensuring each bite transports you to the misty shores of Lake Toba and the bustling markets of Tapanuli.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 50 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.02 }} 
              className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500"
            >
              <h3 className="text-2xl font-serif font-bold mb-4 text-batak-green">Fresh & Sustainable Sourcing</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                We partner exclusively with local Batak farmers and fishermen, sourcing seasonal ingredients like fresh ikan mas and premium beef directly from the source. This not only guarantees peak freshness and flavor but also supports sustainable practices and community empowerment, creating a positive impact on the ecosystems and economies of Sumatera Utara.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 50 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ scale: 1.02 }} 
              className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500"
            >
              <h3 className="text-2xl font-serif font-bold mb-4 text-batak-green">Health & Tradition in Harmony</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our dishes balance the robust, nutrient-dense qualities of Batak cuisine with modern dietary needs, offering high-protein options like saksang and fiber-rich mie gomak without compromising on taste. Free from artificial additives, each meal is a wholesome tribute to tradition, promoting well-being while honoring the culinary wisdom passed down through centuries.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Products;