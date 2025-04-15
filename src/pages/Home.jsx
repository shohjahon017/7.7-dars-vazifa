import {
  FaChalkboardTeacher,
  FaSchool,
  FaUsers,
  FaMedal,
  FaComments,
} from "react-icons/fa";

function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="w-full py-20 px-6 bg-gradient-to-r from-blue-700 to-indigo-800 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            1-IDUM Maktabiga Xush Kelibsiz
          </h1>
          <p className="text-2xl">
            Bilim, tarbiya va muvaffaqiyat sari birinchi qadam
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="w-full py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">
            Nega aynan 1-IDUM?
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: (
                  <FaSchool className="text-blue-600 text-5xl mx-auto mb-4" />
                ),
                title: "Zamonaviy Ta’lim",
                desc: "Ilg‘or metodika va texnologiyalar bilan ta’lim jarayoni olib boriladi.",
              },
              {
                icon: (
                  <FaChalkboardTeacher className="text-blue-600 text-5xl mx-auto mb-4" />
                ),
                title: "Tajribali Ustozlar",
                desc: "Ustozlarimiz — o‘z sohasining yetuk mutaxassislari.",
              },
              {
                icon: (
                  <FaUsers className="text-blue-600 text-5xl mx-auto mb-4" />
                ),
                title: "Ijtimoiy Muhit",
                desc: "O‘quvchilar uchun do‘stona va xavfsiz muhit yaratilgan.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-gray-100 rounded-xl p-8 shadow-lg text-center hover:shadow-xl transition-all duration-300"
              >
                {item.icon}
                <h3 className="text-xl font-semibold mb-3 text-blue-800">
                  {item.title}
                </h3>
                <p className="text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="w-full py-20 px-6 bg-blue-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-blue-900 mb-12">
            Yutuqlarimiz
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                number: "1000+",
                label: "O‘quvchilar",
                icon: <FaUsers className="text-4xl mb-2 text-blue-700" />,
              },
              {
                number: "60+",
                label: "Ustozlar",
                icon: (
                  <FaChalkboardTeacher className="text-4xl mb-2 text-blue-700" />
                ),
              },
              {
                number: "120+",
                label: "Yutuqlar",
                icon: <FaMedal className="text-4xl mb-2 text-blue-700" />,
              },
              {
                number: "1985",
                label: "Tashkil topgan yil",
                icon: <FaSchool className="text-4xl mb-2 text-blue-700" />,
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl shadow text-center"
              >
                {item.icon}
                <h3 className="text-3xl font-bold text-blue-800">
                  {item.number}
                </h3>
                <p className="text-gray-600">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-blue-900 mb-12">
            O‘quvchilarimiz Fikri
          </h2>
          <div className="grid md:grid-cols-2 gap-10">
            {[
              {
                quote:
                  "Maktab menga katta imkoniyatlar eshigini ochdi. Har bir ustozga rahmat!",
                name: "Zuhra, 11-sinf",
              },
              {
                quote: "Bu yerda o‘qish nafaqat bilim, balki ilhom ham beradi.",
                name: "Javohir, 10-sinf",
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-gray-100 p-6 rounded-xl shadow">
                <FaComments className="text-blue-600 text-3xl mb-4 mx-auto" />
                <p className="italic text-gray-700 mb-4">"{item.quote}"</p>
                <p className="font-semibold text-blue-800">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4">
            Farzandingiz kelajagi shu yerdan boshlanadi
          </h2>
          <p className="text-lg mb-6">
            1-IDUM maktabi bilan siz ishonchli kelajak sari odim tashlaysiz
          </p>
          <button className="bg-white text-blue-800 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
            Biz bilan bog‘laning
          </button>
        </div>
      </section>
    </div>
  );
}

export default Home;
