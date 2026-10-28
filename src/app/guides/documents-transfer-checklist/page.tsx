import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Documents Checklist | Bahria Town Karachi",
  description: "Documents and transfer checklist for buying in Bahria Town Karachi: papers to ask for, checks to make, and when to pause and verify.",
  alternates: { canonical: "https://bahriatownkarachihouseforsale.com/guides/documents-transfer-checklist/" },
  openGraph: {
    title: "Documents Checklist | Bahria Town Karachi",
    description: "Documents and transfer checklist for buying in Bahria Town Karachi: papers to ask for, checks to make, and when to pause and verify.",
    url: "https://bahriatownkarachihouseforsale.com/guides/documents-transfer-checklist/",
    type: "website",
  },
};

const intro = ["Documents decide whether a purchase is safe, so this checklist comes before payment, not after it. Work through it for any house, villa, apartment or flat you are considering, and keep copies of everything you sign and receive.", "This checklist is general guidance, not legal advice. Paperwork varies by property and transaction, so verify anything unclear with the relevant authority or your own adviser before payment. If a document is missing or inconsistent, pause: a delayed purchase is always cheaper than an unsafe one."];

const sections = [
    { h: "Papers to ask for", paras: ["Ask for the ownership papers for the property, the transfer papers that show how ownership passes, and any clearance or no-objection papers that apply to the transaction. Ask the seller to show identification that matches the ownership papers, and confirm that the seller has the right to sell.", "For apartments and flats, also ask about building charges and whether any amounts are outstanding. For any property, ask about utility accounts and whether bills are settled up to the transfer date."], bullets: ["Ownership papers for the property", "Transfer papers showing how ownership passes", "Clearance or no-objection papers that apply", "Seller identification matching the ownership papers", "Building charges position for apartments and flats"] },
    { h: "Checks to make on every document", paras: ["Check that names, property descriptions and sizes on the documents match the home you viewed. Check dates, signatures and stamps where they appear, and look for corrections, overwriting or pages that do not belong. Compare every document against the others, not in isolation.", "Confirm that the transfer route is the proper channel for the property type, and that the transfer will be recorded in your name. Ask what happens at each payment stage and which document or milestone each payment is tied to."] },
    { h: "When to pause and verify", paras: ["Pause if any document is missing, if names or property details do not match, if the seller cannot show the right to sell, or if you are pressed to pay in full before the transfer is recorded. Each of these is a reason to verify with the relevant authority or your own adviser, not a reason to hurry.", "Keep a written record of what you asked for, what you received, and what remains outstanding. A clear paper trail protects you if any question arises later, and it makes independent advice faster and cheaper to obtain."] },
    { h: "After the transfer", paras: ["Once the transfer is complete, confirm it is recorded in your name and collect the full set of transfer papers. Store the agreement, payment proofs, transfer record and prior ownership papers together somewhere safe, and arrange utilities and locks promptly.", "If anything about the completed transfer is unclear, raise it at once with the relevant authority or your adviser, while the transaction and its paperwork are still fresh."] },
];

const faqs = [
    { q: "Which documents matter most when buying in Bahria Town Karachi?", a: "Ownership papers, transfer papers, and any clearance or no-objection papers that apply matter most, along with seller identification matching the ownership papers. Confirm the seller has the right to sell and that documents match the home you viewed. We are open 24 hours and happy to discuss your situation honestly." },
    { q: "How do I check that documents match the property?", a: "Compare names, property descriptions and sizes across every document and against the home you viewed. Look for corrections, overwriting or pages that do not belong, and verify anything inconsistent with the relevant authority or your own adviser before payment. Read the related guide linked below for fuller detail on this topic." },
    { q: "What should I do if a document is missing?", a: "Pause and ask for it, and do not pay in full against incomplete paperwork. Missing documents are a reason to verify with the relevant authority or your own adviser, not a reason to hurry, because an unsafe purchase costs far more than a delay." },
    { q: "Should payments be tied to documents?", a: "Yes, agree payment stages in writing and tie each stage to a document or transfer milestone. Keep copies of everything you sign and receive, and confirm the transfer is recorded in your name before treating the purchase as complete. Take your time, compare homes side by side, and verify documents before payment." },
    { q: "Is this checklist legal advice?", a: "No, this checklist is general guidance only. Paperwork varies by property and transaction, so verify anything unclear with the relevant authority or your own adviser before payment, and seek independent advice for your specific purchase. If anything here is unclear, ask us and we will explain it plainly." },
];

const related = [
    { href: "/buying-guide/", label: "How to buy a house in Bahria Town Karachi" },
    { href: "/guides/viewing-checklist/", label: "Viewing checklist for Bahria Town Karachi homes" },
    { href: "/houses-for-sale/", label: "Houses for sale in Bahria Town Karachi" },
    { href: "/contact/", label: "Contact us for documents help" },
];

const crumbs = [{ name: "Home", path: "/" }, { name: "Documents and Transfer Checklist for Bahria Town Karachi", path: "/guides/documents-transfer-checklist/" }];

export default function Page() {
  return (
    <PageShell
      path="/guides/documents-transfer-checklist/"
      crumbs={crumbs}
      h1="Documents and Transfer Checklist for Bahria Town Karachi"
      intro={intro}
      sections={sections}
      faqs={faqs}
      related={related}
    >
    </PageShell>
  );
}
