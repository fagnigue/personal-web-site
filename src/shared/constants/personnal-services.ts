import type { TranslationKeys } from '~/i18n';

export interface Service {
    titleKey: TranslationKeys;
    descriptionKey: TranslationKeys;
    image: string;
}

export const services: Service[] = [
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