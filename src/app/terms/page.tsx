import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service for LINKWAVE PTE. LTD., covering use of the website and services, intellectual property, user responsibilities, and governing law.",
};

export default function TermsPage() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400 mb-3 tracking-wide uppercase">
          Legal
        </p>
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-3">
          Terms of Service
        </h1>
        <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-10">
          Last updated: 26 May 2026
        </p>

        <div className="prose prose-neutral dark:prose-invert max-w-none text-neutral-700 dark:text-neutral-300">
          <p>
            These Terms of Service (&quot;Terms&quot;) govern your access to and use of the
            website located at linkwave.one and any applications, products, or services provided
            by LINKWAVE PTE. LTD. (&quot;LINKWAVE&quot;, &quot;we&quot;, &quot;us&quot;, or
            &quot;our&quot;), a company incorporated in Singapore with UEN 202331575G. By
            accessing or using our website or services, you agree to be bound by these Terms.
          </p>

          <h2 className="text-xl font-semibold mt-10 mb-3">1. Use of Website and Services</h2>
          <p>
            You may use our website and services for lawful purposes and in accordance with these
            Terms. You agree not to use the website or services in any way that violates
            applicable law, infringes the rights of others, or interferes with the operation of
            the website or services.
          </p>

          <h2 className="text-xl font-semibold mt-10 mb-3">2. Intellectual Property</h2>
          <p>
            All content on this website, including text, graphics, logos, software, and any
            related documentation, is the property of LINKWAVE PTE. LTD. or its licensors and is
            protected by applicable intellectual property laws. You may not reproduce, modify,
            distribute, or create derivative works from any content on this website without our
            prior written consent, except as expressly permitted by law.
          </p>
          <p>
            The LINKWAVE name, logo, and related marks are trademarks of LINKWAVE PTE. LTD. and
            may not be used without permission.
          </p>

          <h2 className="text-xl font-semibold mt-10 mb-3">3. User Responsibilities</h2>
          <p>You agree that you will:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Provide accurate and current information when interacting with our website or services.</li>
            <li>Keep any account credentials confidential and notify us of any unauthorized use.</li>
            <li>Not attempt to gain unauthorized access to our systems or interfere with their operation.</li>
            <li>Not use our services to transmit unlawful, harmful, infringing, or misleading content.</li>
            <li>Comply with all applicable laws and platform policies, including the policies of any application marketplace where our applications are distributed.</li>
          </ul>

          <h2 className="text-xl font-semibold mt-10 mb-3">4. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by applicable law, our website and services are
            provided on an &quot;as is&quot; and &quot;as available&quot; basis, without
            warranties of any kind, whether express or implied. We do not warrant that the
            website or services will be uninterrupted, error-free, or free from harmful
            components.
          </p>
          <p>
            To the maximum extent permitted by applicable law, LINKWAVE PTE. LTD. and its
            directors, officers, employees, and agents shall not be liable for any indirect,
            incidental, special, consequential, or punitive damages, or any loss of profits,
            revenue, data, or goodwill, arising out of or in connection with your use of the
            website or services. Our total liability for any claim arising out of or relating to
            these Terms or the services shall not exceed the amount you paid to us, if any, for
            the services giving rise to the claim during the twelve (12) months preceding the
            event giving rise to liability.
          </p>

          <h2 className="text-xl font-semibold mt-10 mb-3">5. Third-Party Services</h2>
          <p>
            Our website or services may contain links to, or integrations with, third-party
            websites, applications, or services that are not owned or controlled by LINKWAVE
            PTE. LTD. We do not endorse and are not responsible for the content, policies, or
            practices of any third-party services. Your use of any third-party services is
            subject to the terms and policies of those services.
          </p>

          <h2 className="text-xl font-semibold mt-10 mb-3">6. Changes to the Services or Terms</h2>
          <p>
            We may modify or discontinue, temporarily or permanently, any part of our website or
            services, with or without notice. We may also update these Terms from time to time.
            The updated Terms will be posted on this page with a revised &quot;Last updated&quot;
            date, and your continued use of the website or services after the update constitutes
            acceptance of the revised Terms.
          </p>

          <h2 className="text-xl font-semibold mt-10 mb-3">7. Termination</h2>
          <p>
            We may suspend or terminate your access to the website or services at any time, with
            or without notice, if we reasonably believe you have violated these Terms or
            applicable law. Provisions that by their nature should survive termination will
            survive, including those relating to intellectual property, disclaimers, limitation
            of liability, and governing law.
          </p>

          <h2 className="text-xl font-semibold mt-10 mb-3">8. Governing Law</h2>
          <p>
            These Terms and any dispute or claim arising out of or in connection with them or
            their subject matter shall be governed by and construed in accordance with the laws
            of Singapore. The courts of Singapore shall have exclusive jurisdiction to settle
            any such dispute or claim.
          </p>

          <h2 className="text-xl font-semibold mt-10 mb-3">9. Contact Information</h2>
          <p>For questions about these Terms, please contact:</p>
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
