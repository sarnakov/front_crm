/*=========================================================================================
  File Name: sidebarItems.js
  Description: Sidebar Items list. Add / Remove menu items from here.
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

export default [
  {
    url: "/monitoring",
    name: "Мониторинг",
    slug: "monitoring",
    icon: "GridIcon"
  },
  {
    url: null,
    name: "Тур продукты",
    slug: "tour-products",
    icon: "CompassIcon",
    submenu: [
      {
        url: "/tours/avia",
        name: "Авиа",
        slug: "avia"
      },
      {
        url: "/tours/hotels",
        name: "Отели",
        slug: "hotel"
      },
      {
        url: "/tours/excursions",
        name: "Экскурсионные",
        slug: "excursions"
      },
      {
        url: "/tours/transfer",
        name: "Трансферы",
        slug: "transfers"
      },
      {
        url: "/tours/hotel",
        name: "Доп. услуги",
        slug: "hotel-additional"
      }
    ]
  },
  {
    url: null,
    name: "Партнеры",
    slug: "partners",
    icon: "PackageIcon",
    submenu: [
      {
        url: "/partners/insurance/archive",
        name: "Страхование",
        slug: "hotel-additional"
      },
      {
        url: "/partners/geography",
        name: "География",
        slug: "hotel-additional"
      },
      {
        url: "/partners/providers",
        name: "Поставщики",
        slug: "providers"
      },
      {
        url: "/partners/penalty",
        name: "Штрафы за изменения",
        slug: "hotel-additional"
      }
    ]
  },
  {
    url: "/interaction",
    name: "Взаимодействие",
    slug: "interaction",
    icon: "TrelloIcon"
    // icon: "GitPullRequestIcon"
  },
  {
    url: "/clients",
    name: "Клиенты",
    slug: "clients",
    icon: "UserIcon"
  },
  {
    url: null,
    name: "Агенты",
    slug: "agents",
    icon: "UsersIcon",
    submenu: [
      {
        url: "/agents",
        name: "Все агенты",
        slug: "agents"
      },
      {
        url: "/agents/new",
        name: "Добавить агента",
        slug: "agents-new"
      },
      {
        url: "/agents/requests",
        name: "Заявки на регистрацию",
        slug: "agents-requests"
      },
      {
        url: "/agents/pools",
        name: "Сети агентств",
        slug: "agents-pools"
      },
      {
        url: "/agents/black-list",
        name: "Черный список",
        slug: "agents-black-list"
      }
    ]
  },
  {
    url: null,
    name: "Взаиморасчеты",
    slug: "accounting",
    icon: "ClipboardIcon",
    submenu: [
      {
        url: "/accounting/dashboard",
        name: "Дашборд",
        slug: "accounting-dashboard"
      },
      {
        url: "/accounting/providers",
        name: "Поставщики",
        slug: "accounting-providers"
      },
      {
        url: "/accounting/buyers",
        name: "Покупатели",
        slug: "accounting-buyers"
      },
      {
        url: "/accounting/payments",
        name: "Сверка оплат",
        slug: "accounting-payments"
      },
      {
        url: "/accounting/templates",
        name: "Шаблоны документов",
        slug: "accounting-templates"
      }
    ]
  },
  {
    url: null,
    name: "Маркетинг",
    slug: "marketing",
    icon: "TargetIcon",
    submenu: [
      {
        url: "/marketing/calendar",
        name: "Календарь мероприятий",
        slug: "calendar"
      },
      {
        url: "/marketing/faq",
        name: "Вопросы и ответы",
        slug: "faq"
      },
      {
        url: "/marketing/video-advert",
        name: "Видеореклама",
        slug: "video-advert"
      },
      {
        url: "/marketing/advert",
        name: "Рекламные материалы",
        slug: "advert"
      },
      {
        url: "/marketing/notifications",
        name: "Уведомления",
        slug: "notifications"
      },
      {
        url: "/marketing/video-training",
        name: "Видео-обучение",
        slug: "video-training"
      },
    ]
  },
  {
    url: null,
    name: "Настройки",
    slug: "settings",
    icon: "SettingsIcon",
    submenu: [
      {
        url: "/settings/common",
        name: "Основные",
        slug: "settings-common"
      },
      {
        url: "/settings/other",
        name: "Другие",
        slug: "settings-other"
      },{
        url: "/settings/logs",
        name: "Логи действий",
        slug: "logs"
      },
      {
        url: "/settings/currency",
        name: "Курс валют",
        slug: "currency-rate"
      },

    ]
  }
];
