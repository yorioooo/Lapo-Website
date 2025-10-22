import { useState, useEffect } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import batak1 from '../images/batak1.jpeg';  // Hero background
import miegomak2 from '../images/miegomak2.jpeg';  // First article image
import babi2 from '../images/babi2.jpeg';  // Second article image
import Navbar from '../components/Navbar';
// Footer global di App.js – do not import or use here

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        console.log('Fetching articles from API...');
        const res = await axios.get('http://localhost:5000/api/articles');
        console.log('Consume success from articles table:', res.data.length, 'items');
        console.log('Sample consumed data:', res.data[0]);  // Debug: Konfirm dari DB
        setArticles(res.data || []);
      } catch (err) {
        console.error('Consume Error:', {
          message: err.message,
          status: err.response?.status,
          data: err.response?.data
        });
        setArticles([]);  // Kosong jika error
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);  // Fetch sekali

  // Map local image based on article index (assume 2 articles)
  const getLocalImage = (articleIndex) => {
    switch (articleIndex) {
      case 0:
        return miegomak2;
      case 1:
        return babi2;
      default:
        return 'https://via.placeholder.com/400x250?text=No+Image';
    }
  };

  if (loading) {
    return (
      <div className="bg-batak-krem min-h-screen flex items-center justify-center">
        <Navbar />
        <div className="text-center py-8">Loading articles from DB...</div>
      </div>
    );
  }

  if (articles.length === 0) {
    return (
      <div className="bg-batak-krem min-h-screen flex items-center justify-center">
        <Navbar />
        <div className="text-center py-8">No articles data in table. Run SQL insert in pgAdmin.</div>
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
              Batak Culinary Articles
            </motion.h1>
            <motion.p 
              initial={{ y: 50, opacity: 0 }} 
              animate={{ y: 0, opacity: 1 }} 
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-2xl md:text-3xl mb-8"
            >
              Explore Stories of Flavor and Tradition
            </motion.p>
            <motion.p 
              initial={{ y: 50, opacity: 0 }} 
              animate={{ y: 0, opacity: 1 }} 
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto"
            >
              Dive into the rich heritage of Batak cuisine through our curated articles, from the origins of mie gomak to tips for perfecting saksang at home.
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Section Article Grid – Consume API, detailed cards with local images */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
        className="py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-batak-red">Featured Articles</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {articles.map((article, index) => (
              <motion.article 
                key={article.id || index} 
                initial={{ opacity: 0, y: 50 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6, delay: index * 0.2 }} 
                whileHover={{ scale: 1.02 }} 
                className="group relative rounded-2xl overflow-hidden shadow-2xl bg-gray-50 hover:bg-white transition-all duration-500"
              >
                <img 
                  src={getLocalImage(index)}  // Local image based on index (0: miegomak2, 1: babi2)
                  alt={article.title} 
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" 
                />
                <div className="p-6">
                  <h2 className="text-2xl font-serif font-bold mb-3 text-batak-red">{article.title}</h2>
                  <p className="text-lg text-gray-700 leading-relaxed mb-4">{article.content}</p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center">
                      <span className="text-batak-green font-semibold">Published:</span>
                      <p className="ml-2 text-sm text-gray-600">{article.created_at ? new Date(article.created_at).toLocaleDateString() : 'Recent'}</p>
                    </div>
                    <div className="flex items-center">
                      <span className="text-batak-green font-semibold">Category:</span>
                      <p className="ml-2 text-sm text-gray-600">Batak Culinary</p>
                    </div>
                  </div>
                  <motion.button 
                    whileHover={{ scale: 1.05 }} 
                    className="w-full bg-batak-red text-white py-3 rounded-lg font-bold hover:bg-red-700 transition-colors"
                  >
                    READ FULL ARTICLE
                  </motion.button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Section Explore More Articles – Call to action */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
        className="py-20 bg-batak-krem text-center"
      >
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-batak-red">Ready to Dive Deeper?</h2>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            Join our community for more insights into Batak flavors, recipes, and stories from the heart of North Sumatra. Subscribe for exclusive content and updates on our latest culinary adventures.
          </p>
          <motion.button 
            whileHover={{ scale: 1.05 }} 
            className="bg-batak-red text-white px-8 py-4 rounded-lg font-bold text-xl hover:bg-red-700 transition-colors shadow-lg"
          >
            SUBSCRIBE NOW
          </motion.button>
        </div>
      </motion.section>
    </div>
  );
};

// Define getLocalImage function
const getLocalImage = (articleIndex) => {
  switch (articleIndex) {
    case 0:
      return miegomak2;
    case 1:
      return babi2;
    default:
      return 'https://via.placeholder.com/400x250?text=No+Image';
  }
};

export default Articles;