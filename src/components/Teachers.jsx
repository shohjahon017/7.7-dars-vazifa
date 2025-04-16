// src/components/Teachers.js
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import axios from "axios";

const Teachers = () => {
  const { t } = useTranslation();
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/teachers")

      .then((response) => {
        setTeachers(response.data.teachers);
      })
      .catch((error) => {
        console.error("Error fetching teacher data: ", error);
      });
  }, []);

  return (
    <div className="teachers-list">
      {teachers.map((teacher) => (
        <div key={teacher.id} className="teacher-card">
          <img src={teacher.img} alt={teacher.name} className="teacher-img" />
          <h3>{teacher.name}</h3>
          <p>{t(teacher.subject)}</p>
          <p>
            {t("Date of Birth")}: {teacher.dateOfBirth}
          </p>
          <p>
            {t("Phone")}: {teacher.tel}
          </p>
          <p>{t(teacher.bio)}</p>
        </div>
      ))}
    </div>
  );
};

export default Teachers;
