import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Payment Plans in Bahria Town Karachi | Guide",
  description: "Payment plans in Bahria Town Karachi: booking, staged payments, what to get in writing, and verifying the exact plan before booking.",
  alternates: { canonical: "https://bahriatownkarachihouseforsale.com/payment-plans/" },
  openGraph: {
    title: "Payment Plans in Bahria Town Karachi | Guide",
    description: "Payment plans in Bahria Town Karachi: booking, staged payments, what to get in writing, and verifying the exact plan before booking.",
    url: "https://bahriatownkarachihouseforsale.com/payment-plans/",
    type: "website",
  },
};

const intro = ["Some purchases in Bahria Town Karachi are offered with a payment plan: instead of paying the full amount at once, the buyer pays in stages over an agreed timetable. This page explains how such plans generally work, what to get in writing, and the checks that protect you.", "This page gives generic process guidance only. It names no specific plan, no figures, no rates and no developer offer, because plans vary and any specific terms must be verified in writing for the property and transaction you are considering, before booking."];

const sections = [
    { h: "How staged payment plans generally work", paras: ["A staged plan typically begins with a booking step that reserves the property, followed by payments tied to agreed stages or dates, and a final stage linked to transfer or completion. The number of stages, the timetable and what each stage is tied to all vary by plan and property.", "Because terms vary, never assume one plan matches another. Ask for the full schedule in writing, including what is due at each stage, what each payment is tied to, and what happens at transfer or completion, before you agree anything."] },
    { h: "What to get in writing before booking", paras: ["Before booking, get the full payment schedule, the total amount, the timetable, the milestones each payment is tied to, and the transfer or completion step, all in writing. Confirm what is included, what charges apply separately, and what happens if a stage is delayed or a term changes.", "Also confirm the cancellation and refund position in writing, including any conditions and timetables, and who to contact if anything goes wrong. Verbal assurances about payments are not a substitute for a written schedule you can check."], bullets: ["Full payment schedule and total amount", "Timetable and milestones each payment is tied to", "Transfer or completion step and what it requires", "Cancellation and refund position, in writing"] },
    { h: "Risks and checks before you commit", paras: ["Staged plans carry risks worth weighing: timetables can slip, terms can change, and a plan that looks affordable stage by stage can still strain a budget in total. Check the total amount against your full budget, including costs beyond the plan itself.", "Verify the exact plan in writing before booking, and confirm the documents and transfer position with the relevant authority or your own adviser. If any term is missing, inconsistent or only verbal, pause and get it clarified in writing first."] },
    { h: "How to ask about current payment plans", paras: ["Payment plan availability and terms change often and vary by property, so this site publishes no specific plan terms. Call 0347 4825228 or message us on WhatsApp with the property type you have in mind, and we will discuss the general position honestly and what to verify in writing."] },
];

const faqs = [
    { q: "What is a payment plan in Bahria Town Karachi?", a: "A payment plan lets a buyer pay in stages over an agreed timetable instead of paying the full amount at once. Plans typically begin with a booking step, continue with staged payments, and end with a final stage linked to transfer or completion." },
    { q: "Do all payment plans work the same way?", a: "No, the number of stages, the timetable and what each payment is tied to all vary by plan and property. Never assume one plan matches another: ask for the full schedule in writing for the specific property and transaction you are considering." },
    { q: "What should I get in writing before booking?", a: "Get the full payment schedule, total amount, timetable, milestones each payment is tied to, transfer or completion step, separate charges, and the cancellation and refund position, all in writing. Verbal assurances are not a substitute for a written schedule. Call 0347 4825228 or message us on WhatsApp for current availability." },
    { q: "What are the risks of a payment plan?", a: "Timetables can slip, terms can change, and a plan that looks affordable stage by stage can still strain a budget in total. Verify the exact plan in writing before booking, and confirm documents and transfer with the relevant authority or your adviser." },
    { q: "How do I ask about a current payment plan?", a: "Call 0347 4825228 or message us on WhatsApp with the property type you have in mind. We will discuss the general position honestly, because plan terms vary by property and change often, and specific terms must be verified in writing." },
];

const related = [
    { href: "/houses-for-sale/", label: "Houses for sale in Bahria Town Karachi" },
    { href: "/plots-for-sale/", label: "Plots for sale in Bahria Town Karachi" },
    { href: "/buying-guide/", label: "How to buy a house in Bahria Town Karachi" },
    { href: "/guides/documents-transfer-checklist/", label: "Documents and transfer checklist" },
    { href: "/contact/", label: "Contact us about payment plans" },
];

const crumbs = [{ name: "Home", path: "/" }, { name: "Payment Plans in Bahria Town Karachi", path: "/payment-plans/" }];

export default function Page() {
  return (
    <PageShell
      path="/payment-plans/"
      crumbs={crumbs}
      h1="Payment Plans in Bahria Town Karachi"
      intro={intro}
      sections={sections}
      faqs={faqs}
      related={related}
    >
    </PageShell>
  );
}
