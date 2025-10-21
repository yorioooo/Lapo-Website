import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

const Articles = () => {
  const articles = [
    { title: 'Sejarah Mie Gomak Khas Batak', content: 'Mie Gomak berasal dari Toba, diciptakan oleh ibu-ibu rumah tangga untuk hidangan sederhana tapi lezat...', image: 'https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=400&h=250&fit=crop' },
    { title: 'Tips Memasak Saksang di Rumah', content: 'Gunakan andaliman segar dan santan kelapa asli untuk rasa autentik. Hindari overcook agar tekstur tetap empuk...', image: 'https://images.unsplash.com/photo-1633403913605-75d7d7c8c6f5?w=400&h=250&fit=crop' },
  ];

  return (
    <div className="bg-batak-krem min-h-screen">
      <Navbar />
      <motion.section 
        initial={{ opacity: 0 }} 
        whileInView={{ opacity: 1 }} 
        transition={{ duration: 0.8 }} 
        className="py-20 max-w-7xl mx-auto px-4"
      >
        <h1 className="text-4xl font-bold text-center mb-8 text-batak-red">Artikel Kuliner Batak</h1>
        <div className="grid md:grid-cols-2 gap-8">
          {articles.map((article, index) => (
            <motion.article 
              key={index} 
              initial={{ opacity: 0, y: 50 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6, delay: index * 0.2 }} 
              whileHover={{ scale: 1.02 }} 
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img src={article.image} alt={article.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2 text-batak-red">{article.title}</h2>
                <p className="text-gray-600 mb-4">{article.content}</p>
                <button className="text-batak-green font-semibold hover:underline">Baca Selengkapnya</button>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.section>
      <Footer />
    </div>
  );
};

export default Articles;