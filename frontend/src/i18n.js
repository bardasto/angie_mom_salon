import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector) // определяет язык пользователя
  .use(initReactI18next) // передает i18n экземпляр в react-i18next
  .init({
    debug: true, // Включаем логи в консоль для отладки
    fallbackLng: 'en', // Язык по умолчанию, если язык пользователя недоступен
    interpolation: {
      escapeValue: false, // не нужно для React
    },
    resources: {
      // --- АНГЛИЙСКИЙ ЯЗЫК ---
      en: {
        translation: {
          // Header
          nav_services: 'Services',
          nav_contacts: 'Contacts',
          nav_book: 'Book now',
          // Hero
          hero_title: 'Perfect nails, \n designed for you',
          hero_subtitle: 'Discover the world of beauty and care. Entrust your hands to professionals.',
          hero_cta: 'Book online',
          portfolio_title: 'Our Works',
          master_title: 'Our Master',
          master_name: 'Ksenia Harbuzova',
          master_description: 'Ksenia is a certified nail artist with over 8 years of experience. Her passion for detail and commitment to hygiene ensure that every client leaves with a flawless and long-lasting manicure.',
              
          footer_find_us: 'Find us',
          footer_book_call: 'Book a call'
        }
      },
      // --- УКРАИНСКИЙ ЯЗЫК ---
      uk: {
        translation: {
          // Header
          nav_services: 'Послуги',
          nav_contacts: 'Контакти',
          nav_book: 'Записатись',
          // Hero
          hero_title: 'Ідеальний манікюр, \n створений для вас',
          hero_subtitle: 'Відкрийте для себе світ краси та догляду. Довірте свої руки професіоналам.',
          hero_cta: 'Записатись онлайн',
          portfolio_title: 'Наші Роботи',
              // Master
          master_title: 'Наш Майстер',
          master_name: 'Ксенія Гарбузова',
          master_description: 'Ксенія — сертифікований майстер нігтьового сервісу з досвідом понад 8 років. Її увага до деталей та відданість гігієні гарантують, що кожен клієнт отримає бездоганний та стійкий манікюр.',
              // Footer
          footer_find_us: 'Знайдіть нас',
          footer_book_call: 'Записатись на дзвінок'

        }
      },
      // --- СЛОВАЦКИЙ ЯЗЫК ---
      sk: {
        translation: {
          // Header
          nav_services: 'Služby',
          nav_contacts: 'Kontakty',
          nav_book: 'Objednať sa',
          // Hero
          hero_title: 'Dokonalá manikúra, \n navrhnutá pre vás',
          hero_subtitle: 'Objavte svet krásy a starostlivosti. Zverte svoje ruky profesionálom.',
          hero_cta: 'Objednať sa online',
          portfolio_title: 'Naše Práce',
          // Master
          master_title: 'Naša Majsterka',
          master_name: 'Ksenia Harbuzová',
          master_description: 'Ksenia je certifikovaná nechtová dizajnérka s viac ako 8-ročnými skúsenosťami. Jej vášeň pre detail a dôraz na hygienu zaručujú, že každý klient odchádza s bezchybnou a dlhotrvajúcou manikúrou.',
          // Footer
          footer_find_us: 'Nájdite nás',
          footer_book_call: 'Objednať hovor'
        }
      }
    }
  });

export default i18n;
