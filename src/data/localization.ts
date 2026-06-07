export type Locale = "en" | "uk";

export const LOCALES: Locale[] = ["en", "uk"];

export type Localized<T> = Record<Locale, T>;

export type LocalizedText = Localized<string>;

export type LocalizedArray = Localized<string[]>;

export const localize = <T>(value: Localized<T>, locale: Locale) => value[locale];
