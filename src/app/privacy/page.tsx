import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for LINKWAVE PTE. LTD., covering information collection, use, security, third-party services, and user rights.",
};

export default function PrivacyPage() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400 mb-3 tracking-wide uppercase">
          Legal
        </p>
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-3">
          Privacy Policy
        </h1>
        <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-10">
          Last updated: 26 May 2026
        </p>

        <div className="prose prose-neutral dark:prose-invert max-w-none text-neutral-700 dark:text-neutral-300">
          <p>
            This Privacy Policy describes how LINKWAVE PTE. LTD. (&quot;LINKWAVE&quot;, &quot;we&quot;,
            &quot;us&quot;, or &quot;our&quot;), a company incorporated in Singapore with UEN
            202331575G, collects, uses, and protects information when you visit our website at
            linkwave.one or use the applications and services we provide.
          </p>

          <h2 className="text-xl font-semibold mt-10 mb-3">1. Information We May Collect</h2>
          <p>We may collect the following categories of information:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Information you provide directly</strong> — such as name, email address,
              company, phone number, and any message content submitted via contact forms or
              email.
            </li>
            <li>
              <strong>Account information</strong> — where our applications require an account,
              we may collect username, authentication credentials, and profile information.
            </li>
            <li>
              <strong>Website and application usage data</strong> — such as device type, browser,
              operating system, IP address, pages visited, in-app actions, and timestamps. This
              information helps us understand how our website and applications are used and
              improve them.
            </li>
            <li>
              <strong>Content and inputs</strong> — for applications that process user content
              (for example, text submitted to AI features), we may temporarily process that
              content to deliver the requested functionality.
            </li>
          </ul>

          <h2 className="text-xl font-semibold mt-10 mb-3">2. How We Use Information</h2>
          <p>We use the information we collect to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Provide, maintain, and improve our website, applications, and services.</li>
            <li>Respond to enquiries, support requests, and partnership communications.</li>
            <li>Operate and secure our systems, prevent fraud, and enforce our terms.</li>
            <li>Comply with applicable laws and regulatory obligations.</li>
            <li>Communicate updates, changes, or important notices about our services.</li>
          </ul>

          <h2 className="text-xl font-semibold mt-10 mb-3">3. App and Website Usage Data</h2>
          <p>
            We may use standard analytics tools and server logs to understand how users interact
            with our website and applications. This data is used in aggregate to monitor
            performance, diagnose issues, and improve user experience. Where mobile applications
            we publish on Google Play or the Apple App Store collect usage data, the relevant
            disclosures will be presented within each application&apos;s store listing and
            in-app privacy notice.
          </p>

          <h2 className="text-xl font-semibold mt-10 mb-3">4. Third-Party Service Providers</h2>
          <p>
            We may engage trusted third-party service providers to support our operations, for
            example cloud hosting, analytics, email delivery, payment processing, and AI model
            providers. These providers process information on our behalf and are required to
            apply appropriate security measures and use the information only for the purposes we
            specify.
          </p>

          <h2 className="text-xl font-semibold mt-10 mb-3">5. Data Security</h2>
          <p>
            We implement reasonable administrative, technical, and organizational measures
            designed to protect the information we hold against unauthorized access, disclosure,
            alteration, and destruction. No method of transmission or storage is completely
            secure, and we cannot guarantee absolute security.
          </p>

          <h2 className="text-xl font-semibold mt-10 mb-3">6. Data Retention</h2>
          <p>
            We retain personal information only for as long as necessary to fulfill the purposes
            described in this Policy, comply with our legal obligations, resolve disputes, and
            enforce our agreements.
          </p>

          <h2 className="text-xl font-semibold mt-10 mb-3">7. International Transfers</h2>
          <p>
            As a Singapore-based company serving users across multiple jurisdictions, the
            information we collect may be processed and stored in countries outside your country
            of residence. Where required, we take steps to ensure that such transfers are
            conducted in accordance with applicable data protection laws.
          </p>

          <h2 className="text-xl font-semibold mt-10 mb-3">8. User Rights</h2>
          <p>
            Subject to applicable law (including the Singapore Personal Data Protection Act and
            other applicable data protection laws), you may have the right to:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Request access to personal information we hold about you.</li>
            <li>Request correction of inaccurate or incomplete information.</li>
            <li>Request deletion of personal information, subject to legal exceptions.</li>
            <li>Withdraw consent for processing based on consent.</li>
            <li>Object to or restrict certain processing of your information.</li>
          </ul>
          <p>
            To exercise any of these rights, please contact us using the details below.
          </p>

          <h2 className="text-xl font-semibold mt-10 mb-3">9. Children&apos;s Privacy</h2>
          <p>
            Our website and services are not directed to children under the age of 13. We do not
            knowingly collect personal information from children. If you believe a child has
            provided us with personal information, please contact us so we can take appropriate
            action.
          </p>

          <h2 className="text-xl font-semibold mt-10 mb-3">10. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. The updated version will be
            posted on this page with a revised &quot;Last updated&quot; date. Continued use of
            our website or services after changes take effect indicates acceptance of the
            updated Policy.
          </p>

          <h2 className="text-xl font-semibold mt-10 mb-3">11. Contact Information</h2>
          <p>
            For privacy enquiries or to exercise your rights, please contact:
          </p>
          <p className="!mt-2">
            <strong>LINKWAVE PTE. LTD.</strong>
            <br />
            UEN: 202331575G
            <br />
            111 North Bridge Road, #29-06A, Peninsula Plaza, Singapore 179098
            <br />
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
