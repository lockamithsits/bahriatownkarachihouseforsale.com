export type FaqItem = { q: string; a: string };

/**
 * Visible FAQ text and FAQPage JSON-LD are rendered from the SAME faq array,
 * so the structured data byte-matches the visible text exactly.
 * FAQ text uses plain wording with no contractions or special punctuation
 * so the rendered HTML and the JSON-LD string stay identical.
 */
export function Faq({ faqs }: { faqs: FaqItem[] }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  return (
    <section aria-label="Frequently asked questions" className="mt-12">
      <h2>Frequently asked questions</h2>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="mt-4 space-y-6">
        {faqs.map((f) => (
          <div key={f.q}>
            <h3>{f.q}</h3>
            <p>{f.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
