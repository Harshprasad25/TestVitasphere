const features = [
  {
    title: "Appointments",
    description:
      "Book, reschedule and manage appointments effortlessly.",
    icon: "📅",
  },
  {
    title: "Electronic Records",
    description:
      "Access patient history securely from anywhere.",
    icon: "📋",
  },
  {
    title: "Digital Prescriptions",
    description:
      "Doctors can issue prescriptions in seconds.",
    icon: "💊",
  },
  {
    title: "Medicine Inventory",
    description:
      "Track medicine stock and inventory in real time.",
    icon: "📦",
  },
  {
    title: "Analytics",
    description:
      "Monitor hospital performance through dashboards.",
    icon: "📊",
  },
  {
    title: "Role-Based Access",
    description:
      "Separate portals for Admin, Doctor and Patient.",
    icon: "🔐",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="bg-slate-50 py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="font-semibold text-blue-600">
            FEATURES
          </span>

          <h2 className="mt-4 text-4xl font-bold text-gray-900">
            Everything You Need in One Platform
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
            Designed to simplify hospital operations while improving
            patient experience and helping doctors focus on care.
          </p>

        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="text-5xl">
                {feature.icon}
              </div>

              <h3 className="mt-6 text-xl font-semibold">
                {feature.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}