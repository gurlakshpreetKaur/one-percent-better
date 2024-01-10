import WidgetContainer from "./WidgetContainer"

export default function ToDo() {
    return <WidgetContainer widgetName="To do">

        <li className="inline-block">
            <ul>Cook food</ul>
        </li>
    </WidgetContainer>
}