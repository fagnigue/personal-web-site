import { createContextId, type Signal } from '@builder.io/qwik';
import type { Locale } from './config';
import { fr } from './fr';
import { en } from './en';

export type TranslationKeys = keyof typeof fr;

const translations = { fr, en } as const;

export const I18nContext = createContextId<Signal<Locale>>('i18n-context');

export function $translate(locale: Locale, key: TranslationKeys): string {
    return translations[locale][key] ?? key;
}

export { type Locale } from './config';
export { DEFAULT_LOCALE, LOCALES } from './config';
