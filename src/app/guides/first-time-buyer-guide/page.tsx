import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "First-Time Buyer Guide | Bahria Town Karachi",
  description: "First-time buyer guide for Bahria Town Karachi: budget, property type, viewings, documents, and the mistakes to avoid on your first purchase.",
  alternates: { canonical: "https://bahriatownkarachihouseforsale.com/guides/first-time-buyer-guide/" },
  openGraph: {
    title: "First-Time Buyer Guide | Bahria Town Karachi",
    description: "First-time buyer guide for Bahria Town Karachi: budget, property type, viewings, documents, and the mistakes to avoid on your first purchase.",
    url: "https://bahriatownkarachihouseforsale.com/guides/first-time-buyer-guide/",
    type: "website",
  },
};

const intro = ["Buying your first home in Bahria Town Karachi is exciting, and it deserves a careful approach. This guide covers the decisions first-time buyers face most often: budget, property type, viewings, documents and timing, in the order you will meet them.", "The core advice is simple: decide what you can afford including running costs, choose a property type that fits your household, visit in person, verify documents before payment, and never rush past a check to secure a home that looks attractive."];

const sections = [
    { h: "Fix a realistic budget first", paras: ["Start with the full cost of owning, not just the purchase price. Include likely repairs, furnishing, moving costs, and monthly running costs such as utilities and maintenance. A budget that leaves room for upkeep protects you after the purchase, not just during it.", "If you need financing, explore your options early and confirm what you can borrow and on what terms before shortlisting. A clear budget range in words helps us discuss honestly what that range currently covers for each property type."] },
    { h: "Choose a property type that fits your life", paras: ["First-time buyers often weigh an apartment against a house or villa. Apartments usually mean lower upkeep and a simpler first purchase, while houses and villas offer more space and privacy with more responsibility. Our villa-versus-apartment guide compares the two honestly.", "Choose from household size, daily routine and how long you plan to stay. A home that fits your life for several years is a better first purchase than a larger home chosen for status or speculation."] },
    { h: "View carefully and check documents twice", paras: ["Visit every shortlisted home in person, take our viewing checklist, and visit a favourite more than once if you can. Check structure, fittings, water, drainage, parking and surroundings, and ask about maintenance history and any work the home will need soon.", "Then check documents with the same care. Ask for ownership and transfer papers, confirm the seller has the right to sell, and verify anything unclear with the relevant authority or your own adviser before payment."] },
    { h: "Mistakes first-time buyers should avoid", paras: ["The costliest mistakes are rushing past document checks, stretching a budget to the largest home available, and paying in full against incomplete paperwork. Each one is avoidable with a slower, written, milestone-based approach.", "Another common mistake is deciding from photographs or descriptions alone. Visit in person, compare homes side by side, and talk through your shortlist with us by phone or WhatsApp before agreeing anything."], bullets: ["Rushing past document checks", "Stretching to the largest home instead of the right home", "Paying in full against incomplete paperwork", "Deciding from photographs alone"] },
];

const faqs = [
    { q: "What should a first-time buyer do first in Bahria Town Karachi?", a: "Fix a realistic budget including running costs and likely repairs, then choose a property type that fits your household. After that, shortlist homes, visit in person, verify documents, and agree payment stages in writing tied to transfer milestones. We are open 24 hours and happy to discuss your situation honestly." },
    { q: "Is an apartment or a house better for a first-time buyer?", a: "Apartments usually mean lower upkeep and a simpler first purchase, while houses and villas offer more space and privacy with more responsibility. Choose from household size, daily routine and how long you plan to stay, not from status or speculation." },
    { q: "How much should I budget beyond the purchase price?", a: "Budget for likely repairs, furnishing, moving costs, and monthly running costs such as utilities and maintenance. A budget that leaves room for upkeep protects you after the purchase, and it helps us discuss honestly what your range currently covers. Read the related guide linked below for fuller detail on this topic." },
    { q: "What documents should a first-time buyer check?", a: "Ask for ownership and transfer papers, confirm the seller has the right to sell, and check that documents match the home you viewed. Our documents checklist explains the usual papers, and you should verify anything unclear with the relevant authority." },
    { q: "Who can I ask for first-time buyer help?", a: "Call 0347 4825228 or message us on WhatsApp and mention that you are a first-time buyer. We will talk through property types, current availability and the buying steps honestly, and point you to the guides that fit your situation. Take your time, compare homes side by side, and verify documents before payment." },
];

const related = [
    { href: "/buying-guide/", label: "How to buy a house in Bahria Town Karachi" },
    { href: "/apartments-and-flats-for-sale/", label: "Apartments and flats for sale in Bahria Town Karachi" },
    { href: "/houses-for-sale/", label: "Houses for sale in Bahria Town Karachi" },
    { href: "/guides/viewing-checklist/", label: "Viewing checklist for Bahria Town Karachi homes" },
    { href: "/guides/documents-transfer-checklist/", label: "Documents and transfer checklist" },
];

const crumbs = [{ name: "Home", path: "/" }, { name: "First-Time Buyer Guide for Bahria Town Karachi", path: "/guides/first-time-buyer-guide/" }];

export default function Page() {
  return (
    <PageShell
      path="/guides/first-time-buyer-guide/"
      crumbs={crumbs}
      h1="First-Time Buyer Guide for Bahria Town Karachi"
      intro={intro}
      sections={sections}
      faqs={faqs}
      related={related}
    >
    </PageShell>
  );
}
