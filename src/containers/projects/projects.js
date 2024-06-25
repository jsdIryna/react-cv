import { Link } from "react-router-dom";

import { Wrapper } from "components/wrapper/wrapper";
import CalcPage from "assets/main-icons/calculatorPage.png";
import TodoPage from "assets/main-icons/todoPage.png";
import GamePage from "assets/main-icons/gamePage.png";

import "containers/projects/projects.scss";

function ProjectsPage() {
  return (
    <Wrapper>
      <div className="projects__row">
        <div className="project">
          <div className="project_title">
            Here are a few of my live, real-world projects
          </div>
          <ul className="list_item">
            <li className="item">
              <Link to="calculator">
                <img src={CalcPage} alt="Calculator page"></img>
                <div className="item_text">Calculator</div>
                <div className="project_descr">
                  This is project was built with VanillaJS and SCSS
                </div>
                <button>View Live</button>
              </Link>
            </li>
            <li className="item">
              <Link to="game">
                <img src={GamePage} alt="Game page"></img>
                <div className="item_text">Game</div>
                <div className="project_descr">
                  Created with VanillaJS and SCSS
                </div>
                <button>View Live</button>
              </Link>
            </li>
            <li className="item">
              <Link to="todo-list">
                <img src={TodoPage} alt="ToDo page"></img>
                <div className="item_text">To Do list</div>
                <div className="project_descr">
                  Developed using ReactJs and TailwindCSS
                </div>
                <button>View Live</button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </Wrapper>
  );
}

export default ProjectsPage;
