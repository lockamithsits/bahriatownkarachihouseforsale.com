import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Real Estate Services | Bahria Town Karachi",
  description: "Real estate services for Bahria Town Karachi buyers: property-type guidance, price guidance, viewing help and documents guidance, by phone or WhatsApp.",
  alternates: { canonical: "https://bahriatownkarachihouseforsale.com/real-estate/" },
  openGraph: {
    title: "Real Estate Services | Bahria Town Karachi",
    description: "Real estate services for Bahria Town Karachi buyers: property-type guidance, price guidance, viewing help and documents guidance, by phone or WhatsApp.",
    url: "https://bahriatownkarachihouseforsale.com/real-estate/",
    type: "website",
  },
};

const intro = ["We help buyers understand houses, villas, apartments and flats in Bahria Town Karachi, and we discuss current availability and prices by phone or WhatsApp. We are a buying guide and advisory contact, not a listings portal: we publish no individual listings, because availability and prices change often.", "Our help is organised around four things buyers actually need: choosing a property type, understanding what moves prices, checking a home properly on a viewing, and verifying documents before payment. Each service below is free to ask about, and every conversation starts with your needs, not a sales pitch."];

const sections = [
    { h: "Property-type guidance", paras: ["Tell us your household size, budget range in words, and how you plan to use the home, and we will talk through which property type fits: house, villa, or apartment or flat. We explain the trade-offs honestly, including upkeep, space and finish, so you can shortlist with confidence.", "If you are torn between types, our villa-versus-apartment guide and 3-bedroom villa guide set out the comparison in plain language, and we can talk through your shortlist with you by phone or WhatsApp."] },
    { h: "Current availability and price guidance", paras: ["Availability and prices change often, so we give the current position by phone or WhatsApp rather than printing figures that would go out of date. Tell us the property type and number of bedrooms you want, and we will discuss what is currently available in that range.", "We also explain the factors behind any quoted price, using our prices page as a shared reference, so you can judge fairness instead of accepting a figure on trust."] },
    { h: "Viewing and documents guidance", paras: ["Before you visit, read our viewing checklist and take it with you. It covers structure, fittings, water and drainage, parking, street and surroundings, and the questions worth asking the seller. After a viewing, our documents checklist explains the papers to ask for and the checks to make.", "If anything about a home or its documents is unclear, we will tell you to verify it with the relevant authority or your own adviser before payment. That caution is part of the service, not an obstacle to it."] },
    { h: "How to reach us", paras: ["We are open 24 hours. Call 0347 4825228 or +92 347 4825228, message us on WhatsApp, or use the contact form, which opens WhatsApp with your message prefilled. Tell us the property type, bedroom count and anything else that matters, and we will respond honestly about the current position."] },
];

const faqs = [
    { q: "What real estate services do you offer in Bahria Town Karachi?", a: "We offer buying guidance for houses, villas, apartments and flats in Bahria Town Karachi, including property-type advice, current availability and price guidance by phone or WhatsApp, viewing guidance, and documents guidance before payment. Tell us the property type and bedroom count you have in mind." },
    { q: "Do you charge for buying guidance?", a: "Asking us about property types, price factors, availability and buying steps costs nothing. Any purchase itself follows its own written agreement between buyer and seller, and you should confirm all costs and inclusions in writing before payment. A second visit often reveals what a first visit misses, so do not rush." },
    { q: "Can you help me choose between a house, villa and apartment?", a: "Yes, tell us your household size, budget range in words, and how you plan to use the home. We will explain the trade-offs honestly, including space, upkeep and finish, and our guides compare villa and apartment living in plain language." },
    { q: "Do you arrange viewings?", a: "Talk to us about the property type and bedroom count you want, and we will discuss how viewings work for currently available homes. Take our viewing checklist with you, and visit any shortlisted home more than once where possible. Compare condition, layout, light, parking and surroundings before deciding." },
    { q: "How do I start using your services?", a: "Call 0347 4825228, message us on WhatsApp, or use the contact form, which opens WhatsApp with your message prefilled. We are open 24 hours, and every conversation starts with your needs and the property type you have in mind. Call 0347 4825228 or message us on WhatsApp for current availability." },
];

const related = [
    { href: "/houses-for-sale/", label: "Houses for sale in Bahria Town Karachi" },
    { href: "/villas-for-sale/", label: "Villas for sale in Bahria Town Karachi" },
    { href: "/apartments-and-flats-for-sale/", label: "Apartments and flats for sale in Bahria Town Karachi" },
    { href: "/buying-guide/", label: "How to buy a house in Bahria Town Karachi" },
    { href: "/prices/", label: "What affects prices in Bahria Town Karachi" },
    { href: "/contact/", label: "Contact us" },
];

const crumbs = [{ name: "Home", path: "/" }, { name: "Real Estate Services in Bahria Town Karachi", path: "/real-estate/" }];

export default function Page() {
  return (
    <PageShell
      path="/real-estate/"
      crumbs={crumbs}
      h1="Real Estate Services in Bahria Town Karachi"
      intro={intro}
      sections={sections}
      faqs={faqs}
      related={related}
    >
    </PageShell>
  );
}
