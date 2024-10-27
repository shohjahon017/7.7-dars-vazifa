import React from "react";
import { useSelector } from "react-redux";
import Language from "../components/Language";
import Theme from "../components/Theme";

function MainLayout({ children }) {
  const theme = useSelector((state) => state.theme);
  const language = useSelector((state) => state.language);

  const translations = {
    en: {
      welcome: "Welcome",
      templates: "Templates",
      features: "Features",
      pricing: "Pricing",
      resources: "Resources",
      startTrial: "Start Free Trial",
    },
    uz: {
      welcome: "Xush kelibsiz",
      templates: "Shablonlar",
      features: "Xususiyatlar",
      pricing: "Narxlar",
      resources: "Resurslar",
      startTrial: "Bepul sinovdan o'ting",
    },
    ru: {
      welcome: "Добро пожаловать",
      templates: "Шаблоны",
      features: "Особенности",
      pricing: "Цены",
      resources: "Ресурсы",
      startTrial: "Начать бесплатный пробный период",
    },
  };

  return (
    <div
      className={`min-h-screen w-full items-center ${
        theme === "light" ? "light-mode" : "dark-mode"
      }`}
    >
      <header className="bg-white shadow-md p-4 rounded-lg px-20 mb-6 flex justify-between items-center">
        <h1 className="text-3xl font-bold">{translations[language].welcome}</h1>
        <div className="flex space-x-4">
          <div className="flex items-center gap-10 mr-80">
            <a href="#" className="text-gray-800 hover:text-blue-500">
              {translations[language].templates}
            </a>
            <a href="#" className="text-gray-800 hover:text-blue-500">
              {translations[language].features}
            </a>
            <a href="#" className="text-gray-800 hover:text-blue-500">
              {translations[language].pricing}
            </a>
            <a href="#" className="text-gray-800 hover:text-blue-500">
              {translations[language].resources}
            </a>
          </div>
          <div className="flex gap-2">
            <Language />
            <Theme />
          </div>
          <div>
            <button className="px-3 py-2 border border-blue-600 rounded-2xl bg-blue-500 text-white hover:bg-blue-600 transition duration-200">
              {translations[language].startTrial}
            </button>
          </div>
        </div>
      </header>
      <main>{children}</main>
    </div>
  );
}

export default MainLayout;
