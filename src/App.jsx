import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import TeacherList from "./pages/TeacherList";
import Home from "./pages/Home";
import TeacherDetails from "./pages/TeacherDetails";

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
          path="/teachers/:teacherId"
          element={
            <MainLayout>
              <TeacherDetails />
            </MainLayout>
          }
        />{" "}
        <Route
          path="/"
          element={
            <MainLayout>
              <TeacherList />
            </MainLayout>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
