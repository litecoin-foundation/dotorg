import { Outlet, createRootRoute, useLocation } from "@tanstack/react-router";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { supportedLanguages, defaultLanguage } from "@/i18n/languages";
import { Toaster } from "@/components/ui/toaster";

const rtlLanguages = new Set(["ar", "he", "fa", "ur"]);

function RootComponent() {
  const { i18n } = useTranslation();
  const { pathname } = useLocation();

  const pathSegment = pathname.split("/")[1] || "";
  const lang =
    supportedLanguages.find(
      (l) => l.toLowerCase() === pathSegment.toLowerCase(),
    ) ?? defaultLanguage;

  useEffect(() => {
    if (i18n.language !== lang) i18n.changeLanguage(lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = rtlLanguages.has(lang) ? "rtl" : "ltr";
  }, [lang, i18n]);

  return (
    <>
      <Outlet />
      <Toaster />
    </>
  );
}

export const Route = createRootRoute({
  component: RootComponent,
});
