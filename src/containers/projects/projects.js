import { useState } from "react";
import { Link } from "react-router-dom";

import { Wrapper } from "components/wrapper/wrapper";
import CalcPage from "assets/main-icons/calculatorPage.png";
import TodoPage from "assets/main-icons/todoPage.png";
import GamePage from "assets/main-icons/gamePage.png";

import "containers/projects/projects.scss";

function ProjectsPage() {
  const [projects] = useState([
    {
      id: 1,
      link: "calculator",
      imgSrc: CalcPage,
      imgAlt: "Calculator page",
      title: "Calculator",
      description: "This is project was built with VanillaJS and SCSS",
    },
    {
      id: 2,
      link: "game",
      imgSrc: GamePage,
      imgAlt: "Game page",
      title: "Game",
      description: "Created with VanillaJS and SCSS",
    },
    {
      id: 3,
      link: "todo-list",
      imgSrc: TodoPage,
      imgAlt: "ToDo page",
      title: "To Do list",
      description: "  Developed using ReactJs and TailwindCSS",
    },
  ]);

  return (
    <Wrapper>
      <div className="projects__row">
        <div className="project">
          <div className="project_title">
            Here are a few of my live, real-world projects
          </div>
          <div className="list_item">
            {projects.map((project) => (
              <div key={project.id} className="item">
                <Link to={project.link}>
                  <img src={project.imgSrc} alt={project.imgAlt}></img>
                  <div className="item_text">{project.title}</div>
                  <div className="project_descr">{project.description}</div>
                  <button>View Live</button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default ProjectsPage;
