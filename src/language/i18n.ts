import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

i18n.use(initReactI18next).init({
    debug: true,
    fallbackLng: 'en',
    resources: {
        en: {
					translation: {
            helloWorld: "Hello World!",
						currency: "$",
						
						footer: {
							cart: "Cart",
							favourite: "Favourites",
							contacts: "Contacts",
							terms: "Terms of Service",
						},
						products: {
							buy: "Buy",
							wirelessHeadphones: "Wireless Headphones",
							headphones: "Headphones",
						},
						offline: {
							status: "You're offline",
							message: "Please check your internet connection.",
						},
					}
        },
        ru: {
					translation: {
            helloWorld: "Привет Мир!",
						currency: "₽",

						footer: {
							cart: "Корзина",
							favourite: "Избранное",
							contacts: "Контакты",
							terms: "Условия сервиса",
						},
						products: {
							buy: "Купить",
							wirelessHeadphones: "Беспроводные наушники",
							headphones: "Наушники",
						},
						offline: {
							status: "Вы не в сети",
							message: "Пожалуйста, проверьте подключение к интернету.",
						},
					}
        },
        kz: {
					translation: {
            helloWorld: "Сәлем Әлем!",
						currency: "₸",

						footer: {
							cart: "Себет",
							favourite: "Таңдаулылар",
							contacts: "Байланыс",
							terms: "Қызмет шарттары",
						},
						products: {
							buy: "Сатып алу",
							wirelessHeadphones: "Сымсыз құлаққаптар",
							headphones: "Құлаққаптар",
						},
						offline: {
							status: "Сіз желіден тыссыз",
							message: "Интернет қосылымын тексеріңіз.",
						},
					}
        }
    }
});

export default i18n;