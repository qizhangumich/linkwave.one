import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products",
  description:
    "LINKWAVE PTE. LTD. develops digital applications and AI-enabled tools for productivity, education, business automation, and content creation.",
};

const focusAreas = [
  {
    title: "Productivity Tools",
    body:
      "Applications that help individuals and teams organize information, manage workflows, and reduce repetitive work.",
  },
  {
    title: "Education and Learning",
    body:
      "Digital tools that support self-directed learning, language practice, and structured study, using AI to provide adaptive feedback and content.",
  },
  {
    title: "Business Automation",
    body:
      "Internal tools and integrations that automate routine business operations such as document processing, data entry, and reporting.",
  },
  {
    title: "Content Creation",
    body:
      "AI-enabled applications that assist with drafting, editing, translating, and organizing written and multimedia content.",
  },
];

export default function ProductsPage() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400 mb-3 tracking-wide uppercase">
          Products &amp; Applications
        </p>
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">
          Digital applications and AI-enabled tools
        </h1>
        <p className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed mb-6">
          LINKWAVE PTE. LTD. develops digital applications and AI-enabled tools across
          productivity, education, business automation, and content creation. Our applications
          are designed for individual users, small teams, and businesses that want practical
          software supported by modern AI capabilities.
        </p>
        <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed mb-12">
          We publish applications on web platforms and, where appropriate, on mobile application
          marketplaces under the LINKWAVE PTE. LTD. developer identity, in compliance with the
          policies and verification requirements of those platforms.
        </p>

        <h2 className="text-2xl font-semibold mb-6">Focus areas</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-12">
          {focusAreas.map((a) => (
            <div
              key={a.title}
              className="rounded-xl border border-neutral-200 dark:border-neutral-800 p-5"
            >
              <h3 className="font-medium mb-2">{a.title}</h3>
              <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                {a.body}
              </p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-semibold mb-4">Standards we follow</h2>
        <ul className="list-disc pl-6 space-y-2 text-neutral-700 dark:text-neutral-300 mb-12">
          <li>Compliance with the policies of the platforms on which we publish, including Google Play and the Apple App Store.</li>
          <li>Clear privacy disclosures for any application that collects user data.</li>
          <li>Appropriate security practices for handling user information and credentials.</li>
          <li>Honest and accurate descriptions of application functionality.</li>
        </ul>

        <div className="p-6 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
          <h2 className="text-lg font-semibold mb-2">Product or partnership enquiries</h2>
          <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed mb-4">
            For information about specific applications, distribution partnerships, or technical
            integrations, please contact us by email.
          </p>
          <a
            href="mailto:jeremy@linkwave.one"
            className="inline-block px-5 py-2.5 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 rounded-lg font-medium hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors"
          >
            jeremy@linkwave.one
          </a>
        </div>
      </div>
    </section>
  );
}
