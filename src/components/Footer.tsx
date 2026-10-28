import Link from "next/link";
import { SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-[#0b2e1f] pb-24 text-slate-200 md:pb-8">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:grid-cols-3 sm:px-6">
        <div>
          <p className="text-lg font-bold text-white">{SITE.name}</p>
          <p className="mt-2 text-sm leading-relaxed">
            Buying guidance for houses, villas, apartments and flats in {SITE.locality},
            {SITE.city}, {SITE.region}, Pakistan. Open 24 hours.
          </p>
        </div>
        <nav aria-label="Footer">
          <p className="font-bold text-white">Explore</p>
          <ul className="mt-2 space-y-1 text-sm">
            <li><Link href="/houses-for-sale/" className="hover:text-amber-300">Houses for sale</Link></li>
            <li><Link href="/villas-for-sale/" className="hover:text-amber-300">Villas for sale</Link></li>
            <li><Link href="/apartments-and-flats-for-sale/" className="hover:text-amber-300">Apartments and flats for sale</Link></li>
            <li><Link href="/prices/" className="hover:text-amber-300">Price factors</Link></li>
            <li><Link href="/plots-for-sale/" className="hover:text-amber-300">Plots for sale</Link></li>
            <li><Link href="/commercial-property/" className="hover:text-amber-300">Commercial property</Link></li>
            <li><Link href="/payment-plans/" className="hover:text-amber-300">Payment plans</Link></li>
            <li><Link href="/precincts/" className="hover:text-amber-300">Precincts hub guide</Link></li>
            <li><Link href="/buying-guide/" className="hover:text-amber-300">Buying guide</Link></li>
            <li><Link href="/faqs/" className="hover:text-amber-300">FAQs</Link></li>
          </ul>
        </nav>
        <div>
          <p className="font-bold text-white">Contact</p>
          <ul className="mt-2 space-y-1 text-sm">
            <li><a href={SITE.telHref} className="hover:text-amber-300">Call {SITE.telDisplay}</a></li>
            <li><a href={SITE.telHref} className="hover:text-amber-300">Call {SITE.telLocal}</a></li>
            <li><a href={SITE.whatsapp} className="hover:text-amber-300">WhatsApp us</a></li>
            <li><Link href="/contact/" className="hover:text-amber-300">Contact form (via WhatsApp)</Link></li>
            <li><Link href="/privacy-policy/" className="hover:text-amber-300">Privacy policy</Link></li>
            <li><Link href="/terms/" className="hover:text-amber-300">Terms</Link></li>
          </ul>
        </div>
      </div>
      <p className="mx-auto max-w-6xl px-4 text-xs leading-relaxed text-slate-400 sm:px-6">
        Availability and prices change often. Nothing on this site is a listing, an offer,
        or a price promise: please call or message us for the current position on any
        property type. Before any purchase, verify documents and transfer details with
        the relevant authority or your own adviser.
      </p>
    </footer>
  );
}
