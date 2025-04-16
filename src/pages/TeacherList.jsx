// src/components/TeacherList.js
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../axios";

function TeacherList() {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    api
      .get("/teachers")
      .then((res) => {
        setTeachers(res.data);
      })
      .catch((err) => {
        console.error("O'qituvchilarni olishda xatolik:", err);
      });
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center text-blue-900">
        O'qituvchilar ro'yxati
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {teachers.map((teacher) => (
          <Link
            to={`/teacher/${teacher.id}`}
            key={teacher.id}
            className="border rounded-xl overflow-hidden shadow hover:shadow-lg transition"
          >
            <img
              src={teacher.img}
              alt={teacher.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-blue-800">
                {teacher.name}
              </h2>
              <p className="text-gray-600">{teacher.subject}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default TeacherList;
