// import { useSelector, useDispatch } from "react-redux";
// import { Link, useNavigate } from "react-router-dom";
// import { FaSun, FaMoon, FaBars } from "react-icons/fa";
// import { useState } from "react";

// function MainLayout({ children }) {
//   const theme = useSelector((state) => state.theme);
//   const language = useSelector((state) => state.language);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const [isDropdownOpen, setDropdownOpen] = useState(false);
//   const [isMenuOpen, setMenuOpen] = useState(false);

//   function handleClick() {
//     navigate("/");
//   }

//   const toggleTheme = () => {
//     dispatch({
//       type: "SET_THEME",
//       payload: theme === "light" ? "dark" : "light",
//     });
//   };

//   const changeLanguage = (lang) => {
//     dispatch({ type: "SET_LANGUAGE", payload: lang });
//     setDropdownOpen(false);
//   };

//   const translations = {
//     en: {
//       home: "Home",
//       about: "About School",
//       contact: "Contact",
//     },
//     uz: {
//       home: "Asosiy",
//       about: "Maktab Haqida",
//       contact: "Aloqa",
//     },
//     ru: {
//       home: "Главная",
//       about: "О школе",
//       contact: "Контакт",
//     },
//     tj: {
//       home: "Асосий",
//       about: "Дар бораи мактаб",
//       contact: "Контакт",
//     },
//   };

//   const languageMap = {
//     uz: { label: "Uzbek", icon: "uzb" },
//     ru: { label: "Rus", icon: "rus" },
//     en: { label: "English", icon: "usa" },
//     tj: { label: "Тоҷикӣ", icon: "tjk" },
//   };

//   return (
//     <div
//       className={`min-h-screen w-full flex flex-col ${
//         theme === "light" ? "bg-white text-black" : "bg-gray-900 text-white"
//       }`}
//     >
//       <nav className="bg-slate-500 p-4 shadow-lg w-full fixed z-50">
//         <div className="container mx-auto flex justify-between items-center px-6 lg:px-10">
//           <div className="flex items-center space-x-6 pl-2 lg:pl-10">
//             <img
//               onClick={handleClick}
//               src="/public/school.png"
//               alt=""
//               className="w-16 h-10 cursor-pointer"
//             />
//           </div>

//           <div className="lg:flex hidden justify-center space-x-6">
//             <Link
//               className="text-white hover:bg-slate-600 px-4 py-2 rounded-lg transition"
//               to="/"
//             >
//               {translations[language].home}
//             </Link>
//             <Link
//               className="text-white hover:bg-slate-600 px-4 py-2 rounded-lg transition"
//               to="/about"
//             >
//               {translations[language].about}
//             </Link>
//             <Link
//               className="text-white hover:bg-slate-600 px-4 py-2 rounded transition"
//               to="/contact"
//             >
//               {translations[language].contact}
//             </Link>
//           </div>

//           <div className="flex items-center space-x-6">
//             <div className="relative hidden lg:block">
//               <button
//                 onClick={() => setDropdownOpen(!isDropdownOpen)}
//                 className="flex items-center bg-slate-500 text-white rounded px-4 py-1 border"
//               >
//                 <img
//                   src={`/${languageMap[language].icon}.svg`}
//                   alt={language}
//                   className="h-5 w-5 mr-2"
//                 />
//                 {languageMap[language].label}
//               </button>
//               {isDropdownOpen && (
//                 <div className="absolute mt-1 w-[120px] bg-white text-black shadow-lg rounded z-10">
//                   {Object.entries(languageMap).map(([key, { label, icon }]) => (
//                     <button
//                       key={key}
//                       onClick={() => changeLanguage(key)}
//                       className="flex items-center w-full px-4 py-2 hover:bg-gray-200"
//                     >
//                       <img
//                         src={`/${icon}.svg`}
//                         alt={label}
//                         className="h-5 w-5 mr-2"
//                       />
//                       {label}
//                     </button>
//                   ))}
//                 </div>
//               )}
//             </div>

//             <div onClick={toggleTheme} className="cursor-pointer">
//               {theme === "light" ? (
//                 <FaMoon className="text-white" />
//               ) : (
//                 <FaSun className="text-white" />
//               )}
//             </div>

//             <button
//               onClick={() => setMenuOpen(!isMenuOpen)}
//               className="lg:hidden text-white"
//             >
//               <FaBars />
//             </button>
//           </div>
//         </div>

