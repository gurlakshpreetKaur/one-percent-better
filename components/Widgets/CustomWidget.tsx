import WidgetContainer from "./WidgetContainer";

export default function CustomWidget() {
    return <WidgetContainer widgetName="Custom" noPadding>
        <div className="h-full w-full flex justify-between items-center bg-yerba-mate-600 hover:bg-white border-[5px] border-dashed hover:border-yerba-mate-700 group">
            <button className="text-4xl text-white inline-block m-auto group-hover:text-yerba-mate-700">+</button>
        </div>
    </WidgetContainer>
}