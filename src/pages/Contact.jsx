import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Ism majburiy.";
    if (!formData.email.trim()) {
      newErrors.email = "Email majburiy.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email noto‘g‘ri formatda.";
    }
    if (!formData.message.trim()) newErrors.message = "Xabar matni majburiy.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmitted(false);
    } else {
      setErrors({});
      setSubmitted(true);
      console.log("Yuborilgan ma'lumot:", formData);
      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold text-blue-900 mb-6">
        Biz bilan bog‘laning
      </h1>
      <p className="text-lg text-gray-700 mb-4">
        Agar sizda savollar, takliflar yoki murojaatlar bo‘lsa, quyidagi forma
        orqali bizga xabar yuborishingiz mumkin:
      </p>

      <div className="space-y-4 text-gray-700 mb-10">
        <div>
          <span className="font-semibold text-blue-800">Manzil:</span> Fargʻona
          viloyati, Soʻx tumani, Chumoqcha ko‘chasi 10-uy
        </div>
        <div>
          <span className="font-semibold text-blue-800">Telefon:</span> +998
          (71) 123-45-67
        </div>
        <div>
          <span className="font-semibold text-blue-800">Email:</span>{" "}
          info@1-idum.uz
        </div>
        <div>
          <span className="font-semibold text-blue-800">Ish vaqti:</span>{" "}
          Dushanba - Shanba: 08:00 - 17:00
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="space-y-6 bg-gray-100 p-6 rounded-lg shadow-md"
      >
        <div>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Ismingiz"
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
            placeholder="Email manzilingiz"
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
            placeholder="Xabaringiz"
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
          Yuborish
        </button>

        {submitted && (
          <p className="text-green-600 mt-4 text-center font-medium">
            Xabaringiz yuborildi! Tez orada siz bilan bog‘lanamiz.
          </p>
        )}
      </form>
    </div>
  );
}

export default Contact;
