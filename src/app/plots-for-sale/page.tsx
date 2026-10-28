import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Plots for Sale in Bahria Town Karachi | Guide",
  description: "Guide to buying a plot in Bahria Town Karachi: plots versus built homes, what to check, building considerations, and how to ask about availability.",
  alternates: { canonical: "https://bahriatownkarachihouseforsale.com/plots-for-sale/" },
  openGraph: {
    title: "Plots for Sale in Bahria Town Karachi | Guide",
    description: "Guide to buying a plot in Bahria Town Karachi: plots versus built homes, what to check, building considerations, and how to ask about availability.",
    url: "https://bahriatownkarachihouseforsale.com/plots-for-sale/",
    type: "website",
  },
};

const intro = ["A plot in Bahria Town Karachi is land bought for building a home on, rather than a finished home. Plots suit buyers who want to choose their own layout, build in stages to a plan they control, or hold land while they decide what to build.", "Buying land needs different checks from buying a finished home, because there is no building to inspect. This page explains plots versus built homes, the documents and boundary checks that matter, and the building considerations to weigh before you commit."];

const sections = [
    { h: "Plots versus built homes", paras: ["A plot gives you control over layout, rooms and finish, but it also means a building project after purchase, with its own timetable, costs and approvals. A built home costs more upfront in most cases but is ready to live in, with condition you can inspect directly.", "Choose from your timetable, budget and appetite for a building project. If you want to move soon, a built home usually fits better. If you want a home designed around your household and can manage a build, a plot may suit you better."], bullets: ["Control over layout, rooms and finish", "A building project after purchase, with its own timetable and costs", "A built home is ready to live in and can be inspected directly"] },
    { h: "Documents and boundaries to check", paras: ["Ask for the ownership and transfer documents for the plot, and confirm that the seller has the right to sell and that the documents match the plot you are considering. Confirm the plot boundaries on the ground where possible, and check how boundaries are marked and recorded.", "Ask about the development status of the surrounding area, access to the plot, and the availability of utilities such as water, electricity and drainage. If any document or boundary detail is unclear, pause and verify it with the relevant authority or your own adviser before payment."] },
    { h: "Building considerations after purchase", paras: ["After buying a plot, building involves design, approvals, construction and connection of utilities, each with its own timetable and cost. Before you buy, think honestly about whether you have the time, budget and advice to manage a build, or whether a built home would serve you better.", "Talk to qualified professionals about design and approvals before committing, and keep every approval and document with your purchase papers. A plot bought without a realistic building plan can sit unused while costs and plans change."] },
    { h: "How to ask about current plots", paras: ["Plot availability changes often, so this site does not publish individual plot listings or asking prices. Call 0347 4825228 or message us on WhatsApp with the kind of plot you have in mind, and we will discuss the current position honestly, including what documents to check first."] },
];

const faqs = [
    { q: "What is a plot in Bahria Town Karachi?", a: "A plot is land bought for building a home on, rather than a finished home. Plots suit buyers who want control over layout, rooms and finish, or who want to hold land while they decide what to build and when." },
    { q: "Should I buy a plot or a built home?", a: "Buy a plot if you want a home designed around your household and can manage a building project with its timetable and costs. Buy a built home if you want to move soon and prefer a home whose condition you can inspect directly." },
    { q: "What should I check before buying a plot?", a: "Ask for ownership and transfer papers, confirm the seller has the right to sell, and check boundaries on the ground where possible. Ask about access, development status and utilities, and verify anything unclear with the relevant authority before payment. Take your time, compare homes side by side, and verify documents before payment." },
    { q: "What costs follow buying a plot?", a: "After purchase, building involves design, approvals, construction and utility connections, each with its own timetable and cost. Budget honestly for the full build before buying, and keep every approval with your purchase papers. If anything here is unclear, ask us and we will explain it plainly." },
    { q: "How do I ask about current plots?", a: "Call 0347 4825228 or message us on WhatsApp with the kind of plot you have in mind. We will discuss current availability honestly, because listings and prices change often and printed pages would quickly go out of date. Visit in person whenever possible, because a visit reveals what descriptions miss." },
];

const related = [
    { href: "/houses-for-sale/", label: "Houses for sale in Bahria Town Karachi" },
    { href: "/precincts/", label: "Precincts hub guide for Bahria Town Karachi" },
    { href: "/payment-plans/", label: "Payment plans in Bahria Town Karachi" },
    { href: "/buying-guide/", label: "How to buy a house in Bahria Town Karachi" },
    { href: "/location/", label: "Location guide for Bahria Town Karachi" },
];

const crumbs = [{ name: "Home", path: "/" }, { name: "Plots for Sale in Bahria Town Karachi", path: "/plots-for-sale/" }];

export default function Page() {
  return (
    <PageShell
      path="/plots-for-sale/"
      crumbs={crumbs}
      h1="Plots for Sale in Bahria Town Karachi"
      intro={intro}
      sections={sections}
      faqs={faqs}
      related={related}
    >
    </PageShell>
  );
}
