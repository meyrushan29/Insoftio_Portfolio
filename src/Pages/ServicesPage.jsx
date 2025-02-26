import { FaLaptopCode, FaServer, FaMobileAlt, FaShieldAlt, FaLock } from "react-icons/fa"; // Importing relevant icons
import bannerImg from "../assets/Service.png"  // Replace with your correct path to the image

const Services = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Banner Section */}
      <div className="relative w-full h-[200px] md:h-[250px] lg:h-[300px]">
        <img
          src={bannerImg}
          alt="Services Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay */}
       
      </div>

      {/* Content Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-center text-3xl font-bold text-[#FF5A5F] mb-8">
          What We Provide
        </h2>
        <h3 className="text-center text-xl font-medium mb-6">
          Our Services and Solutions
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service Card 1: Web Application Development */}
          <div className="bg-white p-6 border-[#0d1a2b] border-2 rounded-lg  hover:shadow-lg transition-all duration-300 hover:border-2 hover:border-[#FF5A5F]">
            <div className="mb-4">
              <FaLaptopCode className="w-16 h-16 mx-auto text-[#FF5A5F]" />
            </div>
            <h4 className="text-xl font-semibold mb-2">Web Application Development</h4>
            <p className="text-sm text-gray-600">Your IT With Our Experience</p>
          </div>

          {/* Service Card 2: Web Hosting */}
          <div className="bg-white p-6 border-[#0d1a2b] border-2 rounded-lg  hover:shadow-lg transition-all duration-300 hover:border-2 hover:border-[#FF5A5F]">
            <div className="mb-4">
              <FaServer className="w-16 h-16 mx-auto text-[#FF5A5F]" />
            </div>
            <h4 className="text-xl font-semibold mb-2">Web Hosting</h4>
            <p className="text-sm text-gray-600">Your IT With Our Experience</p>
          </div>

          {/* Service Card 3: Mobile App Development */}
          <div className="bg-white p-6 border-[#0d1a2b] border-2 rounded-lg  hover:shadow-lg transition-all duration-300 hover:border-2 hover:border-[#FF5A5F]">
            <div className="mb-4">
              <FaMobileAlt className="w-16 h-16 mx-auto text-[#FF5A5F]" />
            </div>
            <h4 className="text-xl font-semibold mb-2">Mobile App Development</h4>
            <p className="text-sm text-gray-600">Your IT With Our Experience</p>
          </div>

          {/* Service Card 4: Penetration Testing */}
          <div className="bg-white p-6 border-[#0d1a2b] border-2 rounded-lg  hover:shadow-lg transition-all duration-300 hover:border-2 hover:border-[#FF5A5F]">
            <div className="mb-4">
              <FaShieldAlt className="w-16 h-16 mx-auto text-[#FF5A5F]" />
            </div>
            <h4 className="text-xl font-semibold mb-2">Penetration Testing</h4>
            <p className="text-sm text-gray-600">Your IT With Our Experience</p>
          </div>

          {/* Service Card 5: Application Security Assessment */}
          <div className="bg-white p-6 border-[#0d1a2b] border-2 rounded-lg  hover:shadow-lg transition-all duration-300 hover:border-2 hover:border-[#FF5A5F]">
            <div className="mb-4">
              <FaLock className="w-16 h-16 mx-auto text-[#FF5A5F]" />
            </div>
            <h4 className="text-xl font-semibold mb-2">Application Security Assessment</h4>
            <p className="text-sm text-gray-600">Your IT With Our Experience</p>
          </div>
          <div className="bg-white p-6 border-[#0d1a2b] border-2 rounded-lg  hover:shadow-lg transition-all duration-300 hover:border-2 hover:border-[#FF5A5F]">
            <div className="mb-4">
              <FaLock className="w-16 h-16 mx-auto text-[#FF5A5F]" />
            </div>
            <h4 className="text-xl font-semibold mb-2">Risk Management Assessment</h4>
            <p className="text-sm text-gray-600">Your IT With Our Experience</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
