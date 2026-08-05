export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-slate-50 py-24"
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2">

        {/* Left */}

        <div>
          <span className="font-semibold text-blue-600">
            CONTACT US
          </span>

          <h2 className="mt-4 text-4xl font-bold text-gray-900">
            Let's Get in Touch
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Have questions about our Hospital Management System?
            We'd love to hear from you.
          </p>

          <div className="mt-10 space-y-6">

            <div>
              <h4 className="font-semibold">📍 Address</h4>
              <p className="text-gray-600">
                123 Healthcare Avenue, Mumbai, India
              </p>
            </div>

            <div>
              <h4 className="font-semibold">📞 Phone</h4>
              <p className="text-gray-600">
                +91 98765 43210
              </p>
            </div>

            <div>
              <h4 className="font-semibold">📧 Email</h4>
              <p className="text-gray-600">
                support@vitasphere.com
              </p>
            </div>

            <div>
              <h4 className="font-semibold">🕒 Working Hours</h4>
              <p className="text-gray-600">
                Monday - Saturday
                <br />
                9:00 AM - 6:00 PM
              </p>
            </div>

          </div>
        </div>

        {/* Right */}

        <div className="rounded-3xl bg-white p-8 shadow-lg">

          <h3 className="mb-6 text-2xl font-semibold">
            Send us a Message
          </h3>

          <form className="space-y-5">

            <input
              type="text"
              placeholder="Full Name"
              className="w-full rounded-xl border p-4 outline-none focus:border-blue-500"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full rounded-xl border p-4 outline-none focus:border-blue-500"
            />

            <textarea
              rows={5}
              placeholder="Your Message"
              className="w-full rounded-xl border p-4 outline-none focus:border-blue-500"
            />

            <button
              className="w-full rounded-xl bg-blue-600 py-4 font-semibold text-white transition hover:bg-blue-700"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}