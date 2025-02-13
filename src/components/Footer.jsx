import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { GrInstagram, GrLinkedin } from "react-icons/gr";
import { Link } from "react-scroll";


const Footer = () => {
    return (
        <div>
            <footer className="bg-teal-700 text-white py-8 mt-12">
  <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
    {/* Company Info */}
    <div>
      <h4 className="text-xl font-semibold mb-4">Study MBBS Abroad</h4>
      <p className="text-sm">
        Your trusted partner for pursuing MBBS in top international universities. Let us guide you in choosing the right country and university for your medical studies.
      </p>
    </div>

    {/* Quick Links */}
    <div>
      <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
      <ul className="text-sm space-y-2">
      <li>
        <Link 
          to="why-study" 
          smooth={true} 
          duration={900} 
          className="hover:underline cursor-pointer"
        >
          Why Study MBBS Abroad?
        </Link>
      </li>
      <li>
        <Link 
          to="top-countries" 
          smooth={true} 
          duration={900} 
          className="hover:underline cursor-pointer"
        >
          Top Countries
        </Link>
      </li>
      <li>
        <Link 
          to="admission-process" 
          smooth={true} 
          duration={900} 
          className="hover:underline cursor-pointer"
        >
          Admission Process
        </Link>
      </li>
      <li>
        <Link 
          to="form" 
          smooth={true} 
          duration={900} 
          className="hover:underline cursor-pointer"
        >
          Contact Us
        </Link>
      </li>
    </ul>

    </div>

    {/* Contact */}
    <div>
      <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
      <ul className="text-sm space-y-2">
        <li>📧 Email: info@StudyMedGlobal.com</li>
        <li>📞 Phone: +1-800-123-4567</li>
        <li>🌍 Address: 123 Study Lane, City, Country</li>
      </ul>
    </div>

    {/* Social Media */}
    <div>
      <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
      <div className="flex space-x-4">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="fab fa-facebook-f text-2xl hover:text-teal-500"/>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaSquareXTwitter className="fab fa-twitter text-2xl hover:text-teal-500"/>
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
        <GrInstagram className="fab fa-twitter text-2xl hover:text-teal-500"/>
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
        <GrLinkedin className="fab fa-twitter text-2xl hover:text-teal-500"/>
        </a>
      </div>
    </div>
  </div>

  <div className="text-center py-4">
    <p className="text-sm">© 2025 StudyMedGlobal. All rights reserved.</p>
  </div>
</footer>

        </div>
    );
};

export default Footer;