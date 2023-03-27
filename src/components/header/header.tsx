import { component$, useSignal, useStylesScoped$, } from '@builder.io/qwik';
import { CloseIcon } from '../icons/close';
import { MenuIcon } from '../icons/menu';
import { MenuCenterLeftIcon } from '../icons/menu-center-left';
import styles from './header.css?inline';

export default component$(() => {
  useStylesScoped$(styles);
  const menuOptions = ['Home', 'Portfolio', 'Skills', 'Timeline', 'Blog', 'Contact'];
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
            <div class={`${isOpenMenu.value ? 'visible' : 'invisible'} hidden lg:block`}>
              {
                menuOptions.map((option, index) => {
                  return (
                    <a href={`#${option.toLowerCase()}`} key={index} class="mr-6 text-lg">{option}</a>
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
              {
                menuOptions.map((option, index) => {
                  return (
                    <div class="block w-full pb-2 pl-7">
                      <a href={`#${option.toLowerCase()}`} key={index} class="mr-6 text-lg ">{option}</a>
                    </div>
                  )
                })
              }
        </div>
      </div>
    </header>
  );
});