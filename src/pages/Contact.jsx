// // import { useState } from "react";
// // import emailjs from "@emailjs/browser";

// // function Contact() {
// //   const [formData, setFormData] = useState({
// //     name: "",
// //     email: "",
// //     message: "",
// //   });

// //   const [errors, setErrors] = useState({});
// //   const [submitted, setSubmitted] = useState(false);
// //   const [sendError, setSendError] = useState(false);
// //   const [loading, setLoading] = useState(false);

// //   const handleChange = (e) => {
// //     setFormData({ ...formData, [e.target.name]: e.target.value });
// //   };

// //   const validate = () => {
// //     const newErrors = {};
// //     if (!formData.name.trim()) newErrors.name = "Ism majburiy.";
// //     if (!formData.email.trim()) {
// //       newErrors.email = "Email majburiy.";
// //     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
// //       newErrors.email = "Email noto‘g‘ri formatda.";
// //     }
// //     if (!formData.message.trim()) newErrors.message = "Xabar matni majburiy.";
// //     return newErrors;
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     const validationErrors = validate();
// //     if (Object.keys(validationErrors).length > 0) {
// //       setErrors(validationErrors);
// //       setSubmitted(false);
// //       setSendError(false);
// //       return;
// //     }

// //     setErrors({});
// //     setLoading(true);

// //     emailjs
// //       .send(
// //         "service_zkazfzi",
// //         "template_uemv3bj",
// //         formData,
// //         "3tx5wNOk5M8BrKxBX"
// //       )
// //       .then(() => {
// //         setSubmitted(true);
// //         setSendError(false);
// //         setFormData({ name: "", email: "", message: "" });
// //         setLoading(false);
// //       })
// //       .catch(() => {
// //         setSubmitted(false);
// //         setSendError(true);
// //         setLoading(false);
// //       });
// //   };

// //   return (
// //     <div className="max-w-3xl mx-auto px-4 py-20">
// //       <h1 className="text-4xl font-bold text-blue-900 mb-6">
// //         Biz bilan bog‘laning
// //       </h1>
// //       <p className="text-lg text-gray-700 mb-4">
// //         Agar sizda savollar, takliflar yoki murojaatlar bo‘lsa, quyidagi forma
// //         orqali bizga xabar yuborishingiz mumkin:
// //       </p>

// //       <div className="space-y-4 text-gray-700 mb-10">
// //         <div>
// //           <span className="font-semibold text-blue-800">Manzil:</span> Fargʻona
// //           viloyati, Soʻx tumani, Chumoqcha ko‘chasi 10-uy
// //         </div>
// //         <div>
// //           <span className="font-semibold text-blue-800">Telefon:</span> +998
// //           (71) 123-45-67
// //         </div>
// //         <div>
// //           <span className="font-semibold text-blue-800">Email:</span>{" "}
// //           info@1-idum.uz
// //         </div>
// //         <div>
// //           <span className="font-semibold text-blue-800">Ish vaqti:</span>{" "}
// //           Dushanba - Shanba: 08:00 - 17:00
// //         </div>
// //       </div>

// //       <form
// //         onSubmit={handleSubmit}
// //         className="space-y-6 bg-gray-100 p-6 rounded-lg shadow-md"
// //       >
// //         <div>
// //           <input
// //             type="text"
// //             name="name"
// //             value={formData.name}
// //             onChange={handleChange}
// //             placeholder="Ismingiz"
// //             className="w-full border px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
// //           />
// //           {errors.name && (
// //             <p className="text-red-500 text-sm mt-1">{errors.name}</p>
// //           )}
// //         </div>

// //         <div>
// //           <input
// //             type="email"
// //             name="email"
// //             value={formData.email}
// //             onChange={handleChange}
// //             placeholder="Email manzilingiz"
// //             className="w-full border px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
// //           />
// //           {errors.email && (
// //             <p className="text-red-500 text-sm mt-1">{errors.email}</p>
// //           )}
// //         </div>

