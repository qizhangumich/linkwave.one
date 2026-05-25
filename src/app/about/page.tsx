import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "About LINKWAVE PTE. LTD. — a Singapore-incorporated technology and consulting company. Company registration, address, business activities, and management.",
};

export default function AboutPage() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400 mb-3 tracking-wide uppercase">
          About the Company
        </p>
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">
          LINKWAVE PTE. LTD.
        </h1>
        <p className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed mb-6">
          LINKWAVE PTE. LTD. is a Singapore-incorporated technology and consulting company. The
          company designs and develops digital applications, AI-enabled tools, and software
          products, and provides technology and business consulting services to clients operating
          across Asia-Pacific and other markets.
        </p>
        <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed mb-12">
          The company was established to combine engineering execution with practical advisory
          work, and to support organizations building cross-border digital products and
          operations.
        </p>

        <h2 className="text-2xl font-semibold mb-6">Company Information</h2>
        <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 overflow-hidden mb-12">
          <dl className="divide-y divide-neutral-200 dark:divide-neutral-800 text-sm">
            {[
              ["Legal Company Name", "LINKWAVE PTE. LTD."],
              ["Singapore UEN", "202331575G"],
              ["Country of Incorporation", "Singapore"],
              ["Company Type", "Exempt Private Company Limited by Shares"],
              ["Date of Incorporation", "07 August 2023"],
              [
                "Registered Address",
                "111 North Bridge Road, #29-06A, Peninsula Plaza, Singapore 179098",
              ],
              ["Primary Business Activity", "Management Consultancy Services"],
              ["Secondary Business Activity", "Development of Software and Applications"],
            ].map(([k, v]) => (
              <div
                key={k}
                className="grid grid-cols-1 sm:grid-cols-3 gap-2 px-5 py-4"
              >
                <dt className="text-neutral-500 dark:text-neutral-400">{k}</dt>
                <dd className="sm:col-span-2 font-medium text-neutral-900 dark:text-neutral-100">
                  {v}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <h2 className="text-2xl font-semibold mb-4">Business Activities</h2>
        <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed mb-4">
          The company's principal business activities are:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-neutral-700 dark:text-neutral-300 mb-12">
          <li>Management consultancy services, with a focus on technology and digital business.</li>
          <li>Development of software, mobile applications, and AI-enabled digital products.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">Management</h2>
        <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 p-5">
          <p className="font-medium">Zhang Qi</p>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">CEO / Director</p>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2">
            Email:{" "}
            <a
              href="mailto:jeremy@linkwave.one"
              className="underline underline-offset-4 hover:no-underline"
            >
              jeremy@linkwave.one
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
