import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "About Us | Bahria Town Karachi House For Sale",
  description: "About Bahria Town Karachi House For Sale: a buying guide for houses, villas, apartments and flats, with help by phone or WhatsApp, open 24 hours.",
  alternates: { canonical: "https://bahriatownkarachihouseforsale.com/about/" },
  openGraph: {
    title: "About Us | Bahria Town Karachi House For Sale",
    description: "About Bahria Town Karachi House For Sale: a buying guide for houses, villas, apartments and flats, with help by phone or WhatsApp, open 24 hours.",
    url: "https://bahriatownkarachihouseforsale.com/about/",
    type: "website",
  },
};

const intro = ["Bahria Town Karachi House For Sale is a buying guide for homes in Bahria Town Karachi, Pakistan. We explain houses, villas, apartments and flats in plain language, along with price factors, location guidance, buying steps, documents checks and viewing checklists, so buyers can decide with clear information.", "We do not publish individual property listings, asking prices, availability, or photographs of specific homes. Availability and prices change often, and printed listings would mislead buyers quickly. Instead, we give the current position by phone or WhatsApp when you tell us the property type and bedroom count you want."];

const sections = [
    { h: "What this site is for", paras: ["This site exists to help buyers before they commit. A home purchase is one of the largest decisions a household makes, and it deserves clear guidance on property types, price factors, documents and transfer steps, written for buyers rather than for search engines.", "Every guide on this site follows the same honesty rule: no invented listings, no printed price figures, no claims we cannot support, and a clear note wherever you should verify details with the relevant authority or your own adviser before purchase."] },
    { h: "How we help buyers", paras: ["Buyers can read the guides at their own pace, then call or message us to discuss the property type they want. We talk through current availability and prices honestly, explain what sits behind a quoted price, and point buyers to the viewing and documents checklists that protect them.", "We are open 24 hours, so buyers in different time zones can reach us when it suits them. Call 0347 4825228 or +92 347 4825228, message us on WhatsApp, or use the contact form, which opens WhatsApp with your message prefilled."] },
    { h: "What we will not do", paras: ["We will not present a guide page as a listing, quote a price figure that will go out of date, or describe a form that opens WhatsApp as an email form. We will not claim experience, results or credentials that are not verified, and we will not ask you to pay against incomplete paperwork.", "If we do not know the current position on a property type, we will say so and find out, rather than guessing. That honesty is the whole point of this site, and it applies to every page and every conversation."] },
];

const faqs = [
    { q: "What is Bahria Town Karachi House For Sale?", a: "It is a buying guide for houses, villas, apartments and flats in Bahria Town Karachi, Pakistan. It explains property types, price factors, location, buying steps, documents and viewing checks, and gives current availability by phone or WhatsApp. We are open 24 hours and happy to discuss your situation honestly." },
    { q: "Do you sell houses directly?", a: "We provide buying guidance and discuss current availability and prices by phone or WhatsApp. Any purchase itself follows its own written agreement between buyer and seller, with documents and transfer verified through the proper channel before payment. Read the related guide linked below for fuller detail on this topic." },
    { q: "Why do you not publish listings or prices?", a: "Availability and prices change often, so printed listings and figures would quickly mislead buyers. We explain property types and price factors on this site and give the current position honestly when you call or message us. Take your time, compare homes side by side, and verify documents before payment." },
    { q: "How can I contact you?", a: "Call 0347 4825228 or +92 347 4825228, message us on WhatsApp, or use the contact form, which opens WhatsApp with your message prefilled. We are open 24 hours, and we respond to buying questions about Bahria Town Karachi. If anything here is unclear, ask us and we will explain it plainly." },
    { q: "Where are you located?", a: "Our coverage is Bahria Town Karachi, in Karachi, Sindh, Pakistan. We describe our location at community level only, and buyers should arrange viewings and document checks for the specific home they are considering. Visit in person whenever possible, because a visit reveals what descriptions miss." },
];

const related = [
    { href: "/houses-for-sale/", label: "Houses for sale in Bahria Town Karachi" },
    { href: "/buying-guide/", label: "How to buy a house in Bahria Town Karachi" },
    { href: "/real-estate/", label: "Our real estate services" },
    { href: "/contact/", label: "Contact us" },
    { href: "/faqs/", label: "Frequently asked questions" },
];

const crumbs = [{ name: "Home", path: "/" }, { name: "About Bahria Town Karachi House For Sale", path: "/about/" }];

export default function Page() {
  return (
    <PageShell
      path="/about/"
      crumbs={crumbs}
      h1="About Bahria Town Karachi House For Sale"
      intro={intro}
      sections={sections}
      faqs={faqs}
      related={related}
    >
    </PageShell>
  );
}
