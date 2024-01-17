/**
 * A widget container with yerba-mate bg and hover effects.
 * Server-side rendered.
 * @param {JSX.Element | JSX.Element[]} children Children of the container
 * @param {string} widgetName Name of the widget, creates a heading for the widget
 * @param {boolean} noPadding Disables padding in the main content area of widget container, allowing the children to occupy full width and height
 */
export default function WidgetContainer({ children, widgetName, noPadding = false }: { children: JSX.Element | JSX.Element[], widgetName: string, noPadding?: boolean }) {
    return <div className="bg-yerba-mate-300 rounded-xl px-5 pt-4 pb-5 group">
        <span className="inline-block mb-3 hover:cursor-pointer">
            <h3 className="font-source text-yerba-mate-700  group-hover:text-white font-semibold text-xl">{widgetName}</h3>
        </span>
        <div className={`bg-white bg-opacity-60 group-hover:bg-opacity-100 transition-all rounded-lg hover:cursor-pointer ${noPadding ? "" : "p-3"}`}>
            {children}
        </div>
    </div>
}