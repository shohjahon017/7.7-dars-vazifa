// import {
//   FaChalkboardTeacher,
//   FaSchool,
//   FaUsers,
//   FaMedal,
//   FaComments,
// } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";
// function Home() {
//   const theme = useSelector((state) => state.theme);
//   const navigate = useNavigate();
//   function handleNavigate(e) {
//     e.preventDefault();
//     navigate("/contact");
//   }
//   function handleAbout() {
//     navigate("/about");
//   }
//   return (
//     <div
//       className={`w-full min-h-screen ${
//         theme === "light" ? "bg-white text-black" : "bg-gray-900 text-white"
//       }`}
//     >
//       <section className="w-full py-20 px-6 bg-gradient-to-r from-blue-700 to-indigo-800 text-white">
//         <div className="max-w-7xl mx-auto text-center">
//           <h1 className="text-3xl md:text-6xl font-bold mb-6">
//             1-IDU Maktabiga Xush Kelibsiz!
//           </h1>
//           <p className="text-2xl">
//             Bilim, tarbiya va muvaffaqiyat sari birinchi qadam
//           </p>
//         </div>
//       </section>

//       <section className="w-full py-20 px-6 bg-white">
//         <div className="max-w-7xl mx-auto">
//           <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">
//             Nega aynan 1-IDUM?
//           </h2>
//           <div className="grid md:grid-cols-3 gap-10  ">
//             {[
//               {
//                 icon: (
//                   <FaSchool
//                     onClick={handleAbout}
//                     className="text-blue-600 text-5xl mx-auto mb-4"
//                   />
//                 ),
//                 title: "Zamonaviy Ta’lim",
//                 desc: "Ilg‘or metodika va texnologiyalar bilan ta’lim jarayoni olib boriladi.",
//               },
//               {
//                 icon: (
//                   <FaChalkboardTeacher className="text-blue-600 text-5xl mx-auto mb-4" />
//                 ),
//                 title: "Tajribali Ustozlar",
//                 desc: "Ustozlarimiz — o‘z sohasining yetuk mutaxassislari.",
//               },
//               {
//                 icon: (
//                   <FaUsers className="text-blue-600 text-5xl mx-auto mb-4" />
//                 ),
//                 title: "Ijtimoiy Muhit",
//                 desc: "O‘quvchilar uchun do‘stona va xavfsiz muhit yaratilgan.",
//               },
//             ].map((item, idx) => (
//               <div
//                 key={idx}
//                 className="bg-gray-100 rounded-xl p-8 cursor-pointer shadow-lg text-center hover:shadow-xl transition-all duration-300"
//               >
//                 {item.icon}
//                 <h3 className="text-xl font-semibold mb-3 text-blue-800">
//                   {item.title}
//                 </h3>
//                 <p className="text-gray-700">{item.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section className="w-full py-20 px-6 bg-blue-50">
//         <div className="max-w-7xl mx-auto text-center">
//           <h2 className="text-4xl font-bold text-blue-900 mb-12">
//             Yutuqlarimiz
//           </h2>
//           <div className="grid md:grid-cols-4 gap-8">
//             {[
//               {
//                 number: "150+",
//                 label: "O‘quvchilar",
//                 icon: <FaUsers className="text-4xl mb-2 text-blue-700" />,
//               },
//               {
//                 number: "30+",
//                 label: "Ustozlar",
//                 icon: (
//                   <FaChalkboardTeacher className="text-4xl mb-2 text-blue-700" />
//                 ),
//               },
//               {
//                 number: "120+",
//                 label: "Yutuqlar",
//                 icon: <FaMedal className="text-4xl mb-2 text-blue-700" />,
//               },
//               {
//                 number: "2009",
//                 label: "Tashkil topgan yil",
//                 icon: <FaSchool className="text-4xl mb-2  text-blue-700" />,
//               },
//             ].map((item, idx) => (
//               <div
//                 key={idx}
//                 className="bg-white p-6 rounded-xl flex flex-col items-center shadow text-center hover:shadow-xl transition-all duration-300"
//               >
//                 {item.icon}
//                 <h3 className="text-3xl font-bold text-blue-800">
//                   {item.number}
//                 </h3>
//                 <p className="text-gray-600 font-serif  ">{item.label}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section className="w-full py-20 px-6 bg-white">
//         <div className="max-w-6xl mx-auto text-center">
//           <h2 className="text-4xl font-bold text-blue-900 mb-12">
//             O‘quvchilarimiz Fikri
//           </h2>
//           <div className="grid md:grid-cols-2 gap-10 ">
//             {[
//               {
//                 quote:
//                   "Maktab menga katta imkoniyatlar eshigini ochdi. Har bir ustozga rahmat!",
//                 name: "Saidbek, 11-sinf",
//               },
//               {
//                 quote: "Bu yerda o‘qish nafaqat bilim, balki ilhom ham beradi.",
//                 name: "Javohir, 10-sinf",
//               },
//             ].map((item, idx) => (
//               <div
//                 key={idx}
//                 className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-xl transition-all duration-300"
//               >
//                 <FaComments className="text-blue-600 text-3xl mb-4 mx-auto" />
//                 <p className="italic text-gray-700 mb-4">"{item.quote}"</p>
//                 <p className="font-semibold text-blue-800">{item.name}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section className="w-full py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white text-center">
//         <div className="max-w-4xl mx-auto px-4">
//           <h2 className="text-4xl font-bold mb-4">
//             Farzandingiz kelajagi shu yerdan boshlanadi
//           </h2>
//           <p className="text-lg mb-6">
//             1-IDU maktabi bilan siz ishonchli kelajak sari odim tashlaysiz
//           </p>
//           <button
//             onClick={handleNavigate}
//             className="bg-white text-blue-800 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition"
//           >
//             Biz bilan bog‘laning
//           </button>
//         </div>
//       </section>
//     </div>
//   );
// }

