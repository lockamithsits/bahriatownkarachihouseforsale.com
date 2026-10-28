import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Bahria Town Karachi Prices | What Affects Prices",
  description: "No fixed price list: the factors that move house, villa and apartment prices in Bahria Town Karachi, and how to ask us for current prices.",
  alternates: { canonical: "https://bahriatownkarachihouseforsale.com/prices/" },
  openGraph: {
    title: "Bahria Town Karachi Prices | What Affects Prices",
    description: "No fixed price list: the factors that move house, villa and apartment prices in Bahria Town Karachi, and how to ask us for current prices.",
    url: "https://bahriatownkarachihouseforsale.com/prices/",
    type: "website",
  },
};

const intro = ["This page deliberately contains no price figures. Prices for houses, villas, apartments and flats in Bahria Town Karachi move often, and any figure printed here would go out of date quickly and could mislead you. Instead, this page explains the factors that move prices, so you can judge a quoted price fairly when you hear one.", "For current prices, call 0347 4825228 or message us on WhatsApp and tell us the property type and number of bedrooms you have in mind. We will discuss the current position for that type honestly, with no obligation."];

const sections = [
    { h: "Property type and size", paras: ["Property type is the first driver of price. Villas generally sit above comparable houses because of scale and finish, while apartments and flats generally sit below standalone homes because they offer less private space and land. Within each type, the number of bedrooms, the built-up area, the plot size for houses and villas, and the layout all move the price.", "A well-planned layout can matter as much as raw size. Two homes with the same bedroom count can feel very different if one wastes space on circulation while the other uses every room well. Compare usable space and light, not bedroom count alone."] },
    { h: "Condition, age and finish", paras: ["Condition moves price sharply. A home in excellent condition with recent maintenance and modern fittings will command more than a similar home that needs repairs, new fittings or structural work. Age alone is not the whole story: a well-kept older home can offer better value than a newer home in poor condition.", "Furnishing also matters. A furnished home may cost more upfront but save you the cost and effort of furnishing from scratch. Always confirm exactly what is included, because fittings, appliances and furniture are often negotiated separately."], bullets: ["Recent maintenance and quality of fittings", "Structural condition and likely repair costs", "What is included: fittings, appliances, furniture"] },
    { h: "Position within the community", paras: ["Position within Bahria Town Karachi affects price too. Homes near parks, main roads, shopping areas or community facilities may command more, while homes on quieter streets may offer better value for buyers who prefer calm surroundings. Corner positions, street width and parking arrangements can also matter.", "There is no single ideal position. A busy location suits some households and not others, so weigh convenience against noise, traffic and privacy when you visit, and visit at different times if you can."] },
    { h: "Market conditions and timing", paras: ["Wider market conditions move prices for every property type. Demand, financing conditions, and the supply of homes available at the time all shift what sellers ask and what buyers pay. That is another reason fixed figures on a website age badly.", "If you are not in a rush, tracking the market for a short while and talking to us about recent movement can help you judge whether a quoted price is fair. If you are in a rush, focus on condition and documents first, because a rushed purchase with poor paperwork costs far more than a short wait."] },
];

const faqs = [
    { q: "Why does this page not give house prices?", a: "Prices change often, so any figure printed here would quickly go out of date and could mislead you. This page explains the factors that move prices instead, and we give current prices by phone or WhatsApp when you tell us the property type you want." },
    { q: "What affects the price of a house most?", a: "Property type, size, layout, condition, age, finish, furnishing, and position within the community all affect price, along with wider market conditions. Compare homes on all of these together, not on bedroom count or headline price alone. Compare condition, layout, light, parking and surroundings before deciding." },
    { q: "Do villas cost more than houses?", a: "Villas generally sit above comparable houses because of greater scale and finish, while apartments and flats generally sit below standalone homes. Exact differences depend on size, condition and position, so ask us about the current position for the type you want." },
    { q: "How can I tell whether a quoted price is fair?", a: "Compare similar homes on type, size, condition, finish and position, and ask what is included in the price. Talk to us about recent movement for that type, and never rush past document checks to secure a price that looks attractive." },
    { q: "How do I get a current price for the home I want?", a: "Call 0347 4825228 or message us on WhatsApp with the property type and number of bedrooms you have in mind. We will discuss current prices for that type honestly, with no obligation and no printed figure to go out of date." },
];

const related = [
    { href: "/houses-for-sale/", label: "Houses for sale in Bahria Town Karachi" },
    { href: "/villas-for-sale/", label: "Villas for sale in Bahria Town Karachi" },
    { href: "/apartments-and-flats-for-sale/", label: "Apartments and flats for sale in Bahria Town Karachi" },
    { href: "/guides/investment-vs-living/", label: "Buying to live in or as an investment" },
    { href: "/buying-guide/", label: "How to buy a house in Bahria Town Karachi" },
    { href: "/contact/", label: "Contact us for current prices" },
];

const crumbs = [{ name: "Home", path: "/" }, { name: "Bahria Town Karachi Prices: What Affects Them", path: "/prices/" }];

export default function Page() {
  return (
    <PageShell
      path="/prices/"
      crumbs={crumbs}
      h1="Bahria Town Karachi Prices: What Affects Them"
      intro={intro}
      sections={sections}
      faqs={faqs}
      related={related}
    >
    </PageShell>
  );
}
