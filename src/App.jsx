import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalStyles } from "./utils/globalStyles";
import { Layout } from "./components/Organism/Layout";
import { About } from "./pages/About";
import { Course } from "./pages/Course";
import { Courses } from "./pages/Courses";
import { Home } from "./pages/Home";
import { Projects } from "./pages/Projects";
import { NotFound } from "./pages/Error";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="sobre" element={<About />} />
          <Route path="curso/:id?" element={<Course />} />
          <Route path="cursos" element={<Courses />} />
          <Route path="projetos" element={<Projects />} />
        <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
