import { motion } from "framer-motion";
import ServiceIcon from "../assets/toto.jpg"; // Replace with actual icon path
import {
  FaLaptopCode,
  FaServer,
  FaMobileAlt,
  FaShieldAlt,
} from "react-icons/fa"; // Importing necessary icons

const ServicePage = () => {
  const stats = [
    { number: "200+", label: "Projects Completed", icon: "📊" },
    { number: "150+", label: "Happy Clients", icon: "😊" },
    { number: "10+", label: "Years of Experience", icon: "🏆" },
  ];

  const services = [
    {
      name: "Web Application Development",
      icon: <FaLaptopCode className="mx-auto mb-4 h-16 w-16 text-blue-500" />,
      description: "We build dynamic and scalable web applications with seamless user experiences.",
    },
    {
      name: "Web Hosting",
      icon: <FaServer className="mx-auto mb-4 h-16 w-16 text-green-500" />,
      description: "Reliable and secure hosting services to ensure your business stays online 24/7.",
    },
    {
      name: "Mobile App Development",
      icon: <FaMobileAlt className="mx-auto mb-4 h-16 w-16 text-orange-500" />,
      description: "Intuitive mobile apps for iOS and Android to engage your customers on-the-go.",
    },
    {
      name: "Penetration Testing",
      icon: <FaShieldAlt className="mx-auto mb-4 h-16 w-16 text-red-500" />,
      description: "Identify vulnerabilities in your system with our security-focused penetration testing services.",
    },
  ];

  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] py-12">
      {/* Description Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <motion.div
          className="text-left"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            At Insoftio, we specialize in delivering cutting-edge IT solutions tailored to meet your business needs.
          </h2>
          <p className="text-sm md:text-lg mb-4">
            We craft dynamic, scalable, and high-performance web applications that align with your business objectives, ensuring seamless user experiences and robust functionality. Our reliable web hosting services provide secure, high-speed, and scalable hosting solutions to keep your digital presence optimized.
          </p>
          <p className="text-sm md:text-lg mb-4">
            With our Mobile App Development services, we create innovative, user-friendly applications for iOS and Android, enhancing customer engagement and operational efficiency. Our security-focused approach ensures applications are built with best-in-class security measures.
          </p>
          <p className="text-sm md:text-lg mb-4">
            In the realm of cybersecurity, our Penetration Testing services identify vulnerabilities in your systems, enabling proactive threat mitigation. We conduct in-depth Application Security Assessments to ensure that your software is fortified against evolving security threats.
          </p>
          <p className="text-sm md:text-lg mb-4">
            As your trusted IT partner, we provide comprehensive consulting, strategic planning, and ongoing support to enhance your IT infrastructure. By leveraging the latest technologies and security best practices, we help businesses stay ahead in today’s digital landscape.
          </p>
          <p className="text-sm md:text-lg">
            Let us empower your business with innovative solutions, seamless security, and expert guidance. Together, we navigate the evolving technology landscape, ensuring your success.
          </p>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src={ServiceIcon}
            alt="Service Icon"
            className="w-full max-w-md mx-auto rounded-md"
          />
        </motion.div>
      </div>

      {/* Service Cards Section */}
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-[#FF5A5F]">OUR SERVICES</h1>
      </div>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-white shadow p-6 text-center rounded-lg hover:shadow-lg transition-all duration-300 hover:border-2 hover:border-red-500"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
          >
            {service.icon}
            <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
            <p className="text-sm text-gray-600">{service.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-gradient-to-b">
      <div className="max-w-screen-xl mx-auto text-center">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-[#FF5A5F] mb-6">OUR IMPACT</h2>
        </motion.div>

        {/* Stats with improved animation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 transform"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }} // Scale on hover
            >
              <div className="flex flex-col items-center">
                <span className="text-4xl mb-4">{stat.icon}</span>
                <motion.h3
                  className="text-5xl font-bold text-red-500 mb-3"
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.3 + index * 0.2,
                    type: "spring",
                    stiffness: 100,
                  }}
                >
                  {stat.number}
                </motion.h3>
                <p className="text-xl text-gray-700 font-medium">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    </div>
  );
};

export default ServicePage;
