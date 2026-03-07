import { component$, useContext } from "@builder.io/qwik";
import { $translate, I18nContext, type TranslationKeys } from "~/i18n";

interface Experience {
    titleKey: TranslationKeys;
    companyKey: TranslationKeys;
    periodKey: TranslationKeys;
    descriptionKey: TranslationKeys;
}

const experiences: Experience[] = [
    {
        titleKey: 'timeline.exp1.title',
        companyKey: 'timeline.exp1.company',
        periodKey: 'timeline.exp1.period',
        descriptionKey: 'timeline.exp1.description',
    },
    {
        titleKey: 'timeline.exp2.title',
        companyKey: 'timeline.exp2.company',
        periodKey: 'timeline.exp2.period',
        descriptionKey: 'timeline.exp2.description',
    },
    {
        titleKey: 'timeline.exp3.title',
        companyKey: 'timeline.exp3.company',
        periodKey: 'timeline.exp3.period',
        descriptionKey: 'timeline.exp3.description',
    },
    {
        titleKey: 'timeline.exp4.title',
        companyKey: 'timeline.exp4.company',
        periodKey: 'timeline.exp4.period',
        descriptionKey: 'timeline.exp4.description',
    },
];

export default component$(() => {
    const locale = useContext(I18nContext);
    const t = (key: TranslationKeys) => $translate(locale.value, key);

    return (
        <div id="timeline" class="w-full font-body">
            <div class="py-24 lg:py-32 bg-primary">
                <div class="container mx-auto px-8 lg:px-12">
                    <div class="mb-12">
                        <span class="text-secondary text-base lg:text-lg font-medium">{t('timeline.label')}</span>
                        <h3 class="text-2xl lg:text-3xl font-extrabold uppercase mt-1 lg:mt-2.5">{t('timeline.title')}</h3>
                    </div>
                    <ul class="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                        {experiences.map((exp, i) => (
                            <li key={i}>
                                {i > 0 && <hr class="bg-secondary" />}
                                <div class="timeline-middle">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5 text-secondary">
                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
                                    </svg>
                                </div>
                                <div class={i % 2 === 0 ? 'timeline-start mb-10 md:text-end' : 'timeline-end md:mb-10'}>
                                    <time class="font-mono italic text-sm text-zinc-400">{t(exp.periodKey)}</time>
                                    <div class="text-lg font-black">{t(exp.titleKey)}</div>
                                    <div class="text-secondary font-semibold text-sm mb-2">{t(exp.companyKey)}</div>
                                    <div
                                        class="service-description text-zinc-500 text-sm leading-relaxed"
                                        dangerouslySetInnerHTML={t(exp.descriptionKey)}
                                    />
                                </div>
                                {i < experiences.length - 1 && <hr class="bg-secondary" />}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
});
