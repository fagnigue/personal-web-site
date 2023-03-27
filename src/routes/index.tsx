import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import Contact from '~/components/contact/contact';
import Home from '~/components/home/home';

export default component$(() => {
  return (
    <div>
      <Home />
      <Contact />
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Fagnigue',
  meta: [
    {
      name: 'description',
      content: 'Personal site',
    },
  ],
};
