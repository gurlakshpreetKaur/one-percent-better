import FocusTimer from "../Widgets/FocusTimer";
import Journal from "../Widgets/Journal";
import NoteToSelf from "../Widgets/NoteToSelf";
import Quote from "../Widgets/Quote";
import ToDo from "../Widgets/ToDo/ToDo";

export default function HomeMain() {
    return <div className="w-full h-full grid grid-cols-[2fr_0fr] md:grid-cols-[2fr_5fr] mt-12">
        <section className="bg-red min-h-screen"><h1>H</h1></section>
        <section className={`bg-white min-h-screen py-1 px-12 text-center md:inline-block [&>*]:my-5`}>
            <h2 className="text-xl text-yerba-mate-600 font-source font-semibold">Quick Bits</h2>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(225px,1fr))] gap-[10px]">
                <Quote />
                <ToDo />
                <NoteToSelf />
                <Journal />
                <FocusTimer />
            </div>
        </section>
    </div>
}