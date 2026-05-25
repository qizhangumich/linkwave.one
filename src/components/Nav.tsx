import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/products", label: "Products" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-sm z-50 border-b border-neutral-200 dark:border-neutral-800">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center gap-6">
          <Link href="/" className="text-lg font-semibold tracking-tight">
            LINKWAVE
          </Link>
          <div className="flex items-center gap-5 text-sm text-neutral-600 dark:text-neutral-400">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
