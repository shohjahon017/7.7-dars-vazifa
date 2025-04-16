import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function TeacherDetails() {
  const { teacherId } = useParams();
  const [teacher, setTeacher] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/teachers/${teacherId}`)
      .then((res) => {
        setTeacher(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("O'qituvchi ma'lumotini olishda xatolik:", err);
        setLoading(false);
      });
  }, [teacherId]);

  if (loading) {
    return <div className="text-center py-10 text-lg">Yuklanmoqda...</div>;
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      {teacher ? (
        <>
          <img
            src={teacher.img}
            alt={teacher.name}
            className="w-full max-h-[500px] object-contain rounded-xl mb-6"
          />
          <h1 className="text-4xl font-bold text-blue-900 mb-6">
            {teacher.name}
          </h1>
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">
            {teacher.subject}
          </h2>
          <p className="text-lg text-gray-700">{teacher.bio}</p>
        </>
      ) : (
        <p className="text-lg text-red-600">O'qituvchi topilmadi.</p>
      )}
    </div>
  );
}

export default TeacherDetails;
