import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Privacy Policy | Bahria Town Karachi House For Sale",
  description: "Privacy policy for Bahria Town Karachi House For Sale: what the WhatsApp contact form shares, and what this site does not collect.",
  alternates: { canonical: "https://bahriatownkarachihouseforsale.com/privacy-policy/" },
  openGraph: {
    title: "Privacy Policy | Bahria Town Karachi House For Sale",
    description: "Privacy policy for Bahria Town Karachi House For Sale: what the WhatsApp contact form shares, and what this site does not collect.",
    url: "https://bahriatownkarachihouseforsale.com/privacy-policy/",
    type: "website",
  },
};

const intro = ["This privacy policy explains what happens when you use this website and when you contact us. The short version is simple: this site collects nothing itself, stores no form submissions, and has no email inbox. When you use the contact form, it opens WhatsApp with your message prefilled, and WhatsApp then handles your message under its own terms.", "If you do not want to use WhatsApp, call us instead on 0347 4825228 or +92 347 4825228. We are open 24 hours. This policy was written in plain language so you can understand it without legal training, but it is general information, not legal advice."];

const sections = [
    { h: "What this site collects", paras: ["This website itself collects no personal information. There is no account system, no email form, no form endpoint and no database behind the contact form. Pages are static files served to your browser, and nothing you type into the form is sent to us unless you press send inside WhatsApp.", "Standard web hosting may record technical logs, such as the page requested and the time of the request, for security and reliability. Those logs are not used to identify individual visitors or to build profiles of browsing behaviour."] },
    { h: "What happens when you use the contact form", paras: ["The contact form runs entirely in your browser. When you press send, it builds a WhatsApp message from the name, interest and message you typed, and opens WhatsApp with that message prefilled. Only if you then send the message inside WhatsApp do we receive it.", "Messages sent through WhatsApp are governed by WhatsApp terms and privacy policy, not by this page. Do not include payment details, passwords or sensitive personal documents in a WhatsApp message to us, and share only what is needed to discuss the property type you want."] },
    { h: "Calls, cookies and links", paras: ["When you call us, your phone number will be visible to us as it is in any phone call. We use call information only to respond to your buying question. This site sets no tracking cookies of its own and carries no advertising trackers.", "Links to WhatsApp and phone calls leave this site. Once you follow such a link, the destination service handles your information under its own terms. We are not responsible for the privacy practices of other services."] },
    { h: "Changes and contact", paras: ["We may update this policy if how the site works changes, for example if a genuine email contact route is added in future. Any updated policy will be published on this page with its new wording, and continued use of the site after an update means you accept the updated wording.", "Questions about this policy can be raised by calling 0347 4825228 or messaging us on WhatsApp. If you believe any statement on this page is inaccurate, tell us and we will correct it."] },
];

const faqs = [
    { q: "Does this site collect my personal information?", a: "No, this website itself collects no personal information and stores no form submissions. The contact form runs in your browser and only opens WhatsApp with your message prefilled, so we receive your message only if you send it inside WhatsApp." },
    { q: "Does the contact form send an email?", a: "No, this site has no email form and no form endpoint. The contact form opens WhatsApp with your message prefilled, ready for you to send to us, and the page says so plainly wherever the form appears. We are open 24 hours and happy to discuss your situation honestly." },
    { q: "What information should I avoid sending on WhatsApp?", a: "Do not send payment details, passwords or sensitive personal documents over WhatsApp. Share only what is needed to discuss the property type you want, and verify purchase documents through the proper channel before payment. Read the related guide linked below for fuller detail on this topic." },
    { q: "Does this site use tracking cookies?", a: "No, this site sets no tracking cookies of its own and carries no advertising trackers. Standard hosting may record technical logs for security and reliability, but those logs are not used to identify visitors or build browsing profiles. Take your time, compare homes side by side, and verify documents before payment." },
    { q: "How can I ask a question about this policy?", a: "Call 0347 4825228 or +92 347 4825228, or message us on WhatsApp. We are open 24 hours, and we will correct any statement on this page that proves inaccurate. If anything here is unclear, ask us and we will explain it plainly." },
];

const related = [
    { href: "/contact/", label: "Contact us" },
    { href: "/terms/", label: "Terms of use" },
    { href: "/about/", label: "About us" },
];

const crumbs = [{ name: "Home", path: "/" }, { name: "Privacy Policy", path: "/privacy-policy/" }];

export default function Page() {
  return (
    <PageShell
      path="/privacy-policy/"
      crumbs={crumbs}
      h1="Privacy Policy"
      intro={intro}
      sections={sections}
      faqs={faqs}
      related={related}
    >
    </PageShell>
  );
}
