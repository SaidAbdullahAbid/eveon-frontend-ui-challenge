import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    en: {
        translation: {
            hero: {
                title: 'Welcome to the Product Library',
                subtitle: 'Showcase your content in any direction or theme.',
                cta: 'Get Started',
            },
            card: {
                button: 'Learn More',
            },
            toggle: {
                theme: 'Toggle Theme',
                rtl: 'Toggle RTL',
            },
        },
    },
    ar: {
        translation: {
            hero: {
                title: 'مرحبًا بكم في مكتبة المنتجات',
                subtitle: 'اعرض المحتوى الخاص بك بأي اتجاه أو سمة.',
                cta: 'ابدأ الآن',
            },
            card: {
                button: 'اعرف المزيد',
            },
            toggle: {
                theme: 'تبديل السمة',
                rtl: 'تبديل الاتجاه',
            },
        },
    },
};

i18n.use(initReactI18next).init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;
