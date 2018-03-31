import I18n from 'react-native-i18n';
import sk from './sk';
import en from './en';

I18n.fallbacks = true;
I18n.defaultLocale = 'en-EN';
I18n.missingTranslation = key => key;

I18n.translations = {
  sk,
  en,
};

export default I18n;
