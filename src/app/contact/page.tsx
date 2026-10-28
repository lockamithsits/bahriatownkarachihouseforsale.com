import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { WhatsAppForm } from "@/components/WhatsAppForm";

export const metadata: Metadata = {
  title: "Contact Us | Bahria Town Karachi House For Sale",
  description: "Contact Bahria Town Karachi House For Sale: call 0347 4825228, WhatsApp, or use the form, which opens WhatsApp. Open 24 hours, Bahria Town Karachi.",
  alternates: { canonical: "https://bahriatownkarachihouseforsale.com/contact/" },
  openGraph: {
    title: "Contact Us | Bahria Town Karachi House For Sale",
    description: "Contact Bahria Town Karachi House For Sale: call 0347 4825228, WhatsApp, or use the form, which opens WhatsApp. Open 24 hours, Bahria Town Karachi.",
    url: "https://bahriatownkarachihouseforsale.com/contact/",
    type: "website",
  },
};

const intro = ["We are open 24 hours. Call us, message us on WhatsApp, or use the form below, which opens WhatsApp with your message prefilled. Tell us the property type you want, the number of bedrooms you need, and anything else that matters to you, and we will discuss the current position honestly.", "Our coverage is Bahria Town Karachi, in Karachi, Sindh, Pakistan. We describe our location at community level only. For the current position on any property type, a phone call or WhatsApp message will always be more accurate than a printed page, because availability changes often."];

const sections = [
    { h: "Call us", paras: ["Call 0347 4825228 from Pakistan, or +92 347 4825228 from outside Pakistan. Calling suits buyers who want a direct conversation about property types, current availability and price factors, or who have documents questions they want to talk through.", "If we are busy, please try again or message us on WhatsApp with your question and the property type you have in mind, and we will respond."] },
    { h: "Message us on WhatsApp", paras: ["WhatsApp suits buyers who want to send details at their own pace, including property type, bedroom count and questions about documents or viewings. Use the button below or the form on this page, which opens WhatsApp with your message already written.", "Please do not send payment details, passwords or sensitive personal documents over WhatsApp. Share only what is needed to discuss the property type you want, and verify any purchase documents through the proper channel."] },
    { h: "What to include in your message", paras: ["A short message with the property type, bedroom count and your main question helps us respond usefully. For example, mention whether you want a house, villa or apartment, how many bedrooms you need, and whether you want price guidance, viewing help or documents guidance.", "If you are comparing types, say so, and we will talk through the trade-offs honestly rather than steering you toward one type. If you are a first-time buyer, say so too, and we will point you to the guides that fit your situation."], bullets: ["Property type: house, villa, or apartment or flat", "Number of bedrooms you need", "Your main question: prices, viewings, documents, or general guidance"] },
];

const faqs = [
    { q: "What are your opening hours?", a: "We are open 24 hours. Call 0347 4825228 or +92 347 4825228, or message us on WhatsApp at any time, and tell us the property type and bedroom count you have in mind. Keep copies of everything you sign and receive throughout the purchase." },
    { q: "Does the contact form send an email?", a: "No, this site has no email form. The contact form opens WhatsApp with your message prefilled, ready for you to send to us. The page says so plainly, and the form is never described as email. Tell us the property type and bedroom count you have in mind." },
    { q: "What should I tell you when I contact you?", a: "Tell us the property type you want, the number of bedrooms you need, and your main question, whether it concerns prices, viewings, documents or general guidance. A short message with those details helps us respond usefully. A second visit often reveals what a first visit misses, so do not rush." },
    { q: "Can I ask about prices through WhatsApp?", a: "Yes, message us on WhatsApp with the property type and bedroom count you want, and we will discuss current prices honestly. We do not print price figures on this site, because they change often and would quickly go out of date." },
    { q: "Where are you located?", a: "Our coverage is Bahria Town Karachi, in Karachi, Sindh, Pakistan, described at community level only. Arrange viewings and document checks for the specific home you are considering, and verify details with the relevant authority. Compare condition, layout, light, parking and surroundings before deciding." },
];

const related = [
    { href: "/houses-for-sale/", label: "Houses for sale in Bahria Town Karachi" },
    { href: "/buying-guide/", label: "How to buy a house in Bahria Town Karachi" },
    { href: "/faqs/", label: "Frequently asked questions" },
    { href: "/real-estate/", label: "Our real estate services" },
];

const crumbs = [{ name: "Home", path: "/" }, { name: "Contact Us", path: "/contact/" }];

export default function Page() {
  return (
    <PageShell
      path="/contact/"
      crumbs={crumbs}
      h1="Contact Us"
      intro={intro}
      sections={sections}
      faqs={faqs}
      related={related}
    >
      <WhatsAppForm />
    </PageShell>
  );
}