// // export default Home;
// import {
//   FaChalkboardTeacher,
//   FaSchool,
//   FaUsers,
//   FaMedal,
//   FaComments,
//   FaBook,
//   FaPhoneAlt,
//   FaGlobe,
//   FaGraduationCap,
//   FaCamera,
//   FaFacebook,
//   FaTelegram,
//   FaInstagram,
// } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";

// function Home() {
//   const theme = useSelector((state) => state.theme);
//   const navigate = useNavigate();

//   const isDark = theme === "dark";
//   const bg = isDark ? "bg-gray-900" : "bg-white";
//   const text = isDark ? "text-white" : "text-black";
//   const box = isDark ? "bg-gray-800 text-white" : "bg-gray-100 text-black";
//   const sectionBg = isDark ? "bg-gray-800" : "bg-gray-50";
//   const footerBg = isDark ? "bg-gray-900" : "bg-gray-100";

//   function handleNavigate(e) {
//     e.preventDefault();
//     navigate("/contact");
//   }

//   function handleAbout() {
//     navigate("/about");
//   }

//   return (
//     <div className={`w-full min-h-screen ${bg} ${text}`}>
//       {/* Header */}
//       <section className="w-full py-20 px-6 bg-gradient-to-r from-blue-700 to-indigo-800 text-white">
//         <div className="max-w-7xl mx-auto text-center">
//           <h1 className="text-4xl md:text-6xl font-bold mb-4">
//             1-IDU Maktabiga Xush Kelibsiz!
//           </h1>
//           <p className="text-2xl">
//             Bilim, tarbiya va muvaffaqiyat sari birinchi qadam
//           </p>
//         </div>
//       </section>

