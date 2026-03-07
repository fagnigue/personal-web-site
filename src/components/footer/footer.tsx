import { component$, useContext, useStylesScoped$ } from "@builder.io/qwik";
import { useServerTimeLoader } from "~/routes/layout";
import { $translate, I18nContext } from "~/i18n";
import styles from './footer.css?inline';

export default component$(() => {
    useStylesScoped$(styles);
    const locale = useContext(I18nContext);
    const signal = useServerTimeLoader();

  return (
    <footer class="w-full h-24 bg-slate-900 text-white font-body font-light text-lg">
            <div class="flex h-full ml-14 lg:ml-32 items-center">
                <label class="text-sm lg:text-base">Copyright &copy; {signal.value.date.getFullYear()}. {$translate(locale.value, 'footer.copyright')}</label>
            </div>
    </footer>
  );
});