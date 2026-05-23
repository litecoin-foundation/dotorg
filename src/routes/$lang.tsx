import { createFileRoute, redirect } from "@tanstack/react-router";
import { supportedLanguages } from "@/i18n/languages";
import HomePage from "@/components/HomePage";

export const Route = createFileRoute("/$lang")({
  beforeLoad: ({ params }) => {
    const canonical = supportedLanguages.find(
      (l) => l.toLowerCase() === params.lang.toLowerCase(),
    );
    if (!canonical) {
      throw redirect({ to: "/" });
    }
    if (canonical !== params.lang) {
      throw redirect({ to: "/$lang", params: { lang: canonical } });
    }
  },
  component: HomePage,
});