// //         <div>
// //           <textarea
// //             name="message"
// //             value={formData.message}
// //             onChange={handleChange}
// //             placeholder="Xabaringiz"
// //             className="w-full border px-4 py-3 rounded h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
// //           ></textarea>
// //           {errors.message && (
// //             <p className="text-red-500 text-sm mt-1">{errors.message}</p>
// //           )}
// //         </div>

// //         <button
// //           type="submit"
// //           disabled={loading}
// //           className={`${
// //             loading ? "bg-blue-700 cursor-not-allowed" : "bg-blue-900"
// //           } text-white px-6 py-3 rounded transition duration-300 w-full`}
// //         >
// //           {loading ? "Yuborilmoqda..." : "Yuborish"}
// //         </button>

// //         {submitted && (
// //           <p className="text-green-600 mt-4 text-center font-medium">
// //             ✅ Xabaringiz yuborildi! Tez orada siz bilan bog‘lanamiz.
// //           </p>
// //         )}

// //         {sendError && (
// //           <p className="text-red-600 mt-4 text-center font-medium">
// //             ❌ Xatolik yuz berdi. Iltimos, keyinroq urinib ko‘ring.
// //           </p>
// //         )}
// //       </form>
// //     </div>
// //   );
// // }

// // export default Contact;
// import { useState, useRef } from "react";
// import { useSelector } from "react-redux";
// import emailjs from "@emailjs/browser";

// function Contact() {
//   const formRef = useRef();
//   const language = useSelector((state) => state.language);

//   const translations = {
//     uz: {
//       title: "Biz bilan bog‘laning",
//       description:
//         "Agar sizda savollar, takliflar yoki murojaatlar bo‘lsa, quyidagi forma orqali bizga xabar yuborishingiz mumkin:",
//       address:
//         "Manzil: Fargʻona viloyati, Soʻx tumani, Chumoqcha ko‘chasi 10-uy",
//       phone: "Telefon: +998 (71) 123-45-67",
//       email: "Email: info@1-idum.uz",
//       hours: "Ish vaqti: Dushanba - Shanba: 08:00 - 17:00",
//       namePlaceholder: "Ismingiz",
//       emailPlaceholder: "Email manzilingiz",
//       messagePlaceholder: "Xabaringiz",
//       submit: "Yuborish",
//       loading: "Yuborilmoqda...",
//       success: "✅ Xabaringiz yuborildi! Tez orada siz bilan bog‘lanamiz.",
//       error: "❌ Xatolik yuz berdi. Iltimos, keyinroq urinib ko‘ring.",
//       nameError: "Ism majburiy.",
//       emailRequired: "Email majburiy.",
//       emailInvalid: "Email noto‘g‘ri formatda.",
//       messageError: "Xabar matni majburiy.",
//     },
//     ru: {
//       title: "Свяжитесь с нами",
//       description:
//         "Если у вас есть вопросы или предложения, отправьте нам сообщение через форму ниже:",
//       address:
//         "Адрес: Ферганская область, Сохский район, улица Чумокча, дом 10",
//       phone: "Телефон: +998 (71) 123-45-67",
//       email: "Эл. почта: info@1-idum.uz",
//       hours: "Время работы: Пн - Сб: 08:00 - 17:00",
//       namePlaceholder: "Ваше имя",
//       emailPlaceholder: "Ваш Email",
//       messagePlaceholder: "Ваше сообщение",
//       submit: "Отправить",
//       loading: "Отправка...",
//       success: "Ваше сообщение отправлено! Мы скоро с вами свяжемся.",
//       error: "❌ Произошла ошибка. Пожалуйста, попробуйте позже.",
//       nameError: "Имя обязательно.",
//       emailRequired: "Email обязателен.",
//       emailInvalid: "Неверный формат Email.",
//       messageError: "Сообщение обязательно.",
//     },
//     en: {
//       title: "Contact Us",
//       description:
//         "If you have questions or suggestions, you can send us a message using the form below:",
//       address:
//         "Address: Fergana region, Sokh district, Chumokcha street, house 10",
//       phone: "Phone: +998 (71) 123-45-67",
//       email: "Email: info@1-idum.uz",
//       hours: "Working hours: Monday - Saturday: 08:00 - 17:00",
//       namePlaceholder: "Your name",
//       emailPlaceholder: "Your email",
//       messagePlaceholder: "Your message",
//       submit: "Send",
//       loading: "Sending...",
//       success: "Your message has been sent! We'll get back to you soon.",
//       error: "❌ An error occurred. Please try again later.",
//       nameError: "Name is required.",
//       emailRequired: "Email is required.",
//       emailInvalid: "Invalid email format.",
//       messageError: "Message is required.",
//     },
//     tj: {
//       title: "Бо мо тамос гиред",
//       description:
//         "Агар шумо савол ё пешниҳод дошта бошед, метавонед ба мо паём фиристед тавассути шакли зерин:",
//       address: "Суроға: Вилояти Фарғона, ноҳияи Сӯх, кӯчаи Чумоқча, хонаи 10",
//       phone: "Телефон: +998 (71) 123-45-67",
//       email: "Email: info@1-idum.uz",
//       hours: "Соатҳои корӣ: Душанбе - Шанбе: 08:00 - 17:00",
//       namePlaceholder: "Номи шумо",
//       emailPlaceholder: "Email-и шумо",
//       messagePlaceholder: "Паёми шумо",
//       submit: "Фиристодан",
//       loading: "Фиристодан...",
//       success: "Паёми шумо фиристода шуд! Мо ба зудӣ бо шумо тамос мегирем.",
//       error: "❌ Хатolik yuz berdi. Iltimos, keyinroq urinib ko‘ring.",
//       nameError: "Ном ҳатмист.",
//       emailRequired: "Email ҳатмист.",
//       emailInvalid: "Формати нодурусти Email.",
//       messageError: "Паём ҳатмист.",
//     },
//   };

