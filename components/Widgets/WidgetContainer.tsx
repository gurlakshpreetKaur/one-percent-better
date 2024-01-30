// import { AiOutlineInfoCircle } from "react-icons/ai"; <== will be used later to give info on each widget

/**
 * A widget container with yerba-mate bg and hover effects.
 * Server-side rendered.
 * @param {JSX.Element | JSX.Element[]} children Children of the container
 * @param {string} widgetName Name of the widget, creates a heading for the widget
 * @param {boolean} noPadding Disables padding in the main content area of widget container, allowing the children to occupy full width and height
 */
export default function WidgetContainer({ children, widgetName, noPadding = false, activeIndicator = false }: { children: JSX.Element | JSX.Element[], widgetName: string, noPadding?: boolean, activeIndicator?: boolean }) {
    return <div className={`${activeIndicator ? "bg-coffee-700" : "bg-yerba-mate-300 hover:bg-yerba-mate-500"} 
    rounded-xl px-5 pt-4 pb-5 group flex flex-col h-[50vh]`}>
        <header className="inline-block mb-3 hover:cursor-pointer w-full">
            <h3 className={`font-source group-hover:text-white font-semibold text-xl inline-block 
            ${activeIndicator ? "text-white" : "text-yerba-mate-700"}`}>{widgetName}</h3>
        </header>
        <div className={`bg-white bg-opacity-60 group-hover:bg-opacity-100 transition-all rounded-lg 
        hover:cursor-pointer flex-grow ${noPadding ? "" : "px-3"} overflow-y-auto overflow-x-hidden
        ${activeIndicator ? "bg-opacity-100" : ""}`}>
            {children}
        </div>
    </div>
}