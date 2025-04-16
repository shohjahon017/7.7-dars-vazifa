import { useSelector } from "react-redux";

function About() {
  const language = useSelector((state) => state.language);

  const translations = {
    en: {
      title: "Our School",
      paragraph1:
        "1-IDUM is a source of knowledge, development, and achievements. Our school has over 150 students and more than 30 qualified teachers. Established in 2008, our school is equipped with modern classrooms, a library, gym, and computer labs.",
      paragraph2:
        "We promote personal development, independent thinking, and social activity among students. Every year, our students win in science olympiads, sports competitions, and various contests.",
      paragraph3:
        "Our core values are quality education, mutual respect, advanced methodology, and continuous development. By maintaining regular communication with parents, we constantly monitor students' academic performance and discipline.",
      goal: "Our Goals",
      goals: [
        "Identify each student's interests and help them grow",
        "Provide quality education with highly qualified teachers",
        "Apply modern technologies and teaching methods",
        "Focus on child upbringing in cooperation with parents",
      ],
    },
    uz: {
      title: "Bizning Maktab",
      paragraph1:
        "1-IDUM – bu bilim, rivojlanish va yutuqlarning manbai. Bizning maktabimizda 150 dan ortiq o‘quvchi va 30 nafardan ortiq malakali o‘qituvchilar tahsil va faoliyat yuritadi. Maktabimiz 2008-yilda tashkil topgan va hozirda zamonaviy texnologiyalar bilan jihozlangan sinf xonalariga, kutubxona, sport zali, informatika laboratoriyalariga ega.",
      paragraph2:
        "Maktabimizda o‘quvchilarning shaxsiy rivojlanishi, mustaqil fikrlashi va ijtimoiy faolligi targ‘ib qilinadi. Har yili o‘quvchilarimiz fan olimpiadalarida, sport musobaqalarida va turli tanlovlarda g‘olib bo‘lib kelmoqda.",
      paragraph3:
        "Asosiy qadriyatlarimiz – sifatli ta’lim, o‘zaro hurmat, ilg‘or metodika va doimiy rivojlanish. Ota-onalar bilan doimiy aloqada bo‘lish orqali o‘quvchilarning bilim darajasi va tarbiyasini doimiy nazorat qilib boramiz.",
      goal: "Maqsadimiz",
      goals: [
        "Har bir o‘quvchining qiziqishini aniqlab, uni rivojlantirishga yordam berish",
        "Yuqori malakali ustozlar orqali sifatli ta`lim berish",
        "Zamonaviy texnologiyalar va metodikalarni qo‘llash",
        "Ota-onalar bilan hamkorlikda farzand tarbiyasiga e’tibor qaratish",
      ],
    },
    ru: {
      title: "Наша Школа",
      paragraph1:
        "1-IDUM – это источник знаний, развития и достижений. В нашей школе обучаются более 150 учеников и работают свыше 30 квалифицированных учителей. Основанная в 2008 году, школа оснащена современными классами, библиотекой, спортивным залом и компьютерными лабораториями.",
      paragraph2:
        "Мы поощряем личностное развитие, независимое мышление и социальную активность учащихся. Каждый год наши ученики становятся победителями олимпиад, спортивных соревнований и различных конкурсов.",
      paragraph3:
        "Наши главные ценности — качественное образование, взаимное уважение, передовые методики и постоянное развитие. Мы поддерживаем постоянный контакт с родителями для контроля уровня знаний и воспитания детей.",
      goal: "Наши Цели",
      goals: [
        "Определить интересы каждого ученика и помочь ему развиваться",
        "Обеспечить качественное образование с помощью опытных учителей",
        "Применять современные технологии и методы обучения",
        "Уделять внимание воспитанию совместно с родителями",
      ],
    },
    tj: {
      title: "Мактаби Мо",
      paragraph1:
        "1-IDUM – манбаи дониш, рушд ва дастовардҳост. Дар мактаби мо зиёда аз 150 хонанда ва зиёда аз 30 омӯзгори соҳибихтисос таълим мегиранд. Мактаб соли 2008 таъсис ёфта, бо синфхонаҳои муосир, китобхона, толори варзиш ва лабораторияҳои компютерӣ муҷаҳҳаз мебошад.",
      paragraph2:
        "Дар мактаби мо инкишофи шахсӣ, фикрронии мустақил ва фаъолияти иҷтимоии хонандагон тарғиб карда мешавад. Ҳар сол хонандагони мо дар олимпиадаҳо, мусобиқаҳои варзишӣ ва озмунҳо ғолиб мешаванд.",
      paragraph3:
        "Арзишҳои асосии мо – таҳсили босифат, эҳтироми мутақобила, методикаи пешқадам ва рушди пайваста мебошад. Мо бо волидайн ҳамеша дар тамос ҳастем, то ки сатҳи дониш ва тарбияи хонандагонро назорат кунем.",
      goal: "Ҳадафҳои Мо",
      goals: [
        "Муайян кардани шавқу ҳаваси ҳар як хонанда ва рушди он",
        "Таълими босифат тавассути омӯзгорони соҳибихтисос",
        "Истифодаи технологияҳои муосир ва методикаҳои таълим",
        "Ба тарбияи фарзанд бо ҳамкории волидайн диққат додан",
      ],
    },
  };

  const t = translations[language] || translations.uz;

  return (
    <div className="max-w-5xl mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold text-blue-900 mb-6">{t.title}</h1>
      <p className="text-lg text-gray-700 mb-4">{t.paragraph1}</p>
      <p className="text-lg text-gray-700 mb-4">{t.paragraph2}</p>
      <p className="text-lg text-gray-700 mb-4">{t.paragraph3}</p>

      <h2 className="text-2xl font-semibold text-blue-800 mt-8 mb-4">
        {t.goal}
      </h2>
      <ul className="list-disc pl-6 text-gray-700 space-y-2">
        {t.goals.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default About;
