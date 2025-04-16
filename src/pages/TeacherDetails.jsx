// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import axios from "axios";

// function TeacherDetails() {
//   const { teacherId } = useParams();
//   const [teacher, setTeacher] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     axios
//       .get(`http://localhost:3001/teachers/${teacherId}`)
//       .then((res) => {
//         setTeacher(res.data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error("O'qituvchi ma'lumotini olishda xatolik:", err);
//         setLoading(false);
//       });
//   }, [teacherId]);

//   if (loading) {
//     return <div className="text-center py-10 text-lg">Yuklanmoqda...</div>;
//   }

//   return (
//     <div className="max-w-5xl mx-auto px-4 py-16">
//       {teacher ? (
//         <>
//           <img
//             src={teacher.img}
//             alt={teacher.name}
//             className="w-full max-h-[500px] object-contain rounded-xl mb-6"
//           />
//           <h1 className="text-4xl font-bold text-blue-900 mb-6">
//             {teacher.name}
//           </h1>
//           <h2 className="text-2xl font-semibold text-blue-800 mb-4">
//             {teacher.subject}
//           </h2>
//           <p className="text-lg text-gray-700">{teacher.bio}</p>
//         </>
//       ) : (
//         <p className="text-lg text-red-600">O'qituvchi topilmadi.</p>
//       )}
//     </div>
//   );
// }

// export default TeacherDetails;
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function TeacherDetails() {
  const { id } = useParams();
  const [teacher, setTeacher] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/teachers/${id}`)
      .then((res) => {
        setTeacher(res.data);
      })
      .catch((err) => {
        console.error("Ma'lumot olishda xatolik:", err);
      });
  }, [id]);

  if (!teacher) return <div>Ma'lumotlar yuklanmoqda...</div>;

  return (
    <div className="max-w-2xl mx-auto p-4 bg-white shadow rounded-xl mt-6">
      <img
        src={teacher.img}
        alt={teacher.name}
        className="w-40 h-40 object-cover rounded-full mx-auto"
      />
      <h2 className="text-2xl font-bold text-center mt-4">{teacher.name}</h2>
      <p className="text-center text-gray-600">{teacher.subject}</p>
      <div className="mt-4 space-y-2">
        <p>
          <strong>Tug‘ilgan sana:</strong> {teacher.dateOfBirth}
        </p>
        <p>
          <strong>Telefon:</strong> {teacher.tel}
        </p>
        <p>
          <strong>Ma'lumot:</strong> {teacher.bio || "Ma'lumot mavjud emas."}
        </p>
      </div>
    </div>
  );
}

export default TeacherDetails;