//         {isMenuOpen && (
//           <div className="lg:hidden absolute top-16 left-0 w-full bg-slate-500 text-white">
//             <div className="flex flex-col items-center py-4 space-y-4">
//               <Link
//                 className="hover:bg-slate-600 px-4 py-2 rounded-lg transition"
//                 to="/"
//               >
//                 {translations[language].home}
//               </Link>
//               <Link
//                 className="hover:bg-slate-600 px-4 py-2 rounded-lg transition"
//                 to="/about"
//               >
//                 {translations[language].about}
//               </Link>
//               <Link
//                 className="hover:bg-slate-600 px-4 py-2 rounded transition"
//                 to="/contact"
//               >
//                 {translations[language].contact}
//               </Link>
//               <div className="relative">
//                 <button
//                   onClick={() => setDropdownOpen(!isDropdownOpen)}
//                   className="flex items-center bg-slate-500 text-white rounded px-4 py-1 border"
//                 >
//                   <img
//                     src={`/${languageMap[language].icon}.svg`}
//                     alt={language}
//                     className="h-5 w-5 mr-2"
//                   />
//                   {languageMap[language].label}
//                 </button>
//                 {isDropdownOpen && (
//                   <div className="absolute mt-1 w-[120px] bg-white text-black shadow-lg rounded z-10">
//                     {Object.entries(languageMap).map(
//                       ([key, { label, icon }]) => (
//                         <button
//                           key={key}
//                           onClick={() => changeLanguage(key)}
//                           className="flex items-center w-full px-4 py-2 hover:bg-gray-200"
//                         >
//                           <img
//                             src={`/${icon}.svg`}
//                             alt={label}
//                             className="h-5 w-5 mr-2"
//                           />
//                           {label}
//                         </button>
//                       )
//                     )}
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         )}
//       </nav>

//       <main className="flex-grow p-4 w-full">{children}</main>
//     </div>
//   );
// }

// export default MainLayout;
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { FaSun, FaMoon, FaBars } from "react-icons/fa";
import { useState } from "react";

function MainLayout({ children }) {
  const theme = useSelector((state) => state.theme);
  const language = useSelector((state) => state.language);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

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
    en: { home: "Home", about: "About School", contact: "Contact" },
    uz: { home: "Asosiy", about: "Maktab Haqida", contact: "Aloqa" },
    ru: { home: "Главная", about: "О школе", contact: "Контакт" },
    tj: { home: "Асосий", about: "Дар бораи мактаб", contact: "Контакт" },
  };

  const languageMap = {
    uz: { label: "Uzbek", icon: "uzb" },
    ru: { label: "Русский", icon: "rus" },
    en: { label: "English", icon: "usa" },
    tj: { label: "Тоҷикӣ", icon: "tjk" },
  };

  return (
    <div
      className={`min-h-screen w-full flex flex-col ${
        theme === "light" ? "bg-white text-black" : "bg-gray-900 text-white"
      }`}
    >
      {/* Navbar */}
      <nav className="bg-slate-500 p-4 shadow-lg w-full fixed z-50">
        <div className="container mx-auto flex justify-between items-center px-6 lg:px-10">
          <div className="flex items-center space-x-6 pl-2 lg:pl-10">
            <img
              onClick={handleClick}
              src="/school.png"
              alt="logo"
              className="w-16 h-10 cursor-pointer"
            />
          </div>

          {/* Desktop nav links */}
          <div className="lg:flex hidden justify-center space-x-6">
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
              className="text-white hover:bg-slate-600 px-4 py-2 rounded-lg transition"
              to="/contact"
            >
              {translations[language].contact}
            </Link>
          </div>

          {/* Right side controls */}
          <div className="flex items-center space-x-4">
            {/* Language dropdown */}
            <div className="relative hidden lg:block">
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
                <div className="absolute mt-1 w-[130px] bg-white text-black shadow-lg rounded z-10">
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

            {/* Theme toggle */}
            <div onClick={toggleTheme} className="cursor-pointer">
              {theme === "light" ? (
                <FaMoon className="text-white" />
              ) : (
                <FaSun className="text-white" />
              )}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMenuOpen(!isMenuOpen)}
              className="lg:hidden text-white"
            >
              <FaBars />
            </button>
          </div>
        </div>

        {/* Mobile menu content */}
        {isMenuOpen && (
          <div className="lg:hidden bg-slate-600 mt-2 p-4 space-y-4 text-white">
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="block hover:bg-slate-700 px-4 py-2 rounded"
            >
              {translations[language].home}
            </Link>
            <Link
              to="/about"
              onClick={() => setMenuOpen(false)}
              className="block hover:bg-slate-700 px-4 py-2 rounded"
            >
              {translations[language].about}
            </Link>
            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="block hover:bg-slate-700 px-4 py-2 rounded"
            >
              {translations[language].contact}
            </Link>

            <div className="mt-2">
              <p className="text-sm mb-1">Tilni tanlang:</p>
              <div className="space-y-2">
                {Object.entries(languageMap).map(([key, { label, icon }]) => (
                  <button
                    key={key}
                    onClick={() => changeLanguage(key)}
                    className="flex items-center w-full px-2 py-1 hover:bg-slate-700 rounded"
                  >
                    <img
                      src={`/${icon}.svg`}
                      alt={label}
                      className="h-4 w-4 mr-2"
                    />
                    {label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>

      <div className="pt-16">{children}</div>
    </div>
  );
}

export default MainLayout;