//       {/* Nega biz */}
//       <section className={`w-full py-20 px-6 ${bg}`}>
//         <div className="max-w-7xl mx-auto">
//           <h2 className="text-4xl font-bold text-center text-blue-700 mb-12">
//             Nega aynan 1-IDUM?
//           </h2>
//           <div className="grid md:grid-cols-3 gap-10">
//             {[
//               {
//                 icon: <FaSchool onClick={handleAbout} />,
//                 title: "Zamonaviy Ta’lim",
//                 desc: "Ilg‘or metodika va texnologiyalar bilan ta’lim jarayoni olib boriladi.",
//               },
//               {
//                 icon: <FaChalkboardTeacher />,
//                 title: "Tajribali Ustozlar",
//                 desc: "O‘z sohasining yetuk mutaxassislari.",
//               },
//               {
//                 icon: <FaUsers />,
//                 title: "Ijtimoiy Muhit",
//                 desc: "Do‘stona va xavfsiz muhit.",
//               },
//               {
//                 icon: <FaBook />,
//                 title: "Boy kutubxona",
//                 desc: "Yuzlab kitoblar va elektron resurslar.",
//               },
//               {
//                 icon: <FaMedal />,
//                 title: "Musobaqalar",
//                 desc: "Fan va sport bo‘yicha tanlovlar.",
//               },
//               {
//                 icon: <FaPhoneAlt />,
//                 title: "Ota-onalar bilan aloqa",
//                 desc: "Doimiy aloqada bo‘ling.",
//               },
//             ].map((item, idx) => (
//               <div
//                 key={idx}
//                 className={`${box} rounded-xl p-8 text-center shadow hover:shadow-xl transition`}
//               >
//                 <div className="text-5xl mb-4 text-blue-600 mx-auto">
//                   {item.icon}
//                 </div>
//                 <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
//                 <p>{item.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Yutuqlar */}
//       <section className={`w-full py-20 px-6 ${sectionBg}`}>
//         <div className="max-w-7xl mx-auto text-center">
//           <h2 className="text-4xl font-bold text-blue-700 mb-12">
//             Yutuqlarimiz
//           </h2>
//           <div className="grid md:grid-cols-4 gap-8">
//             {[
//               { number: "150+", label: "O‘quvchilar", icon: <FaUsers /> },
//               {
//                 number: "30+",
//                 label: "Ustozlar",
//                 icon: <FaChalkboardTeacher />,
//               },
//               { number: "120+", label: "Yutuqlar", icon: <FaMedal /> },
//               {
//                 number: "2009",
//                 label: "Tashkil topgan yil",
//                 icon: <FaSchool />,
//               },
//             ].map((item, idx) => (
//               <div
//                 key={idx}
//                 className={`${box} p-6 rounded-xl flex flex-col items-center text-center shadow`}
//               >
//                 <div className="text-4xl mb-2 text-blue-600">{item.icon}</div>
//                 <h3 className="text-3xl font-bold">{item.number}</h3>
//                 <p>{item.label}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Fan yo‘nalishlari */}
//       <section className={`w-full py-20 px-6 ${bg}`}>
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-4xl font-bold text-center text-blue-700 mb-12">
//             Fan Yo‘nalishlari
//           </h2>
//           <div className="grid md:grid-cols-3 gap-8 text-center">
//             {[
//               "Matematika",
//               "Fizika",
//               "Ingliz tili",
//               "Informatika",
//               "Tarix",
//               "Biologiya",
//             ].map((fan, idx) => (
//               <div
//                 key={idx}
//                 className={`${box} p-6 rounded-xl shadow hover:scale-105 transition`}
//               >
//                 <FaGlobe className="text-3xl text-blue-600 mb-3 mx-auto" />
//                 <h3 className="text-xl font-semibold">{fan}</h3>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Galereya */}
//       <section className={`w-full py-20 px-6 ${sectionBg}`}>
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-4xl font-bold text-center text-blue-700 mb-12">
//             Maktab Hayotidan Lavhalar
//           </h2>
//           <div className="grid md:grid-cols-3 gap-6">
//             {[1, 2, 3, 4, 5, 6].map((i) => (
//               <div key={i} className="rounded-xl overflow-hidden shadow-lg">
//                 <img
//                   src={`https://source.unsplash.com/400x300/?school,education,student&sig=${i}`}
//                   alt={`gallery-${i}`}
//                   className="w-full h-60 object-cover"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Bitiruvchilar fikri */}
//       <section className={`w-full py-20 px-6 ${bg}`}>
//         <div className="max-w-6xl mx-auto text-center">
//           <h2 className="text-4xl font-bold text-blue-700 mb-12">
//             Bitiruvchilar Fikri
//           </h2>
//           <div className="grid md:grid-cols-2 gap-10">
//             {[
//               {
//                 quote: "Bu maktab hayotimdagi eng muhim bosqich bo‘ldi.",
//                 name: "Dilshod, Talaba",
//               },
//               {
//                 quote: "Ustozlarim tufayli IT sohasiga kirib bordim.",
//                 name: "Laylo, Dasturchi",
//               },
//             ].map((item, idx) => (
//               <div key={idx} className={`${box} p-6 rounded-xl shadow`}>
//                 <FaGraduationCap className="text-blue-600 text-3xl mb-4 mx-auto" />
//                 <p className="italic mb-4">"{item.quote}"</p>
//                 <p className="font-semibold">{item.name}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="w-full py-1 text-center">
//         <div className="max-w-4xl mx-auto px-4"></div>
//       </section>

