function Home() {
  return (
    <div className="bg-white text-gray-800">
      <section className="text-center py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <h1 className="text-5xl font-bold mb-4">
          Xush Kelibsiz 1-IDU Maktabiga
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
