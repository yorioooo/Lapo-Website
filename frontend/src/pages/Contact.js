import { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import batak1 from '../images/batak1.jpeg';  // Hero background
import Navbar from '../components/Navbar';
// Footer global di App.js – do not import or use here

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post('http://localhost:5000/api/contact', formData);
      setStatus('Thank you! Your message has been sent. We will reply soon.');
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      setStatus('Sorry, there was an error. Please try again later.');
    }
    setLoading(false);
  };

  return (
    <div className="bg-batak-krem min-h-screen">
      <Navbar />
      
      {/* Hero Section: Background with elegant intro */}
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
              Contact Us
            </motion.h1>
            <motion.p 
              initial={{ y: 50, opacity: 0 }} 
              animate={{ y: 0, opacity: 1 }} 
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-2xl md:text-3xl mb-8"
            >
              Get in Touch with Lapo Batak
            </motion.p>
            <motion.p 
              initial={{ y: 50, opacity: 0 }} 
              animate={{ y: 0, opacity: 1 }} 
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto"
            >
              We're here to answer your questions about our Batak cuisine, orders, or anything else. Let's connect and bring the flavors of North Sumatra to your table.
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Section Contact Form – Grid with info & form, attractive design */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
        className="py-20 bg-white"
      >
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-serif font-bold text-center mb-16 text-batak-red">Let's Connect</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info – Left column */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="bg-batak-krem/50 rounded-2xl p-6 shadow-xl">
                <h3 className="text-2xl font-serif font-bold mb-4 text-batak-green">Visit Us</h3>
                <p className="text-lg text-gray-800 leading-relaxed">Jl. Batak No. 123, Medan, Sumatera Utara</p>
              </div>
              <div className="bg-batak-krem/50 rounded-2xl p-6 shadow-xl">
                <h3 className="text-2xl font-serif font-bold mb-4 text-batak-green">Call Us</h3>
                <p className="text-lg text-gray-800 leading-relaxed">+62 812-3456-7890</p>
              </div>
              <div className="bg-batak-krem/50 rounded-2xl p-6 shadow-xl">
                <h3 className="text-2xl font-serif font-bold mb-4 text-batak-green">Email Us</h3>
                <p className="text-lg text-gray-800 leading-relaxed">info@lapobatak.com</p>
              </div>
              <div className="bg-batak-krem/50 rounded-2xl p-6 shadow-xl">
                <h3 className="text-2xl font-serif font-bold mb-4 text-batak-green">Hours</h3>
                <p className="text-lg text-gray-800 leading-relaxed">Monday-Friday: 08:00 - 17:00</p>
              </div>
            </motion.div>

            {/* Contact Form – Right column */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <form onSubmit={handleSubmit} className="space-y-6 bg-batak-krem/50 rounded-2xl p-8 shadow-xl">
                <input 
                  type="text" 
                  placeholder="Full Name" 
                  value={formData.name} 
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })} 
                  className="w-full p-4 rounded-lg border border-gray-300 focus:border-batak-red focus:outline-none bg-white/80" 
                  required 
                />
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  value={formData.email} 
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })} 
                  className="w-full p-4 rounded-lg border border-gray-300 focus:border-batak-red focus:outline-none bg-white/80" 
                  required 
                />
                <textarea 
                  placeholder="Your Message" 
                  value={formData.message} 
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })} 
                  className="w-full p-4 rounded-lg border border-gray-300 focus:border-batak-red focus:outline-none h-32 bg-white/80" 
                  required 
                />
                <motion.button 
                  whileHover={{ scale: 1.02 }} 
                  whileTap={{ scale: 0.98 }} 
                  type="submit" 
                  disabled={loading} 
                  className="w-full bg-batak-red text-white py-4 rounded-lg font-serif font-bold text-lg disabled:opacity-50 hover:bg-red-700 transition-colors shadow-lg"
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </motion.button>
                {status && <p className="text-center mt-4 text-green-600 text-sm font-serif">{status}</p>}
              </form>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Contact;