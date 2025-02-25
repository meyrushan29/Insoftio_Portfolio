import { FaLinkedin, FaWhatsapp, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import Logo from "../assets/Logo.png"; // Make sure the logo path is correct

const Footer = () => {
  return (
    <footer className="bg-[#0d1a2b] text-white py-10 px-5">
      <div className="max-w-screen-xl mx-auto  flex-col md:flex-row justify-between items-center">
        {/* Newsletter Section */}
        <div className="text-center md:text-left mb-8 md:mb-0">
          <h2 className="text-xl font-semibold mb-3">
            Get Our Every Single Notification
          </h2>
          <input
            type="email"
            placeholder="Enter your email here"
            className="p-2 rounded-md bg-[#1c2a3a] text-white placeholder-gray-400 mb-4 w-full md:w-auto"
          />
          <button className="bg-[#ff5a5f] text-white px-6 py-2 rounded-md">
            Subscribe
          </button>
        </div>

        {/* Company Info Section */}
        <div className="text-center md:text-left mb-8 md:mb-0 flex flex-col md:flex-row items-center md:items-start">
          {/* Logo Section */}
          <img src={Logo} alt="Logo" className="h-20 mb-4 mx-auto md:mx-0" />

          {/* Text Section */}
          <div className=" flex">
            <div className="md:ml-8">
              <p className="text-sm mb-4 ">
                We are a leading IT solutions provider
                <br /> delivering cutting-edge technology, software development,
                and digital transformation services.
                <br />
                Our expertise spans web and mobile development, cloud computing,
                cybersecurity, and AI-driven solutions.
                <br />
                Partner with us to drive innovation, efficiency, and business
                growth.
                <br />
                Contact us today to discuss how we can help you succeed in the
                digital era.
              </p>

              <p className="text-sm">
                Let me know if you’d like it customized based on your company’s
                specific focus! 🚀
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-between md:justify-end mt[-40] text-center md:text-right w-full md:w-auto ">
          <div className="md:mr-16">
            <h3 className="text-lg font-semibold mb-3">Services</h3>
            <ul className="text-sm space-y-2">
              <li>Web Application Development</li>
              <li>Web Hosting</li>
              <li>Mobile App Development</li>
              <li>Penetration Testing</li>
              <li>Application Security Assessment</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Social Media</h3>
            <ul className="text-sm space-y-2">
              <li>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2"
                >
                  <FaLinkedin /> <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/9498108181"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2"
                >
                  <FaWhatsapp /> <span>Whatsapp</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@insoftio.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2"
                >
                  <FaEnvelope /> <span>info@insoftio.com</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+19498108181"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2"
                >
                  <FaPhoneAlt /> <span>+1(949) 810 8181</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <hr />

      {/* Footer Bottom Section */}
      <div className="text-center mt-10 text-sm">
        <p>©2024 All rights reserved.</p>
      </div>

      <p>Powered by Insoftio</p>
    </footer>
  );
};

export default Footer;
