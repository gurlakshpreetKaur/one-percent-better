import WidgetContainer from "./WidgetContainer"

/**
 * Creates a to-do list widget for side pane of widgets
 * 
 */
export default function ToDo() {
    return <WidgetContainer widgetName="To do">

        <li className="inline-block">
            <ul>Cook food</ul>
        </li>
    </WidgetContainer>
}