import { createFileRoute, redirect } from "@tanstack/react-router";

import { supportedLanguages, defaultLanguage } from "@/i18n/languages";
import HomePage from "@/components/HomePage";

const browserLangMap: Record<string, string> = {
  nb: "no",
  nn: "no",
  "zh-Hant": "zh-TW",
};

function resolveLanguage(browserLang: string): string | null {
  const find = (code: string) =>
    supportedLanguages.find((l) => l.toLowerCase() === code.toLowerCase());

  const parts = browserLang.split("-");

  // Exact match (case-insensitive): "zh-TW", "fr"
  const exact = find(browserLang);
  if (exact) return exact;

  // Skip script subtag: "zh-Hant-TW" → try "zh-TW"
  if (parts.length === 3) {
    const langRegion = find(`${parts[0]}-${parts[2]}`);
    if (langRegion) return langRegion;
  }

  // Language-script mapping: "zh-Hant" → "zh-TW"
  if (parts.length >= 2) {
    const langScript = browserLangMap[`${parts[0]}-${parts[1]}`];
    if (langScript) {
      const match = find(langScript);
      if (match) return match;
    }
  }

  // Base language: "fr-FR" → "fr"
  const base = find(parts[0]);
  if (base) return base;

  // Base mapping: "nb" → "no"
  const baseMapped = browserLangMap[parts[0]];
  if (baseMapped) return find(baseMapped) ?? null;

  return null;
}

export const Route = createFileRoute("/")({
  beforeLoad: () => {
    const lang = resolveLanguage(navigator.language);
    if (lang && lang !== defaultLanguage) {
      throw redirect({ to: "/$lang", params: { lang } });
    }
  },
  component: HomePage,
});
