import type { RenderConfigScreenCtx, RenderFieldExtensionCtx } from "datocms-plugin-sdk";
import { translations, type Locale, type Translations } from "./translations";

type Ctx = RenderConfigScreenCtx | RenderFieldExtensionCtx;

/**
 * Detects the locale from DatoCMS context
 */
function getLocaleFromContext(ctx: Ctx): Locale {
  const uiLocale = ctx.ui.locale.toLowerCase();

  if (uiLocale.startsWith("fr")) {
    return "fr";
  }

  // Default to English
  return "en";
}

/**
 * Hook to get translations based on the DatoCMS user's preferred locale
 */
export function useTranslations(ctx: Ctx): Translations {
  const locale = getLocaleFromContext(ctx);
  return translations[locale];
}