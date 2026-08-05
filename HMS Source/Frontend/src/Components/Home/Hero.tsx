import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto flex min-h-[90vh] max-w-7xl flex-col-reverse items-center gap-12 px-6 py-20 lg:flex-row">

        {/* Left */}
        <div className="flex-1">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
            Smart Hospital Management
          </span>

          <h1 className="mt-6 text-5xl font-bold leading-tight text-gray-900 lg:text-6xl">
            Healthcare
            <span className="text-blue-600"> Simplified </span>
            for Everyone
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
            Manage appointments, prescriptions, patient records,
            inventory and analytics from one secure healthcare platform.
          </p>

          <div className="mt-10 flex gap-5">
            <Link
              to="/register"
              className="rounded-xl bg-blue-600 px-7 py-3 text-white shadow-lg transition hover:bg-blue-700"
            >
              Get Started
            </Link>

            <a
              href="#features"
              className="rounded-xl border border-gray-300 px-7 py-3 hover:bg-white"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Right */}
        <div className="flex flex-1 justify-center">
          <img
            src="/doctor-hero.png"
            alt="Healthcare"
            className="max-h-[550px] w-full max-w-lg object-contain"
          />
        </div>

      </div>
    </section>
  );
}