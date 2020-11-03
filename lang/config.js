import En from "./en-EN";
import De from "./de-DE";

export const I18N = {
    locales: ['En', 'De'],
    defaultLocale: 'En',
    vueI18n: {
      fallbackLocale: 'En',
      messages: { En, De }
    }
  }