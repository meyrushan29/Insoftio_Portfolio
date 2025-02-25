
import Logo from  '../assets/logofinal.png';

export const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-2  bg-[#0d1a2b]">
      <div className="flex items-center">
        <img src={Logo} alt="Logo" className=" size-24" />
      </div>
      <ul className="flex space-x-8">
        <li><a href="/" className="text-white text-lg font-medium hover:text-[#ff6a00]">Home</a></li>
        <li><a href="/services" className="text-white text-lg font-medium hover:text-[#ff6a00]">Services</a></li>
        <li><a href="/contact" className="text-white text-lg font-medium hover:text-[#ff6a00]">Contact Us</a></li>
      </ul>
    </nav>
  )
}
