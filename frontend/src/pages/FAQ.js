import { motion } from 'framer-motion';
import batak4 from '../images/batak8.jpeg';  // Single background for FAQ page
import Navbar from '../components/Navbar';
// Footer global di App.js – do not import or use here

const FAQ = () => {
  return (
    <div className="bg-cover bg-center bg-no-repeat min-h-screen" style={{ backgroundImage: `url(${batak4})` }}>  // Single background for whole page
      <Navbar />
      
      {/* Hero Section: Overlay for intro text */}
      <motion.section 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        className="relative h-screen bg-black/40 flex items-center justify-center text-center px-4"  // Overlay for readability
      >
        <div className="max-w-4xl mx-auto">
          <motion.h1 
            initial={{ y: 50, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-8xl font-serif font-bold mb-6 text-white drop-shadow-lg"
          >
            FAQ
          </motion.h1>
          <motion.p 
            initial={{ y: 50, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl md:text-3xl mb-8 text-white drop-shadow-md"
          >
            Frequently Asked Questions
          </motion.p>
          <motion.p 
            initial={{ y: 50, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto text-white drop-shadow-md"
          >
            Have questions about our Batak cuisine, ordering, or ingredients? We've got answers to help you explore the flavors of Lapo Batak with confidence.
          </motion.p>
        </div>
      </motion.section>

      {/* Section FAQ List – More Q&A, white text on background, elegant accordion */}
      <motion.section 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.8, staggerChildren: 0.2 } }
        }}
        className="py-24 relative bg-black/40"  // Overlay for readability
      >
        <div className="max-w-4xl mx-auto px-4">
          <motion.div 
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
            className="space-y-6"
          >
            <details className="bg-white/20 backdrop-blur-sm rounded-xl shadow-xl border-l-4 border-batak-green p-6 cursor-pointer transition-all duration-300 hover:shadow-2xl hover:bg-white/30">
              <summary className="font-serif font-bold text-xl text-white mb-2">What is Mie Gomak?</summary>
              <motion.p 
                initial={{ opacity: 0, height: 0 }} 
                animate={{ opacity: 1, height: 'auto' }} 
                className="mt-4 text-lg text-white leading-relaxed font-serif"
              >
                Mie Gomak is a signature Batak noodle dish from Tapanuli, featuring hand-pulled noodles in a creamy, spicy coconut milk broth with tender beef and fresh andaliman spices. It's a comforting staple, perfect for a quick lunch or family dinner, evoking the warmth of traditional Batak home cooking.
              </motion.p>
            </details>

            <details className="bg-white/20 backdrop-blur-sm rounded-xl shadow-xl border-l-4 border-batak-green p-6 cursor-pointer transition-all duration-300 hover:shadow-2xl hover:bg-white/30">
              <summary className="font-serif font-bold text-xl text-white mb-2">How can I place an order?</summary>
              <motion.p 
                initial={{ opacity: 0, height: 0 }} 
                animate={{ opacity: 1, height: 'auto' }} 
                className="mt-4 text-lg text-white leading-relaxed font-serif"
              >
                Ordering is simple! Use our WhatsApp (0812-3456-7890) for quick chats or fill out the contact form on our site. We offer nationwide delivery across Indonesia, with options for standard or express shipping to bring fresh Batak flavors to your door.
              </motion.p>
            </details>

            <details className="bg-white/20 backdrop-blur-sm rounded-xl shadow-xl border-l-4 border-batak-green p-6 cursor-pointer transition-all duration-300 hover:shadow-2xl hover:bg-white/30">
              <summary className="font-serif font-bold text-xl text-white mb-2">Are all dishes halal?</summary>
              <motion.p 
                initial={{ opacity: 0, height: 0 }} 
                animate={{ opacity: 1, height: 'auto' }} 
                className="mt-4 text-lg text-white leading-relaxed font-serif"
              >
                Most of our dishes are halal, using fresh, certified ingredients from local sources. However, traditional Batak specialties like Saksang Babi contain pork. We offer halal alternatives or customizations upon request – just let us know your preferences when ordering.
              </motion.p>
            </details>

            <details className="bg-white/20 backdrop-blur-sm rounded-xl shadow-xl border-l-4 border-batak-green p-6 cursor-pointer transition-all duration-300 hover:shadow-2xl hover:bg-white/30">
              <summary className="font-serif font-bold text-xl text-white mb-2">What makes Batak cuisine unique?</summary>
              <motion.p 
                initial={{ opacity: 0, height: 0 }} 
                animate={{ opacity: 1, height: 'auto' }} 
                className="mt-4 text-lg text-white leading-relaxed font-serif"
              >
                Batak cuisine stands out with its bold use of andaliman (a peppery spice unique to North Sumatra), creamy coconut milk bases, and hearty proteins like fish or offal. Dishes like Arsik Ikan Mas showcase the region's fresh-water bounty, while the spicy, savory profiles reflect the resilient spirit of Batak culture.
              </motion.p>
            </details>

            <details className="bg-white/20 backdrop-blur-sm rounded-xl shadow-xl border-l-4 border-batak-green p-6 cursor-pointer transition-all duration-300 hover:shadow-2xl hover:bg-white/30">
              <summary className="font-serif font-bold text-xl text-white mb-2">How do you ensure freshness and quality?</summary>
              <motion.p 
                initial={{ opacity: 0, height: 0 }} 
                animate={{ opacity: 1, height: 'auto' }} 
                className="mt-4 text-lg text-white leading-relaxed font-serif"
              >
                Freshness is our promise. We source ingredients daily from trusted Batak farmers and prepare each order to order, using time-honored techniques to lock in flavor. Our packaging keeps meals hot and intact during delivery, so you receive the same quality as if it were served fresh from our Medan kitchen.
              </motion.p>
            </details>

            <details className="bg-white/20 backdrop-blur-sm rounded-xl shadow-xl border-l-4 border-batak-green p-6 cursor-pointer transition-all duration-300 hover:shadow-2xl hover:bg-white/30">
              <summary className="font-serif font-bold text-xl text-white mb-2">Can I customize orders or request dietary options?</summary>
              <motion.p 
                initial={{ opacity: 0, height: 0 }} 
                animate={{ opacity: 1, height: 'auto' }} 
                className="mt-4 text-lg text-white leading-relaxed font-serif"
              >
                Absolutely! We offer customizations for spice levels, portion sizes, or dietary needs (vegetarian, gluten-free alternatives). Just note your requests in the order comments or contact us directly – our team will make it perfect for you.
              </motion.p>
            </details>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default FAQ;