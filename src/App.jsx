import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "./Components/Footer";
import { Navbar } from "./Components/Navbar";
import Home from "./Pages/Banner";
import ContactUs from "./Pages/ContactUs";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Services from "./Pages/ServicesPage";


function App() {
  const [loading, setLoading] = useState(true);

  // Simulate loading effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Set loading to false after 2 seconds
    }, 1000); // 2 seconds for the loading screen to display
    
    return () => clearTimeout(timer); // Clean up the timeout
  }, []);

  return (
    <BrowserRouter>
    <div className="flex flex-col min-h-screen">
      {/* Loading Screen with AnimatePresence */}
      <AnimatePresence>
        {loading && (
          <motion.div
            className="fixed inset-0 bg-black flex justify-center items-center z-50"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="text-4xl text-white font-semibold">
              Insoftio <span className="text-[#FF5A5F]">Innovation</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <motion.div 
        className="flex flex-col min-h-screen"
        initial={{ opacity: 0 }}
        animate={{ opacity: loading ? 0 : 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        {/* Navbar */}
        <header className="bg-[#0d1a2b]">
          <Navbar />
        </header>
        
        {/* Home Section */}
        <main className="flex-grow">
        <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/service" element={<Services />} />
            </Routes>
        </main>
        
        {/* Footer */}
        <footer className="bg-[#0d1a2b] mt-auto">
          <Footer />
        </footer>
      </motion.div>
    </div>
    </BrowserRouter>
  );
}

export default App;