// import { useParams } from "react-router-dom";
// import { useSelector } from "react-redux";
// import teachersData from "../components/TeachersData";

// function TeacherDetails() {
//   const { id } = useParams();
//   const language = useSelector((state) => state.language);
//   const teachers = teachersData[language] || teachersData.uz;
//   const teacher = teachers.find((t) => t.id === parseInt(id));

//   if (!teacher) {
//     return (
//       <div className="max-w-3xl mx-auto px-4 py-16">
//         <h2 className="text-2xl text-red-600">O‘qituvchi topilmadi</h2>
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-3xl mx-auto px-4 py-16">
//       <div className="flex flex-col sm:flex-row items-center gap-8">
//         <img
//           src={teacher.img}
//           alt={teacher.name}
//           className="w-64 h-64 object-cover rounded-xl shadow"
//         />
//         <div>
//           <h1 className="text-3xl font-bold text-blue-900">{teacher.name}</h1>
//           <p className="text-xl text-gray-700 mb-2">{teacher.subject}</p>
//           <p className="text-gray-600 mb-1">
//             <strong>Tug‘ilgan sana:</strong> {teacher.date}
//           </p>
//           <p className="text-gray-600 mb-4">
//             <strong>Telefon:</strong> {teacher.tel}
//           </p>
//         </div>
//       </div>
//       <div className="mt-6">
//         <h2 className="text-2xl font-semibold text-blue-800 mb-2">
//           Biografiya
//         </h2>
//         <p className="text-gray-700">{teacher.bio}</p>
//       </div>
//     </div>
//   );
// }

// export default TeacherDetails;
// import { useParams } from "react-router-dom";
// import { useSelector } from "react-redux";
// import teachersData from "../components/TeachersData";

// function TeacherDetails() {
//   const { id } = useParams();
//   const language = useSelector((state) => state.language);

//   const teachers = teachersData[language] || teachersData.uz;
//   const teacher = teachers.find((t) => t.id === parseInt(id));
//   const theme = useSelector((state) => state.theme);

//   if (!teacher) {
//     return (
//       <div className="flex justify-center items-center h-screen">
//         <h2 className="text-2xl text-red-600 font-semibold">
//           O‘qituvchi topilmadi
//         </h2>
//       </div>
//     );
//   }

//   return (
//     <div className="px-4 md:px-16 py-12 bg-gradient-to-br from-white to-blue-50 min-h-screen">
//       <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl p-8 md:p-12">
//         <div className="flex flex-col md:flex-row items-center gap-10">
//           <img
//             src={teacher.img}
//             alt={teacher.name}
//             className="w-72 h-72 object-fit rounded-2xl border-4 border-blue-200 shadow-md"
//           />
//           <div className="text-center md:text-left">
//             <h1 className="text-4xl font-bold text-blue-800 mb-2">
//               {teacher.name}
//             </h1>
//             <p className="text-lg text-gray-700 mb-4">{teacher.subject}</p>

//             <div className="space-y-2 text-gray-600 text-sm md:text-base">
//               <p>
//                 <span className="font-semibold">📅 Tug‘ilgan sana:</span>{" "}
//                 {teacher.date}
//               </p>
//               <p>
//                 <span className="font-semibold">📞 Telefon:</span> {teacher.tel}
//               </p>
//             </div>
//           </div>
//         </div>

//         <div className="mt-10 text-gray-800">
//           <h2 className="text-2xl font-semibold mb-3 text-blue-700">
//             📝 Biografiya
//           </h2>
//           <p className="leading-relaxed text-justify">{teacher.bio}</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default TeacherDetails;
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import teachersData from "../components/TeachersData";

function TeacherDetails() {
  const { id } = useParams();
  const language = useSelector((state) => state.language);
  const theme = useSelector((state) => state.theme);

  const teachers = teachersData[language] || teachersData.uz;
  const teacher = teachers.find((t) => t.id === parseInt(id));

  if (!teacher) {
    return (
      <div
        className={`flex justify-center items-center h-screen ${
          theme === "dark" ? "bg-gray-800" : "bg-white"
        }`}
      >
        <h2
          className={`text-2xl ${
            theme === "dark" ? "text-red-400" : "text-red-600"
          } font-semibold`}
        >
          O‘qituvchi topilmadi
        </h2>
      </div>
    );
  }

  return (
    <div
      className={`px-4 md:px-16 py-12 ${
        theme === "dark"
          ? "bg-gray-900 text-white"
          : "bg-gradient-to-br from-white to-blue-50"
      } min-h-screen`}
    >
      <div
        className={`max-w-5xl mx-auto ${
          theme === "dark" ? "bg-gray-800" : "bg-white"
        } rounded-3xl shadow-2xl p-8 md:p-12`}
      >
        <div className="flex flex-col md:flex-row items-center gap-10">
          <img
            src={teacher.img}
            alt={teacher.name}
            className="w-72 h-72 object-fit rounded-2xl border-4 border-blue-200 shadow-md"
          />
          <div className="text-center md:text-left">
            <h1
              className={`text-4xl font-bold ${
                theme === "dark" ? "text-blue-300" : "text-blue-800"
              } mb-2`}
            >
              {teacher.name}
            </h1>
            <p
              className={`text-lg ${
                theme === "dark" ? "text-gray-300" : "text-gray-700"
              } mb-4`}
            >
              {teacher.subject}
            </p>
            <div className="space-y-2 text-gray-600 text-sm md:text-base">
              <p>
                <span className="font-semibold">📅 Tug‘ilgan sana:</span>{" "}
                {teacher.date}
              </p>
              <p>
                <span className="font-semibold">📞 Telefon:</span> {teacher.tel}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <h2
            className={`text-2xl font-semibold mb-3 ${
              theme === "dark" ? "text-blue-400" : "text-blue-700"
            }`}
          >
            📝 Biografiya
          </h2>
          <p
            className={`leading-relaxed text-justify ${
              theme === "dark" ? "text-gray-200" : "text-gray-800"
            }`}
          >
            {teacher.bio}
          </p>
        </div>
      </div>
    </div>
  );
}

export default TeacherDetails;