//       {/* Footer */}
//       <footer className={`w-full py-10 px-6 ${footerBg} ${text}`}>
//         <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
//           <div>
//             <h3 className="text-lg font-semibold mb-4">Kontakt</h3>
//             <p>
//               Manzil: Fargʻona viloyati, Soʻx tumani, Chumoqcha ko‘chasi 10-uy
//             </p>
//             <p>Tel: +998 90 123 45 67</p>
//             <p>Email: info@1idum.uz</p>
//           </div>
//           <div>
//             <h3 className="text-lg font-semibold mb-4">Havolalar</h3>
//             <ul className="space-y-2">
//               <li>
//                 <a href="/" className="hover:text-blue-400">
//                   Bosh sahifa
//                 </a>
//               </li>
//               <li>
//                 <a href="/about" className="hover:text-blue-400">
//                   Biz haqimizda
//                 </a>
//               </li>
//               <li>
//                 <a href="/contact" className="hover:text-blue-400">
//                   Aloqa
//                 </a>
//               </li>
//             </ul>
//           </div>
//           <div>
//             <h3 className="text-lg font-semibold mb-4">Ijtimoiy Tarmoqlar</h3>
//             <div className="flex space-x-4 text-2xl text-blue-500 mb-4">
//               <a href="#">
//                 <FaFacebook />
//               </a>
//               <a href="#">
//                 <FaTelegram />
//               </a>
//               <a href="#">
//                 <FaInstagram />
//               </a>
//             </div>
//             <button
//               onClick={handleNavigate}
//               className="bg-white text-blue-800 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition"
//             >
//               Biz bilan bog‘laning
//             </button>
//           </div>
//         </div>
//         <div className="mt-8 text-center text-sm opacity-70">
//           © 2025 1-IDUM Maktabi. Barcha huquqlar himoyalangan.
//         </div>
//       </footer>
//     </div>
//   );
// }

