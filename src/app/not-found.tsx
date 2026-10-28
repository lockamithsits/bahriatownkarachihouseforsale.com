import Link from "next/link";
import { SITE } from "@/lib/site";

export default function NotFound() {
  return (
    <article className="prose-article">
      <h1>Page not found</h1>
      <p>
        The page you were looking for is not on this site. Use the links below to
        find buying guidance for Bahria Town Karachi, or call us for help.
      </p>
      <p>
        <Link href="/">Home</Link> ·{" "}
        <Link href="/houses-for-sale/">Houses for sale</Link> ·{" "}
        <Link href="/contact/">Contact</Link> ·{" "}
        <a href={SITE.telHref}>Call {SITE.telLocal}</a>
      </p>
    </article>
  );
}
