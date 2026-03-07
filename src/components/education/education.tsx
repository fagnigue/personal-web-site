import { component$, useContext } from "@builder.io/qwik";
import { $translate, I18nContext, type TranslationKeys } from "~/i18n";

interface Education {
    titleKey: TranslationKeys;
    schoolKey: TranslationKeys;
    locationKey: TranslationKeys;
    periodKey: TranslationKeys;
}

const educations: Education[] = [
    {
        titleKey: 'education.edu1.title',
        schoolKey: 'education.edu1.school',
        locationKey: 'education.edu1.location',
        periodKey: 'education.edu1.period',
    },
    {
        titleKey: 'education.edu2.title',
        schoolKey: 'education.edu2.school',
        locationKey: 'education.edu2.location',
        periodKey: 'education.edu2.period',
    },
    {
        titleKey: 'education.edu3.title',
        schoolKey: 'education.edu3.school',
        locationKey: 'education.edu3.location',
        periodKey: 'education.edu3.period',
    },
];

export default component$(() => {
    const locale = useContext(I18nContext);
    const t = (key: TranslationKeys) => $translate(locale.value, key);

    return (
        <div id="education" class="w-full font-body">
            <div class="py-8 lg:py-28 bg-white">
                <div class="container mx-auto px-8 lg:px-12">
                    <div class="mb-12">
                        <span class="text-secondary text-base lg:text-lg font-medium">{t('education.label')}</span>
                        <h3 class="text-2xl lg:text-3xl font-extrabold uppercase mt-1 lg:mt-2.5">{t('education.title')}</h3>
                    </div>
                    <ul class="timeline timeline-snap-icon timeline-vertical max-md:timeline-compact">
                        {educations.map((edu, i) => (
                            <li key={i}>
                                {i > 0 && <hr class="bg-secondary" />}
                                <div class={`${i % 2 === 0 ? 'timeline-start' : 'timeline-end'} mb-10 ${i % 2 === 0 ? 'md:text-end' : ''}`}>
                                    <time class="font-mono text-sm text-zinc-400">{t(edu.periodKey)}</time>
                                    <div class="text-lg font-bold">{t(edu.titleKey)}</div>
                                    <div class="text-secondary font-semibold text-sm">{t(edu.schoolKey)}</div>
                                    <div class="text-zinc-500 text-sm">{t(edu.locationKey)}</div>
                                </div>
                                <div class="timeline-middle">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5 text-secondary">
                                        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.547l1.657.71a2.998 2.998 0 002.686 0l1.657-.71v3.547a9.026 9.026 0 00-2.3 1.638z" />
                                    </svg>
                                </div>
                                {i < educations.length - 1 && <hr class="bg-secondary" />}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
});
