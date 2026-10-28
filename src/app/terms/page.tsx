import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Terms | Bahria Town Karachi House For Sale",
  description: "Terms of use for Bahria Town Karachi House For Sale: guide content only, no listings, no price promises, verify documents before purchase.",
  alternates: { canonical: "https://bahriatownkarachihouseforsale.com/terms/" },
  openGraph: {
    title: "Terms | Bahria Town Karachi House For Sale",
    description: "Terms of use for Bahria Town Karachi House For Sale: guide content only, no listings, no price promises, verify documents before purchase.",
    url: "https://bahriatownkarachihouseforsale.com/terms/",
    type: "website",
  },
};

const intro = ["These terms explain what this website is and what it is not. This site is a buying guide for houses, villas, apartments and flats in Bahria Town Karachi. It is not a listings portal, not an offer to sell any specific home, and not a promise of any price or availability.", "By using this site you accept these terms. If you do not accept them, please do not use the site. These terms are general information, not legal advice, and they do not replace independent advice about any purchase you are considering."];

const sections = [
    { h: "Guide content only", paras: ["All content on this site is general buying guidance. Property types, price factors, location notes, buying steps, documents checklists and viewing checklists describe general considerations, not the condition, documents or price of any specific home.", "Availability and prices change often. Any discussion of current availability or prices happens by phone or WhatsApp, and even then it reflects the position at the time of the conversation, not a standing offer. Confirm the position again before you act on it."] },
    { h: "No price or availability promises", paras: ["Nothing on this site promises a price, a discount, availability, or a particular outcome for any buyer. Price factors are explained so you can judge quoted prices fairly, but only a written agreement for a specific home, with verified documents, creates obligations between buyer and seller.", "Do not treat any guide page as a listing. If a page and a conversation ever appear to disagree, the verified documents for the specific home, and the written agreement for that home, govern, not the guide page."] },
    { h: "Verify before you purchase", paras: ["Before any purchase, verify ownership and transfer documents with the relevant authority or your own adviser, confirm inclusions and payment stages in writing, and tie payments to document and transfer milestones. This site cannot verify a specific home or its documents for you from a guide page.", "You are responsible for your own purchase decisions. We accept no liability for decisions made on the basis of general guide content alone, or for losses arising from unverified documents, incomplete paperwork, or payments made against verbal promises."] },
    { h: "Contact and changes", paras: ["Contact happens by phone or WhatsApp. The contact form opens WhatsApp with your message prefilled; it is not an email form and creates no submission record on this site. Messages and calls are handled under the privacy policy and the terms of the service you use.", "We may update these terms if how the site works changes. Updated terms will be published on this page, and continued use of the site after an update means you accept the updated wording. Questions can be raised by calling 0347 4825228 or messaging us on WhatsApp."] },
];

const faqs = [
    { q: "Is this site a listings portal?", a: "No, this site is a buying guide only. It publishes no individual listings, asking prices, availability, or photographs of specific homes, and nothing on it is an offer to sell any specific home or a promise of any price. Visit in person whenever possible, because a visit reveals what descriptions miss." },
    { q: "Can I rely on guide content for a specific purchase?", a: "Guide content describes general considerations, not the condition, documents or price of any specific home. Before purchase, verify ownership and transfer documents with the relevant authority or your own adviser, and confirm terms in writing. Keep copies of everything you sign and receive throughout the purchase." },
    { q: "Does this site promise prices or availability?", a: "No, nothing on this site promises a price, a discount, availability, or a particular outcome. Availability and prices are discussed by phone or WhatsApp and reflect the position at the time of that conversation only. Tell us the property type and bedroom count you have in mind." },
    { q: "What happens if I pay against incomplete paperwork?", a: "We advise against it. Tie payments to document and transfer milestones agreed in writing, keep copies of everything you sign and receive, and seek independent advice before paying against incomplete or unclear paperwork. A second visit often reveals what a first visit misses, so do not rush." },
    { q: "How can I ask a question about these terms?", a: "Call 0347 4825228 or +92 347 4825228, or message us on WhatsApp. We are open 24 hours, and we will correct any statement on this site that proves inaccurate. Call 0347 4825228 or message us on WhatsApp for current availability." },
];

const related = [
    { href: "/privacy-policy/", label: "Privacy policy" },
    { href: "/contact/", label: "Contact us" },
    { href: "/about/", label: "About us" },
];

const crumbs = [{ name: "Home", path: "/" }, { name: "Terms of Use", path: "/terms/" }];

export default function Page() {
  return (
    <PageShell
      path="/terms/"
      crumbs={crumbs}
      h1="Terms of Use"
      intro={intro}
      sections={sections}
      faqs={faqs}
      related={related}
    >
    </PageShell>
  );
}
