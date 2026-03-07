import { component$, useContext, useSignal } from "@builder.io/qwik";
import { ArrowRightIcon } from "../icons/arrow-right";
import { GithubIcon } from "../icons/github";
import { LinkedInIcon } from "../icons/linkedin";
import { ServiceModal } from "../modal/service-modal";
import { $translate, I18nContext } from "~/i18n";

import type { TranslationKeys } from '~/i18n';

export interface Service {
    titleKey: TranslationKeys;
    descriptionKey: TranslationKeys;
    image: string;
}

const services: Service[] = [
    {
        titleKey: 'service.webDevelopment.title',
        descriptionKey: 'service.webDevelopment.description',
        image: '/images/services/web-development.jpg',
    },
    {
        titleKey: 'service.functionalDesign.title',
        descriptionKey: 'service.functionalDesign.description',
        image: '/images/services/functional-design.jpg',
    },
    {
        titleKey: 'service.systemArchitecture.title',
        descriptionKey: 'service.systemArchitecture.description',
        image: '/images/services/system-architecture.jpg',
    },
    {
        titleKey: 'service.rnd.title',
        descriptionKey: 'service.rnd.description',
        image: '/images/services/rnd-innovation.jpg',
    },
    {
        titleKey: 'service.devops.title',
        descriptionKey: 'service.devops.description',
        image: '/images/services/app-deployment.jpg',
    },
    {
        titleKey: 'service.projectManagement.title',
        descriptionKey: 'service.projectManagement.description',
        image: '/images/services/project-management.jpg',
    },
];

export default component$(() => {
    const locale = useContext(I18nContext);
    const t = (key: Parameters<typeof $translate>[1]) => $translate(locale.value, key);
    const isModalOpen = useSignal(false);
    const selectedService = useSignal<Service | null>(null);

    const start = new Date(2021, 3);
    const now = new Date();
    const years = now.getFullYear() - start.getFullYear() - (now.getMonth() < start.getMonth() ? 1 : 0);
    const hasExtra = now.getMonth() !== start.getMonth() || now.getDate() !== start.getDate();

    return (
        <>
            <div id='home' class='w-full font-body'>
                <div class="w-full bg-primary pt-32 pb-16 lg:py-0">
                    <div class="container lg:h-screen flex items-center mx-auto px-8 lg:px-12">
                        <div class="w-full flex flex-col lg:flex-row lg:justify-between">
                            <div class="w-full lg:w-1/2 order-2 lg:order-1 pt-14 lg:pt-12">
                                <div class="text-2xl font-bold text-secondary mb-3">{t('home.name')}</div>
                                <h3 class="text-xl lg:text-2xl font-[1000] uppercase mb-7">
                                    {t('home.title')}
                                    <span class="text-rotate text-secondary ml-2 text-lg lg:text-xl">
                                        <span>
                                            <span>🎨 {t('role.design')}</span>
                                            <span>⌨️ {t('role.develop')} 🌱 {t('role.buildGreen')}</span>
                                            <span>🏗️ {t('role.architect')}</span>
                                            <span>🔬 {t('role.research')}</span>
                                            <span>🚀 {t('role.deploy')}</span>
                                            <span>📋 {t('role.manage')}</span>
                                        </span>
                                    </span>
                                </h3>
                                <ul class="mb-7">
                                    {
                                        services.map((service, index) => (
                                            <li key={index} class="leading-loose text-lg">
                                                <span
                                                    class="peer hover:text-secondary cursor-pointer font-semibold"
                                                    onClick$={() => {
                                                        selectedService.value = service;
                                                        isModalOpen.value = true;
                                                    }}
                                                >
                                                    {t(service.titleKey)}
                                                </span>
                                                <ArrowRightIcon class="h-4 w-4 inline-block ml-2 arrow-icon peer-hover:duration-300 peer-hover:-rotate-45" />
                                            </li>
                                        ))
                                    }
                                </ul>
                                <div class="flex justify-around lg:justify-start">
                                    <div class="flex items-center w-auto ">
                                        <h3 class="font-bold text-5xl lg:text-6xl">{`${years}${hasExtra ? '+' : ''}`}</h3>
                                        <span class="ml-3 text-lg lg:text-xl font-semibold">
                                            {t('home.yearsOf')}{t('home.experience')}
                                        </span>
                                    </div>
                                    <div class="lg:pl-9 flex gap-4">
                                        <a href="https://github.com/fagnigue" target="_blank" rel="noopener noreferrer"><GithubIcon class="h-14 w-14" /></a>
                                        <a href="https://www.linkedin.com/in/n-djo-soro-coulibaly/" target="_blank" rel="noopener noreferrer"><LinkedInIcon class="h-14 w-14" /></a>
                                    </div>
                                </div>
                            </div>
                            <div class="w-full lg:w-1/2 order-1 lg:order-2 flex justify-center lg:justify-end">
                                <div class="relative w-80 h-96 lg:w-97.5 lg:h-125">
                                    <div class="absolute inset-0 hidden lg:block rounded-xl bg-secondary -rotate-6 -translate-x-10 translate-y-3.75"></div>
                                    <div class="relative w-full h-full rounded-xl bg-profile bg-no-repeat bg-center bg-cover lg:rotate-[8deg]"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <ServiceModal service={selectedService.value} isOpen={isModalOpen} />
        </>
    )
})