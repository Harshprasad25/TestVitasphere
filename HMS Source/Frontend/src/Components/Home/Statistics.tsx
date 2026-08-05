const stats = [
  {
    number: "150+",
    title: "Doctors",
    icon: "👨‍⚕️",
  },
  {
    number: "12K+",
    title: "Patients",
    icon: "🧑‍🤝‍🧑",
  },
  {
    number: "35K+",
    title: "Appointments",
    icon: "📅",
  },
  {
    number: "250+",
    title: "Medicines",
    icon: "💊",
  },
];

export default function Statistics() {
  return (
    <section className="bg-blue-600 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <span className="font-semibold tracking-wide text-blue-100">
            OUR IMPACT
          </span>

          <h2 className="mt-4 text-4xl font-bold">
            Trusted Healthcare Platform
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-blue-100">
            Helping hospitals, doctors and patients manage healthcare
            efficiently every single day.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {stats.map((stat) => (
            <div
              key={stat.title}
              className="rounded-2xl bg-white/10 p-8 text-center backdrop-blur-sm transition hover:bg-white/20"
            >
              <div className="text-5xl">
                {stat.icon}
              </div>

              <h3 className="mt-5 text-4xl font-bold">
                {stat.number}
              </h3>

              <p className="mt-3 text-lg text-blue-100">
                {stat.title}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}