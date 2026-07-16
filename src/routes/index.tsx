import { createFileRoute } from "@tanstack/react-router";
import { ChevronDown } from "lucide-react";
import logoUrl from "@/assets/lmxlogo.png";

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
          src={logoAsset.url}
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
            className="inline-flex items-center justify-center w-[168px] h-14 md:w-[192px] md:h-16 transition-transform duration-200 hover:scale-105"
          >
            <img
              src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83"
              alt="Download on the App Store"
              className="w-full h-full object-contain"
            />
          </a>
          <a
            href="#"
            aria-label="Get it on Google Play"
            className="inline-flex items-center justify-center w-[168px] h-14 md:w-[192px] md:h-16 transition-transform duration-200 hover:scale-105"
          >
            <img
              src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
              alt="Get it on Google Play"
              className="w-full h-full object-contain"
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
