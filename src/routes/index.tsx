import { createFileRoute } from "@tanstack/react-router";
import { ChevronDown } from "lucide-react";
import logoUrl from "@/assets/lmxlogo.png";
import appStoreBadge from "@/assets/app-store-badge.svg";
import googlePlayBadge from "@/assets/google-play-badge.svg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "LMX — Become Top-Tier Attractive" },
      {
        name: "description",
        content: "LMX helps you become top-tier attractive. Download on the App Store or Google Play.",
      },
      { property: "og:title", content: "LMX — Become Top-Tier Attractive" },
      {
        property: "og:description",
        content: "LMX helps you become top-tier attractive.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 overflow-hidden">
      <div className="flex flex-col items-center text-center">
        <img
          src={logoUrl}
          alt="LMX logo"
          className="w-32 h-32 md:w-40 md:h-40 mb-8 select-none"
          draggable={false}
        />
        <h1 className="mt-8 text-5xl md:text-6xl font-bold tracking-tight">LMX</h1>
        <p className="mt-3 text-lg md:text-xl text-white/60">Become Top-Tier Attractive</p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#"
            aria-label="Download on the App Store"
            className="inline-block transition-transform duration-200 hover:scale-105"
          >
            <img
              src={appStoreBadge}
              alt="Download on the App Store"
              className="h-14 md:h-16 w-auto"
            />
          </a>
          <a
            href="#"
            aria-label="Get it on Google Play"
            className="inline-block transition-transform duration-200 hover:scale-105"
          >
            <img
              src={googlePlayBadge}
              alt="Get it on Google Play"
              className="h-14 md:h-16 w-auto"
            />
          </a>
        </div>
      </div>

      <a
        href="https://lmxportal.lovable.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-xs tracking-[0.2em] text-white/50 hover:text-white/80 transition-colors"
      >
        JOIN AS CREATOR
        <ChevronDown className="h-4 w-4" />
      </a>
    </main>
  );
}
