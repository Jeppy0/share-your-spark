import { createFileRoute } from "@tanstack/react-router";
import { ChevronDown } from "lucide-react";
import logoAsset from "@/assets/lmxlogo.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PSL — Become Top-Tier Attractive" },
      {
        name: "description",
        content: "PSL helps you become top-tier attractive. Download on the App Store or Google Play.",
      },
      { property: "og:title", content: "PSL — Become Top-Tier Attractive" },
      {
        property: "og:description",
        content: "PSL helps you become top-tier attractive.",
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
          alt="PSL logo"
          className="w-32 h-32 md:w-40 md:h-40 mb-8 select-none"
          draggable={false}
        />
        <h1 className="mt-8 text-5xl md:text-6xl font-bold tracking-tight">PSL</h1>
        <p className="mt-3 text-lg md:text-xl text-white/60">Become Top-Tier Attractive</p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#"
            aria-label="Download on the App Store"
            className="transition-transform hover:scale-[1.03]"
          >
            <img
              src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83"
              alt="Download on the App Store"
              className="h-14 w-auto"
            />
          </a>
          <a
            href="#"
            aria-label="Get it on Google Play"
            className="transition-transform hover:scale-[1.03]"
          >
            <img
              src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
              alt="Get it on Google Play"
              className="h-[68px] w-auto"
            />
          </a>
        </div>
      </div>

      <a
        href="#creator"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-xs tracking-[0.2em] text-white/50 hover:text-white/80 transition-colors"
      >
        JOIN AS CREATOR
        <ChevronDown className="h-4 w-4" />
      </a>
    </main>
  );
}