//   const t = translations[language];

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const [errors, setErrors] = useState({});
//   const [submitted, setSubmitted] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [sendError, setSendError] = useState(false);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const validate = () => {
//     const newErrors = {};
//     if (!formData.name.trim()) newErrors.name = t.nameError;
//     if (!formData.email.trim()) {
//       newErrors.email = t.emailRequired;
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = t.emailInvalid;
//     }
//     if (!formData.message.trim()) newErrors.message = t.messageError;
//     return newErrors;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const validationErrors = validate();
//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//       setSubmitted(false);
//     } else {
//       setErrors({});
//       setLoading(true);
//       setSendError(false);

//       emailjs
//         .send(
//           "service_zkazfzi",
//           "template_uemv3bj",
//           formData,
//           "3tx5wNOk5M8BrKxBX"
//         )
//         .then(
//           () => {
//             setSubmitted(true);
//             setFormData({ name: "", email: "", message: "" });
//           },
//           () => {
//             setSendError(true);
//             setSubmitted(false);
//           }
//         )
//         .finally(() => {
//           setLoading(false);
//         });
//     }
//   };

//   return (
//     <div className="max-w-3xl mx-auto px-4 py-20">
//       <h1 className="text-4xl font-bold text-blue-900 mb-6">{t.title}</h1>
//       <p className="text-lg text-black mb-4">{t.description}</p>

//       <div className="space-y-4 text-gray-700 mb-10">
//         <div>
//           <span className="font-semibold text-blue-800">{t.address}</span>
//         </div>
//         <div>
//           <span className="font-semibold text-blue-800">{t.phone}</span>
//         </div>
//         <div>
//           <span className="font-semibold text-blue-800">{t.email}</span>
//         </div>
//         <div>
//           <span className="font-semibold text-blue-800">{t.hours}</span>
//         </div>
//       </div>