// export default Home;
import {
  FaChalkboardTeacher,
  FaSchool,
  FaUsers,
  FaMedal,
  FaBook,
  FaPhoneAlt,
  FaGlobe,
  FaGraduationCap,
  FaFacebook,
  FaTelegram,
  FaInstagram,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Home() {
  const language = useSelector((state) => state.language);
  const theme = useSelector((state) => state.theme);
  const navigate = useNavigate();

  const isDark = theme === "dark";
  const bg = isDark ? "bg-gray-900" : "bg-white";
  const text = isDark ? "text-white" : "text-black";
  const box = isDark ? "bg-gray-800 text-white" : "bg-gray-100 text-black";
  const sectionBg = isDark ? "bg-gray-800" : "bg-gray-50";
  const footerBg = isDark ? "bg-gray-900" : "bg-gray-100";

  function handleNavigate(e) {
    e.preventDefault();
    navigate("/contact");
  }

  function handleAbout() {
    navigate("/about");
  }
  const translations = {
    uz: {
      welcome: "1-IDU Maktabiga Xush Kelibsiz!",
      knowledge: "Bilim, tarbiya va muvaffaqiyat sari birinchi qadam",
      why: " Nega aynan 1-IDUM?",
      award: "  Yutuqlarimiz ",
      subject: "  Fan Yo‘nalishlari",
      highlight: "      Maktab Hayotidan Lavhalar",
      opinion: "  Bitiruvchilar Fikri",
      law: "1-IDUM. Barcha huquqlar himoyalangan.",
      address:
        "Manzil: Fargʻona viloyati, Soʻx tumani,Chumoqcha MFY, So`x ko‘chasi 59-uy",
      phone: "Telefon: +998 (71) 123-45-67",
      email: "Email: info@1-idum.uz",
      hours: "Ish vaqti: Dushanba - Shanba: 08:00 - 17:00",
      home: "Bosh sahifa",
      about: "Biz haqimizda",
      contact: "Aloqa",
      link: "Havolalar",
      con: "Kontakt",
      media: "Ijtimoiy tarmoqlar",
      connect: "Biz bilan bog'laning",
    },
    ru: {
      welcome:
        "Добро пожаловать в 1-ю специализированную государственную общеобразовательную школу!",
      knowledge: " Первый шаг к знаниям, образованию и успеху",
      why: "Почему именно IDUM 1?",
      award: " Наши достижения ",
      subject: "  Научные направления",
      highlight: " Сцены школьной жизни",
      opinion: "Мнение выпускника",
      address: "Адрес: Ферганская область, Сохский район, улица Сох, дом 59",
      phone: "Телефон: +998 (71) 123-45-67",
      email: "Эл. почта: info@1-idum.uz",
      hours: "Время работы: Пн - Сб: 08:00 - 17:00",
      law: "1-IDUM. Все права защищены.",
      home: "Главная",
      about: "О школе",
      contact: "Контакт",
      link: "Ссылки",
      con: "Контакты",
      media: "Социальные сети",
      connect: "Связаться с нами",
    },
    en: {
      welcome: "Welcome to 1st IDU School!",
      knowledge: "The first step towards knowledge, education and success",
      why: "Why exactly IDUM 1?",
      law: "1-IDUM. All rights reserved.",
      award: "  Our achievements",
      subject: "Science Areas",
      highlight: "Scenes from School Life      ",
      opinion: "Graduate Opinion",
      address: "Address: Fergana region, Sokh district, Sokh street, house 59",
      phone: "Phone: +998 (71) 123-45-67",
      email: "Email: info@1-idum.uz",
      hours: "Working hours: Monday - Saturday: 08:00 - 17:00",
      home: "Home",
      about: "About",
      contact: "Contact",
      link: "Links",
      con: "Contacts",
      media: "Social Media",
      connect: "Contact us",
    },
    tj: {
      welcome: "Хуш омадед ба мактаби 1-уми IDU!",
      knowledge: "Қадами аввал ба сӯи дониш, таҳсил ва муваффақият",
      why: "Чаро маҳз 1-IDUM?",
      award: " Муваффакиятхои мо",
      subject: " Соҳаҳои илм",
      highlight: "Сахнахо аз хаёти мактаб    ",
      opinion: " Андешаи баъдидипломӣ",
      address: "Суроға: Вилояти Фарғона, ноҳияи Сӯх, кӯчаи Сӯх, хонаи 59",
      phone: "Телефон: +998 (71) 123-45-67",
      email: "Email: info@1-idum.uz",
      hours: "Соатҳои корӣ: Душанбе - Шанбе: 08:00 - 17:00",
      home: "Асосий",
      about: "Дар бораи мактаб",
      law: "1-ИДУМ. Ҳамаи ҳуқуқ маҳфуз аст.",
      contact: "Контакт",
      link: "Линкҳо",
      con: "Тамос",
      media: "Шабакаҳои иҷтимоӣ",
      connect: "Бо мо тамос гиред",
    },
  };
  const t = translations[language] || translations.uz;
  return (
    <div className={`w-full min-h-screen ${bg} ${text}`}>
      <section className="w-full py-20 px-6 bg-gradient-to-r from-blue-700 to-indigo-800 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">{t.welcome}</h1>
          <p className="text-2xl">{t.knowledge}</p>
        </div>
      </section>

      <section className={`w-full py-20 px-6 ${bg}`}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center  text-blue-700 mb-12">
            {t.why}
          </h2>
          <div className="grid md:grid-cols-3 gap-10" onClick={handleAbout}>
            {[
              {
                icon: <FaSchool />,
                title: {
                  uz: "Zamonaviy Ta’lim",
                  ru: "Современное образование",
                  en: "Modern Education",
                  tj: "Маорифи муосир",
                },
                desc: {
                  uz: "Ilg‘or metodika va texnologiyalar bilan ta’lim jarayoni olib boriladi.",
                  ru: "Образовательный процесс с передовыми методиками и технологиями.",
                  en: "Educational process with advanced methodology and technologies.",
                  tj: "Равандҳои таълим бо методика ва технологияҳои пешқадам.",
                },
              },
              {
                icon: <FaChalkboardTeacher />,
                title: {
                  uz: "Tajribali Ustozlar",
                  ru: "Опытные преподаватели",
                  en: "Experienced Teachers",
                  tj: "Омӯзгорони соҳибтаҷриба",
                },
                desc: {
                  uz: "O‘z sohasining yetuk mutaxassislari.",
                  ru: "Настоящие профессионалы своего дела.",
                  en: "Experts in their fields.",
                  tj: "Мутахассисони беҳтарин дар соҳаи худ.",
                },
              },
              {
                icon: <FaUsers />,
                title: {
                  uz: "Ijtimoiy Muhit",
                  ru: "Социальная среда",
                  en: "Social Environment",
                  tj: "Муҳити иҷтимоӣ",
                },
                desc: {
                  uz: "Do‘stona va xavfsiz muhit.",
                  ru: "Дружелюбная и безопасная атмосфера.",
                  en: "Friendly and safe atmosphere.",
                  tj: "Муҳити дӯстона ва бехатар.",
                },
              },
              {
                icon: <FaBook />,
                title: {
                  uz: "Boy kutubxona",
                  ru: "Богатая библиотека",
                  en: "Rich Library",
                  tj: "Китобхонаи бой",
                },
                desc: {
                  uz: "Yuzlab kitoblar va elektron resurslar.",
                  ru: "Сотни книг и электронных ресурсов.",
                  en: "Hundreds of books and electronic resources.",
                  tj: "Садҳо китобҳо ва захираҳои электронӣ.",
                },
              },
              {
                icon: <FaMedal />,
                title: {
                  uz: "Musobaqalar",
                  ru: "Соревнования",
                  en: "Competitions",
                  tj: "Мусобиқаҳо",
                },
                desc: {
                  uz: "Fan va sport bo‘yicha tanlovlar.",
                  ru: "Конкурсы по науке и спорту.",
                  en: "Competitions in science and sports.",
                  tj: "Озмунҳои илмӣ ва варзишӣ.",
                },
              },
              {
                icon: <FaPhoneAlt />,
                title: {
                  uz: "Ota-onalar bilan aloqa",
                  ru: "Связь с родителями",
                  en: "Communication with Parents",
                  tj: "Алоқа бо волидон",
                },
                desc: {
                  uz: "Doimiy aloqada bo‘ling.",
                  ru: "Постоянный контакт с родителями.",
                  en: "Stay in constant contact.",
                  tj: "Дар тамоси доимӣ бошед.",
                },
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className={`${box} rounded-xl p-8 text-center cursor-pointer justify-center shadow hover:shadow-xl transition`}
              >
                <div className="text-5xl mb-4 text-blue-600 mx-auto flex justify-center">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  {item.title[language]}
                </h3>
                <p>{item.desc[language]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`w-full py-20 px-6 ${sectionBg}`}>
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-blue-700 mb-12">{t.award}</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                number: "150+",
                label: {
                  uz: "O‘quvchilar",
                  ru: "Ученики",
                  en: "Students",
                  tj: "Хонандагон",
                },
                icon: <FaUsers />,
              },
              {
                number: "30+",
                label: {
                  uz: "Ustozlar",
                  ru: "Преподаватели",
                  en: "Teachers",
                  tj: "Омӯзгорон",
                },
                icon: <FaChalkboardTeacher />,
              },
              {
                number: "120+",
                label: {
                  uz: "Yutuqlar",
                  ru: "Достижения",
                  en: "Achievements",
                  tj: "Дастовардҳо",
                },
                icon: <FaMedal />,
              },
              {
                number: "2009",
                label: {
                  uz: "Tashkil topgan yil",
                  ru: "Год основания",
                  en: "Founded Year",
                  tj: "Соли таъсисёбӣ",
                },
                icon: <FaSchool />,
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className={`${box} p-6 rounded-xl flex flex-col items-center text-center shadow`}
              >
                <div className="text-4xl mb-2 text-blue-600">{item.icon}</div>
                <h3 className="text-3xl font-bold">{item.number}</h3>
                <p>{item.label[language]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className={`w-full py-20 px-6 ${bg}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-blue-700 mb-12">
            {t.subject}
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              {
                uz: "Matematika",
                ru: "Математика",
                en: "Mathematics",
                tj: "Математика",
              },
              {
                uz: "Fizika",
                ru: "Физика",
                en: "Physics",
                tj: "Физика",
              },
              {
                uz: "Ingliz tili",
                ru: "Английский язык",
                en: "English",
                tj: "Забони англисӣ",
              },
              {
                uz: "Informatika",
                ru: "Информатика",
                en: "Informatics",
                tj: "Информатика",
              },
              {
                uz: "Tarix",
                ru: "История",
                en: "History",
                tj: "Таърих",
              },
              {
                uz: "Biologiya",
                ru: "Биология",
                en: "Biology",
                tj: "Биология",
              },
            ].map((fan, idx) => (
              <div
                key={idx}
                className={`${box} p-6 rounded-xl shadow hover:scale-105 transition`}
              >
                <FaGlobe className="text-3xl text-blue-600 mb-3 mx-auto" />
                <h3 className="text-xl font-semibold">{fan[language]}</h3>{" "}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`w-full py-20 px-6 ${sectionBg}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-blue-700 mb-12">
            {t.highlight}
          </h2>
          <div className="flex flex-wrap justify-center">
            <img
              src="/mak.jpg"
              alt="School photo"
              className="rounded-md w-80 m-2"
            />
            <img
              src="/mak2.jpg"
              alt="School photo"
              className="rounded-md w-80 m-2"
            />
            <img
              src="/mak3.jpg"
              alt="School photo"
              className="rounded-md w-80 m-2"
            />
            <img
              src="/mak4.jpg"
              alt="School photo"
              className="rounded-md w-80 m-2"
            />
            <img
              src="/mak5.jpg"
              alt="School photo"
              className="rounded-md w-80 m-2"
            />
            <img
              src="/mak6.jpg"
              alt="School photo"
              className="rounded-md w-80 m-2"
            />
          </div>{" "}
        </div>
      </section>

      <section className={`w-full py-20 px-6 ${bg}`}>
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-blue-700 mb-12">
            {t.opinion}
          </h2>
          <div className="grid md:grid-cols-2 gap-10">
            {[
              {
                uz: {
                  quote: "Bu maktab hayotimdagi eng muhim bosqich bo‘ldi.",
                  name: "Saidbek, Talaba",
                },
                ru: {
                  quote: "Эта школа была самым важным этапом в моей жизни.",
                  name: "Саидбек, Студент",
                },
                en: {
                  quote: "This school was the most important stage in my life.",
                  name: "Saidbek, Student",
                },
                tj: {
                  quote: "Ин мактаб муҳимтарин зинаи ҳаёти ман буд.",
                  name: "Саидбек, Донишҷӯ",
                },
              },
              {
                uz: {
                  quote: "Ustozlarim tufayli IT sohasiga kirib bordim.",
                  name: "Shohjahon, Dasturchi",
                },
                ru: {
                  quote: "Благодаря учителям я попал в IT-сферу.",
                  name: "Шохжахон, Программист",
                },
                en: {
                  quote: "Thanks to my teachers, I entered the IT field.",
                  name: "Shohjahon, Developer",
                },
                tj: {
                  quote: "Ба шарофати устодонам ман ба соҳаи IT дохил шудам.",
                  name: "Шохҷаҳон, Барномасоз",
                },
              },
            ].map((item, idx) => (
              <div key={idx} className={`${box} p-6 rounded-xl shadow`}>
                <FaGraduationCap className="text-blue-600 text-3xl mb-4 mx-auto" />
                <p className="italic mb-4">"{item[language].quote}"</p>{" "}
                <p className="font-semibold">{item[language].name}</p>
              </div>
            ))}
          </div>

          <div className="w-full h-96 py-10">
            <iframe
              className="w-full h-full rounded-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2449.123456789!2d70.123456!3d40.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38b1234567890abc%3A0xabcdef1234567890!2sSo‘x%20tumani%2C%20Farg‘ona%20viloyati!5e0!3m2!1suz!2s!4v1689097895648!5m2!1suz!2s"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="So‘x tumani xaritasi"
            ></iframe>
          </div>
        </div>
      </section>
      <footer className={`w-full ${footerBg} ${text}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 text-center md:text-left">
            <div className="space-y-3">
              <h3 className="text-xl font-semibold">📍{t.con}</h3>
              <a
                href="https://maps.app.goo.gl/U1XfsfFEyPN1Sdnb9"
                className="text-sm hover:underline"
              >
                {t.address}
              </a>
              <p className="text-sm">
                <a href="tel:+998901234567" className="hover:underline">
                  {t.phone}
                </a>
              </p>
              <p className="text-sm">
                <a href="mailto:info@1idum.uz" className="hover:underline">
                  {t.email}
                </a>
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-semibold">🔗 {t.link}</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="/" className="hover:text-blue-500 transition">
                    {t.home}
                  </a>
                </li>
                <li>
                  <a href="/about" className="hover:text-blue-500 transition">
                    {t.about}
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:text-blue-500 transition">
                    {t.contact}
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">🌐 {t.media}</h3>
              <div className="flex justify-center md:justify-start gap-5 text-2xl text-blue-600">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  className="hover:scale-110 transition"
                >
                  <FaFacebook />
                </a>
                <a
                  href="https://t.me/+KYv5MRxu45QzYTI6"
                  target="_blank"
                  className="hover:scale-110 transition"
                >
                  <FaTelegram />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  className="hover:scale-110 transition"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={handleNavigate}
              className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              {t.connect}
            </button>
          </div>

          <div className="border-t mt-10 pt-6 text-center text-sm text-gray-500">
            &copy; {new Date().getFullYear()} {t.law}
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
