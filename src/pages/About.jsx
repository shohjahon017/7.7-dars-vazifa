// function About() {
//   return (
//     <div className="bg-white text-gray-800 py-16 px-4 max-w-5xl mx-auto">
//       <h1 className="text-4xl font-bold text-center mb-10">Maktab Haqida</h1>
//       <p className="text-lg mb-6">
//         1-IDUM (Ixtisoslashtirilgan Davlat Umumta’lim Maktabi) -yilda tashkil
//         etilgan bo‘lib, bugungi kunga kelib Farg`ona viloyati So`x tumanining
//         eng ilg‘or maktablaridan biri sifatida tan olingan.
//       </p>
//       <p className="text-lg mb-6">
//         Maktabda 150 dan ortiq o‘quvchi tahsil oladi. Biz o‘quvchilarga
//         matematika, informatika, fanlar, adabiyot va boshqa sohalar bo‘yicha
//         chuqurlashtirilgan taʼlim beramiz.
//       </p>
//       <p className="text-lg mb-6">
//         O‘qituvchilarimiz oliy maʼlumotli, tajribali va zamonaviy metodlarni
//         qo‘llagan holda dars olib boradi. Har yili maktabimiz o‘quvchilari oliy
//         o‘quv yurtlariga kirish imtihonlarida yuqori natijalarga erishadilar.
//       </p>
//       <p className="text-lg">
//         Biz uchun har bir o‘quvchining muvaffaqiyati muhim. Shu sababli, biz
//         nafaqat akademik bilim, balki hayotiy ko‘nikmalarni ham rivojlantirishga
//         eʼtibor qaratamiz.
//       </p>
//     </div>
//   );
// }

// export default About;
function About() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold text-blue-900 mb-6">Bizning Maktab</h1>
      <p className="text-lg text-gray-700 mb-4">
        1-IDUM – bu bilim, rivojlanish va yutuqlarning manbai. Bizning
        maktabimizda 1000 dan ortiq o‘quvchi va 60 nafardan ortiq malakali
        o‘qituvchilar tahsil va faoliyat yuritadi. Maktabimiz 1985-yilda tashkil
        topgan va hozirda zamonaviy texnologiyalar bilan jihozlangan sinf
        xonalariga, kutubxona, sport zali, informatika laboratoriyalariga ega.
      </p>
      <p className="text-lg text-gray-700 mb-4">
        Maktabimizda o‘quvchilarning shaxsiy rivojlanishi, mustaqil fikrlashi va
        ijtimoiy faolligi targ‘ib qilinadi. Har yili o‘quvchilarimiz fan
        olimpiadalarida, sport musobaqalarida va turli tanlovlarda g‘olib bo‘lib
        kelmoqda.
      </p>
      <p className="text-lg text-gray-700 mb-4">
        Asosiy qadriyatlarimiz – sifatli ta’lim, o‘zaro hurmat, ilg‘or metodika
        va doimiy rivojlanish. Ota-onalar bilan doimiy aloqada bo‘lish orqali
        o‘quvchilarning bilim darajasi va tarbiyasini doimiy nazorat qilib
        boramiz.
      </p>
      <h2 className="text-2xl font-semibold text-blue-800 mt-8 mb-4">
        Maqsadimiz
      </h2>
      <ul className="list-disc pl-6 text-gray-700 space-y-2">
        <li>
          Har bir o‘quvchining qiziqishini aniqlab, uni rivojlantirishga yordam
          berish
        </li>
        <li>Yuqori malakali ustozlar orqali sifatli ta`lim berish</li>
        <li>Zamonaviy texnologiyalar va metodikalarni qo‘llash</li>
        <li>
          Ota-onalar bilan hamkorlikda farzand tarbiyasiga e’tibor qaratish
        </li>
      </ul>
    </div>
  );
}

export default About;
