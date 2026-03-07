import { component$, Slot, useContextProvider, useSignal } from '@builder.io/qwik';
import { routeLoader$ } from '@builder.io/qwik-city';
import Footer from '~/components/footer/footer';
import { DEFAULT_LOCALE, I18nContext, type Locale } from '~/i18n';

import Header from '../components/header/header';

export const useServerTimeLoader = routeLoader$(() => {
  return {
    date: new Date(),
  };
});

export default component$(() => {
  const locale = useSignal<Locale>(DEFAULT_LOCALE);
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
