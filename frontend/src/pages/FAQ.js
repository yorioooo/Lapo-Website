import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

const FAQ = () => {
  return (
    <div className="bg-batak-krem min-h-screen">
      <Navbar />
      <motion.section 
        initial={{ opacity: 0 }} 
        whileInView={{ opacity: 1 }} 
        transition={{ duration: 0.8 }} 
        className="py-20 max-w-7xl mx-auto px-4"
      >
        <h1 className="text-4xl font-bold text-center mb-8 text-batak-red">FAQ</h1>
        <div className="space-y-4 max-w-2xl mx-auto">
          <details className="bg-white p-6 rounded-lg shadow-md border-l-4 border-batak-green">
            <summary className="font-semibold cursor-pointer text-lg mb-2">Apa itu Mie Gomak?</summary>
            <p className="mt-2 text-gray-600">Mie halus khas Batak dari Tapanuli, dimasak dengan kuah santan pedas dan rempah andaliman segar. Cocok untuk camilan atau makan siang!</p>
          </details>
          <details className="bg-white p-6 rounded-lg shadow-md border-l-4 border-batak-green">
            <summary className="font-semibold cursor-pointer text-lg mb-2">Bagaimana cara memesan?</summary>
            <p className="mt-2 text-gray-600">Pesan via WhatsApp (0812-3456-7890) atau form contact kami. Pengiriman ke seluruh Indonesia.</p>
          </details>
          <details className="bg-white p-6 rounded-lg shadow-md border-l-4 border-batak-green">
            <summary className="font-semibold cursor-pointer text-lg mb-2">Apakah masakan Batak halal?</summary>
            <p className="mt-2 text-gray-600">Ya, semua menu kami halal dan menggunakan bahan segar dari petani lokal.</p>
          </details>
        </div>
      </motion.section>
      <Footer />
    </div>
  );
};

export default FAQ;