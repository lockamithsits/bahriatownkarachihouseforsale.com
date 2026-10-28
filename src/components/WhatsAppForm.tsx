"use client";

import { useState } from "react";
import { SITE } from "@/lib/site";

/**
 * Honest contact form: there is no email inbox and no form endpoint behind
 * this site. Submitting opens WhatsApp with the message prefilled, and the
 * page says so plainly. It is never described as email.
 */
export function WhatsAppForm() {
  const [name, setName] = useState("");
  const [interest, setInterest] = useState("House");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const text = `Hello, my name is ${name || "a visitor"}. I am interested in a ${interest} in Bahria Town Karachi. ${message}`.trim();
    setSent(true);
    window.open(`${SITE.whatsapp}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
  }

  return (
    <form onSubmit={onSubmit} className="mt-6 space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <p className="text-base font-bold text-slate-900">Send us a message on WhatsApp</p>
      <p className="text-sm text-slate-600">
        This form does not send an email. When you press send, it opens WhatsApp with
        your message already written, ready for you to send to {SITE.telDisplay}.
      </p>
      <div>
        <label htmlFor="wa-name" className="block text-sm font-semibold">Your name</label>
        <input
          id="wa-name" value={name} onChange={(e) => setName(e.target.value)}
          className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2" placeholder="Your name"
        />
      </div>
      <div>
        <label htmlFor="wa-interest" className="block text-sm font-semibold">I am interested in</label>
        <select
          id="wa-interest" value={interest} onChange={(e) => setInterest(e.target.value)}
          className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
        >
          <option>House</option>
          <option>Villa</option>
          <option>Apartment or flat</option>
          <option>Price guidance</option>
          <option>Buying guidance</option>
        </select>
      </div>
      <div>
        <label htmlFor="wa-message" className="block text-sm font-semibold">Your message</label>
        <textarea
          id="wa-message" value={message} onChange={(e) => setMessage(e.target.value)}
          rows={4} className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
          placeholder="Tell us what you are looking for, for example the number of bedrooms or your budget range in words."
        />
      </div>
      <button type="submit" className="rounded-full bg-emerald-700 px-6 py-3 text-sm font-bold text-white hover:bg-emerald-600">
        Send via WhatsApp
      </button>
      {sent && (
        <p className="text-sm text-emerald-800">
          WhatsApp should now be open with your message ready to send. If it did not open,
          message us directly on WhatsApp or call {SITE.telDisplay}.
        </p>
      )}
    </form>
  );
}
