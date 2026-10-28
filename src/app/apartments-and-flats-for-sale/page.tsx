import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Apartments and Flats for Sale | Bahria Town Karachi",
  description: "Guide to buying an apartment or flat in Bahria Town Karachi: layouts, building facilities, charges to check, and how to ask about availability.",
  alternates: { canonical: "https://bahriatownkarachihouseforsale.com/apartments-and-flats-for-sale/" },
  openGraph: {
    title: "Apartments and Flats for Sale | Bahria Town Karachi",
    description: "Guide to buying an apartment or flat in Bahria Town Karachi: layouts, building facilities, charges to check, and how to ask about availability.",
    url: "https://bahriatownkarachihouseforsale.com/apartments-and-flats-for-sale/",
    type: "website",
  },
};

const intro = ["In Pakistan, the words apartment and flat describe the same kind of home: a self-contained home within a residential building, usually on one floor, with shared entrances, stairs or lifts, and shared facilities. This page covers both words together, because splitting them would only repeat the same advice twice.", "Apartments and flats suit buyers who want a lower-maintenance home, a smaller household base, or a first step into the community without the upkeep of a standalone home. This page explains layouts, building matters to check, and the charges and documents that deserve attention."];

const sections = [
    { h: "Apartment and flat layouts", paras: ["Layouts range from compact homes for one or two people to larger family apartments with several bedrooms and separate living areas. Judge a layout by usable space and light, not by room count alone: a well-planned home with good storage often lives better than a larger home with wasted circulation space.", "Check the kitchen, bathrooms, balcony or outdoor area if one is included, and storage for everyday items. Visit at a time when you can judge natural light and noise from corridors, lifts and neighbouring homes."], bullets: ["Compact homes for smaller households", "Family apartments with separate living areas", "Homes with a balcony or outdoor area"] },
    { h: "Building facilities and shared areas", paras: ["Because an apartment sits within a building, the building matters as much as the home. Ask about lifts, parking, security arrangements, water supply, power backup if any, and the condition of shared areas such as entrances, stairs and corridors.", "A well-maintained building protects the value of every home in it. Look at shared areas on your viewing, and ask how maintenance is organised and who is responsible for repairs to shared parts of the building."], bullets: ["Lifts, parking and security arrangements", "Water supply and power arrangements", "Condition of shared entrances and corridors"] },
    { h: "Charges and documents to check", paras: ["Ask about any regular building or maintenance charges, what they cover, and whether any amounts are outstanding. Confirm the ownership and transfer documents for the apartment itself, and check that the documents match the home you viewed.", "If charges or documents are unclear, pause and verify them with the relevant authority or your own adviser before payment. Our documents checklist explains the usual papers in plain language."] },
    { h: "How to ask about current apartments and flats", paras: ["Apartment and flat availability changes often, so this site does not publish individual listings or asking prices. Call 0347 4825228 or message us on WhatsApp with the number of bedrooms you need, and we will discuss the current position honestly."] },
];

const faqs = [
    { q: "What is the difference between an apartment and a flat?", a: "In Pakistan the two words describe the same kind of home: a self-contained home within a residential building, usually on one floor. This site covers both words on one page, because separate pages would only repeat the same advice. If anything here is unclear, ask us and we will explain it plainly." },
    { q: "Who suits an apartment or flat in Bahria Town Karachi?", a: "Apartments and flats suit smaller households, buyers who want lower-maintenance living, and first-time buyers taking a first step into the community. They also suit buyers who prefer building facilities and shared security over the upkeep of a standalone home. Visit in person whenever possible, because a visit reveals what descriptions miss." },
    { q: "What should I check in the building, not just the home?", a: "Check lifts, parking, security arrangements, water supply, power arrangements, and the condition of shared entrances, stairs and corridors. A well-maintained building protects every home in it, so judge shared areas as carefully as the apartment itself. Keep copies of everything you sign and receive throughout the purchase." },
    { q: "What charges should I ask about before buying an apartment?", a: "Ask about regular building or maintenance charges, what they cover, and whether any amounts are outstanding. Confirm charges in writing where possible, and verify anything unclear with the relevant authority or your own adviser before payment. Tell us the property type and bedroom count you have in mind." },
    { q: "How many bedrooms do apartments and flats in Bahria Town Karachi offer?", a: "Apartments and flats in Bahria Town Karachi are commonly searched by bedroom count, including one, two and three-bedroom homes, and the right count depends on household size and how rooms are used. Count permanent occupants, guests, and any study or work room, then shortlist homes that meet that count without paying for rooms you will not use." },
    { q: "What is a penthouse in Bahria Town Karachi?", a: "A penthouse is a top-floor apartment variant, usually larger than a standard apartment in the same building, with more living space and often outdoor space. Treat it like any apartment on a viewing: check layout, condition, lifts, parking, building charges and shared areas, and verify ownership and transfer documents before agreeing terms." },
    { q: "How do I find out which apartments are available now?", a: "Call 0347 4825228 or message us on WhatsApp with the number of bedrooms you need. We will discuss current availability honestly, because listings and prices change often and printed pages would quickly go out of date. A second visit often reveals what a first visit misses, so do not rush." },
];

const related = [
    { href: "/houses-for-sale/", label: "Houses for sale in Bahria Town Karachi" },
    { href: "/villas-for-sale/", label: "Villas for sale in Bahria Town Karachi" },
    { href: "/guides/villa-vs-apartment/", label: "Villa or apartment: which suits you" },
    { href: "/guides/first-time-buyer-guide/", label: "First-time buyer guide for Bahria Town Karachi" },
    { href: "/prices/", label: "What affects prices in Bahria Town Karachi" },
    { href: "/buying-guide/", label: "How to buy a house in Bahria Town Karachi" },
];

const crumbs = [{ name: "Home", path: "/" }, { name: "Apartments and Flats for Sale in Bahria Town Karachi", path: "/apartments-and-flats-for-sale/" }];

export default function Page() {
  return (
    <PageShell
      path="/apartments-and-flats-for-sale/"
      crumbs={crumbs}
      h1="Apartments and Flats for Sale in Bahria Town Karachi"
      intro={intro}
      sections={sections}
      faqs={faqs}
      related={related}
    >
    </PageShell>
  );
}
