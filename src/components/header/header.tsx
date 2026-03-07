import { component$, useContext, useSignal, useStylesScoped$, } from '@builder.io/qwik';
import { CloseIcon } from '../icons/close';
import { MenuIcon } from '../icons/menu';
import { MenuCenterLeftIcon } from '../icons/menu-center-left';
import { $translate, I18nContext, LOCALES, type TranslationKeys } from '~/i18n';
import styles from './header.css?inline';

const NAV_KEYS: { key: TranslationKeys; anchor: string }[] = [
  { key: 'nav.home', anchor: 'home' },
  { key: 'nav.skills', anchor: 'skills' },
  { key: 'nav.timeline', anchor: 'timeline' },
  { key: 'nav.education', anchor: 'education' },
  { key: 'nav.contact', anchor: 'contact' },
];

export default component$(() => {
  useStylesScoped$(styles);
  const locale = useContext(I18nContext);
  const t = (key: TranslationKeys) => $translate(locale.value, key);
  const isOpenMenu = useSignal(true);
  const isMobileOpenMenu = useSignal(false);
  const scroll = useSignal(false);


  return (
    <header
      window:onScroll$={() => (scroll.value = window.scrollY > 85 ? true : false)}>
      <div class="w-full h-auto z-10 fixed">
        <div class={`${scroll.value ? 'bg-white' : 'bg-white lg:bg-primary'} border-b lg:border-0 w-full h-auto flex justify-between px-7 lg:px-16 py-3 lg:py-6`}>
          <div>
            <a href="/" class="text-3xl lg:text-3xl font-bold">Fagnigué</a>
          </div>
          <div class="flex items-center">
            <div class="hidden lg:flex items-center mr-4">
              {LOCALES.map((l) => (
                <button
                  key={l.code}
                  class={`px-2 py-1 text-sm font-semibold rounded transition-colors ${
                    locale.value === l.code
                      ? 'bg-secondary text-white'
                      : 'text-black hover:text-secondary'
                  }`}
                  onClick$={() => (locale.value = l.code)}
                >
                  {l.label}
                </button>
              ))}
            </div>
            <div class={`${isOpenMenu.value ? 'visible' : 'invisible'} hidden lg:block`}>
              {
                NAV_KEYS.map((nav, index) => {
                  return (
                    <a href={`#${nav.anchor}`} key={index} class="mr-6 text-lg">{t(nav.key)}</a>
                  )
                })
              }
            </div>
            {isOpenMenu.value 
              ? <CloseIcon class='hidden h-8 w-8 text-4xl lg:block lg:cursor-pointer' menuSignal={isOpenMenu}/> 
              : <MenuIcon class='hidden h-8 w-8 lg:block lg:cursor-pointer' menuSignal={isOpenMenu}/> }

            {isMobileOpenMenu.value 
              ? <CloseIcon class='h-8 w-8 block lg:hidden' menuSignal={isMobileOpenMenu}/> 
              : <MenuCenterLeftIcon class='h-8 w-8 block lg:hidden' menuSignal={isMobileOpenMenu}/> }
          </div>
        </div>
        <div class={`${isMobileOpenMenu.value ? 'block' : 'hidden'} bg-white pt-2 w-full z-20 lg:hidden`}>
              <div class="flex gap-2 pl-7 pb-3 border-b border-zinc-100 mb-2">
                {LOCALES.map((l) => (
                  <button
                    key={l.code}
                    class={`px-3 py-1 text-sm font-semibold rounded transition-colors ${
                      locale.value === l.code
                        ? 'bg-secondary text-white'
                        : 'text-black hover:text-secondary'
                    }`}
                    onClick$={() => (locale.value = l.code)}
                  >
                    {l.label}
                  </button>
                ))}
              </div>
              {
                NAV_KEYS.map((nav, index) => {
                  return (
                    <div key={index} class="block w-full pb-2 pl-7">
                      <a href={`#${nav.anchor}`} key={index} class="mr-6 text-lg ">{t(nav.key)}</a>
                    </div>
                  )
                })
              }
        </div>
      </div>
    </header>
  );
});