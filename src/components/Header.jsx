import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-600">
          RentalHub
        </Link>
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/cars" className="text-gray-600 font-medium hover:text-blue-600 transition-colors">Cars</Link>
          <Link to="/about" className="text-gray-600 font-medium hover:text-blue-600 transition-colors">About</Link>
          <Link to="/contact" className="text-gray-600 font-medium hover:text-blue-600 transition-colors">Contact</Link>
          <Link to="/dashboard" className="text-gray-600 font-medium hover:text-blue-600 transition-colors">Dashboard</Link>
          <Link to="/booking" className="text-gray-600 font-medium hover:text-blue-600 transition-colors">Book</Link>
          <Link to="/login" className="bg-blue-600 text-white px-6 py-2 rounded-md font-medium hover:bg-blue-700 transition-colors">
            Login
          </Link>
        </nav>
        <button
          className="md:hidden text-2xl text-blue-600 focus:outline-none"
          aria-label="Open menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>
      {menuOpen && (
        <nav className="md:hidden bg-white shadow-lg px-4 py-4 flex flex-col space-y-4">
          <Link to="/cars" className="text-gray-600 font-medium hover:text-blue-600 transition-colors" onClick={() => setMenuOpen(false)}>Cars</Link>
          <Link to="/about" className="text-gray-600 font-medium hover:text-blue-600 transition-colors" onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/contact" className="text-gray-600 font-medium hover:text-blue-600 transition-colors" onClick={() => setMenuOpen(false)}>Contact</Link>
          <Link to="/dashboard" className="text-gray-600 font-medium hover:text-blue-600 transition-colors" onClick={() => setMenuOpen(false)}>Dashboard</Link>
          <Link to="/booking" className="text-gray-600 font-medium hover:text-blue-600 transition-colors" onClick={() => setMenuOpen(false)}>Book</Link>
          <Link to="/login" className="bg-blue-600 text-white px-6 py-2 rounded-md font-medium hover:bg-blue-700 transition-colors" onClick={() => setMenuOpen(false)}>
            Login
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
