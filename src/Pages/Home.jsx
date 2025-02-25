import { motion } from "framer-motion";
import BannerImg from "../assets/banner.jpg";
import ServicePage from "../Pages/ServicePage";

const Home = () => {
  return (
    <div>
      {/* Banner Section */}
      <section
        className="relative w-full h-screen bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${BannerImg})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
        {/* Overlay */}
        <div className="relative text-white text-center p-4 md:p-12">
          {/* Animated Heading */}
          <motion.h1
            className="text-3xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="text-[#FF5A5F]">Welcome to Insoftio</div>
          </motion.h1>

          {/* Animated Subtext */}
          <motion.p
            className="text-base md:text-2xl mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Empowering innovation and excellence.
            <br /> Explore our platform to discover seamless solutions designed just for you
          </motion.p>
        </div>
      </section>

      {/* Service Page Section */}
      <div>
        <ServicePage />
      </div>
    </div>
  );
};

export default Home;
