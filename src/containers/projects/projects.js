import { Link } from "react-router-dom";

import "containers/projects/projects.scss"

function ProjectsPage() {
    return (
        <div className="projects">
            <ul className="list_item">
                <li className="item"><Link to="calculator">Calculator</Link></li>
                <li className="item"><Link to="todo-list">To do list</Link></li>
            </ul>
        </div>
    )
}

export default ProjectsPage;
