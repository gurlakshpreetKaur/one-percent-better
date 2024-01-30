import ResizeableDiv from "../ResizeableDiv";
import CustomWidget from "../Widgets/CustomWidget";
import FocusTimer from "../Widgets/FocusTimer";
import Journal from "../Widgets/Journal";
import NoteToSelf from "../Widgets/NoteToSelf";
import Quote from "../Widgets/Quote";
import ToDo from "../Widgets/ToDo/ToDo";

function WidgetsPane() {
    return (<ResizeableDiv className="w-2/3 min-w-[350px] fixed 
    top-0 bottom-0 right-0 bg-white h-screen text-center md:inline-block [&>*]:my-5">
        <section className={` `}>
            <h2 className="text-xl text-yerba-mate-600 font-source font-semibold mb-4">Quick Bits</h2>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(225px,1fr))] gap-[10px]">
                <Quote />
                <ToDo />
                <NoteToSelf />
                <Journal />
                <FocusTimer />
                <CustomWidget />
            </div>
        </section>
    </ResizeableDiv>);
}

export default function HomeMain() {
    return <div className="w-full h-full mt-12 overflow-hidden">
        <section className="bg-red min-h-screen"><h1>H</h1></section>
        <WidgetsPane />
    </div >
}