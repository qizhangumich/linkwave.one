import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="pt-24 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400 mb-4 tracking-wide uppercase">
            Singapore · Technology &amp; Consulting
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight mb-6">
            Building AI-Powered Digital Applications and Technology Solutions
          </h1>
          <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl leading-relaxed">
            LINKWAVE PTE. LTD. is a Singapore-based technology and consulting company focused on
            AI applications, software development, mobile products, and digital business solutions.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/services"
              className="inline-block px-6 py-3 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 rounded-lg font-medium hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors"
            >
              Our Services
            </Link>
            <Link
              href="/contact"
              className="inline-block px-6 py-3 border border-neutral-300 dark:border-neutral-700 rounded-lg font-medium hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="py-20 px-6 bg-neutral-50 dark:bg-neutral-900">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold mb-3">What we do</h2>
          <p className="text-neutral-600 dark:text-neutral-400 mb-10 max-w-3xl">
            We design and deliver software products and provide technology consulting for
            organizations operating across borders.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "AI Application Development",
                body:
                  "Designing and building applications that integrate large language models and other AI capabilities into practical workflows and end-user products.",
              },
              {
                title: "Mobile App Development",
                body:
                  "Developing native and cross-platform mobile applications for iOS and Android, with attention to performance, security, and store compliance.",
              },
              {
                title: "Software & Web Applications",
                body:
                  "Engineering web platforms, internal tools, and APIs using modern frameworks, cloud infrastructure, and standards-based architecture.",
              },
              {
                title: "Technology Consulting",
                body:
                  "Advising on technical architecture, product strategy, AI adoption, and engineering practices for early-stage and established teams.",
              },
              {
                title: "Cross-Border Digital Business",
                body:
                  "Supporting market entry and digital operations across Asia-Pacific, with practical guidance on localization, compliance, and partner selection.",
              },
              {
                title: "Productivity & Automation",
                body:
                  "Building AI-enabled tools that improve productivity, automate routine operations, and assist with content creation, research, and analysis.",
              },
            ].map((c) => (
              <div
                key={c.title}
                className="p-6 bg-background border border-neutral-200 dark:border-neutral-800 rounded-xl"
              >
                <h3 className="font-medium mb-2">{c.title}</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {c.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company facts */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">A registered Singapore company</h2>
            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">
              LINKWAVE PTE. LTD. is incorporated in Singapore as an Exempt Private Company Limited
              by Shares, with the Accounting and Corporate Regulatory Authority (ACRA).
            </p>
            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
              We operate under Singapore law and serve clients and users across multiple jurisdictions.
            </p>
            <Link
              href="/about"
              className="inline-block mt-6 text-sm font-medium underline underline-offset-4 hover:no-underline"
            >
              Read more about the company →
            </Link>
          </div>
          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
            <div>
              <dt className="text-neutral-500 dark:text-neutral-400">Legal Name</dt>
              <dd className="mt-1 font-medium">LINKWAVE PTE. LTD.</dd>
            </div>
            <div>
              <dt className="text-neutral-500 dark:text-neutral-400">UEN</dt>
              <dd className="mt-1 font-medium">202331575G</dd>
            </div>
            <div>
              <dt className="text-neutral-500 dark:text-neutral-400">Incorporated</dt>
              <dd className="mt-1 font-medium">07 August 2023</dd>
            </div>
            <div>
              <dt className="text-neutral-500 dark:text-neutral-400">Country</dt>
              <dd className="mt-1 font-medium">Singapore</dd>
            </div>
            <div className="sm:col-span-2">
              <dt className="text-neutral-500 dark:text-neutral-400">Registered Address</dt>
              <dd className="mt-1 font-medium leading-relaxed">
                111 North Bridge Road, #29-06A,
                <br />
                Peninsula Plaza, Singapore 179098
              </dd>
            </div>
          </dl>
        </div>
      </section>
    </>
  );
}
