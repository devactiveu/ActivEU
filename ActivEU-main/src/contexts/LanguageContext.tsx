import { createContext } from "react";

export type Language = "pt" | "en";

export type LanguageContextType = {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (pt: string, en: string) => string;
};

export const LanguageContext = createContext<LanguageContextType>({
  lang: "pt",
  setLang: () => undefined,
  t: (pt) => pt,
});
