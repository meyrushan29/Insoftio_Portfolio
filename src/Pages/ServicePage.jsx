import { motion } from 'framer-motion';
import ServiceIcon from '../assets/toto.jpg'; // Replace with actual icon path
import { FaLaptopCode, FaServer, FaMobileAlt, FaShieldAlt } from 'react-icons/fa'; // Importing necessary icons

const ServicePage = () => {
  const services = [
    { name: 'Web Application Development', icon: <FaLaptopCode className="mx-auto mb-4 h-16 w-16 text-blue-500" /> },
    { name: 'Web Hosting', icon: <FaServer className="mx-auto mb-4 h-16 w-16 text-green-500" /> },
    { name: 'Mobile App Development', icon: <FaMobileAlt className="mx-auto mb-4 h-16 w-16 text-orange-500" /> },
    { name: 'Penetration Testing', icon: <FaShieldAlt className="mx-auto mb-4 h-16 w-16 text-red-500" /> }
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
          <h2 className="text-2xl md:text-4xl font-bold mb-4">At Insoftio, we specialize in delivering cutting-edge IT solutions tailored to meet your business needs.</h2>
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
          <img src={ServiceIcon} alt="Service Icon" className="w-full max-w-md mx-auto rounded-md" />
        </motion.div>
      </div>

      {/* Service Cards Section */}
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
    </div>
  );
};

export default ServicePage;