//       <form
//         ref={formRef}
//         onSubmit={handleSubmit}
//         className="space-y-6 bg-gray-100 p-6 rounded-lg shadow-md"
//       >
//         <div>
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             placeholder={t.namePlaceholder}
//             className="w-full border px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//           {errors.name && (
//             <p className="text-red-500 text-sm mt-1">{errors.name}</p>
//           )}
//         </div>

//         <div>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             placeholder={t.emailPlaceholder}
//             className="w-full border px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//           {errors.email && (
//             <p className="text-red-500 text-sm mt-1">{errors.email}</p>
//           )}
//         </div>

//         <div>
//           <textarea
//             name="message"
//             value={formData.message}
//             onChange={handleChange}
//             placeholder={t.messagePlaceholder}
//             className="w-full border px-4 py-3 rounded h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
//           ></textarea>
//           {errors.message && (
//             <p className="text-red-500 text-sm mt-1">{errors.message}</p>
//           )}
//         </div>

//         <button
//           type="submit"
//           className="bg-blue-900 text-white px-6 py-3 rounded hover:bg-blue-700 transition duration-300 w-full"
//         >
//           {loading ? t.loading : t.submit}
//         </button>

//         {submitted && (
//           <p className="text-green-600 mt-4 text-center font-medium">
//             {t.success}
//           </p>
//         )}

//         {sendError && (
//           <p className="text-red-600 mt-4 text-center font-medium">{t.error}</p>
//         )}
//       </form>
//     </div>
//   );
// }

