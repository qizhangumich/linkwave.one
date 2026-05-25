import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "LINKWAVE PTE. LTD. services: AI application development, mobile and software development, technology consulting, and cross-border digital business support.",
};

const services = [
  {
    title: "AI Application Development",
    body:
      "We design and build applications powered by large language models and other AI technologies. This includes conversational interfaces, document and content workflows, retrieval-augmented systems, and integrations between AI models and existing business processes.",
  },
  {
    title: "Mobile App Development",
    body:
      "We develop native and cross-platform mobile applications for iOS and Android. Our work covers product design, engineering, app store submission, and ongoing maintenance, with attention to performance, accessibility, and store policy compliance.",
  },
  {
    title: "Software and Web Application Development",
    body:
      "We build web platforms, internal business tools, and APIs using modern frameworks and cloud infrastructure. Engagements may include full product development, modernization of legacy systems, or extension of existing platforms.",
  },
  {
    title: "Technology Consulting",
    body:
      "We provide advisory services on software architecture, product strategy, AI adoption, and engineering practices. We work with founders, product teams, and operating companies that need an external perspective on technical direction and execution.",
  },
  {
    title: "Digital Business and Market Entry Support",
    body:
      "We support organizations entering or expanding within Asia-Pacific markets through digital channels. This includes guidance on localization, regulatory considerations, technical partner selection, and the operational setup required to launch digital products responsibly.",
  },
];

export default function ServicesPage() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400 mb-3 tracking-wide uppercase">
          Services
        </p>
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">
          What we provide
        </h1>
        <p className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed mb-12">
          LINKWAVE PTE. LTD. offers a focused set of technology and consulting services for
          organizations building digital products and operating across borders.
        </p>

        <div className="space-y-8">
          {services.map((s) => (
            <div
              key={s.title}
              className="rounded-xl border border-neutral-200 dark:border-neutral-800 p-6"
            >
              <h2 className="text-xl font-semibold mb-3">{s.title}</h2>
              <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                {s.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
          <h2 className="text-lg font-semibold mb-2">Discussing an engagement</h2>
          <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed mb-4">
            For service enquiries, partnership discussions, or technical questions, please reach
            out by email or through our contact page.
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
