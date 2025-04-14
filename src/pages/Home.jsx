// // function Home() {
// //   return (
// //     <div className="max-w-4xl mx-auto mt-10 p-6 ">
// //       <h2 className="text-3xl font-bold text-blue-900 mb-4 text-center">
// //         Xush kelibsiz 1-IDUM saytiga!
// //       </h2>
// //       <p className="text-lg mb-6">
// //         Bu yerda siz maktabimizning yangiliklari, o‘quv dasturlari va aloqa
// //         ma’lumotlari bilan tanishishingiz mumkin.
// //       </p>
// //     </div>
// //   );
// // }

// // export default Home;
// function Home() {
//   const news = [
//     {
//       id: 1,
//       title: "1-IDUM o'quvchilari Respublika olimpiadasida g'olib bo'lishdi",
//       date: "2025-04-01",
//     },
//     {
//       id: 2,
//       title: "Yangi sport zal ochildi",
//       date: "2025-03-25",
//     },
//     {
//       id: 3,
//       title: "Bahorgi maktab tadbirlari rejalashtirildi",
//       date: "2025-03-15",
//     },
//   ];

//   return (
//     <div className="max-w-6xl mx-auto mt-10 px-6">
//       {/* Hero section */}
//       <section className="bg-blue-100 p-10 rounded-lg shadow text-center">
//         <h1 className="text-4xl font-bold text-blue-900 mb-4">
//           Xush kelibsiz 1-IDUM saytiga!
//         </h1>
//         <p className="text-lg text-gray-700">
//           Bizning maktabda zamonaviy ta'lim, professional ustozlar va faol
//           o‘quvchilar jamoasi mavjud.
//         </p>
//       </section>

//       {/* About section */}
//       <section className="mt-12">
//         <h2 className="text-2xl font-semibold text-blue-800 mb-3">
//           Maktabimiz haqida
//         </h2>
//         <p className="text-gray-700 leading-7">
//           1-IDUM — bu bilim va intiluvchanlik markazi. Har yili o‘quvchilarimiz
//           Respublika, hatto xalqaro tanlov va olimpiadalarda yuqori natijalar
//           ko‘rsatmoqda. Maktabimizda yuqori texnologiyalar asosida o‘qitish,
//           ko‘plab to‘garaklar va tadbirlar yo‘lga qo‘yilgan.
//         </p>
//       </section>

//       {/* News section */}
//       <section className="mt-12">
//         <h2 className="text-2xl font-semibold text-blue-800 mb-4">
//           So‘nggi yangiliklar
//         </h2>
//         <ul className="space-y-4">
//           {news.map((item) => (
//             <li
//               key={item.id}
//               className="bg-white p-4 shadow rounded border border-gray-100"
//             >
//               <h3 className="text-lg font-semibold text-gray-900">
//                 {item.title}
//               </h3>
//               <p className="text-sm text-gray-500">{item.date}</p>
//             </li>
//           ))}
//         </ul>
//       </section>
//     </div>
//   );
// }

// export default Home;
function Home() {
  return (
    <div className="bg-white text-gray-800">
      <section className="text-center py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <h1 className="text-5xl font-bold mb-4">
          Xush Kelibsiz 1-IDUM Maktabiga
        </h1>
        <p className="text-lg max-w-2xl mx-auto">
          Bizning maktab zamonaviy taʼlim tizimi, malakali o‘qituvchilar va
          qulay muhit bilan farzandingiz kelajagiga poydevor yaratadi.
        </p>
      </section>

      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Nega aynan 1-IDUM?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-blue-50 p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-2">Yuqori sifatli taʼlim</h3>
            <p>
              Biz ilg‘or o‘qitish metodlari orqali o‘quvchilarning fikrlash
              qobiliyatini rivojlantiramiz.
            </p>
          </div>
          <div className="bg-blue-50 p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-2">Zamonaviy sharoitlar</h3>
            <p>
              Maktab binosi, laboratoriyalar va sport zallari zamonaviy
              texnikalar bilan jihozlangan.
            </p>
          </div>
          <div className="bg-blue-50 p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-2">Tajribalı ustozlar</h3>
            <p>
              O‘z sohasida yetuk o‘qituvchilar farzandingizni
              qo‘llab-quvvatlaydi.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-10">
            Tadbirlar & Yangiliklar
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
              <h3 className="font-bold text-lg mb-2">Fan olimpiadasi 2025</h3>
              <p>
                O‘quvchilarimiz tumanda o‘tkazilgan fan olimpiadasida faxrli
                o‘rinlarni egalladi.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
              <h3 className="font-bold text-lg mb-2">Yangi kompyuter sinfi</h3>
              <p>
                Maktabimizda yangi zamonaviy kompyuter xonasi foydalanishga
                topshirildi.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
