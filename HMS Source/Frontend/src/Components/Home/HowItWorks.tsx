const steps = [
  {
    step: "01",
    icon: "📝",
    title: "Register",
    description:
      "Create an account as a Patient, Doctor, or Administrator.",
  },
  {
    step: "02",
    icon: "📅",
    title: "Book Appointment",
    description:
      "Patients can schedule appointments with available doctors.",
  },
  {
    step: "03",
    icon: "👨‍⚕️",
    title: "Consultation",
    description:
      "Doctors review patient history, diagnose, and provide treatment.",
  },
  {
    step: "04",
    icon: "💊",
    title: "Prescription",
    description:
      "Digital prescriptions are generated and medicines are managed efficiently.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <span className="font-semibold text-blue-600">
            HOW IT WORKS
          </span>

          <h2 className="mt-4 text-4xl font-bold text-gray-900">
            Simple Healthcare Workflow
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
            Our platform connects patients, doctors, and hospital staff
            through a streamlined digital workflow.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.step}
              className="relative rounded-2xl bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="absolute right-6 top-6 text-5xl font-bold text-gray-100">
                {step.step}
              </div>

              <div className="text-5xl">
                {step.icon}
              </div>

              <h3 className="mt-6 text-xl font-semibold">
                {step.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}