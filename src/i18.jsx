import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    uz: {
      translation: {
        news: "Yangiliklar",
        NEWS_BIG: "YANGILIKLAR",
        services_BIG: "XIZMATLAR",
        workers_BIG: "HODIMLAR",
        services: "Xizmatlar",
        ipro_about: "IPRO haqida",
        workers: "Hodimlar",
        vacancies: "Vakansiyalar",
        about: "Biz Haqimizda",
        contact: "Bog'lanish",
        search: "Qidirish",
        language: "Tilni o'zgartirish",
        hero_title: "IT mutaxassislaridan qulayliklarni",
        hero_subtitle: "taklif qilamiz",
        contact: "Bog’lanish",
        company_name: "IPIMM professional group",
        companyname: "Firma nomi",
        news_title: "Yangiliklar",
        news_button: "Batafsil",
        news_date: "10.11.2023",
        news_description:
          "Internetga 200 mingdan ortiq o‘zbekistonlik foydalanuvchilarning ma’lumotlari sizdirildi. Kun.uz bilan gaplashgan mutaxassislarga ko‘ra, sizdirilgan parollar – OneID, DTM.",
        services_title: "Xizmatlarimiz",
        order_button: "Buyurtma berish",
        details_button: "Batafsil",
        safe: "XAVFSIZ",
        grow: "RIVOJLANTIRING",
        market: "o’rningizni EGALLANG",
        right_choice: "ADASHMADINGIZ",
        with_us: "Biz bilan barchasi",
        improve_business: "Biznesingizni yanada",
        take_place: "Dunyo bozorida o’z",
        choose_us: "SIZ bizni tanlab",
        marquee_text:
          "IT xizmatlarimiz doimiy ravishda yangilanib turadi, yangi texnologiyalar va tizimlar foydalanishga tayyor bo'lib turadi",
        workers_title: "Hodimlar",
        workers_all: "Barchasi →",
        contact: "Bog’laning",
        address: "O'zbekiston, Andijon, A.Fitrat ko'chasi 8",
        links: "Linklar",
        social_media: "Ijtimoiy tarmoqlar",
        // Lavozimlar
        graphic_designer: "Grafik dizayner",
        web_developer: "Web dasturchi",
        backend_developer: "Backend dasturchi",
        ui_ux_designer: "UI/UX dizayner",
        project_manager: "Loyiha menejeri",
        marketing_specialist: "Marketing mutaxassisi",
        qa_engineer: "QA muhandisi",
        devops_engineer: "DevOps muhandisi",
        business_analyst: "Biznes analitik",
        frontend_developer: "Frontend dasturchi",
        data_scientist: "Ma'lumotlar olimi",
        hr_manager: "HR menejeri",
        moution_designe: "Moushen Dizayn",
        video_montage: "Video Montaj",
        telegram_bot: "Telegram Bot",
        programming: "Dasturlash",
        mobile_applications: "Mobile ilovalar",
        targeting: "Targeting",
        marketing: "Marketing",

        // Ta'riflar
        malika_description:
          "Malika 2020-yildan beri grafik dizayn sohasida ishlaydi.",
        abdurauf_description:
          "Abdurauf web dasturchi sifatida 5 yillik tajribaga ega.",
        jamshid_description:
          "Jamshid backend dasturchi sifatida murakkab tizimlarni ishlab chiqadi.",
        dilnoza_description:
          "Dilnoza foydalanuvchi interfeysi va tajribasini yaxshilash ustida ishlaydi.",
        sherzod_description:
          "Sherzod loyihalarni boshqarish va jamoani yetaklash bilan shug‘ullanadi.",
        aziza_description:
          "Aziza marketing strategiyalarini ishlab chiqish bilan shug‘ullanadi.",
        akbar_description:
          "Akbar dasturlar sifatini tekshirish va xatolarni topish bilan shug‘ullanadi.",
        farrux_description:
          "Farrux server va infratuzilmani avtomatlashtirish ustida ishlaydi.",
        mohira_description:
          "Mohira biznes talablarini tahlil qilish va hujjatlashtirish bilan shug‘ullanadi.",
        otabek_description:
          "Otabek zamonaviy frontend texnologiyalari bilan ishlaydi.",
        alisher_description:
          "Alisher katta ma'lumotlar bilan ishlash va tahlil qilishga ixtisoslashgan.",
        laylo_description: "Laylo kompaniya HR jarayonlarini boshqaradi.",

        ui_ux_designerDes:
          "Loyiha Mindmapini ishlab chiqish va ushbu arxetektura asosida optimal yechimga ega dizaynlarni chizish",
        graphic_designerDes:
          "Tasvirlar, grafikalar, va matnlar orqali axborotni yaratishda va o'zlashtirishda ishlatiluvchi san'at va texnologiyalarni jamlagan jarayon",
        SMMDes:
          "Ijtimoiy media boshqaruv usullari orqali internet platformalarida reklama qilish",
        promo_videoDes:
          "Bu videolar, ko'rsatilayotgan ma'lumotlarni, xizmat yoki mahsulotning afzalliklarini o'z ichiga oladi va uni muvaffaqiyatli ravishda turli ko'ruvchilarga taqdim etish uchun yaratiladi",
        moution_designeDescript:
          "Muhiti va innovatsiyani grafik dizaynda jamlab beruvchi yaratuvchi dasturlash va dizayn kompaniyasi",
        video_montageDes:
          "Videolarni tahrirlash, qo'llab-quvvatlash, va birlashtirishda ishlatiladigan texnika",
        telegram_botDes:
          "Telegram messenjerida ishlaydigan avtomatlashtirilgan dasturlar, ularga habarlar, ma'lumotlar, va boshqa tadbirlar orqali javob berishlari uchun sozlanganlar",
        programmingDescript:
          "Kompyuterlar yoki mobil qurilmalar uchun dasturlar yaratish va ulardan foydalanish texnikasi",
        mobile_applicationsDes:
          "Istalgan qiyinchilikdagi mobil ilovalarni ishlab chiqish va ularni texnik qo’llab quvvatlash",
        SEODes:
          "Telegram messenjerida ishlaydigan avtomatlashtirilgan dasturlar, ularga habarlar, ma'lumotlar, va boshqa tadbirlar orqali javob berishlari uchun sozlanganlar",
        targetingDes:
          "Kompyuterlar yoki mobil qurilmalar uchun dasturlar yaratish va ulardan foydalanish texnikasi",
        marketingDes:
          "Istalgan qiyinchilikdagi mobil ilovalarni ishlab chiqish va ularni texnik qo’llab quvvatlash",
        carusel_card_description:
          "Bu soha bo’yicha batafsil ma’lumotni bilib oling.Videoni tomosha qiling",
        open_text: `Internetga 200 mingdan ortiq o‘zbekistonlik foydalanuvchilarning ma’lumotlari sizdirildi. Kun.uz bilan gaplashgan mutaxassislarga ko‘ra, sizdirilgan parollar – OneID, DTM, ko‘plab Internetga 200 mingdan ortiq o‘zbekistonlik foydalanuvchilarning ma’lumotlari sizdirildi. Kun.uz bilan gaplashgan mutaxassislarga ko‘ra, sizdirilgan parollar – OneID, DTM ko‘plabInternetga 200 mingdan ortiq o‘zbekistonlik foydalanuvchilarning ma’lumotlari sizdirildi. Kun.uz bilan gaplashgan mutaxassislarga ko‘ra, sizdirilgan parollar – OneID, DTM.`,

        text_description: ` Internetga 200 mingdan ortiq o‘zbekistonlik foydalanuvchilarning ma’lumotlari sizdirildi. Kun.uz bilan gaplashgan mutaxassislarga ko‘ra, sizdirilgan parollar – OneID, DTM Internetga 200 mingdan ortiq o‘zbekistonlik`,
        text_about: `iPRO IT and M&M group ga 2021-yil 22-iyul sanasida asos solingan. Shu kundan boshlab professional ish faoliyatini boshlagan. Shu kungacha ko'plab brenlar bilan ishlagan va <br />ishlab kelmoqda! Kompaniya tashkil etilgan paytda jamoa atigi 10 kishidan iborat edi, endilikda esa jamoada +100 mutaxassislar faoliyat olib boradi. Bu odamlar kompaniya maqsadiga ishonib, loyihaning rivojlanishiga hissa qo'shishga intilishdi. Bugungi kunga qadar bu odamlar kompaniyaga sodiq qolgan holda, o'z jamoalarini turli yo'nalishlarda (Backend, Frontend, QA, Mobile, Analytics, Marketing Team va boshqalar) rivojlantirib kelmoqdalar.iPRO IT and M&M group ga 2021-yil 22-iyul sanasida asos solingan. Shu kundan boshlab professional ish faoliyatini boshlagan. Shu kungacha ko'plab brenlar bilan ishlagan va ishlab kelmoqda!`,

        // /////////////////////////////////////////////////////////////
        employees_title: "Hodimlar",
        join_our_team: "BIZNING JAMOADA BO’LISHNI ISTAYSIZMI?",
        full_name: "Ism/Familiya",
        region: "Viloyat",
        salary: "Ish haqi",
        profession: "Kasb turi",
        level: "Daraja",
        employment_type: "Bandlik turi",
        phone_number: "Telefon raqami",
        service_type: "Xizmat turi",
        comentary: "Izoh",
        portfolio: "Portfolio",
        upload_cv: "CV joylash",
        submit: "Yuborish",
        Ordering: "Buyurtma berish",
        Detail: "Batafsil",
        Projects: "Loyihalar",
        Partners: "Hamkorlik",
        achievements: "HODIMLAR",
        Year: "Yil",
        send: "Yuborish",
        text_support: "IT sohasida xalqaro standartlarni qo'llab-quvvatlaymiz",
        card_text_1:
          "Bizning IT xizmatlarimiz foydalanish uchun oddiy va qulay",
        card_text_2:
          "Kompaniyamiz doimiy ravishda xizmat sifatini oshirishga intilamiz",
        card_text_3:
          "Mijozlarni IT muammolari bo‘yicha yuqori saviyaga ega texnik yordam bermoqdamiz",
        card_text_4: "Mijozlarimizga eng yaxshi va tezkor yordam bermoqdamiz",
        card_text_5:
          "Texnologiyalar sohasida biz innovatsion yondashuvlarni amalga oshiramiz",
        card_text_6:
          "Biz IT muammolari uchun operativ yechimlarni taqdim etamiz",
        adversiting: "Frontend dasturchisi-VueJS, Javascript, React (Junior)",
        days: "DUSHANBA-SHANBA",
        Samarqand: "Samarqand",
        Toshkent: "Toshkent",
        Fargona: "Farg'ona",
        Andijon: "Andijon",
        Xorazm: "Xorazm",
        Namangan: "Namangan",
        QoraqalpogistonR: "Qoraqalpogiston",
        Buxoro: "Buxoro",
        Navoiy: "Navoiy",
        Jizzax: "Jizzax",
        Surxondaryo: "Surxondaryo",
        Qashqadaryo: "Qashqadaryo",
        Error: "*Xatolik",
        home: "Bosh sahifa",
        success_message: "Muvaffaqiyatli jo'natildi!",
        opening: `
        <span style="color: #ffc700; display: block; margin-bottom: 15px;">Toshkentda yangi ofis,</span>
        <span style="display: block;">ochilishi</span>
      `,
      },
    },
    en: {
      translation: {
        news: "News",
        NEWS_BIG: "News",
        services_BIG: "SERVICES",
        workers_BIG: "WORKERS",
        services: "Services",
        workers: "Workers",
        ipro_about: "About IPRO",
        vacancies: "Vacancies",
        about: "About Us",
        contact: "Contact Us",
        search: "Search",
        language: "Switch Language",
        hero_title: "We offer convenience from IT specialists",
        hero_subtitle: "",
        contact: "Contact",
        text_support: "We support international standards in the IT sector",
        company_name: "IPIMM professional group",
        companyname: "Company Name",
        news_title: "News",
        news_button: "More",
        news_date: "10.11.2023",
        news_description:
          "Data of more than 200,000 Uzbek users was leaked online. According to experts who spoke to Kun.uz, the leaked passwords belong to OneID, DTM.",
        services_title: "Our Services",
        order_button: "Order Now",
        details_button: "Details",
        safe: "SAFE",
        grow: "GROW",
        market: "TAKE YOUR PLACE",
        right_choice: "YOU MADE THE RIGHT CHOICE",
        with_us: "With us, everything is",
        improve_business: "Improve your business",
        take_place: "Take your place in the global market",
        choose_us: "By choosing us",
        marquee_text:
          "Our IT services are constantly being updated, new technologies and systems are ready for use",
        workers_title: "Workers",
        workers_all: "See All →",
        contact: "Contact",
        address: "Uzbekistan, Andijan, A. Fitrat street 8",
        links: "Links",
        social_media: "Social Media",
        // Job titles
        graphic_designer: "Graphic Designer",
        web_developer: "Web Developer",
        backend_developer: "Backend Developer",
        ui_ux_designer: "UI/UX Designer",
        project_manager: "Project Manager",
        marketing_specialist: "Marketing Specialist",
        qa_engineer: "QA Engineer",
        devops_engineer: "DevOps Engineer",
        business_analyst: "Business Analyst",
        frontend_developer: "Frontend Developer",
        data_scientist: "Data Scientist",
        hr_manager: "HR Manager",
        moution_designe: "Moution Designe",
        video_montage: "Video Montage",
        telegram_bot: "Telegram Bot",
        programming: "Programming",
        mobile_applications: "Mobile applications",
        targeting: "Targeting",
        marketing: "Marketing",
        text_support: "We support international standards in the IT sector",

        // Descriptions
        malika_description:
          "Malika has been working in graphic design since 2020.",
        abdurauf_description:
          "Abdurauf has 5 years of experience as a web developer.",
        jamshid_description: "Jamshid develops complex backend systems.",
        dilnoza_description:
          "Dilnoza works on improving user interface and experience.",
        sherzod_description: "Sherzod manages projects and leads the team.",
        aziza_description: "Aziza develops marketing strategies.",
        akbar_description: "Akbar tests software and identifies bugs.",
        farrux_description: "Farrux automates server infrastructure.",
        mohira_description:
          "Mohira analyzes business requirements and documents them.",
        otabek_description: "Otabek works with modern frontend technologies.",
        alisher_description: "Alisher specializes in big data analysis.",
        laylo_description: "Laylo manages HR processes in the company.",

        ui_ux_designerDes:
          "Develop a Project Mindmap and draw designs with optimal solutions based on this architecture",
        graphic_designerDes:
          "A process that combines art and technology used to create and comprehend information through images, graphics, and text",
        SMMDes:
          "Advertising on internet platforms through social media management methods",
        moution_designeDescript:
          "A creative programming and design company that combines environment and innovation in graphic design",
        promo_videoDes:
          "These videos include the information presented, the advantages of the service or product, and are designed to successfully present them to different audiences",
        cript:
          "A creative programming and design company that integrates environment and innovation in graphic design",
        video_montageDes:
          "Techniques used for video editing, support, and integration",
        telegram_botDes:
          "Automated programs that work in Telegram messenger, configured to respond to messages, information, and other events",
        programmingDescript:
          "Techniques for creating software for computers or mobile devices and using them",
        mobile_applicationsDes:
          "Development of mobile applications of any complexity and their technical support",
        SEODes:
          "Automated programs that work in Telegram messenger, configured to respond to messages, information, and other events",
        targetingDes:
          "Techniques for creating software for computers or mobile devices and using them",
        marketingDes:
          "Development of mobile applications of any complexity and their technical support",
        carusel_card_description:
          "Learn more about this industry. Watch the video.",

        open_text: `The data of more than 200 thousand Uzbek users was leaked to the Internet. According to experts who spoke to Kun.uz, ​​the leaked passwords were OneID, DTM, and many. The data of more than 200 thousand Uzbek users was leaked to the Internet. According to experts who spoke to Kun.uz, ​​the leaked passwords were OneID, DTM, and many. The data of more than 200 thousand Uzbek users was leaked to the Internet. According to experts who spoke to Kun.uz, ​​the leaked passwords were OneID, DTM.`,

        text_description: ` The data of more than 200 thousand Uzbek users was leaked to the Internet. According to experts who spoke to Kun.uz, ​​the leaked passwords were OneID, DTM, and more than 200 thousand Uzbek users were leaked to the Internet.`,
        text_about: `iPRO IT and M&M group was founded on July 22, 2021. From that day on, itbegan its professional   activity. It has  worked and continues to work with  many brands to this day! When the company was founded, the team  consisted of only 10 people, and now the team has +100 specialists. These people believed in the company's goal and sought to contribute to the development of the project. To this day, these  people remain loyal to the company and continue to develop their teams in various areas (Backend, Frontend, QA, Mobile, Analytics, Marketing Team, and others). iPRO IT and M&M group was founded on July 22, 2021.  From that day on, it began its professional activity. It has worked and continues to work with many brands to this day!`,

        // ///////////////////////////////////////////////////////////
        employees_title: "Employees",
        join_our_team: "DO YOU WANT TO BE PART OF OUR TEAM?",
        full_name: "Full Name",
        region: "Region",
        salary: "Salary",
        profession: "Profession",
        level: "Level",
        employment_type: "Employment Type",
        phone_number: "Phone Number",
        service_type: "Service type",
        comentary: "Comentary",
        send: "Send",
        portfolio: "Portfolio",
        upload_cv: "Upload CV",
        submit: "Submit",
        Ordering: "Ordering",
        Detail: "Detail",
        Projects: "Projects",
        Partners: "Collaborators",
        achievements: "achievements",
        Year: "Year",
        card_text_1: "Our IT services are simple and easy to use",
        card_text_2:
          "Our company strives to constantly improve the quality of service",
        card_text_3:
          "We provide our clients with high-quality technical support for IT problems.",
        card_text_4: "We provide the best and fastest support to our customers",
        card_text_5:
          "We implement innovative approaches in the field of technology",
        card_text_6: "We provide operational solutions for IT problems",
        adversiting: "Frontend developer-VueJS, Javascript, React (Junior)",
        days: "MONDAY-SATURDAY",
        Samarqand: "Samarkand",
        Toshkent: "Tashkent",
        Fargona: "Fergana",
        Andijon: "Andijan",
        Xorazm: "khorazem",
        Namangan: "Namangan",
        QoraqalpogistonR: "Karakalpakstan",
        Buxoro: "Bukhara",
        Navoiy: "Navoi",
        Jizzax: "Jizzakh",
        Surxondaryo: "Surkhandarya",
        Qashqadaryo: "Kashkadarya",
        Error: "*Error",
        home: "Home",
        success_message: "Successfully sent!",
        opening: "We invite you to the OPENING CEREMONY!",
        opening: `
        <span style="color: #ffc700; display: block; margin-bottom: 15px;">New office in Tashkent,</span>
        <span style="display: block;">opening</span>
      `,
      },
    },
    ru: {
      translation: {
        news: "Новости",
        NEWS_BIG: "НОВОСТИ",
        services_BIG: "УСЛУГИ",
        workers_BIG: "ПЕРСОНАЛ",
        services: "Услуги",
        ipro_about: "О ИПРО",
        workers: "Сотрудники",
        vacancies: "Вакансии",
        about: "О нас",
        contact: "Контакты",
        search: "Поиск",
        language: "Изменить язык",
        hero_title: "Мы предлагаем удобства от IT-специалистов",
        hero_subtitle: "",
        contact: "Связаться",
        company_name: "IPIMM профессиональная группа",
        companyname: "Название компании",
        news_title: "Новости",
        news_button: "Подробнее",
        news_date: "10.11.2023",
        news_description:
          "В сеть утекли данные более 200 000 узбекских пользователей. По словам экспертов, говоривших с Kun.uz, утекшие пароли относятся к OneID, DTM.",
        services_title: "Наши услуги",
        order_button: "Заказать",
        details_button: "Подробнее",
        safe: "БЕЗОПАСНО",
        grow: "РАЗВИВАЙТЕ",
        market: "ЗАЙМИТЕ СВОЕ МЕСТО",
        right_choice: "ВЫ НЕ ОШИБЛИСЬ",
        with_us: "С нами всё",
        improve_business: "Развивайте свой бизнес",
        take_place: "Займите свое место на мировом рынке",
        choose_us: "Выбирая нас",
        marquee_text:
          "Наши IT-услуги постоянно обновляются, новые технологии и системы готовы к использованию",
        workers_title: "Сотрудники",
        workers_all: "Все →",
        contact: "Свяжитесь с нами",
        address: "Узбекистан, Андижан, ул. А.Фитрат 8",
        links: "Ссылки",
        social_media: "Социальные сети",

        // Должности
        graphic_designer: "Графический дизайнер",
        web_developer: "Веб-разработчик",
        backend_developer: "Бэкенд-разработчик",
        ui_ux_designer: "UI/UX дизайнер",
        project_manager: "Менеджер проекта",
        marketing_specialist: "Маркетолог",
        qa_engineer: "Инженер по качеству",
        devops_engineer: "DevOps инженер",
        business_analyst: "Бизнес-аналитик",
        frontend_developer: "Фронтенд-разработчик",
        data_scientist: "Специалист по данным",
        hr_manager: "HR-менеджер",
        moution_designe: "Моушен дизайн",
        video_montage: "Видеомонтаж",
        telegram_bot: "Телеграм-бот",
        programming: "Программирование",
        mobile_applications: "Мобильные приложения",
        targeting: "Нацеливание",
        marketing: "Маркетинг",
        // Описания
        malika_description:
          "Малика работает в сфере графического дизайна с 2020 года.",
        abdurauf_description: "Абдурауф имеет 5 лет опыта в веб-разработке.",
        jamshid_description:
          "Джамшид занимается разработкой сложных бэкенд-систем.",
        dilnoza_description:
          "Дилноза работает над улучшением пользовательского интерфейса и опыта.",
        sherzod_description: "Шерзод управляет проектами и руководит командой.",
        aziza_description: "Азиза разрабатывает маркетинговые стратегии.",
        akbar_description: "Акбар тестирует программы и выявляет ошибки.",
        farrux_description:
          "Фаррух занимается автоматизацией серверной инфраструктуры.",
        mohira_description:
          "Мохира анализирует бизнес-требования и документирует их.",
        otabek_description:
          "Отабек работает с современными фронтенд-технологиями.",
        alisher_description:
          "Алишер специализируется на анализе больших данных.",
        laylo_description: "Лайло управляет HR-процессами компании.",

        ui_ux_designerDes:
          "Разработайте ментальную карту проекта и нарисуйте проекты с оптимальными решениями на основе этой архитектуры.",
        graphic_designerDes:
          "Процесс, объединяющий искусство и технологии, используемые для создания и восприятия информации через изображения, графику и текст",
        SMMDes:
          "Реклама на интернет-платформах через методы управления социальными сетями",
        moution_designeDescript:
          "Креативная компания по программированию и дизайну, которая сочетает в себе защиту окружающей среды и инновации в графическом дизайне.",
        promo_videoDes:
          "Эти видео включают представленную информацию, преимущества услуги или продукта и предназначены для успешного представления их различным аудиториям",
        cript:
          "Креативная компания по программированию и дизайну, интегрирующая среду и инновации в графическом дизайне",
        video_montageDes:
          "Техники, используемые для редактирования, поддержки и интеграции видео",
        telegram_botDes:
          "Автоматизированные программы, работающие в мессенджере Telegram, настроенные для ответа на сообщения, информацию и другие события",
        programmingDescript:
          "Техники создания программного обеспечения для компьютеров или мобильных устройств и его использования",
        mobile_applicationsDes:
          "Разработка мобильных приложений любой сложности и их техническая поддержка",
        SEODes:
          "Автоматизированные программы, работающие в мессенджере Telegram, настроенные для ответа на сообщения, информацию и другие события",
        targetingDes:
          "Техники создания программного обеспечения для компьютеров или мобильных устройств и его использования",
        carusel_card_description:
          "Узнайте больше об этой отрасли. Посмотрите видео.",

        marketingDes:
          "Разработка мобильных приложений любой сложности и их техническая поддержка",
        text_description: `В сеть попали данные более 200 тысяч узбекских пользователей. По словам экспертов, с которыми пообщался Kun.uz, ​​утечка паролей — OneID, DTM — затронула более 200 тысяч узбекистанцев в Интернете.`,
        open_text: `В сеть попали данные более 200 тысяч узбекских пользователей. По словам экспертов, с которыми пообщался Kun.uz, ​​украденные пароли — OneID, DTM и многие другие — включали данные более 200 000 узбекских пользователей. По словам экспертов, с которыми пообщался Kun.uz, ​​утекшие пароли — OneID, DTM,В сеть попали данные более 200 тысяч узбекских пользователей. По словам экспертов, с которыми пообщался Kun.uz, ​​утекшие пароли — OneID, DTM.`,
        text_about: `Группа компаний iPRO IT и M&M была основана 22 июля 2021 года. С этого дня началась его профессиональная карьера. По сей день компания сотрудничала со многими брендами и продолжает с ними сотрудничать! Когда компания была основана, команда состояла  всего из 10 человек,  но сейчас в команде более 100 специалистов. Эти люди  верили в цель компании и стремились внести  свой вклад в развитие проекта.  По сей день эти люди остаются верны компании, развивая свои команды в различных направлениях (Backend, Frontend, QA, Mobile, Analytics, Marketing Team и другие). Группа iPRO IT и M&M была основана 22 июля 2021 года. С этого дня началась его профессиональная карьера. Это работало и продолжает работать со многими брендами по сей день!`,

        // /////////////////////////////////////////////////////////
        employees_title: "сотрудники",
        join_our_team: "ВЫ ХОТИТЕ БЫТЬ ЧАСТЬЮ НАШЕЙ КОМАНДЫ?",
        full_name: "Имя/Фамилия",
        region: "Регион",
        salary: "Зарплата",
        profession: "Профессия",
        level: "Уровень",
        employment_type: "Тип занятости",
        phone_number: "Номер телефона",
        comentary: "Комментарий",
        service_type: "Тип услуги",
        send: "Отправлять",
        portfolio: "Портфолио",
        upload_cv: "Загрузить резюме",
        submit: "Отправить",
        Ordering: "Заказ",
        Detail: "подробно",
        Projects: "Проекты",
        Partners: "партнеры",
        achievements: "достижения",
        Year: "Год",
        text_support: "Мы поддерживаем международные стандарты в сфере ИТ",
        card_text_1: "Наши ИТ-услуги просты и удобны в использовании.",
        card_text_2:
          "Наша компания стремится постоянно улучшать качество обслуживания.",
        card_text_3:
          "Мы оказываем нашим клиентам качественную техническую поддержку по решению ИТ-проблем.",
        card_text_4: "Мы оказываем лучшую и быструю поддержку нашим клиентам",
        card_text_5: "Мы внедряем инновационные подходы в области технологий",
        card_text_6: "Мы предоставляем оперативные решения ИТ-проблем",
        adversiting: "Разработчик интерфейса — VueJS, Javascript, React ",
        days: "ПОНЕДЕЛЬНИК-СУББОТА",
        Samarqand: "Самарканд",
        Toshkent: "Ташкент",
        Fargona: "Фергана",
        Andijon: "Андижан",
        Xorazm: "Хорезм",
        Namangan: "Наманган",
        QoraqalpogistonR: "Каракалпакстан",
        Buxoro: "Бухара",
        Navoiy: "Навои",
        Jizzax: "Джизак",
        Surxondaryo: "Сурхандарья",
        Qashqadaryo: "Кашкадарья",
        Error: "*Ошибка",
        home: "домa",
        success_message: "Успешно отправлено!",
        opening: "Приглашаем Вас на ЦЕРЕМОНИЮ ОТКРЫТИЯ!",
        opening: `
        <span style="color: #ffc700; display: block; margin-bottom: 15px;">Новый офис в Ташкенте,</span>
        <span style="display: block;">открытие</span>
      `,
      },
    },
  },
  lng: "uz",
  fallbackLng: "uz",
  interpolation: { escapeValue: false },
});

export default i18n;
