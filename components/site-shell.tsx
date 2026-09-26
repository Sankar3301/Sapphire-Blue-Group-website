'use client'

import { ArrowUpRight, Menu, X } from 'lucide-react'
import { useState } from 'react'

export function SiteShell({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  const links = [['About', '/about'], ['Industries', '/industries'], ['Services', '/services'], ['Careers', '/careers'], ['Contact', '/contact']]
  return <main className="min-h-screen overflow-hidden bg-[#f5f3ed] text-[#081a33]">
    <header className="relative z-30 mx-auto flex h-16 max-w-7xl items-center justify-between px-6 py-3 lg:h-[4.25rem] lg:px-10">
      <a href="/" className="brand-lockup inline-flex items-center" aria-label="Sapphire Blue Group home"><img src="/sapphire-blue-group-logo-light.png" alt="Sapphire Blue Group" className="brand-logo" /></a>
      <nav className="hidden items-center gap-8 text-[11px] font-medium uppercase tracking-[0.2em] text-[#4d5a52] md:flex" aria-label="Primary navigation">{links.map(([label, href]) => <a key={href} href={href} className="transition-colors hover:text-[#2d5fa8]">{label}</a>)}</nav>
      <a href="/contact" className="hidden rounded-full bg-[#081a33] px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#f5f3ed] transition-transform hover:-translate-y-0.5 md:block">Start a conversation</a>
      <button className="md:hidden" aria-label={open ? 'Close navigation' : 'Open navigation'} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
    </header>
    {open && <nav className="mx-6 flex flex-col gap-5 border-t border-[#c8c9bd] py-6 text-sm uppercase tracking-[0.18em] md:hidden">{links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}</nav>}
    {children}
    <footer className="bg-[#081a33] px-6 py-12 text-[#d6ddd2] lg:px-10"><div className="mx-auto flex max-w-7xl flex-col gap-10 md:flex-row md:items-end md:justify-between"><div><a href="/" className="brand-lockup inline-flex items-center text-[#f5f3ed]"><img src="/sapphire-blue-group-logo.png" alt="Sapphire Blue Group" className="brand-logo brand-logo-footer" /></a><p className="mt-5 max-w-xs text-xs leading-5 text-[#a9b4a8]">Sapphire Blue Group — strategic technology, transformation, and intelligent systems.</p></div><div className="text-xs leading-6 text-[#a9b4a8]"><p className="uppercase tracking-[0.16em] text-[#69a7ff]">Contact</p><p className="mt-2">hello@sapphirebluegroup.co.za<br />Phone details coming soon</p></div><p className="text-xs text-[#7f8c80]">© {new Date().getFullYear()} Sapphire Blue Group (Pty) Ltd.</p></div></footer>
  </main>
}

export function PageIntro({ eyebrow, title, body }: { eyebrow: string; title: string; body: string }) {
  return <section className="bg-[#081a33] px-6 py-24 text-[#f5f3ed] lg:px-10 lg:py-32"><div className="page-reveal mx-auto max-w-7xl"><p className="eyebrow text-[#69a7ff]">{eyebrow}</p><h1 className="mt-5 max-w-4xl font-serif text-6xl leading-[.94] tracking-[-0.06em] sm:text-8xl">{title}</h1><p className="mt-8 max-w-2xl text-lg leading-8 text-[#c8d0c8]">{body}</p></div></section>
}

export function CTA() { return <section className="bg-[#69a7ff] px-6 py-20 text-[#081a33] lg:px-10"><div className="page-reveal mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-end"><h2 className="max-w-2xl font-serif text-5xl leading-none tracking-[-0.05em] sm:text-7xl">Ready to make the next move?</h2><a href="/contact" className="inline-flex items-center gap-3 border-b border-[#081a33] pb-3 text-sm font-semibold uppercase tracking-[0.14em]">Get free consultation <ArrowUpRight /></a></div></section> }
