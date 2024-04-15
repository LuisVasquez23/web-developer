import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LayoutPage from "./components/Layout/LayoutPage";
import HomePage from "./pages/Home/HomePage";
import AboutPage from "./pages/About/AboutPage";
import ExperiencePage from "./pages/Experience/ExperiencePage";
import SkillsPage from "./pages/Skills/SkillsPage";
import ProjectsPage from "./pages/Projects/ProjectsPage";

import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LayoutPage />}>
            <Route index element={<HomePage />} />
            <Route path="/AboutMe" element={<AboutPage />} />
            <Route path="/Experience" element={<ExperiencePage />} />
            <Route path="/Skills" element={<SkillsPage />} />
            <Route path="/Projects" element={<ProjectsPage />} />
            <Route path="*" element={<HomePage />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
