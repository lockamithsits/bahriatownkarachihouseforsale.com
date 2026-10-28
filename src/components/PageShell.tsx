import type { ReactNode } from "react";
import Link from "next/link";
import { SITE } from "@/lib/site";
import { Faq, type FaqItem } from "./Faq";

export type Section = { h: string; paras: string[]; bullets?: string[] };

export function jsonLdFor(path: string, crumbs: Array<{ name: string; path: string }>) {
  const org = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: SITE.name,
    url: SITE.domain + "/",
    telephone: SITE.tel,
    openingHours: "Mo-Su 00:00-23:59",
    address: {
      "@type": "PostalAddress",
      addressLocality: SITE.locality,
      addressRegion: SITE.region,
      addressCountry: SITE.country,
    },
    areaServed: { "@type": "Place", name: SITE.locality },
  };
  const crumbsLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: SITE.domain + c.path,
    })),
  };
  return [org, crumbsLd];
}

export function PageShell({
  path,
  crumbs,
  h1,
  intro,
  sections,
  faqs,
  related,
  children,
}: {
  path: string;
  crumbs: Array<{ name: string; path: string }>;
  h1: string;
  intro: string[];
  sections: Section[];
  faqs: FaqItem[];
  related: Array<{ href: string; label: string }>;
  children?: ReactNode;
}) {
  const [org, crumbsLd] = jsonLdFor(path, crumbs);
  return (
    <article className="prose-article">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbsLd) }} />
      <nav aria-label="Breadcrumb" className="text-sm text-slate-500">
        {crumbs.map((c, i) => (
          <span key={c.path}>
            {i > 0 && " / "}
            {i < crumbs.length - 1 ? (
              <Link href={c.path} className="hover:text-emerald-800">{c.name}</Link>
            ) : (
              <span aria-current="page">{c.name}</span>
            )}
          </span>
        ))}
      </nav>
      <h1>{h1}</h1>
      {intro.map((p, i) => (
        <p key={i} className="lead">{p}</p>
      ))}
      <div className="cta-row">
        <a href={SITE.telHref} className="cta-call">Call {SITE.telLocal}</a>
        <a href={SITE.whatsapp} className="cta-wa">WhatsApp us</a>
        <Link href="/contact/" className="cta-form">Message us on WhatsApp</Link>
      </div>
      {children}
      {sections.map((s) => (
        <section key={s.h}>
          <h2>{s.h}</h2>
          {s.paras.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          {s.bullets && (
            <ul>
              {s.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          )}
        </section>
      ))}
      <section className="related">
        <h2>Related pages</h2>
        <ul>
          {related.map((r) => (
            <li key={r.href}>
              <Link href={r.href}>{r.label}</Link>
            </li>
          ))}
        </ul>
      </section>
      <Faq faqs={faqs} />
    </article>
  );
}
