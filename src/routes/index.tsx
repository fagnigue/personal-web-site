import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import Contact from '~/components/contact/contact';
import Education from '~/components/education/education';
import Experience from '~/components/experience/experience';
import Home from '~/components/home/home';
import Skills from '~/components/skills/skills';

export default component$(() => {
  return (
    <div>
      <Home />
      <Experience />
      <Skills />
      <Education />
      <Contact />
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Fagnigue portfolio',
  meta: [
    {
      name: 'description',
      content: 'Personal portfolio site',
    },
  ],
};
