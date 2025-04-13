import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { FaSun, FaMoon } from "react-icons/fa";
import { useState } from "react";

function MainLayout({ children }) {
  const theme = useSelector((state) => state.theme);
  const language = useSelector((state) => state.language);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  function handleClick() {
    navigate("/");
  }

  const toggleTheme = () => {
    dispatch({
      type: "SET_THEME",
      payload: theme === "light" ? "dark" : "light",
    });
  };

  const changeLanguage = (lang) => {
    dispatch({ type: "SET_LANGUAGE", payload: lang });
    setDropdownOpen(false);
  };

  const translations = {
    en: {
      home: "Home",
      about: "About School",
      contact: "Contact",
    },
    uz: {
      home: "Asosiy",
      about: "Maktab Haqida",
      contact: "Aloqa",
    },
    ru: {
      home: "Главная",
      about: "О школе",
      contact: "Контакт",
    },
    tj: {
      home: "Асосий",
      about: "Дар бораи мактаб",
      contact: "Контакт",
    },
  };

  const languageMap = {
    uz: { label: "Uzbek", icon: "uzb" },
    ru: { label: "Rus", icon: "rus" },
    en: { label: "English", icon: "usa" },
    tj: { label: "Тоҷикӣ", icon: "tjk" },
  };

  return (
    <div
      className={`min-h-screen w-full flex flex-col items-center  ${
        theme === "light" ? "bg-white text-black" : "bg-gray-900 text-white"
      }`}
    >
      <nav className="bg-slate-500 p-4 shadow-lg w-full fixed">
        <div className="container mx-auto flex justify-between items-center px-10">
          <div className="flex items-center space-x-6 pl-10">
            <img
              onClick={handleClick}
              src="/public/school.png"
              alt=""
              className="w-16 h-10 cursor-pointer"
            />
            <div className="pl-[300px]">
              {" "}
              <Link
                className="text-white hover:bg-slate-600 px-4 py-2 rounded-lg transition"
                to="/"
              >
                {translations[language].home}
              </Link>
              <Link
                className="text-white hover:bg-slate-600 px-4 py-2 rounded-lg transition"
                to="/about"
              >
                {translations[language].about}
              </Link>
              <Link
                className="text-white hover:bg-slate-600 px-4 py-2 rounded transition"
                to="/contact"
              >
                {translations[language].contact}
              </Link>
            </div>{" "}
          </div>

          <div className="flex items-center space-x-6">
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!isDropdownOpen)}
                className="flex items-center bg-slate-500 text-white rounded px-4 py-1 border"
              >
                <img
                  src={`/${languageMap[language].icon}.svg`}
                  alt={language}
                  className="h-5 w-5 mr-2"
                />
                {languageMap[language].label}
              </button>
              {isDropdownOpen && (
                <div className="absolute mt-1 w-[120px] bg-white text-black shadow-lg rounded z-10">
                  {Object.entries(languageMap).map(([key, { label, icon }]) => (
                    <button
                      key={key}
                      onClick={() => changeLanguage(key)}
                      className="flex items-center w-full px-4 py-2 hover:bg-gray-200"
                    >
                      <img
                        src={`/${icon}.svg`}
                        alt={label}
                        className="h-5 w-5 mr-2"
                      />
                      {label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div onClick={toggleTheme} className="cursor-pointer pr-20">
              {theme === "light" ? (
                <FaMoon className="text-white" />
              ) : (
                <FaSun className="text-white" />
              )}
            </div>
          </div>
        </div>
      </nav>

      <main className="flex-grow p-4 w-full">{children}</main>
    </div>
  );
}

export default MainLayout;
