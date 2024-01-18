import WidgetContainer from "../WidgetContainer";
import { ToDoListItem } from "./ToDoListItem";

/**
 * Creates a to-do list widget for side pane of widgets
 * 
 */
//TODO: create a way to reorder/delete striked off items
export default function ToDo() {
    const tasks = [{ task: "Cook food", striked: true, dateCreated: 1 },
    { task: "Clean dishes", striked: false, dateCreated: 2 },
    { task: "Write code", striked: false, dateCreated: 0 },
    { task: "Exercise", striked: true, dateCreated: 3 }];

    return <WidgetContainer widgetName="To do">
        <li className="inline-block p-3">
            {tasks.filter((i) => !i.striked).sort((i, j) => i.dateCreated - j.dateCreated).map((i, j) => <ToDoListItem {...i} key={j} />)}
            {tasks.filter((i) => i.striked).sort((i, j) => i.dateCreated - j.dateCreated).map((i, j) => <ToDoListItem {...i} key={j} />)}
        </li>
    </WidgetContainer>
}