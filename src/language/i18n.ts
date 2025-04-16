import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

i18n.use(initReactI18next).init({
    debug: true,
    fallbackLng: 'en',
    resources: {
        en: {
					translation: {
            helloWorld: "Hello World!",
						
						footer: {
							cart: "Cart",
							favourite: "Favourites",
							contacts: "Contacts",
							terms: "Terms of Service",
						},
					}
        },
        ru: {
					translation: {
            helloWorld: "Привет Мир!",

						footer: {
							cart: "Корзина",
							favourite: "Избранное",
							contacts: "Контакты",
							terms: "Условия сервиса",
						},
					}
        },
        kz: {
					translation: {
            helloWorld: "Сәлем Әлем!",

						footer: {
							cart: "Себет",
							favourite: "Таңдаулылар",
							contacts: "Байланыс",
							terms: "Қызмет шарттары",
						},
					}
        }
    }
});

export default i18n;