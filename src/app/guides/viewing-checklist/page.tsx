import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Viewing Checklist | Bahria Town Karachi",
  description: "Viewing checklist for Bahria Town Karachi homes: structure, fittings, water, parking, street and documents questions to take on every visit.",
  alternates: { canonical: "https://bahriatownkarachihouseforsale.com/guides/viewing-checklist/" },
  openGraph: {
    title: "Viewing Checklist | Bahria Town Karachi",
    description: "Viewing checklist for Bahria Town Karachi homes: structure, fittings, water, parking, street and documents questions to take on every visit.",
    url: "https://bahriatownkarachihouseforsale.com/guides/viewing-checklist/",
    type: "website",
  },
};

const intro = ["Take this checklist on every viewing, for any house, villa, apartment or flat. It covers the home, the building or street, and the questions worth asking the seller, in the order you will meet them on a visit.", "Visit a shortlisted home more than once if you can, including at a different time of day. Note what you find in writing, take photographs where permitted, and compare homes on the same checklist rather than on first impressions alone."];

const sections = [
    { h: "Inside the home", paras: ["Walk every room, including kitchen, bathrooms and storage areas. Check walls and ceilings for damp or cracks, floors for damage, doors and windows for fit and function, and fittings for condition and completeness. Check water pressure, drainage, electrical fittings, ventilation and natural light.", "Test what you can: taps, lights, doors, windows and storage. Ask about the age of fittings and any recent work, and note anything that will need repair soon, because repair costs belong in your budget, not as a surprise after purchase."], bullets: ["Damp, cracks, and the condition of walls and floors", "Water pressure, drainage and electrical fittings", "Ventilation, natural light and storage", "Doors, windows and the condition of fittings"] },
    { h: "Outside, building and street", paras: ["For a house or villa, check the plot boundary, outdoor space, parking, exterior condition and the street. For an apartment or flat, check shared entrances, stairs, lifts, corridors and parking, and the overall condition of the building.", "Note noise, traffic, parking availability and the condition of nearby shared areas. Visit at a different time if you can, because a quiet street at midday can feel different in the evening, and parking that looks ample once may be tight daily."], bullets: ["Plot boundary, outdoor space and parking", "Exterior and shared-area condition", "Noise, traffic and street condition"] },
    { h: "Questions to ask the seller", paras: ["Ask about maintenance history, recent work, and work the home will need soon. Ask what is included in the price, including fittings, appliances and furniture, and confirm the answer in writing before agreeing anything.", "Ask about ownership and transfer documents, building charges for apartments, and whether any amounts are outstanding. If any answer is vague or inconsistent, note it and verify it with the relevant authority or your own adviser before payment."], bullets: ["Maintenance history and work needed soon", "What is included: fittings, appliances, furniture", "Documents, charges and outstanding amounts"] },
    { h: "After the viewing", paras: ["Write up your notes while the visit is fresh, compare the home against your shortlist on the same checklist, and list the repairs or questions each home raises. A home that scores well on condition, layout, light, parking and documents deserves a second visit.", "Before agreeing anything, work through the documents checklist and confirm inclusions and payment stages in writing. A careful second visit and a documents check cost little time and prevent the costliest buying mistakes."] },
];

const faqs = [
    { q: "What should I check first on a viewing in Bahria Town Karachi?", a: "Check every room for damp, cracks and fitting condition, then water pressure, drainage, electrical work, ventilation and light. Outside, check parking, outdoor or shared areas, the street, and noise, and note anything needing repair for your budget. A second visit often reveals what a first visit misses, so do not rush." },
    { q: "Should I visit a home more than once?", a: "Yes, visit any shortlisted home more than once where possible, including at a different time of day. Noise, light, parking and street conditions can differ across the day, and a second visit often reveals what a first visit misses. Compare condition, layout, light, parking and surroundings before deciding." },
    { q: "What should I ask the seller on a viewing?", a: "Ask about maintenance history, recent work, work needed soon, what is included in the price, and ownership and transfer documents. Confirm inclusions in writing, and verify vague or inconsistent answers with the relevant authority before payment. Call 0347 4825228 or message us on WhatsApp for current availability." },
    { q: "Should I take photographs on a viewing?", a: "Take notes and photographs where permitted, and write up your notes while the visit is fresh. Comparing homes on the same written checklist is far more reliable than comparing first impressions or memory alone. We are open 24 hours and happy to discuss your situation honestly." },
    { q: "What should I do after a viewing I liked?", a: "Compare the home against your shortlist, list repairs and questions it raises, and work through the documents checklist before agreeing anything. Confirm inclusions and payment stages in writing, tied to document and transfer milestones. Read the related guide linked below for fuller detail on this topic." },
];

const related = [
    { href: "/houses-for-sale/", label: "Houses for sale in Bahria Town Karachi" },
    { href: "/villas-for-sale/", label: "Villas for sale in Bahria Town Karachi" },
    { href: "/apartments-and-flats-for-sale/", label: "Apartments and flats for sale in Bahria Town Karachi" },
    { href: "/guides/documents-transfer-checklist/", label: "Documents and transfer checklist" },
    { href: "/buying-guide/", label: "How to buy a house in Bahria Town Karachi" },
];

const crumbs = [{ name: "Home", path: "/" }, { name: "Viewing Checklist for Bahria Town Karachi Homes", path: "/guides/viewing-checklist/" }];

export default function Page() {
  return (
    <PageShell
      path="/guides/viewing-checklist/"
      crumbs={crumbs}
      h1="Viewing Checklist for Bahria Town Karachi Homes"
      intro={intro}
      sections={sections}
      faqs={faqs}
      related={related}
    >
    </PageShell>
  );
}
