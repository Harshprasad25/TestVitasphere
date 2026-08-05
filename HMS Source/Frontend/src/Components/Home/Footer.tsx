import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-300">

      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-2 lg:grid-cols-4">

        {/* Logo */}

        <div>
          <h2 className="text-3xl font-bold text-white">
            🏥 VitaSphere
          </h2>

          <p className="mt-5 leading-7">
            Modern hospital management platform that connects
            patients, doctors and administrators through one
            secure ecosystem.
          </p>
        </div>

        {/* Links */}

        <div>
          <h3 className="mb-5 text-xl font-semibold text-white">
            Quick Links
          </h3>

          <div className="space-y-3">

            <Link to="/" className="block hover:text-white">
              Home
            </Link>

            <a href="#about" className="block hover:text-white">
              About
            </a>

            <a href="#features" className="block hover:text-white">
              Features
            </a>

            <a href="#contact" className="block hover:text-white">
              Contact
            </a>

          </div>
        </div>

        {/* Portals */}

        <div>
          <h3 className="mb-5 text-xl font-semibold text-white">
            Portals
          </h3>

          <div className="space-y-3">

            <Link to="/login" className="block hover:text-white">
              Patient Portal
            </Link>

            <Link to="/login" className="block hover:text-white">
              Doctor Portal
            </Link>

            <Link to="/login" className="block hover:text-white">
              Admin Portal
            </Link>

          </div>
        </div>

        {/* Contact */}

        <div>
          <h3 className="mb-5 text-xl font-semibold text-white">
            Contact
          </h3>

          <div className="space-y-3">
            <p>📍 Mumbai, India</p>
            <p>📞 +91 98765 43210</p>
            <p>📧 support@vitasphere.com</p>
          </div>
        </div>

      </div>

      <div className="border-t border-slate-700 py-6 text-center text-sm text-gray-400">
        © 2026 VitaSphere. All rights reserved.
      </div>

    </footer>
  );
}