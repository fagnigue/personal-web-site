export type Locale = 'fr' | 'en';

export const DEFAULT_LOCALE: Locale = 'fr';

export const LOCALES: { code: Locale; label: string }[] = [
    { code: 'fr', label: 'FR' },
    { code: 'en', label: 'EN' },
];
