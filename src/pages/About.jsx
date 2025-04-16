// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";

// function About() {
//   const language = useSelector((state) => state.language);
//   const navigate = useNavigate();

//   const teachers = [
//     {
//       id: 1,
//       name: "Farhod Jurayev",
//       subject: "Maktab direktori",
//       img: "https://randomuser.me/api/portraits/men/32.jpg",
//     },
//     {
//       id: 2,
//       name: "Murodil Qosimov",
//       subject: "O'quv ishlari bo'yicha direktor o'rinbosari",
//       img: "/public/murodil.jpg",
//     },
//     {
//       id: 3,
//       name: "Shohruz Jalilov",
//       subject: "Ma'naviy ma'rifiy ishlar bo'yicha direktor o'rinbosari",
//       img: "https://randomuser.me/api/portraits/men/45.jpg",
//     },
//     {
//       id: 4,
//       name: "Azimbekov Musobek",
//       subject: "Psixolog",
//       img: "https://randomuser.me/api/portraits/men/45.jpg",
//     },
//     {
//       id: 5,
//       name: "Luftiloev Sanjarbek",
//       subject: "Adminstrator",
//       img: "/public/sanjar.jpg",
//     },
//     {
//       id: 6,
//       name: "",
//       subject: "Ma'naviy ma'rifiy ishlar bo'yicha direktor o'rinbosari",
//       img: "https://randomuser.me/api/portraits/men/45.jpg",
//     },
//   ];

