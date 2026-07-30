import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--ivory)] pt-20">
      <div className="text-center px-8">
        <h1 className="text-9xl font-serif text-[var(--gold)] opacity-20 mb-4">404</h1>
        <h2 className="text-3xl md:text-4xl text-[var(--charcoal)] font-serif mb-6">Page Not Found</h2>
        <p className="text-[var(--charcoal-soft)] mb-10 max-w-md mx-auto">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link href="/" className="btn-primary inline-flex items-center gap-2">
          <ArrowLeft size={16} /> Return Home
        </Link>
      </div>
    </div>
  );
}