export const supportedLanguages = [
  "en",
  "ar",
  "cs",
  "da",
  "de",
  "el",
  "eo",
  "es",
  "et",
  "fi",
  "fr",
  "id",
  "it",
  "ja",
  "ko",
  "lv",
  "nl",
  "no",
  "pl",
  "pt",
  "ru",
  "sl",
  "sv",
  "tr",
  "vi",
  "zh",
  "zh-TW",
] as const;

export type SupportedLanguage = (typeof supportedLanguages)[number];

export const defaultLanguage: SupportedLanguage = "en";

export function isSupportedLanguage(
  lang: string,
): lang is SupportedLanguage {
  return (supportedLanguages as readonly string[]).includes(lang);
}
