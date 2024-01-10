export default function WidgetContainer({ children, widgetName }: { children: JSX.Element, widgetName: string }) {
    return <div className="bg-yerba-mate-300 rounded-xl px-5 pt-4 pb-5 group">
        <span className="inline-block mb-3 hover:cursor-pointer">
            <h3 className="font-source text-yerba-mate-700  group-hover:text-white font-semibold text-xl">{widgetName}</h3>
        </span>
        <div className="bg-white bg-opacity-60 group-hover:bg-opacity-100 transition-all rounded-lg p-3 hover:cursor-pointer">
            {children}
        </div>
    </div>
}