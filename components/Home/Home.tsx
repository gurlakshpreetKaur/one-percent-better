import NoteToSelf from "../Widgets/NoteToSelf";
import Quote from "../Widgets/Quote";
import ToDo from "../Widgets/ToDo/ToDo";

export default function HomeMain() {
    return <div className="w-full h-full grid grid-cols-[2fr_0fr] md:grid-cols-[2fr_1fr] mt-12">
        <section className="bg-red min-h-screen"><h1>H</h1></section>
        <section className=" bg-white min-h-screen py-1 px-12 text-center hidden md:inline-block [&>*]:my-5">
            <h2 className="text-xl text-yerba-mate-600 font-source font-semibold">Quick Bits</h2>
            <Quote />
            <ToDo />
            <NoteToSelf />
        </section>
    </div>
}