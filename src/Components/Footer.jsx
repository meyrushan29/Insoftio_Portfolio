
import Logo from "../assets/Logo.png"; // Make sure the logo path is correct

const Footer = () => {
  return (
    <div className="flex flex-col min-h-screen">
    {/* Newsletter Section */}
    <div className="bg-[#0d1a2b] text-white justify-between py-8 px-10 ">
      <div className="max-w-6xl mx-auto">
        <p className="text-sm font-medium mb-1">Newsletters</p>
        <h2 className="text-xl font-bold mb-4">Get Our Every Single Notification</h2>
        
        <div className="flex flex-col sm:flex-row gap-2 max-w-md">
          <input 
            type="email" 
            placeholder="Enter your email here" 
            className="flex-grow px-4 py-2 bg-transparent border border-gray-600 rounded text-white"
          />
          <button className="px-6 py-2 bg-red-500 text-white rounded font-medium">
            Subscribe
          </button>
        </div>
      </div>
    </div>

    {/* Border Line */}
    <div className="h-px bg-white w-full" />

    {/* Main Content Section */}
    <div className="bg-[#0d1a2b] text-white py-12 mb-2 px-4 flex-grow">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Logo and Company Description */}
        <div className="md:col-span-1 mr-2">
          <img src={Logo} className="size-20" alt="" />
          <p className="text-sm md:text-base mb-6 mr-12">
            We are a leading IT solutions provider, delivering cutting-edge technology, software development, and digital transformation services. Our expertise spans web and mobile development, cloud computing, cybersecurity, and AI-driven solutions. Partner with us to drive innovation, efficiency, and business growth. Contact us today to discuss how we can help you succeed in the digital era.
          </p>

        </div>

        {/* Services */}
        <div className="md:col-span-1 mt-20">
          <h3 className="text-lg font-semibold mb-6">Services</h3>
          <ul className="space-y-3">
            <li>Web Application Development</li>
            <li>Web Hosting</li>
            <li>Mobile App Development</li>
            <li>Penetration Testing</li>
            <li>Application Security Assessment</li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="md:col-span-1 mt-20">
          <h3 className="text-lg font-semibold mb-6">Social Media</h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
              </svg>
              <span>LinkedIn</span>
            </li>
            <li className="flex items-center gap-2">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span>Whatsapp</span>
            </li>
            <li className="flex items-center gap-2">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
              <span>info@insoftio.com</span>
            </li>
            <li className="flex items-center gap-2">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              <span>+94(77) 630 9171</span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    {/* Footer */}
    <div className="bg-gray-900 text-white py-4 px-4 border-t border-gray-800">
      <div className="max-w-6xl mx-auto  flex-col sm:flex-row justify-between items-center text-sm">
        <p>Powered by Insoftio</p>
        <p className=" text-center">@2024 All rights reserved.</p>
      </div>
    </div>
  </div>
  );
};

export default Footer;
