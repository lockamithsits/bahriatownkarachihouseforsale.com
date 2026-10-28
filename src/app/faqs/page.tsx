import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "FAQs | Bahria Town Karachi House For Sale",
  description: "FAQs about buying a house, villa, apartment or flat in Bahria Town Karachi: prices, documents, viewings, and how to contact us, open 24 hours.",
  alternates: { canonical: "https://bahriatownkarachihouseforsale.com/faqs/" },
  openGraph: {
    title: "FAQs | Bahria Town Karachi House For Sale",
    description: "FAQs about buying a house, villa, apartment or flat in Bahria Town Karachi: prices, documents, viewings, and how to contact us, open 24 hours.",
    url: "https://bahriatownkarachihouseforsale.com/faqs/",
    type: "website",
  },
};

const intro = ["These questions cover the topics buyers ask us most often about Bahria Town Karachi: property types, prices, documents, viewings and how to reach us. Each answer is written in plain language and points to the guide page with fuller detail where one exists.", "If your question is not answered here, call 0347 4825228 or message us on WhatsApp. We are open 24 hours, and we will answer honestly, including telling you plainly when we do not know something and need to find out."];

const sections = [
    { h: "Buying in general", paras: ["Start with the buying guide, which walks through budget, shortlist, viewing, documents, agreement and transfer in order. Then read the guide that matches your situation, whether you are a first-time buyer, weighing a villa against an apartment, or comparing a home to live in against one held as an investment.", "The habit that protects every buyer is verification: visit in person, check documents carefully, confirm inclusions in writing, and tie payments to document and transfer milestones."] },
    { h: "Prices and availability", paras: ["Prices and availability change often, so this site explains price factors rather than printing figures. For the current position, call or message us with the property type and bedroom count you want, and we will discuss it honestly with no obligation.", "When you hear a quoted price, compare similar homes on type, size, condition, finish and position, and confirm exactly what is included before you agree anything."] },
];

const faqs = [
    { q: "What is Bahria Town Karachi?", a: "Bahria Town Karachi is a large gated residential community on the M-9 Motorway corridor near Karachi, Pakistan. It contains houses, villas, apartments and flats, along with parks, schools, healthcare facilities, shopping areas and places of worship for residents. Call 0347 4825228 or message us on WhatsApp for current availability." },
    { q: "Do you publish property listings on this site?", a: "No, this site does not publish individual listings, asking prices, availability, or photographs of specific homes. Availability changes often, so we explain property types and buying steps here and give the current position by phone or WhatsApp when you ask." },
    { q: "How do I find out current prices?", a: "Call 0347 4825228 or message us on WhatsApp with the property type and number of bedrooms you have in mind. We will discuss current prices for that type honestly, because printed figures would go out of date quickly and could mislead you." },
    { q: "What documents should I check before buying?", a: "Ask for ownership and transfer papers, confirm the seller has the right to sell, and check that the documents match the property you viewed. Our documents checklist explains the usual papers, and you should verify anything unclear with the relevant authority." },
    { q: "How do I contact you?", a: "Call 0347 4825228 or +92 347 4825228, message us on WhatsApp, or use the contact form, which opens WhatsApp with your message prefilled. We are open 24 hours, and every conversation starts with the property type you have in mind." },
];

const related = [
    { href: "/houses-for-sale/", label: "Houses for sale in Bahria Town Karachi" },
    { href: "/buying-guide/", label: "How to buy a house in Bahria Town Karachi" },
    { href: "/prices/", label: "What affects prices in Bahria Town Karachi" },
    { href: "/contact/", label: "Contact us" },
    { href: "/guides/documents-transfer-checklist/", label: "Documents and transfer checklist" },
];

const crumbs = [{ name: "Home", path: "/" }, { name: "Frequently Asked Questions", path: "/faqs/" }];

export default function Page() {
  return (
    <PageShell
      path="/faqs/"
      crumbs={crumbs}
      h1="Frequently Asked Questions"
      intro={intro}
      sections={sections}
      faqs={faqs}
      related={related}
    >
    </PageShell>
  );
}
