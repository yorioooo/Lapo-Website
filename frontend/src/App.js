import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import FAQ from './pages/FAQ';
import Products from './pages/Products';
import Articles from './pages/Articles';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/products" element={<Products />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />  {/* Footer sekali di sini, muncul di semua page */}
      </div>
    </Router>
  );
}

export default App;