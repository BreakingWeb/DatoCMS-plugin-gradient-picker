import type { RenderConfigScreenCtx, RenderFieldExtensionCtx } from "datocms-plugin-sdk";
import { translations, type Locale, type Translations } from "./translations";

type Ctx = RenderConfigScreenCtx | RenderFieldExtensionCtx;

/**
 * Detects the locale from browser settings
 */
function getLocaleFromBrowser(): Locale {
  const browserLocale = navigator.language.toLowerCase();

  if (browserLocale.startsWith("fr")) {
    return "fr";
  }

  // Default to English
  return "en";
}

/**
 * Hook to get translations based on the browser locale
 * Note: DatoCMS context doesn't expose user locale directly,
 * so we use browser locale as a fallback
 */
export function useTranslations(_ctx: Ctx): Translations {
  const locale = getLocaleFromBrowser();
  return translations[locale];
}