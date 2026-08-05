const services = [
  {
    title: "Patient Portal",
    icon: "🧑‍⚕️",
    features: [
      "Book appointments",
      "View prescriptions",
      "Track medical history",
      "Manage profile",
    ],
  },
  {
    title: "Doctor Portal",
    icon: "👨‍⚕️",
    features: [
      "Manage appointments",
      "Access patient records",
      "Write prescriptions",
      "View analytics",
    ],
  },
  {
    title: "Admin Portal",
    icon: "🏥",
    features: [
      "Manage doctors",
      "Manage patients",
      "Inventory management",
      "Sales & Dashboard",
    ],
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-white py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <span className="font-semibold text-blue-600">
            PORTALS
          </span>

          <h2 className="mt-4 text-4xl font-bold text-gray-900">
            Built for Every User
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
            Whether you're a patient, doctor, or hospital administrator,
            VitaSphere provides dedicated tools to simplify your daily work.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">

          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-3xl border border-gray-100 bg-slate-50 p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="text-6xl">
                {service.icon}
              </div>

              <h3 className="mt-6 text-2xl font-semibold">
                {service.title}
              </h3>

              <ul className="mt-6 space-y-3">
                {service.features.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-gray-600"
                  >
                    ✅ {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}