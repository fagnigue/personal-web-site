import { component$, Slot, useContextProvider, useSignal, useVisibleTask$ } from '@builder.io/qwik';
import { routeLoader$, useLocation } from '@builder.io/qwik-city';
import Footer from '~/components/footer/footer';
import { DEFAULT_LOCALE, I18nContext, type Locale } from '~/i18n';

import Header from '../components/header/header';

export const useServerTimeLoader = routeLoader$(() => {
  return {
    date: new Date(),
  };
});

export default component$(() => {
  const loc = useLocation();
  const qLocale = loc.url.searchParams.get('locale');
  const initial: Locale = qLocale === 'en' ? 'en' : qLocale === 'fr' ? 'fr' : DEFAULT_LOCALE;
  const locale = useSignal<Locale>(initial);

  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(({ track }) => {
    const l = track(() => locale.value);
    const url = new URL(window.location.href);
    url.searchParams.set('locale', l);
    window.history.replaceState({}, '', url.toString());
  });

  useContextProvider(I18nContext, locale);

  return (
    <>
      <main>
        <Header />
        <section>
          <Slot />
        </section>
        <Footer />
      </main>
    </>
  );
});
