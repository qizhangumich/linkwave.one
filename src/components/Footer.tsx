import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-neutral-200 dark:border-neutral-800">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-sm">
          <div>
            <p className="font-semibold text-neutral-900 dark:text-neutral-100 mb-3">
              LINKWAVE PTE. LTD.
            </p>
            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
              UEN: 202331575G
              <br />
              111 North Bridge Road, #29-06A,
              <br />
              Peninsula Plaza, Singapore 179098
            </p>
          </div>

          <div>
            <p className="font-semibold text-neutral-900 dark:text-neutral-100 mb-3">
              Contact
            </p>
            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Email:{" "}
              <a
                href="mailto:jeremy@linkwave.one"
                className="hover:text-neutral-900 dark:hover:text-neutral-100"
              >
                jeremy@linkwave.one
              </a>
              <br />
              Phone: +65 8436 6966
            </p>
          </div>

          <div>
            <p className="font-semibold text-neutral-900 dark:text-neutral-100 mb-3">
              Company
            </p>
            <ul className="space-y-1.5 text-neutral-600 dark:text-neutral-400">
              <li>
                <Link href="/about" className="hover:text-neutral-900 dark:hover:text-neutral-100">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-neutral-900 dark:hover:text-neutral-100">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-neutral-900 dark:hover:text-neutral-100">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-neutral-900 dark:hover:text-neutral-100">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-neutral-900 dark:hover:text-neutral-100">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-neutral-200 dark:border-neutral-800 text-xs text-neutral-500 dark:text-neutral-500 flex flex-col md:flex-row justify-between gap-2">
          <p>
            LINKWAVE PTE. LTD. | UEN: 202331575G | Singapore | Email:
            {" "}
            <a href="mailto:jeremy@linkwave.one" className="hover:text-neutral-900 dark:hover:text-neutral-100">
              jeremy@linkwave.one
            </a>
          </p>
          <p>© {new Date().getFullYear()} LINKWAVE PTE. LTD. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
