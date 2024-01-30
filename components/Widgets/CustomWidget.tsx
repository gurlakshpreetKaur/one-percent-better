import WidgetContainer from "./WidgetContainer";

export default function CustomWidget() {
    return <WidgetContainer widgetName="Custom" noPadding>
        <div className="h-full w-full flex justify-between items-center bg-yerba-mate-600 border-[5px] border-dashed">
            <button className="text-4xl text-white inline-block m-auto">+</button>
        </div>
    </WidgetContainer>
}