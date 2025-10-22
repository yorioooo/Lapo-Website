import { motion } from 'framer-motion';
import batak4 from '../images/batak6.jpeg';  // Single background for whole page
import Navbar from '../components/Navbar';
// Footer global di App.js – do not import or use here

const About = () => {
  return (
    <div className="bg-cover bg-center bg-no-repeat min-h-screen" style={{ backgroundImage: `url(${batak4})` }}>  // 
      <Navbar />
      
      {/* Hero Section: Larger, centered intro with staggered animation */}
      <motion.section 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        className="relative h-screen bg-black/40 flex items-center justify-center text-center px-4"  // Overlay for readability
      >
        <div className="max-w-5xl mx-auto">
          <motion.h1 
            initial={{ y: 50, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ duration: 0.8 }}
            className="text-7xl md:text-9xl font-serif font-bold mb-8 text-white drop-shadow-lg"
          >
            About Lapo Batak
          </motion.h1>
          <motion.p 
            initial={{ y: 50, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl md:text-4xl mb-6 text-white drop-shadow-md font-light"
          >
            Discover Our Journey and Commitment
          </motion.p>
          <motion.p 
            initial={{ y: 50, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto text-white drop-shadow-md"
          >
            Pioneering authentic Batak cuisine since 2020, Lapo Batak brings the bold, earthy flavors of North Sumatra to homes across Indonesia. From the spicy kick of mie gomak to the hearty richness of saksang babi, our dishes are a celebration of tradition, family, and cultural pride.
          </motion.p>
        </div>
      </motion.section>

      {/* Section Our Commitment & History – Full-width, staggered text blocks with better spacing */}
      <motion.section 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.8, staggerChildren: 0.3 } }
        }}
        className="py-24 relative bg-black/40"  // Overlay for readability
      >
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2 
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
            className="text-6xl font-serif font-bold mb-16 text-white text-center drop-shadow-lg"
          >
            OUR COMMITMENT & HISTORY
          </motion.h2>
          <motion.div 
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
            className="space-y-16 text-left"
          >
            <motion.div variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } }} className="max-w-3xl mx-auto">
              <h3 className="text-4xl font-serif font-bold mb-6 text-white drop-shadow-md">Our Local Commitment</h3>
              <p className="text-xl text-white leading-relaxed font-serif">
                At Lapo Batak, our commitment to local sourcing is at the heart of everything we do. We partner directly with Batak farmers in Tapanuli and Samosir, ensuring every ingredient – from the fiery andaliman pepper to the freshest lemongrass – is harvested sustainably and arrives at our kitchen with the essence of the land intact. This not only guarantees unparalleled authenticity in every dish but also supports the vibrant communities that have nurtured these traditions for generations, fostering economic growth and cultural preservation in the heart of North Sumatra. By choosing Lapo, you're not just enjoying a meal; you're investing in the stories and livelihoods of the people who make Batak cuisine so extraordinary, creating a ripple effect of positive change in the regions we call home.
              </p>
            </motion.div>
            <motion.div variants={{ hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0 } }} className="max-w-3xl mx-auto">
              <h3 className="text-4xl font-serif font-bold mb-6 text-white drop-shadow-md">Our Short History</h3>
              <p className="text-xl text-white leading-relaxed font-serif">
                Founded in 2020 amid the challenges of a global pandemic, Lapo Batak emerged from a simple family kitchen in Medan as a beacon of comfort and connection. What began as a way to share our grandmother's cherished recipes with loved ones quickly grew into a mission to introduce the world to the bold, soulful flavors of Batak cuisine. Today, with fast delivery across Indonesia, we continue to honor our roots while innovating to bring these timeless dishes to new tables, fostering a deeper appreciation for North Sumatra's culinary legacy and creating moments of joy in every home we reach. From humble beginnings to a nationwide presence, Lapo Batak remains dedicated to the flavors that unite us all, turning every order into an invitation to experience the warmth of Batak hospitality.
              </p>
            </motion.div>
            <motion.div variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } }} className="max-w-3xl mx-auto">
              <h3 className="text-4xl font-serif font-bold mb-6 text-white drop-shadow-md">Our Vision for the Future</h3>
              <p className="text-xl text-white leading-relaxed font-serif">
                Looking ahead, Lapo Batak is committed to expanding our reach while staying true to our origins. We dream of workshops where families learn to craft Batak dishes side by side, pop-up events in bustling cities that transport guests to the misty highlands of Samosir, and partnerships with local artisans to create sustainable packaging inspired by traditional Batak motifs. Our goal is simple: to make every meal a bridge between past and present, inviting more people to savor the stories woven into every spice and stir, and building a legacy of flavor that endures for generations to come. Join us as we continue to weave the threads of tradition into the fabric of modern Indonesian life, one plate at a time, and help us spread the joy of Batak cuisine far and wide.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default About;