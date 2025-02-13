

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
        <li><a href="/why-study" className="hover:underline">Why Study MBBS Abroad?</a></li>
        <li><a href="/countries" className="hover:underline">Top Countries</a></li>
        <li><a href="/admission-process" className="hover:underline">Admission Process</a></li>
        <li><a href="/contact-us" className="hover:underline">Contact Us</a></li>
      </ul>
    </div>

    {/* Contact */}
    <div>
      <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
      <ul className="text-sm space-y-2">
        <li>📧 Email: info@studyabroad.com</li>
        <li>📞 Phone: +1-800-123-4567</li>
        <li>🌍 Address: 123 Study Lane, City, Country</li>
      </ul>
    </div>

    {/* Social Media */}
    <div>
      <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
      <div className="flex space-x-4">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook-f text-2xl hover:text-teal-500"></i>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter text-2xl hover:text-teal-500"></i>
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram text-2xl hover:text-teal-500"></i>
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin-in text-2xl hover:text-teal-500"></i>
        </a>
      </div>
    </div>
  </div>

  <div className="text-center py-4">
    <p className="text-sm">© 2025 Study MBBS Abroad. All rights reserved.</p>
  </div>
</footer>

        </div>
    );
};

export default Footer;