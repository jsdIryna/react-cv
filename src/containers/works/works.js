import { Link } from "react-router-dom";

import "containers/works/works.scss"

function WorksPage() {
    return (
        <div className="works">
            <ul className="list_item">
                <li className="item"><Link to="calculator">Calculator</Link></li>
                <li className="item"><Link to="todo-list">To do list</Link></li>
            </ul>
        </div>
    )
}

export default WorksPage;