//   const translations = {
//     uz: {
//       title: "Bizning Maktab",
//       paragraph1:
//         "1-IDUM – bu bilim, rivojlanish va yutuqlarning manbai. Maktabda 150 dan ortiq o‘quvchi, 30 nafardan ortiq malakali o‘qituvchilar faoliyat yuritadi. Maktab 2008-yilda tashkil etilgan va zamonaviy sinfxonalar, kutubxona, sport zali hamda kompyuter laboratoriyalari bilan jihozlangan.",
//       paragraph2:
//         "Maktab o‘quvchilarning shaxsiy rivojlanishi, mustaqil fikrlashi va ijtimoiy faolligini targ‘ib qiladi. Har yili fan olimpiadalari, sport musobaqalari va turli tanlovlarda o‘quvchilarimiz muvaffaqiyatlarga erishmoqdalar.",
//       paragraph3:
//         "Asosiy qadriyatlarimiz – sifatli ta’lim, o‘zaro hurmat, ilg‘or metodika va doimiy rivojlanish. Ota-onalar bilan doimiy aloqada bo‘lib, o‘quvchilarning bilim darajasi va tarbiyasini nazorat qilamiz.",
//       goal: "Bizning Maqsadlarimiz",
//       goals: [
//         "Har bir o‘quvchining qiziqishini aniqlab, uni rivojlantirish",
//         "Yuqori malakali ustozlar orqali sifatli ta’lim berish",
//         "Zamonaviy texnologiyalar va metodikalardan foydalanish",
//         "Ota-onalar bilan hamkorlikda farzand tarbiyasiga e’tibor qaratish",
//       ],
//       teachers: "O‘qituvchilarimiz",
//       students: "O‘quvchilar",
//       library: "Kutubxona",
//       studentsDesc:
//         "Maktabda 1-sinfdan 11-sinfgacha bo‘lgan 150 dan ortiq o‘quvchi tahsil oladi. Ular fan, sport, san’at va boshqa sohalarda faol ishtirok etishadi.",
//       libraryDesc:
//         "Kutubxonamizda 3000 dan ortiq kitob mavjud bo‘lib, badiiy, ilmiy va ensiklopedik adabiyotlarni o‘quvchilar erkin o‘qishlari mumkin.",
//     },
//     ru: {
//       title: "Наша Школа",
//       paragraph1:
//         "1-IDUM – это источник знаний, развития и достижений. В школе обучаются более 150 учеников, работают свыше 30 квалифицированных преподавателей. Основана в 2008 году, оснащена современными кабинетами, библиотекой, спортивным залом и компьютерными лабораториями.",
//       paragraph2:
//         "Мы поощряем развитие личности, независимое мышление и социальную активность учеников. Каждый год наши ученики побеждают на олимпиадах, соревнованиях и конкурсах.",
//       paragraph3:
//         "Наши ценности – качественное образование, взаимное уважение, современные методики и постоянное развитие. Мы поддерживаем связь с родителями и следим за успеваемостью учеников.",
//       goal: "Наши Цели",
//       goals: [
//         "Выявить интересы каждого ученика и помочь их развить",
//         "Обеспечить качественное образование с квалифицированными преподавателями",
//         "Использовать современные технологии и методики",
//         "Уделять внимание воспитанию совместно с родителями",
//       ],
//       teachers: "Наши Преподаватели",
//       students: "Ученики",
//       library: "Библиотека",
//       studentsDesc:
//         "В нашей школе обучается более 150 учеников с 1 по 11 классы. Они активно участвуют в науке, спорте и искусстве.",
//       libraryDesc:
//         "В библиотеке более 3000 книг: художественная, научная и справочная литература доступна каждому ученику.",
//     },
//     en: {
//       title: "Our School",
//       paragraph1:
//         "1-IDUM is a center of knowledge, development, and achievement. The school has over 150 students and more than 30 qualified teachers. Established in 2008, it features modern classrooms, a library, a gym, and computer labs.",
//       paragraph2:
//         "We promote personal growth, independent thinking, and social activity among students. Each year, our students succeed in olympiads, sports, and various competitions.",
//       paragraph3:
//         "Our core values are quality education, mutual respect, advanced methodology, and continuous development. We stay in regular contact with parents to monitor student progress and discipline.",
//       goal: "Our Goals",
//       goals: [
//         "Identify each student's interest and help them grow",
//         "Deliver quality education through experienced teachers",
//         "Use modern technologies and teaching methods",
//         "Collaborate with parents for effective student development",
//       ],
//       teachers: "Our Teachers",
//       students: "Students",
//       library: "Library",
//       studentsDesc:
//         "Our school hosts over 150 students from grades 1 to 11. They actively participate in science, sports, arts, and more.",
//       libraryDesc:
//         "Our library has more than 3,000 books including fiction, scientific works, and encyclopedias available to all students.",
//     },
//     tj: {
//       title: "Мактаби Мо",
//       paragraph1:
//         "1-IDUM – манбаи дониш, рушд ва дастовардҳост. Дар мактаб зиёда аз 150 хонанда ва беш аз 30 омӯзгори баландихтисос фаъолият мекунад. Мактаб соли 2009 таъсис ёфтааст ва бо синфхонаҳои замонавӣ, китобхона, толори варзиш ва лабораторияҳои компютерӣ таъмин мебошад.",
//       paragraph2:
//         "Мо инкишофи шахсӣ, андешаи мустақил ва фаъолиятҳои иҷтимоии хонандагонро ташвиқ мекунем. Ҳар сол шогирдони мо дар озмунҳо ва олимпиадаҳо ғолиб мешаванд.",
//       paragraph3:
//         "Арзишҳои асосии мо – таҳсили босифат, эҳтироми мутақобила, методикаҳои нав ва рушди пайваста мебошанд. Мо бо волидайн ҳамкории наздик дорем.",
//       goal: "Ҳадафҳои Мо",
//       goals: [
//         "Муайян кардани шавқу завқи ҳар як хонанда ва рушди он",
//         "Таъмини таҳсили босифат бо омӯзгорони соҳибихтисос",
//         "Истифодаи технологияҳои муосир ва усулҳои таълим",
//         "Ҳамкории доимӣ бо волидайн барои таълиму тарбия",
//       ],
//       teachers: "Омӯзгорони Мо",
//       students: "Хонандагон",
//       library: "Китобхона",
//       studentsDesc:
//         "Дар мактаб беш аз 150 хонанда аз синфи 1 то 11 таҳсил мекунанд. Онҳо дар илм, варзиш ва фарҳанг фаъоланд.",
//       libraryDesc:
//         "Китобхона зиёда аз 3000 китоб дорад, ки ба хонандагон дастрас мебошанд: бадеӣ, илмӣ ва маълумотномавӣ.",
//     },
//   };

//   const t = translations[language] || translations.uz;

//   return (
//     <div className="max-w-5xl mx-auto px-4 py-16">
//       <h1 className="text-4xl font-bold text-blue-900 mb-6">{t.title}</h1>
//       <p className="text-lg text-gray-700 mb-4">{t.paragraph1}</p>
//       <p className="text-lg text-gray-700 mb-4">{t.paragraph2}</p>
//       <p className="text-lg text-gray-700 mb-4">{t.paragraph3}</p>

//       <h2 className="text-2xl font-semibold text-blue-800 mt-10 mb-4">
//         {t.goal}
//       </h2>
//       <ul className="list-disc pl-6 text-gray-700 space-y-2">
//         {t.goals.map((item, index) => (
//           <li key={index}>{item}</li>
//         ))}
//       </ul>