// export default Contact;
import { useState, useRef } from "react";
import { useSelector } from "react-redux";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Contact() {
  const formRef = useRef();
  const language = useSelector((state) => state.language);

  const translations = {
    uz: {
      title: "Biz bilan bog‘laning",
      description:
        "Agar sizda savollar, takliflar yoki murojaatlar bo‘lsa, quyidagi forma orqali bizga xabar yuborishingiz mumkin:",
      address:
        "Manzil: Fargʻona viloyati, Soʻx tumani, Chumoqcha ko‘chasi 10-uy",
      phone: "Telefon: +998 (71) 123-45-67",
      email: "Email: info@1-idum.uz",
      hours: "Ish vaqti: Dushanba - Shanba: 08:00 - 17:00",
      namePlaceholder: "Ismingiz",
      emailPlaceholder: "Email manzilingiz",
      messagePlaceholder: "Xabaringiz",
      submit: "Yuborish",
      loading: "Yuborilmoqda...",
      success: "✅ Xabaringiz yuborildi! Tez orada siz bilan bog‘lanamiz.",
      error: "❌ Xatolik yuz berdi. Iltimos, keyinroq urinib ko‘ring.",
      nameError: "Ism majburiy.",
      emailRequired: "Email majburiy.",
      emailInvalid: "Email noto‘g‘ri formatda.",
      messageError: "Xabar matni majburiy.",
    },
    ru: {
      title: "Свяжитесь с нами",
      description:
        "Если у вас есть вопросы или предложения, отправьте нам сообщение через форму ниже:",
      address:
        "Адрес: Ферганская область, Сохский район, улица Чумокча, дом 10",
      phone: "Телефон: +998 (71) 123-45-67",
      email: "Эл. почта: info@1-idum.uz",
      hours: "Время работы: Пн - Сб: 08:00 - 17:00",
      namePlaceholder: "Ваше имя",
      emailPlaceholder: "Ваш Email",
      messagePlaceholder: "Ваше сообщение",
      submit: "Отправить",
      loading: "Отправка...",
      success: "Ваше сообщение отправлено! Мы скоро с вами свяжемся.",
      error: "❌ Произошла ошибка. Пожалуйста, попробуйте позже.",
      nameError: "Имя обязательно.",
      emailRequired: "Email обязателен.",
      emailInvalid: "Неверный формат Email.",
      messageError: "Сообщение обязательно.",
    },
    en: {
      title: "Contact Us",
      description:
        "If you have questions or suggestions, you can send us a message using the form below:",
      address:
        "Address: Fergana region, Sokh district, Chumokcha street, house 10",
      phone: "Phone: +998 (71) 123-45-67",
      email: "Email: info@1-idum.uz",
      hours: "Working hours: Monday - Saturday: 08:00 - 17:00",
      namePlaceholder: "Your name",
      emailPlaceholder: "Your email",
      messagePlaceholder: "Your message",
      submit: "Send",
      loading: "Sending...",
      success: "Your message has been sent! We'll get back to you soon.",
      error: "❌ An error occurred. Please try again later.",
      nameError: "Name is required.",
      emailRequired: "Email is required.",
      emailInvalid: "Invalid email format.",
      messageError: "Message is required.",
    },
    tj: {
      title: "Бо мо тамос гиред",
      description:
        "Агар шумо савол ё пешниҳод дошта бошед, метавонед ба мо паём фиристед тавассути шакли зерин:",
      address: "Суроға: Вилояти Фарғона, ноҳияи Сӯх, кӯчаи Чумоқча, хонаи 10",
      phone: "Телефон: +998 (71) 123-45-67",
      email: "Email: info@1-idum.uz",
      hours: "Соатҳои корӣ: Душанбе - Шанбе: 08:00 - 17:00",
      namePlaceholder: "Номи шумо",
      emailPlaceholder: "Email-и шумо",
      messagePlaceholder: "Паёми шумо",
      submit: "Фиристодан",
      loading: "Фиристодан...",
      success: "Паёми шумо фиристода шуд! Мо ба зудӣ бо шумо тамос мегирем.",
      error: "❌ Хатогӣ рух дод. Лутфан дертар кӯшиш кунед.",
      nameError: "Ном ҳатмист.",
      emailRequired: "Email ҳатмист.",
      emailInvalid: "Формати нодурусти Email.",
      messageError: "Паём ҳатмист.",
    },
  };

  const t = translations[language];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = t.nameError;
    if (!formData.email.trim()) {
      newErrors.email = t.emailRequired;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = t.emailInvalid;
    }
    if (!formData.message.trim()) newErrors.message = t.messageError;
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      setLoading(true);

      emailjs
        .send(
          "service_zkazfzi",
          "template_uemv3bj",
          formData,
          "3tx5wNOk5M8BrKxBX"
        )
        .then(() => {
          toast.success(t.success);
          setFormData({ name: "", email: "", message: "" });
        })
        .catch(() => {
          toast.error(t.error);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold text-blue-900 mb-6">{t.title}</h1>
      <p className="text-lg text-black mb-4">{t.description}</p>

      <div className="space-y-4 text-gray-700 mb-10">
        <div>
          <span className="font-semibold text-blue-800">{t.address}</span>
        </div>
        <div>
          <span className="font-semibold text-blue-800">{t.phone}</span>
        </div>
        <div>
          <span className="font-semibold text-blue-800">{t.email}</span>
        </div>
        <div>
          <span className="font-semibold text-blue-800">{t.hours}</span>
        </div>
      </div>

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="space-y-6 bg-gray-100 p-6 rounded-lg shadow-md"
      >
        <div>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder={t.namePlaceholder}
            className="w-full border px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}
        </div>

        <div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder={t.emailPlaceholder}
            className="w-full border px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        <div>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder={t.messagePlaceholder}
            className="w-full border px-4 py-3 rounded h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">{errors.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="bg-blue-900 text-white px-6 py-3 rounded hover:bg-blue-700 transition duration-300 w-full"
        >
          {loading ? t.loading : t.submit}
        </button>
      </form>

      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
    </div>
  );
}

export default Contact;
