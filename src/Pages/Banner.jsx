import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import BannerImg from "../assets/pp1.jpg";
import BannerImg2 from '../assets/pp2.jpg';
import BannerImg3 from '../assets/banner.jpg';
import ServicePage from "./Home";

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [BannerImg, BannerImg2, BannerImg3];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 9000); 

    return () => clearInterval(interval); 
  }, []);

  return (
    <div>
      {/* Banner Section */}
      <section
        className="relative w-full h-screen bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: ` url(${images[currentIndex]}) `,
          
        }}
      >
       
        <div className="absolute inset-0 bg-black opacity-30 filter blur-3xl"></div> 
        
        <div className="relative text-white text-center p-4 mt-[-5] mb-96 md:p-12">
         
          <motion.h1
            className="text-3xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2.5 }}
          >
            <div className="text-[#FF5A5F]">Welcome to Insoftio Innovation Pvt.Ltd</div>
          </motion.h1>

          
          <motion.p
            className="text-base md:text-2xl mb-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2.5 }}
          >
            Empowering innovation and excellence.
            <br /> Explore our platform to discover seamless solutions designed just for you.
          </motion.p>
        </div>
      </section>

     
      <div>
        <ServicePage />
      </div>
    </div>
  );
};

export default Home;
