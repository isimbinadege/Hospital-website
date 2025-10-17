import React from "react";
import {Link} from "react-router-dom" 
function Navbar() {
    return (
     <div>
         <nav className="bg-green-50 text-emerald-500 shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold">🏥 Nous Pour Toi Hospital</h1>
        <div className="space-x-6">
          <Link to="/" className="hover:font-bold transition duration-300">Home</Link>
          <Link to="/about" className="hover:font-bold transition duration-300">About</Link>
          <Link to="/doctors" className="hover:font-bold transition duration-300">Doctors</Link>
          <Link to="/services" className="hover:font-bold transition duration-300">Services</Link>
          <Link to="/contact" className="hover:font-bold transition duration-300">Contact</Link>
        </div>
      </div>
    </nav>
     </div>
    )
}
export default Navbar