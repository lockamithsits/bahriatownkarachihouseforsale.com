import Link from "next/link";
import { SITE } from "@/lib/site";

const NAV: Array<{ href: string; label: string }> = [
  { href: "/houses-for-sale/", label: "Houses" },
  { href: "/villas-for-sale/", label: "Villas" },
  { href: "/apartments-and-flats-for-sale/", label: "Apartments & Flats" },
  { href: "/prices/", label: "Prices" },
  { href: "/location/", label: "Location" },
  { href: "/buying-guide/", label: "Buying Guide" },
  { href: "/real-estate/", label: "Services" },
  { href: "/faqs/", label: "FAQs" },
  { href: "/contact/", label: "Contact" },
];

export function Header() {
  return (
    <header className="bg-[#0b2e1f] text-white">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-6 gap-y-3 px-4 py-4 sm:px-6">
        <Link href="/" className="flex items-center gap-3" aria-label="Home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.svg" alt="" width="44" height="44" />
          <span className="leading-tight">
            <span className="block text-lg font-bold">Bahria Town Karachi</span>
            <span className="block text-xs font-semibold tracking-widest text-amber-300">
              HOUSE FOR SALE
            </span>
          </span>
        </Link>
        <nav aria-label="Main" className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium">
          {NAV.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-amber-300">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="ml-auto flex gap-2">
          <a
            href={SITE.telHref}
            className="rounded-full bg-amber-400 px-4 py-2 text-sm font-bold text-slate-950 hover:bg-amber-300"
          >
            Call {SITE.telLocal}
          </a>
          <a
            href={SITE.whatsapp}
            className="rounded-full bg-emerald-600 px-4 py-2 text-sm font-bold text-white hover:bg-emerald-500"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
