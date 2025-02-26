
import Logo from  '../assets/logofinal.png';

import {Link} from 'react-router-dom'

export const Navbar = () => {
  return (
    <div>
    <nav className="flex justify-between items-center p-2 mb-2  bg-[#0d1a2b]">
      <Link to='/'>
      <div className="flex items-center">
       <img src={Logo} alt="Logo" className=" size-24" />
      </div>
      </Link>
      <ul className="flex right-10 space-x-8">
        <li><a href="/" className="text-white text-lg font-medium hover:text-[#ff5a60]">Home</a></li>
        <li><a href="/service" className="text-white text-lg font-medium hover:text-[#ff5a60]">Services</a></li>
        <li><a href="/contact" className="text-white text-lg font-medium hover:text-[#ff5a60] mr-5">Contact Us</a></li>
      </ul>
    </nav>
     <hr className='border-2 border-white'/>
     </div>
  )
}