//       <h2 className="text-2xl font-semibold text-blue-800 mt-10 mb-4">
//         {t.teachers}
//       </h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//         {teachers.map((teacher) => (
//           <div
//             key={teacher.id}
//             onClick={() => navigate(`/teachers/${teacher.id}`)}
//             className="cursor-pointer border rounded-xl overflow-hidden shadow hover:shadow-lg transition duration-300"
//           >
//             <img
//               src={teacher.img}
//               alt={teacher.name}
//               className="w-full h-64 object-cover"
//             />
//             <div className="p-4">
//               <h3 className="text-xl font-semibold text-blue-900">
//                 {teacher.name}
//               </h3>
//               <p className="text-gray-600">{teacher.subject}</p>
//             </div>
//           </div>
//         ))}
//       </div>

//       <h2 className="text-2xl font-semibold text-blue-800 mt-10 mb-2">
//         {t.students}
//       </h2>
//       <p className="text-gray-700 mb-6">{t.studentsDesc}</p>

//       <h2 className="text-2xl font-semibold text-blue-800 mt-8 mb-2">
//         {t.library}
//       </h2>
//       <p className="text-gray-700">{t.libraryDesc}</p>
//     </div>
//   );
// }

// export default About;
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Teachers from "../components/Teachers";

function About() {
  const language = useSelector((state) => state.language);
  const navigate = useNavigate();
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/teachers", {
        headers: {
          "Cache-Control": "no-cache",
        },
      })

      .then((res) => {
        setTeachers(res.data);
      })
      .catch((err) => {
        console.error("O'qituvchilarni olishda xatolik:", err);
      });
  }, []);

  const translations = {
    uz: {
      title: "Bizning Maktab",
      paragraph1:
        "1-IDUM – bu bilim, rivojlanish va yutuqlarning manbai. Maktabda 150 dan ortiq o‘quvchi, 30 nafardan ortiq malakali o‘qituvchilar faoliyat yuritadi. Maktab 2008-yilda tashkil etilgan va zamonaviy sinfxonalar, kutubxona, sport zali hamda kompyuter laboratoriyalari bilan jihozlangan.",
      paragraph2:
        "Maktab o‘quvchilarning shaxsiy rivojlanishi, mustaqil fikrlashi va ijtimoiy faolligini targ‘ib qiladi. Har yili fan olimpiadalari, sport musobaqalari va turli tanlovlarda o‘quvchilarimiz muvaffaqiyatlarga erishmoqdalar.",
      paragraph3:
        "Asosiy qadriyatlarimiz – sifatli ta’lim, o‘zaro hurmat, ilg‘or metodika va doimiy rivojlanish. Ota-onalar bilan doimiy aloqada bo‘lib, o‘quvchilarning bilim darajasi va tarbiyasini nazorat qilamiz.",
      goal: "Bizning Maqsadlarimiz",
      goals: [
        "Har bir o‘quvchining qiziqishini aniqlab, uni rivojlantirish",
        "Yuqori malakali ustozlar orqali sifatli ta’lim berish",
        "Zamonaviy texnologiyalar va metodikalardan foydalanish",
        "Ota-onalar bilan hamkorlikda farzand tarbiyasiga e’tibor qaratish",
      ],
      teachers: "O‘qituvchilarimiz",
      students: "O‘quvchilar",
      library: "Kutubxona",
      studentsDesc:
        "Maktabda 1-sinfdan 11-sinfgacha bo‘lgan 150 dan ortiq o‘quvchi tahsil oladi. Ular fan, sport, san’at va boshqa sohalarda faol ishtirok etishadi.",
      libraryDesc:
        "Kutubxonamizda 3000 dan ortiq kitob mavjud bo‘lib, badiiy, ilmiy va ensiklopedik adabiyotlarni o‘quvchilar erkin o‘qishlari mumkin.",
    },
    ru: {
      title: "Наша Школа",
      paragraph1:
        "1-IDUM – это источник знаний, развития и достижений. В школе обучаются более 150 учеников, работают свыше 30 квалифицированных преподавателей. Основана в 2008 году, оснащена современными кабинетами, библиотекой, спортивным залом и компьютерными лабораториями.",
      paragraph2:
        "Мы поощряем развитие личности, независимое мышление и социальную активность учеников. Каждый год наши ученики побеждают на олимпиадах, соревнованиях и конкурсах.",
      paragraph3:
        "Наши ценности – качественное образование, взаимное уважение, современные методики и постоянное развитие. Мы поддерживаем связь с родителями и следим за успеваемостью учеников.",
      goal: "Наши Цели",
      goals: [
        "Выявить интересы каждого ученика и помочь их развить",
        "Обеспечить качественное образование с квалифицированными преподавателями",
        "Использовать современные технологии и методики",
        "Уделять внимание воспитанию совместно с родителями",
      ],
      teachers: "Наши Преподаватели",
      students: "Ученики",
      library: "Библиотека",
      studentsDesc:
        "В нашей школе обучается более 150 учеников с 1 по 11 классы. Они активно участвуют в науке, спорте и искусстве.",
      libraryDesc:
        "В библиотеке более 3000 книг: художественная, научная и справочная литература доступна каждому ученику.",
    },
    en: {
      title: "Our School",
      paragraph1:
        "1-IDUM is a center of knowledge, development, and achievement. The school has over 150 students and more than 30 qualified teachers. Established in 2008, it features modern classrooms, a library, a gym, and computer labs.",
      paragraph2:
        "We promote personal growth, independent thinking, and social activity among students. Each year, our students succeed in olympiads, sports, and various competitions.",
      paragraph3:
        "Our core values are quality education, mutual respect, advanced methodology, and continuous development. We stay in regular contact with parents to monitor student progress and discipline.",
      goal: "Our Goals",
      goals: [
        "Identify each student's interest and help them grow",
        "Deliver quality education through experienced teachers",
        "Use modern technologies and teaching methods",
        "Collaborate with parents for effective student development",
      ],
      teachers: "Our Teachers",
      students: "Students",
      library: "Library",
      studentsDesc:
        "Our school hosts over 150 students from grades 1 to 11. They actively participate in science, sports, arts, and more.",
      libraryDesc:
        "Our library has more than 3,000 books including fiction, scientific works, and encyclopedias available to all students.",
    },
    tj: {
      title: "Мактаби Мо",
      paragraph1:
        "1-IDUM – манбаи дониш, рушд ва дастовардҳост. Дар мактаб зиёда аз 150 хонанда ва беш аз 30 омӯзгори баландихтисос фаъолият мекунад. Мактаб соли 2009 таъсис ёфтааст ва бо синфхонаҳои замонавӣ, китобхона, толори варзиш ва лабораторияҳои компютерӣ таъмин мебошад.",
      paragraph2:
        "Мо инкишофи шахсӣ, андешаи мустақил ва фаъолиятҳои иҷтимоии хонандагонро ташвиқ мекунем. Ҳар сол шогирдони мо дар озмунҳо ва олимпиадаҳо ғолиб мешаванд.",
      paragraph3:
        "Арзишҳои асосии мо – таҳсили босифат, эҳтироми мутақобила, методикаҳои нав ва рушди пайваста мебошанд. Мо бо волидайн ҳамкории наздик дорем.",
      goal: "Ҳадафҳои Мо",
      goals: [
        "Муайян кардани шавқу завқи ҳар як хонанда ва рушди он",
        "Таъмини таҳсили босифат бо омӯзгорони соҳибихтисос",
        "Истифодаи технологияҳои муосир ва усулҳои таълим",
        "Ҳамкории доимӣ бо волидайн барои таълиму тарбия",
      ],
      teachers: "Омӯзгорони Мо",
      students: "Хонандагон",
      library: "Китобхона",
      studentsDesc:
        "Дар мактаб беш аз 150 хонанда аз синфи 1 то 11 таҳсил мекунанд. Онҳо дар илм, варзиш ва фарҳанг фаъоланд.",
      libraryDesc:
        "Китобхона зиёда аз 3000 китоб дорад, ки ба хонандагон дастрас мебошанд: бадеӣ, илмӣ ва маълумотномавӣ.",
    },
  };

  const t = translations[language] || translations.uz;

  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-blue-900 mb-6">{t.title}</h1>
      <p className="text-lg text-gray-700 mb-4">{t.paragraph1}</p>
      <p className="text-lg text-gray-700 mb-4">{t.paragraph2}</p>
      <p className="text-lg text-gray-700 mb-4">{t.paragraph3}</p>

      <h2 className="text-2xl font-semibold text-blue-800 mt-10 mb-4">
        {t.goal}
      </h2>
      <ul className="list-disc pl-6 text-gray-700 space-y-2">
        {t.goals.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h2 className="text-2xl font-semibold text-blue-800 mt-10 mb-4">
        {t.teachers}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {teachers.map((teacher) => (
          <div
            key={teacher.id}
            onClick={() => navigate(`/teachers/${teacher.id}`)}
            className="cursor-pointer border rounded-xl overflow-hidden shadow hover:shadow-lg transition duration-300"
          >
            <img
              src={teacher.img}
              alt={teacher.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-blue-900">
                {teacher.name}
              </h3>
              <p className="text-gray-600">{teacher.subject}</p>
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-semibold text-blue-800 mt-10 mb-2">
        {t.students}
      </h2>
      <p className="text-gray-700 mb-6">{t.studentsDesc}</p>

      <h2 className="text-2xl font-semibold text-blue-800 mt-10 mb-2">
        {t.library}
      </h2>
      <p className="text-gray-700 mb-6">{t.libraryDesc}</p>
      <Teachers teachers={teachers}></Teachers>
    </div>
  );
}

export default About;
