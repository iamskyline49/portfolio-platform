"use client";

import Link from "next/link";

import { Menu } from "lucide-react";

import { useState } from "react";

import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { name: "Skills", href: "/skills" },
  { name: "Projects", href: "/projects" },
  { name: "Research", href: "/research" },
  { name: "Hobbies", href: "/hobbies" },
  { name: "Resume", href: "/resume" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-2xl font-black text-blue-400">
          Prottoy Sarker Diganto
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="transition hover:text-blue-400"
            >
              {link.name}
            </Link>
          ))}

          <ThemeToggle />
        </nav>

        <button onClick={() => setOpen(!open)} className="md:hidden">
          <Menu />
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-800 bg-slate-950 md:hidden">
          <div className="flex flex-col gap-4 p-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
              >
                {link.name}
              </Link>
            ))}

            <ThemeToggle />
          </div>
        </div>
      )}
    </header>
  );
}
