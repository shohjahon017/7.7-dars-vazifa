import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import TeacherDetails from "./pages/TeachersDetails";

function App() {
  return (
    <div className="font-thin">
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          }
        />
        <Route
          path="/about"
          element={
            <MainLayout>
              <About />
            </MainLayout>
          }
        />
        <Route
          path="/contact"
          element={
            <MainLayout>
              <Contact />
            </MainLayout>
          }
        />

        <Route
          path="/teachers/:id"
          element={
            <MainLayout>
              <TeacherDetails />
            </MainLayout>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
