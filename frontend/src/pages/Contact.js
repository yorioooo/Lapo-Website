import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post('http://localhost:5000/api/contact', formData);
      setStatus('Terima kasih! Pesan Anda telah terkirim. Kami akan balas segera.');
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      setStatus('Maaf, ada kesalahan. Coba lagi nanti.');
    }
    setLoading(false);
  };

  return (
    <div className="bg-batak-krem min-h-screen">
      <Navbar />
      <motion.section 
        initial={{ opacity: 0 }} 
        whileInView={{ opacity: 1 }} 
        transition={{ duration: 0.8 }} 
        className="py-20 max-w-7xl mx-auto px-4"
      >
        <h1 className="text-4xl font-bold text-center mb-8 text-batak-red">Hubungi Kami</h1>
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-batak-green">Info Kontak</h2>
            <p className="text-gray-600 mb-2">📍 Jl. Batak No. 123, Medan, Sumatera Utara</p>
            <p className="text-gray-600 mb-2">📞 +62 812-3456-7890</p>
            <p className="text-gray-600 mb-2">✉️ info@lapobatak.com</p>
            <p className="text-gray-600">Senin-Jumat: 08:00 - 17:00</p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input 
              type="text" 
              placeholder="Nama Lengkap" 
              value={formData.name} 
              onChange={(e) => setFormData({ ...formData, name: e.target.value })} 
              className="w-full p-4 rounded-lg border border-gray-300 focus:border-batak-red focus:outline-none" 
              required 
            />
            <input 
              type="email" 
              placeholder="Email" 
              value={formData.email} 
              onChange={(e) => setFormData({ ...formData, email: e.target.value })} 
              className="w-full p-4 rounded-lg border border-gray-300 focus:border-batak-red focus:outline-none" 
              required 
            />
            <textarea 
              placeholder="Pesan Anda" 
              value={formData.message} 
              onChange={(e) => setFormData({ ...formData, message: e.target.value })} 
              className="w-full p-4 rounded-lg border border-gray-300 focus:border-batak-red focus:outline-none h-32" 
              required 
            />
            <motion.button 
              whileHover={{ scale: 1.02 }} 
              type="submit" 
              disabled={loading} 
              className="w-full bg-batak-red text-white py-4 rounded-lg font-semibold disabled:opacity-50"
            >
              {loading ? 'Mengirim...' : 'Kirim Pesan'}
            </motion.button>
            {status && <p className="text-center mt-4 text-green-600 text-sm">{status}</p>}
          </form>
        </div>
      </motion.section>
      <Footer />
    </div>
  );
};

export default Contact;