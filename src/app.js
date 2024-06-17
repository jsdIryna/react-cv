import { BrowserRouter, Routes, Route } from "react-router-dom";

import AboutMe from 'containers/about-me/about';
import WorksPage from 'containers/works/works';
import Calculator from "containers/works/calculator/calculator";

import Header from "components/header/header";
// import Footer from 'components/footer/footer';

import 'app.scss';

function App() {
    return (
        <div className="wrapper">
            <main>
                <BrowserRouter>
                    <Header />
                    <Routes>
                        <Route path="/" element={<AboutMe />} />
                        <Route path="about-me" element={<AboutMe />} />
                        <Route path="works" element={<WorksPage />} />
                        <Route path="works/calculator" element={<Calculator />} />
                        <Route path="works/todo-list" element={<>To Do list</>} />
                        <Route path="*" element={<>404. No page defined</>} />
                    </Routes>
                </BrowserRouter>
            </main>
            {/* <Footer /> */}
        </div>
    );
}

export default App;
