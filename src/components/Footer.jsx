const Footer = () => (
  <footer className="bg-gray-900 text-white py-8 mt-16">
    <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
      <div className="mb-4 md:mb-0">
        <span className="font-bold text-xl">RentalHub India</span>
        <span className="ml-2 text-gray-400">© {new Date().getFullYear()} All rights reserved. | India</span>
      </div>
      <div className="flex space-x-6">
        <a href="/privacy-policy" className="hover:text-blue-400 transition">Privacy Policy</a>
        <a href="/terms-and-conditions" className="hover:text-blue-400 transition">Terms & Conditions</a>
        <a href="/accessibility" className="hover:text-blue-400 transition">Accessibility</a>
      </div>
      <div className="flex space-x-4 mt-4 md:mt-0">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">FB</a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition">IG</a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">TW</a>
      </div>
    </div>
    <div className="text-center text-gray-400 mt-4 text-sm">
      Contact: +91 98765 43210 | Email: support@rentalhub.in | Address: 501, 5th Floor, Brigade Gateway, Dr. Rajkumar Road, Malleshwaram, Bengaluru, Karnataka, India
    </div>
    <div className="mt-8 flex justify-center">
      <iframe
        title="RentalHub India Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.049073964479!2d77.5560404749196!3d13.01149298728659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3d8e2e2e2e%3A0x2e2e2e2e2e2e2e2e!2sBrigade%20Gateway%2C%20Dr.%20Rajkumar%20Road%2C%20Malleshwaram%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1688999999999!5m2!1sen!2sin"
        width="350"
        height="150"
        style={{ border: 0, borderRadius: '0.5rem' }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="shadow-lg"
      ></iframe>
    </div>
  </footer>
);

export default Footer;
