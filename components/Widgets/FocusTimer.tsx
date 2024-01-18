import WidgetContainer from "./WidgetContainer";

/**
 * Creates a timer widget for widget pane on the side.
 */
export default function FocusTimer() {
    return <WidgetContainer widgetName="Focus Timer">
        <div className="py-5">
            <p>Get in the zone, and allow yourself to focus</p>
            <span className="inline-block my-3">
                <input type="number" className="bg-transparent border-b-2 border-b-yerba-mate-700 w-[30px] outline-none text-center rounded-sm focus:bg-yerba-mate-200 py-1 font-source text-yerba-mate-700 text-medium" />
                <span className="font-noto text-yerba-mate-700 text-xl mx-1">:</span>
                <input type="number" className="bg-transparent border-b-2 border-b-yerba-mate-700 w-[30px] outline-none text-center rounded-sm focus:bg-yerba-mate-200 py-1 font-source text-yerba-mate-700  text-medium" />
            </span>
            <br />
            <button>Start timer</button>
        </div>
    </WidgetContainer>
}