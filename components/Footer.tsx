import Image from "next/image";
import Link from "next/link";

const footerColumns = [
  {
    title: "COMPANY",
    links: [
      { href: "/about", label: "About Us" },
      { href: "/blog", label: "Blog" },
      { href: "/portfolio", label: "Portfolio" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "SERVICES",
    links: [
      { href: "/services", label: "Web Development" },
      { href: "/services", label: "Mobile Apps" },
      { href: "/services", label: "UI/UX Design" },
      { href: "/services", label: "Consulting" },
    ],
  },
  {
    title: "SUPPORT",
    links: [
      { href: "/contact", label: "Help Center" },
      { href: "/contact", label: "Privacy Policy" },
      { href: "/contact", label: "Terms of Service" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#303235] bg-[#181a1d]">
      <div className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="flex flex-wrap justify-between gap-12">
          <div className="max-w-xs">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/logo.png" alt="Xoralife" width={24} height={24} className="rounded-[1px]" />
              <span className="font-[family-name:var(--font-suisse)] text-[20px] font-[400] text-[#dedede]">
                Xoralife
              </span>
            </Link>
            <p className="mt-4 font-[family-name:var(--font-suisse)] text-[14px] font-[400] leading-[1.38] text-[#a3a4a5]">
              We build digital solutions that drive business growth.
              From web apps to mobile experiences, we deliver code that matters.
            </p>
          </div>

          {footerColumns.map((col) => (
            <div key={col.title} className="flex flex-col gap-3">
              <span className="font-[family-name:var(--font-suisse)] text-[14px] font-[400] text-[#818284]">
                {col.title}
              </span>
              {col.links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="font-[family-name:var(--font-suisse)] text-[14px] font-[400] text-[#a3a4a5] transition-colors hover:text-[#dedede]"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          ))}
        </div>

        <div className="mt-16 border-t border-[#303235] pt-8 text-center">
          <p className="font-[family-name:var(--font-mono)] text-[11px] font-[400] uppercase tracking-[0.058em] text-[#5d5e61]">
            &copy; {new Date().getFullYear()} Xoralife. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
