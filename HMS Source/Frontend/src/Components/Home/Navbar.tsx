import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-600">
          🏥 VitaSphere
        </Link>

        {/* Navigation */}
        <div className="hidden gap-8 md:flex">
          <a
            href="#about"
            className="font-medium text-gray-600 hover:text-blue-600"
          >
            About
          </a>

          <a
            href="#features"
            className="font-medium text-gray-600 hover:text-blue-600"
          >
            Features
          </a>

          <a
            href="#services"
            className="font-medium text-gray-600 hover:text-blue-600"
          >
            Services
          </a>

          <a
            href="#contact"
            className="font-medium text-gray-600 hover:text-blue-600"
          >
            Contact
          </a>
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          <Link
            to="/login"
            className="rounded-lg border border-blue-600 px-5 py-2 text-blue-600 transition hover:bg-blue-50"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="rounded-lg bg-blue-600 px-5 py-2 text-white transition hover:bg-blue-700"
          >
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
}
