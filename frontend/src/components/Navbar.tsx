"use client";

import Link from "next/link";

import { usePathname } from "next/navigation";

const navItems = [
  { name: "Projects", href: "/projects" },
  { name: "Skills", href: "/skills" },
  { name: "Research", href: "/research" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-black/40 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link
          href="/"
          className="text-xl font-semibold tracking-tight text-white"
        >
          Prottoy Sarker Diganto
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm transition ${
                pathname === item.href
                  ? "text-white"
                  : "text-zinc-500 hover:text-white"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
