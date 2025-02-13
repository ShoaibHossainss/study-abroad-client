import { Link } from 'react-scroll';
import { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Toggle mobile menu visibility
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-teal-600 py-4">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        <div className="text-white text-3xl font-bold">
          StudyMedGlobal
        </div>

        {/* Desktop Navbar Links */}
        <div className="hidden md:flex space-x-6">
          <Link to="admission-process" smooth={true} duration={500} className="text-white text-xl font-semibold hover:text-yellow-400">
            Admission Process
          </Link>
          <Link to="why-study" smooth={true} duration={500} className="text-white text-xl font-semibold hover:text-yellow-400">
            FAQ
          </Link>
          <Link to="top-countries" smooth={true} duration={500} className="text-white text-xl font-semibold hover:text-yellow-400">
            Top Countries
          </Link>
          <Link to="form" smooth={true} duration={500} className="text-white text-xl font-semibold hover:text-yellow-400">
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-white text-3xl">
            {isMobileMenuOpen ? '✖' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Navbar Links */}
      <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden px-6 py-4 space-y-4`}>
        <Link to="admission-process" smooth={true} duration={500} className="text-white text-xl font-semibold hover:text-yellow-400 block">
          Admission Process
        </Link>
        <Link to="why-study" smooth={true} duration={500} className="text-white text-xl font-semibold hover:text-yellow-400 block">
          FAQ
        </Link>
        <Link to="top-countries" smooth={true} duration={500} className="text-white text-xl font-semibold hover:text-yellow-400 block">
          Top Countries
        </Link>
        <Link to="form" smooth={true} duration={500} className="text-white text-xl font-semibold hover:text-yellow-400 block">
          Contact Us
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
