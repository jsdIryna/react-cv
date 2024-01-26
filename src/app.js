import { BrowserRouter, Routes, Route } from "react-router-dom";

import AboutMe from 'containers/about-me/about';
import ProjectsPage from 'containers/projects/projects';
import Calculator from "containers/projects/calculator/calculator";
import ToDoList from "containers/projects/to-do-list/to-do-list";

import Header from "components/header/header";
// import Footer from 'components/footer/footer';

import 'app.scss';

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
                    <Route path="projects/todo-list" element={<ToDoList />} />
                    <Route path="resume" element={<>Resume</>} />
                    <Route path="*" element={<>404. No page defined</>} />
                </Routes>
            </BrowserRouter>
        </main>
    );
}

export default App;
