"use client";

import { Menu, X, ArrowUpRight } from "lucide-react";
import { useState } from "react";

const links = ["About", "Projects", "Experience", "Skills", "Recognition", "Contact"];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[.06] bg-[#06080d]/75 backdrop-blur-xl">
      <nav className="mx-auto flex h-18 max-w-6xl items-center justify-between px-5 lg:px-8">
        <a href="#top" className="font-display text-xl font-bold tracking-[-.04em]">TT<span className="text-cyan-300">.</span></a>
        <div className="hidden items-center gap-7 md:flex">
          {links.map((link) => <a key={link} href={`#${link.toLowerCase()}`} className="text-sm text-slate-400 transition hover:text-white">{link}</a>)}
        </div>
        <a href="https://github.com/thanithpol2545" target="_blank" rel="noreferrer" className="hidden items-center gap-1.5 rounded-full border border-white/10 px-4 py-2 text-xs font-semibold text-slate-200 transition hover:border-cyan-300/40 hover:text-cyan-200 sm:flex">GitHub <ArrowUpRight size={14}/></a>
        <button aria-label="Toggle menu" onClick={() => setOpen(!open)} className="rounded-lg border border-white/10 p-2 md:hidden">{open ? <X size={18}/> : <Menu size={18}/>}</button>
      </nav>
      {open && <div className="border-t border-white/[.06] bg-[#080b12] px-5 py-4 md:hidden">
        {links.map((link) => <a onClick={() => setOpen(false)} key={link} href={`#${link.toLowerCase()}`} className="block py-3 text-sm text-slate-300">{link}</a>)}
        <a href="https://github.com/thanithpol2545" target="_blank" rel="noreferrer" className="mt-2 block border-t border-white/[.06] pt-4 text-sm font-semibold">GitHub ↗</a>
      </div>}
    </header>
  );
}
