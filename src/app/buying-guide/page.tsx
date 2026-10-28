import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "How to Buy a House in Bahria Town Karachi",
  description: "Step-by-step guide to buying a house, villa or apartment in Bahria Town Karachi: budget, shortlist, viewing, documents, agreement and transfer.",
  alternates: { canonical: "https://bahriatownkarachihouseforsale.com/buying-guide/" },
  openGraph: {
    title: "How to Buy a House in Bahria Town Karachi",
    description: "Step-by-step guide to buying a house, villa or apartment in Bahria Town Karachi: budget, shortlist, viewing, documents, agreement and transfer.",
    url: "https://bahriatownkarachihouseforsale.com/buying-guide/",
    type: "website",
  },
};

const intro = ["Buying a home in Bahria Town Karachi follows a clear sequence, and each step protects the next. This guide walks through the sequence in plain language, from fixing your budget to completing the transfer, so first-time buyers and returning buyers alike can follow it without jargon.", "The single most important habit is verification. Check the home in person, check the documents carefully, and confirm anything unclear with the relevant authority or your own adviser before payment. A careful purchase takes a little longer and avoids far larger problems later."];

const sections = [
    { h: "Step 1: Fix your budget and property type", paras: ["Start with what you can afford, including purchase costs, likely repairs, furnishing, and running costs after you move in. Then choose a property type that fits: house, villa, or apartment or flat. Our villa-versus-apartment guide and first-time buyer guide can help if you are torn between types.", "Tell us your budget range in words and your property type when you call or message us. We can then talk honestly about what that range currently covers, rather than discussing homes that were never within reach."] },
    { h: "Step 2: Shortlist and visit in person", paras: ["Shortlist a small number of homes that match your budget, bedroom count and priorities, then visit each one in person. Use our viewing checklist on every visit, and visit a shortlisted home more than once if you can, including at a different time of day.", "Take notes and photographs where permitted, and compare homes on condition, layout, light, parking, street and surroundings, not on first impressions alone. A home that photographs well can disappoint in person, and a plain-looking home can prove excellent on a careful visit."] },
    { h: "Step 3: Check the documents", paras: ["Before agreeing anything, ask for the ownership and transfer documents and confirm that the seller has the right to sell, that the documents match the property you viewed, and that nothing material is outstanding. Our documents and transfer checklist explains the usual papers and checks.", "If any document is missing, inconsistent or unclear, pause and verify it with the relevant authority or your own adviser. Never pay in full against incomplete paperwork, and keep copies of everything you sign and receive."] },
    { h: "Step 4: Agree terms and complete the transfer", paras: ["Once you are satisfied with the home and the documents, agree the price, what is included, payment stages and a realistic timetable, and record the agreement in writing. Confirm each payment stage against a document or transfer milestone, not against a verbal promise.", "Complete the transfer through the proper channel, confirm the transfer is recorded in your name, and keep the full paper trail. After completion, arrange utilities, locks, and any immediate repairs, and keep your documents somewhere safe."], bullets: ["Agree price, inclusions, payment stages and timetable in writing", "Tie payments to document and transfer milestones", "Confirm the transfer is recorded in your name"] },
];

const faqs = [
    { q: "How long does buying a house in Bahria Town Karachi take?", a: "Timing varies with document readiness, seller circumstances and transfer processing. A purchase with complete, clear documents moves faster than one with missing papers, so check documents early and agree a realistic timetable in writing before payment. Read the related guide linked below for fuller detail on this topic." },
    { q: "Do I need an agent to buy in Bahria Town Karachi?", a: "You can buy directly, but guidance helps, especially on documents, transfer steps and fair pricing. We explain property types, price factors and checks on this site, and we discuss current availability by phone or WhatsApp when you ask. Take your time, compare homes side by side, and verify documents before payment." },
    { q: "What is the most common mistake buyers make?", a: "Rushing past document checks to secure a home that looks attractive is the most common and most costly mistake. Visit in person, verify ownership and transfer papers, confirm inclusions in writing, and only then agree payment stages. If anything here is unclear, ask us and we will explain it plainly." },
    { q: "Should I pay in full before the transfer is complete?", a: "No, tie payments to document and transfer milestones agreed in writing, and keep copies of everything you sign and receive. If a seller presses for full payment against incomplete paperwork, pause and seek independent advice first. Visit in person whenever possible, because a visit reveals what descriptions miss." },
    { q: "Are house sizes in Bahria Town Karachi listed in marla or square yards?", a: "Sizes are commonly listed in square yards, and sometimes in marla, but the exact size varies per property and must be confirmed on the property documents before viewing or agreeing anything. Do not rely on a size label alone, and verify anything unclear with the relevant authority or your own adviser before payment." },
    { q: "What should I do after the transfer is complete?", a: "Confirm the transfer is recorded in your name, arrange utilities and locks, plan any immediate repairs, and store your full paper trail safely. Keep the transfer record, payment proofs and agreement together for future reference. Keep copies of everything you sign and receive throughout the purchase." },
];

const related = [
    { href: "/guides/documents-transfer-checklist/", label: "Documents and transfer checklist" },
    { href: "/guides/viewing-checklist/", label: "Viewing checklist for Bahria Town Karachi homes" },
    { href: "/guides/first-time-buyer-guide/", label: "First-time buyer guide for Bahria Town Karachi" },
    { href: "/houses-for-sale/", label: "Houses for sale in Bahria Town Karachi" },
    { href: "/prices/", label: "What affects prices in Bahria Town Karachi" },
    { href: "/contact/", label: "Contact us for buying help" },
];

const crumbs = [{ name: "Home", path: "/" }, { name: "How to Buy a House in Bahria Town Karachi", path: "/buying-guide/" }];

export default function Page() {
  return (
    <PageShell
      path="/buying-guide/"
      crumbs={crumbs}
      h1="How to Buy a House in Bahria Town Karachi"
      intro={intro}
      sections={sections}
      faqs={faqs}
      related={related}
    >
    </PageShell>
  );
}
