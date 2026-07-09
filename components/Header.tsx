"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "HOME" },
  { href: "/services", label: "SERVICES" },
  { href: "/portfolio", label: "PORTFOLIO" },
  { href: "/about", label: "ABOUT" },
  { href: "/reviews", label: "REVIEWS" },
  { href: "/blog", label: "BLOG" },
  { href: "/contact", label: "CONTACT" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-[#303235]">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-1">
          <span className="font-[family-name:var(--font-suisse)] text-[20px] font-[400] text-[#dedede] tracking-[-0.3px]">
            &lt;/&gt;
          </span>
          <span className="font-[family-name:var(--font-suisse)] text-[20px] font-[400] text-[#dedede]">
            DevForge
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-[family-name:var(--font-mono)] text-[12px] font-[400] uppercase tracking-[0.053em] text-[#bababb] transition-colors hover:text-[#dedede]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="hidden rounded-[1px] border border-[#bababb] px-3 py-1.5 font-[family-name:var(--font-mono)] text-[12px] font-[400] uppercase tracking-[0.053em] text-[#bababb] transition-colors hover:border-[#dedede] hover:text-[#dedede] md:inline-block"
        >
          GET IN TOUCH
        </Link>

        <button
          onClick={() => setOpen(!open)}
          className="flex flex-col gap-1 md:hidden"
          aria-label="Toggle menu"
        >
          <span className="block h-px w-5 bg-[#bababb]" />
          <span className="block h-px w-5 bg-[#bababb]" />
          <span className="block h-px w-5 bg-[#bababb]" />
        </button>
      </div>

      {open && (
        <div className="border-t border-[#303235] bg-[#0b0e12] md:hidden">
          <nav className="flex flex-col gap-4 px-6 py-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-[family-name:var(--font-mono)] text-[12px] font-[400] uppercase tracking-[0.053em] text-[#bababb] transition-colors hover:text-[#dedede]"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="inline-block rounded-[1px] border border-[#bababb] px-3 py-1.5 font-[family-name:var(--font-mono)] text-[12px] font-[400] uppercase tracking-[0.053em] text-[#bababb] transition-colors hover:border-[#dedede] hover:text-[#dedede]"
            >
              GET IN TOUCH
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
