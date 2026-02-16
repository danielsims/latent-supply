"use client";

import { type ReactNode } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import { ScrollReveal } from "@/components/motion";
import { Infinity } from "lucide-react";
import Link from "next/link";

export function ContentLayout({
  title,
  lastUpdated,
  children,
}: {
  title: string;
  lastUpdated?: string;
  children: ReactNode;
}) {
  return (
    <div className="bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 selection:bg-neutral-900 selection:text-white dark:selection:bg-white dark:selection:text-neutral-900 min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-neutral-950/80 backdrop-blur-xl px-6">
        <div className="max-w-5xl mx-auto h-14 flex items-center justify-between">
          <Link
            href="/"
            className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-900 dark:text-neutral-100 flex items-center gap-1.5 hover:opacity-70 transition-opacity duration-300"
          >
            <Infinity className="w-4 h-4" strokeWidth={2} />
            Latent Supply
          </Link>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <a
              href="mailto:admin@latentsupply.com"
              className="text-xs tracking-wide text-neutral-400 dark:text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors duration-300"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Content */}
      <main className="flex-1 pt-28 pb-24 px-6">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-extralight tracking-tight uppercase text-neutral-900 dark:text-white mb-4">
            {title}
          </h1>
          {lastUpdated && (
            <p className="text-xs font-light text-neutral-300 dark:text-neutral-600 mb-16">
              Last updated: {lastUpdated}
            </p>
          )}
          <div className="prose-content space-y-8">{children}</div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-12 sm:py-16 px-6 border-t border-neutral-100 dark:border-neutral-800">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6">
              <div className="space-y-1.5">
                <p className="text-xs font-medium tracking-[0.1em] uppercase text-neutral-900 dark:text-neutral-100">
                  Latent Supply Pty Ltd
                </p>
                <p className="text-xs font-light text-neutral-300 dark:text-neutral-600">
                  ABN 38 694 551 490
                </p>
              </div>
              <div className="flex items-center gap-4 text-xs font-light text-neutral-300 dark:text-neutral-600">
                <Link
                  href="/terms"
                  className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors duration-300"
                >
                  Terms
                </Link>
                <Link
                  href="/privacy"
                  className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors duration-300"
                >
                  Privacy
                </Link>
                <span>&copy; {new Date().getFullYear()} Latent Supply</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </footer>
    </div>
  );
}

function ContentSection({
  heading,
  children,
}: {
  heading: string;
  children: ReactNode;
}) {
  return (
    <section className="space-y-4">
      <h2 className="text-sm font-medium tracking-[0.1em] uppercase text-neutral-900 dark:text-neutral-100">
        {heading}
      </h2>
      {children}
    </section>
  );
}

function ContentParagraph({ children }: { children: ReactNode }) {
  return (
    <p className="text-sm font-light leading-relaxed text-neutral-500 dark:text-neutral-400">
      {children}
    </p>
  );
}

function ContentList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 pl-4">
      {items.map((item, i) => (
        <li
          key={i}
          className="text-sm font-light leading-relaxed text-neutral-500 dark:text-neutral-400 list-disc"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export { ContentSection, ContentParagraph, ContentList };
