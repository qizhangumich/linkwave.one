import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact LINKWAVE PTE. LTD. — Singapore-based technology and consulting company. Registered address, email, and phone.",
};

export default function ContactPage() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400 mb-3 tracking-wide uppercase">
          Contact
        </p>
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">
          Get in touch
        </h1>
        <p className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed mb-12">
          For service enquiries, partnership discussions, or compliance and verification
          requests, please use the contact details below. We typically respond within two
          business days.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 p-6">
            <h2 className="font-semibold mb-3">Company</h2>
            <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed text-sm">
              LINKWAVE PTE. LTD.
              <br />
              UEN: 202331575G
              <br />
              Singapore
            </p>
          </div>

          <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 p-6">
            <h2 className="font-semibold mb-3">Registered Address</h2>
            <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed text-sm">
              111 North Bridge Road, #29-06A,
              <br />
              Peninsula Plaza,
              <br />
              Singapore 179098
            </p>
          </div>

          <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 p-6">
            <h2 className="font-semibold mb-3">Email</h2>
            <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed text-sm">
              <a
                href="mailto:jeremy@linkwave.one"
                className="underline underline-offset-4 hover:no-underline"
              >
                jeremy@linkwave.one
              </a>
            </p>
          </div>

          <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 p-6">
            <h2 className="font-semibold mb-3">Phone</h2>
            <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed text-sm">
              <a
                href="tel:+6584366966"
                className="underline underline-offset-4 hover:no-underline"
              >
                +65 8436 6966
              </a>
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mb-4">Send us a message</h2>
        <form
          action="mailto:jeremy@linkwave.one"
          method="post"
          encType="text/plain"
          className="space-y-4 rounded-xl border border-neutral-200 dark:border-neutral-800 p-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full rounded-md border border-neutral-300 dark:border-neutral-700 bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900 dark:focus:ring-neutral-100"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full rounded-md border border-neutral-300 dark:border-neutral-700 bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900 dark:focus:ring-neutral-100"
              />
            </div>
          </div>
          <div>
            <label htmlFor="company" className="block text-sm font-medium mb-1">
              Company (optional)
            </label>
            <input
              id="company"
              name="company"
              type="text"
              className="w-full rounded-md border border-neutral-300 dark:border-neutral-700 bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900 dark:focus:ring-neutral-100"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="w-full rounded-md border border-neutral-300 dark:border-neutral-700 bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900 dark:focus:ring-neutral-100"
            />
          </div>
          <button
            type="submit"
            className="px-5 py-2.5 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 rounded-lg font-medium hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors"
          >
            Send message
          </button>
          <p className="text-xs text-neutral-500 dark:text-neutral-400">
            Submitting this form will open your default email client. You may also email us
            directly at jeremy@linkwave.one.
          </p>
        </form>
      </div>
    </section>
  );
}
