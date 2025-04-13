import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import redux from "./redux/redux.jsx";

createRoot(document.getElementById("root")).render(
  <Provider store={redux}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
// import { Link } from "react-router-dom";

// function MainLayout() {
//   return (
//     <nav className="bg-blue-900 p-4 shadow-lg">
//       <div className="container mx-auto flex justify-between items-center">
//         <h1 className="text-white text-3xl font-bold">1-IDUM  </h1>
//         <div className="space-x-6">
//           <Link
//             className="text-white hover:bg-blue-700 px-4 py-2 rounded transition duration-300"
//             to="/"
//           >
//             Asosiy
//           </Link>
//           <Link
//             className="text-white hover:bg-blue-700 px-4 py-2 rounded transition duration-300"
//             to="/about"
//           >
//             Maktab Haqida
//           </Link>

//           <Link
//             className="text-white hover:bg-blue-700 px-4 py-2 rounded transition duration-300"
//             to="/contact"
//           >
//             Aloqa
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default MainLayout;
