import { SITE } from "@/lib/site";

export function MobileCtaBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 flex md:hidden">
      <a
        href={SITE.telHref}
        className="flex-1 bg-amber-400 py-3 text-center text-base font-bold text-slate-950"
      >
        Call {SITE.telLocal}
      </a>
      <a
        href={SITE.whatsapp}
        className="flex-1 bg-emerald-700 py-3 text-center text-base font-bold text-white"
      >
        WhatsApp
      </a>
    </div>
  );
}
