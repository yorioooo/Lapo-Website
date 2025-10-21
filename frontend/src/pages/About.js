import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="bg-batak-krem min-h-screen">
      <Navbar />
      <motion.section 
        initial={{ opacity: 0 }} 
        whileInView={{ opacity: 1 }} 
        transition={{ duration: 0.8 }}
        className="py-20 max-w-7xl mx-auto px-4"
      >
        <h1 className="text-4xl font-bold text-center mb-8 text-batak-red">Tentang Lapo Batak</h1>
        <motion.div 
          initial={{ y: 50 }} 
          whileInView={{ y: 0 }} 
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-8 mb-12"
        >
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-batak-green">Komitmen Lokal Kami</h2>
            <p className="text-gray-600">Kami sumber bahan langsung dari petani Batak, memastikan rasa autentik dan dukungan ekonomi lokal seperti andaliman segar dari Tapanuli.</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-batak-green">Sejarah Singkat</h2>
            <p className="text-gray-600">Didirikan 2020 di Medan, Lapo Batak kini hadir di seluruh Indonesia melalui pengiriman cepat.</p>
          </div>
        </motion.div>
      </motion.section>
      <Footer />
    </div>
  );
};

export default About;