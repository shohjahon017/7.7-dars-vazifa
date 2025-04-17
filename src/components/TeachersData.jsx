const teachersData = {
  uz: [
    {
      id: 1,
      name: "Farhod Jurayev",
      subject: "Maktab direktori",
      date: "20.09.1970",
      tel: "+998 99-616-44-56",
      img: "path/to/image1.jpg",
      bio: "Farhod Jurayev 10 yildan ortiq tajribaga ega matematik o'qituvchi. U maktab boshqaruvida yuqori malakaga ega va o‘quvchilarning muvaffaqiyati uchun doimiy ishlaydi.",
    },
    {
      id: 2,
      name: "Murodil Qosimov",
      subject: "O'quv ishlari bo'yicha direktor o'rinbosari",
      date: "06.09.1994",
      tel: "+998 95-084-84-45",
      img: "/murodil.jpg",
      bio: "Murodil Qosimov ta'lim tizimi bo'yicha uzoq yillik tajribaga ega rahbar. U o‘quv jarayonini samarali tashkil qilish va darslar sifatini oshirishga katta e'tibor beradi.",
    },
    {
      id: 3,
      name: "Shohruz Jalilov",
      subject: "Ma'naviy-ma'rifiy ishlar bo'yicha direktor o'rinbosari",
      date: "25.04.1993",
      tel: "+998 99-368-07-33",
      img: "path/to/image3.jpg",
      bio: "Shohruz Jalilov maktabda ma'naviyat va tarbiya ishlari bo'yicha mutaxassis. U yosh avlodga milliy qadriyatlarni singdirish va ijtimoiy loyihalarni rivojlantirish ustida ishlaydi.",
    },
    {
      id: 4,
      name: "Azimbekov Musobek",
      subject: "Psixolog",
      date: "04.03.1963",
      tel: "+998 99-602-71-28",
      img: "path/to/image4.jpg",
      bio: "Musobek Azimbekov – tajribali psixolog bo‘lib, o‘quvchilar va o‘qituvchilarning ruhiy salomatligini mustahkamlashda faol ishtirok etadi.",
    },
    {
      id: 5,
      name: "Luftiloev Sanjarbek",
      subject: "Adminstrator",
      date: "16.12.1997",
      tel: "+998 90-280-00-97 ",
      img: "/sanjar.jpg",
      bio: "Sanjarbek Luftiloev maktabda ma’muriy ishlarni samarali tashkil qilishga mas’ul bo‘lib, texnik va tashkiliy jarayonlarni nazorat qiladi.",
    },
    {
      id: 6,
      name: "Pirmatov Mahmanazar",
      subject: "CHQBT o'qituvchisi",
      date: "30.07.1985",
      tel: "+998 99-359-13-90",
      img: "/pirmatov.png",
      bio: "Mahmanazar Pirmatov chaqiriqqacha harbiy tayyorgarlik bo‘yicha bilimli o‘qituvchi. U o‘quvchilarni vatanparvarlik ruhida tarbiyalaydi.",
    },
    {
      id: 7,
      name: "Sotiev Hayotjon",
      subject: "Ingliz tili o'qituvchisi",
      date: "18.04.1964",
      tel: "+998 99-649-10-43",
      img: "/sotiev.jpg",
      bio: "Hayotjon Sotiev ingliz tilini chuqur o‘rgatishga bag‘ishlangan ko‘p yillik tajribaga ega. U zamonaviy dars uslublaridan foydalanadi.",
    },
    {
      id: 8,
      name: "Bobosharipov Parviz",
      subject: "Matematika va Informatika o'qituvchisi",
      date: "07.01.1996",
      tel: "+998 99-307-01-96",
      img: "path/to/image8.jpg",
      bio: "Parviz Bobosharipov matematika va informatika fanlarini mukammal o‘qituvchi bo‘lib, zamonaviy texnologiyalarni dars jarayoniga tatbiq etadi.",
    },
  ],
  ru: [
    {
      id: 1,
      name: "Фарход Жураев",
      subject: "Директор школы",
      date: "20.09.1970",
      tel: "+998 99-616-44-56",
      img: "path/to/image1.jpg",
      bio: "Фарход Жураев — опытный учитель математики с более чем 10-летним стажем. Он обладает высокой квалификацией в управлении школой и постоянно работает над успехами учеников.",
    },
    {
      id: 2,
      name: "Муродил Касымов",
      subject: "Заместитель директора по учебной части",
      date: "06.09.1994",
      tel: "+998 95-084-84-45",
      img: "/murodil.jpg",
      bio: "Муродил Касымов — руководитель с многолетним опытом в сфере образования. Он придает большое значение организации учебного процесса и повышению качества занятий.",
    },
    {
      id: 3,
      name: "Шохруз Джалилов",
      subject: "Заместитель директора по духовно-просветительской работе",
      date: "25.04.1993",
      tel: "+998 99-368-07-33",
      img: "path/to/image3.jpg",
      bio: "Шохруз Джалилов — специалист по духовному воспитанию и просвещению. Работает над развитием социальных проектов и приобщением молодежи к национальным ценностям.",
    },
    {
      id: 4,
      name: "Мусобек Азимбеков",
      subject: "Психолог",
      date: "04.03.1963",
      tel: "+998 99-602-71-28",
      img: "path/to/image4.jpg",
      bio: "Мусобек Азимбеков — опытный психолог, активно работает над укреплением психологического здоровья учеников и преподавателей.",
    },
    {
      id: 5,
      name: "Санджарбек Лутфилоев",
      subject: "Администратор",
      date: "16.12.1997",
      tel: "+998 90-280-00-97 ",
      img: "/sanjar.jpg",
      bio: "Санджарбек Лутфилоев отвечает за эффективную организацию административных дел школы и контролирует технические и организационные процессы.",
    },
    {
      id: 6,
      name: "Махманазар Пирматов",
      subject: "Преподаватель довоенной подготовки",
      date: "30.07.1985",
      tel: "+998 99-359-13-90",
      img: "/pirmatov.png",
      bio: "Махманазар Пирматов — знающий преподаватель по довоенной подготовке, воспитывает учеников в духе патриотизма.",
    },
    {
      id: 7,
      name: "Хаётжон Сотиев",
      subject: "Преподаватель английского языка",
      date: "18.04.1964",
      tel: "+998 99-649-10-43",
      img: "/sotiev.jpg",
      bio: "Хаётжон Сотиев имеет многолетний опыт преподавания английского языка и использует современные методы обучения.",
    },
    {
      id: 8,
      name: "Парвиз Бобошарипов",
      subject: "Преподаватель математики и информатики",
      date: "07.01.1996",
      tel: "+998 99-307-01-96",
      img: "path/to/image8.jpg",
      bio: "Парвиз Бобошарипов — квалифицированный преподаватель математики и информатики, применяет современные технологии в учебном процессе.",
    },
  ],
  en: [
    {
      id: 1,
      name: "Farhod Jurayev",
      subject: "School Principal",
      date: "20.09.1970",
      tel: "+998 99-616-44-56",
      img: "path/to/image1.jpg",
      bio: "Farhod Jurayev is an experienced mathematics teacher with over 10 years of expertise. He is highly skilled in school management and works tirelessly for student success.",
    },
    {
      id: 2,
      name: "Murodil Qosimov",
      subject: "Deputy Principal for Academic Affairs",
      date: "06.09.1994",
      tel: "+998 95-084-84-45",
      img: "/murodil.jpg",
      bio: "Murodil Qosimov is a seasoned leader in the education sector. He focuses on organizing the learning process efficiently and improving lesson quality.",
    },
    {
      id: 3,
      name: "Shohruz Jalilov",
      subject: "Deputy Principal for Moral and Educational Affairs",
      date: "25.04.1993",
      tel: "+998 99-368-07-33",
      img: "path/to/image3.jpg",
      bio: "Shohruz Jalilov is a specialist in moral and spiritual education. He works on instilling national values in youth and developing social projects.",
    },
    {
      id: 4,
      name: "Azimbekov Musobek",
      subject: "Psychologist",
      date: "04.03.1963",
      tel: "+998 99-602-71-28",
      img: "path/to/image4.jpg",
      bio: "Musobek Azimbekov is an experienced psychologist actively involved in improving the mental well-being of students and staff.",
    },
    {
      id: 5,
      name: "Luftiloev Sanjarbek",
      subject: "Administrator",
      date: "16.12.1997",
      tel: "+998 90-280-00-97 ",
      img: "/sanjar.jpg",
      bio: "Sanjarbek Luftiloev is responsible for organizing administrative work at school and overseeing technical and organizational processes.",
    },
    {
      id: 6,
      name: "Pirmatov Mahmanazar",
      subject: "Pre-military Training Teacher",
      date: "30.07.1985",
      tel: "+998 99-359-13-90",
      img: "/pirmatov.png",
      bio: "Mahmanazar Pirmatov is a knowledgeable instructor in pre-military training, educating students in the spirit of patriotism.",
    },
    {
      id: 7,
      name: "Sotiev Hayotjon",
      subject: "English Teacher",
      date: "18.04.1964",
      tel: "+998 99-649-10-43",
      img: "/sotiev.jpg",
      bio: "Hayotjon Sotiev is an experienced English language teacher who employs modern teaching methods.",
    },
    {
      id: 8,
      name: "Bobosharipov Parviz",
      subject: "Mathematics and Computer Science Teacher",
      date: "07.01.1996",
      tel: "+998 99-307-01-96",
      img: "path/to/image8.jpg",
      bio: "Parviz Bobosharipov is a qualified teacher of mathematics and computer science, applying modern technologies in the classroom.",
    },
  ],
  tj: [
    {
      id: 1,
      name: "Фарход Жураев",
      subject: "Директори мактаб",
      date: "20.09.1970",
      tel: "+998 99-616-44-56",
      img: "path/to/image1.jpg",
      bio: "Фарход Жураев – мутахассис дар соҳаи риёзиёт бо таҷрибаи 10-солаи зиёда. Вай дар идоракунии мактаб дорои малакаи баланд аст ва барои муваффақияти шогирдон кор мекунад.",
    },
    {
      id: 2,
      name: "Муродил Қосимов",
      subject: "Муовини директор оид ба корҳои таълимӣ",
      date: "06.09.1994",
      tel: "+998 95-084-84-45",
      img: "/murodil.jpg",
      bio: "Муродил Қосимов – роҳбар бо таҷрибаи солҳо дар соҳаи таълим. Вай диққати зиёд ба ташкили самарабахши раванди таълим ва беҳтар кардани сифати дарсҳо медиҳад.",
    },
    {
      id: 3,
      name: "Шоҳруз Жалилов",
      subject: "Муовини директор оид ба корҳои маънавӣ-тарбиявӣ",
      date: "25.04.1993",
      tel: "+998 99-368-07-33",
      img: "path/to/image3.jpg",
      bio: "Шоҳруз Жалилов – мутахассис дар соҳаи маънавию тарбиявӣ. Вай бо мақсади тарғиби арзишҳои миллӣ ва рушди лоиҳаҳои иҷтимоӣ кор мекунад.",
    },
    {
      id: 4,
      name: "Мусобек Азимбеков",
      subject: "Психолог",
      date: "04.03.1963",
      tel: "+998 99-602-71-28",
      img: "path/to/image4.jpg",
      bio: "Мусобек Азимбеков – психологи бо таҷрибаи зиёде, ки дар таҳкими саломатии равонии шогирдон ва омӯзгорон фаъолона иштирок мекунад.",
    },
    {
      id: 5,
      name: "Санҷарбек Лутфилоев",
      subject: "Администратор",
      date: "16.12.1997",
      tel: "+998 90-280-00-97 ",
      img: "/sanjar.jpg",
      bio: "Санҷарбек Лутфилоев масъули ташкил кардани корҳои маъмурии мактаб мебошад ва раванди техникӣ ва ташкилиро назорат мекунад.",
    },
    {
      id: 6,
      name: "Маҳманазар Пирматов",
      subject: "Мударриси омодагии ҳарбӣ",
      date: "30.07.1985",
      tel: "+998 99-359-13-90",
      img: "/pirmatov.png",
      bio: "Маҳмоназар Пирматов – омӯзгори огоҳии ҳарбӣ, ки шогирдонро дар руҳияи ватандорӣ тарбия мекунад.",
    },
    {
      id: 7,
      name: "Хаётҷон Сотиев",
      subject: "Мударриси забони англисӣ",
      date: "18.04.1964",
      tel: "+998 99-649-10-43",
      img: "/sotiev.jpg",
      bio: "Хаётҷон Сотиев – омӯзгори бо таҷрибаи баланди забони англисӣ, ки усулҳои муосири таълимро истифода мебарад.",
    },
    {
      id: 8,
      name: "Парвиз Бобошарипов",
      subject: "Мударриси риёзӣ ва информатика",
      date: "07.01.1996",
      tel: "+998 99-307-01-96",
      img: "path/to/image8.jpg",
      bio: "Парвиз Бобошарипов – омӯзгори маъруфи риёзӣ ва информатика, ки дар раванди таълим аз технологияи муосир истифода мекунад.",
    },
  ],
};
export default teachersData;
