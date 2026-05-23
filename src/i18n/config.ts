import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { defaultLanguage, supportedLanguages } from "./languages";

import en from "@/locales/en.json";
import ar from "@/locales/ar.json";
import cs from "@/locales/cs.json";
import da from "@/locales/da.json";
import de from "@/locales/de.json";
import el from "@/locales/el.json";
import eo from "@/locales/eo.json";
import es from "@/locales/es.json";
import et from "@/locales/et.json";
import fi from "@/locales/fi.json";
import fr from "@/locales/fr.json";
import id from "@/locales/id.json";
import it from "@/locales/it.json";
import ja from "@/locales/ja.json";
import ko from "@/locales/ko.json";
import lv from "@/locales/lv.json";
import nl from "@/locales/nl.json";
import no from "@/locales/no.json";
import pl from "@/locales/pl.json";
import pt from "@/locales/pt.json";
import ru from "@/locales/ru.json";
import sl from "@/locales/sl.json";
import sv from "@/locales/sv.json";
import tr from "@/locales/tr.json";
import vi from "@/locales/vi.json";
import zh from "@/locales/zh.json";
import zhTW from "@/locales/zh-TW.json";

const pathSegment = window.location.pathname.split("/")[1] || "";
const initialLang =
  supportedLanguages.find(
    (l) => l.toLowerCase() === pathSegment.toLowerCase(),
  ) ?? defaultLanguage;

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    ar: { translation: ar },
    cs: { translation: cs },
    da: { translation: da },
    de: { translation: de },
    el: { translation: el },
    eo: { translation: eo },
    es: { translation: es },
    et: { translation: et },
    fi: { translation: fi },
    fr: { translation: fr },
    id: { translation: id },
    it: { translation: it },
    ja: { translation: ja },
    ko: { translation: ko },
    lv: { translation: lv },
    nl: { translation: nl },
    no: { translation: no },
    pl: { translation: pl },
    pt: { translation: pt },
    ru: { translation: ru },
    sl: { translation: sl },
    sv: { translation: sv },
    tr: { translation: tr },
    vi: { translation: vi },
    zh: { translation: zh },
    "zh-TW": { translation: zhTW },
  },
  lng: initialLang,
  fallbackLng: defaultLanguage,
  supportedLngs: [...supportedLanguages],
  interpolation: { escapeValue: false },
});

export default i18n;
