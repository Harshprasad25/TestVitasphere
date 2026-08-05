import { useState } from "react";

const faqs = [
  {
    question: "How do I register on the platform?",
    answer:
      "Click the Register button on the homepage and create an account using your details. Once registered, you can log in and access the appropriate dashboard.",
  },
  {
    question: "Can patients book appointments online?",
    answer:
      "Yes. Patients can browse available doctors, select a convenient time slot, and schedule appointments directly through the platform.",
  },
  {
    question: "Are prescriptions stored digitally?",
    answer:
      "Yes. Doctors can generate digital prescriptions that are securely stored and can be viewed by patients whenever needed.",
  },
  {
    question: "Is my medical information secure?",
    answer:
      "Medical records are accessible only to authorized users based on their assigned roles, ensuring patient privacy and data security.",
  },
  {
    question: "Who can use this system?",
    answer:
      "The platform provides dedicated portals for Patients, Doctors, and Hospital Administrators, each with features tailored to their responsibilities.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-5xl px-6">

        <div className="text-center">
          <span className="font-semibold text-blue-600">
            FAQ
          </span>

          <h2 className="mt-4 text-4xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            Everything you need to know about our Hospital Management System.
          </p>
        </div>

        <div className="mt-14 space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="rounded-xl border border-gray-200"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="flex w-full items-center justify-between p-6 text-left"
              >
                <span className="text-lg font-semibold text-gray-900">
                  {faq.question}
                </span>

                <span className="text-2xl text-blue-600">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              {openIndex === index && (
                <div className="border-t border-gray-100 px-6 pb-6">
                  <p className="pt-4 leading-7 text-gray-600">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}