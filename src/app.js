import { BrowserRouter, Routes, Route } from "react-router-dom";

import AboutMe from "containers/about-me/about";
import ProjectsPage from "containers/projects/projects";
import Calculator from "containers/projects/calculator/calculator";
import TodoList from "containers/projects/to-do-list/to-do-list";
import Game from "containers/projects/game/game";

import Header from "components/header/header";
import Footer from "components/footer/footer";

function App() {
  return (
    <main>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="about-me" element={<AboutMe />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="projects/calculator" element={<Calculator />} />
          <Route path="projects/todo-list" element={<TodoList />} />
          <Route path="projects/game" element={<Game />} />
          <Route path="*" element={<>404. No page defined</>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </main>
  );
}

export default App;
