import { useMemo, useState, type ReactNode } from "react";
import { LanguageContext, type Language, type LanguageContextType } from "./LanguageContext";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>("pt");

  const value = useMemo<LanguageContextType>(
    () => ({
      lang,
      setLang,
      t: (pt, en) => (lang === "pt" ? pt : en),
    }),
    [lang],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
