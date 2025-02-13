import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className="bg-teal-600 py-4">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center px-6">
        <div className="text-white text-3xl font-bold">
          StudyMedGlobal
        </div>

        {/* Navbar Links */}
        <div className="space-x-6">
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
      </div>
    </nav>
  );
};

export default Navbar;
