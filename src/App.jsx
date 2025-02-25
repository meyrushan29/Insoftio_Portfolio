import Footer from "./Components/Footer";
import { Navbar } from "./Components/Navbar";
import Home from "./Pages/Home";

function App() {
  

  return (
    
    <div className="flex flex-col min-h-screen">
    {/* Navbar */}
    <div className="bg-[#0d1a2b]">
      <Navbar />
    </div>
  
    {/* Home Section */}
    <div className="flex-grow">
      <Home />
    </div>
  
    {/* Footer */}
    <div className="bg-[#0d1a2b] mt-auto">
      <Footer />
    </div>
  </div>
  
      

  )
}

export default App;
