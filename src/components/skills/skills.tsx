import { component$, useContext } from "@builder.io/qwik";
import { $translate, I18nContext, type TranslationKeys } from "~/i18n";

interface SkillCategory {
    labelKey: TranslationKeys;
    skills: string[];
}

const skillCategories: SkillCategory[] = [
    {
        labelKey: 'skills.frontend',
        skills: ['React', 'Next.js', 'Vue.js 3', 'Angular', 'TypeScript', 'Tailwind CSS'],
    },
    {
        labelKey: 'skills.backend',
        skills: ['Node.js', 'NestJS', 'Spring Boot', 'FastAPI', 'PHP/Symfony'],
    },
    {
        labelKey: 'skills.database',
        skills: ['PostgreSQL', 'MySQL', 'Oracle DB'],
    },
    {
        labelKey: 'skills.infrastructure',
        skills: ['AWS', 'Azure', 'Redis', 'Docker', 'Git', 'CI/CD', 'Agile', 'Scrum', 'Nginx', 'Apache', 'DDD', 'Tests unitaires'],
    },
    {
        labelKey: 'skills.softskills',
        skills: ['Esprit d\'équipe', 'Autonomie', 'Adaptation rapide', 'Polyvalence', 'Curiosité', 'Sens de l\'organisation'],
    },
];

export default component$(() => {
    const locale = useContext(I18nContext);
    const t = (key: TranslationKeys) => $translate(locale.value, key);

    return (
        <div id="skills" class="w-full font-body">
            <div class="py-8 lg:py-28 bg-primary">
                <div class="container mx-auto px-8 lg:px-12">
                    <div class="mb-12">
                        <span class="text-secondary text-base lg:text-lg font-medium">{t('skills.label')}</span>
                        <h3 class="text-2xl lg:text-3xl font-extrabold uppercase mt-1 lg:mt-2.5">{t('skills.title')}</h3>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {skillCategories.map((category, i) => (
                            <div key={i} class="group">
                                <h4 class="text-lg font-bold text-secondary mb-4">{t(category.labelKey)}</h4>
                                <div class="flex flex-wrap gap-2">
                                    {category.skills.map((skill, j) => (
                                        <span
                                            key={j}
                                            class="px-3 py-1.5 text-sm font-medium bg-primary rounded-lg border border-zinc-200 hover:border-secondary hover:text-secondary transition-colors"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
});
