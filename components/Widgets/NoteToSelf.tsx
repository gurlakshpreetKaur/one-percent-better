"use client"
import { useEffect, useState } from "react";
import WidgetContainer from "./WidgetContainer";


/**
 * The Note to Self widget for the widget pane.
 * Client-side rendering.
 * Simply, upon being updated, the text entered by user is saved in local storage.
 * It has a limit of 1000 characters.
 */
export default function NoteToSelf() {
    const [ntsText, setntsText] = useState((typeof localStorage !== "undefined" && String(localStorage.getItem("nts")) !== "null")
        ? (String(localStorage.getItem("nts"))) : "");

    useEffect(() => {
        setntsText(localStorage.getItem("nts") ?? "")
    }, []);

    useEffect(() => {
        console.log(ntsText.length);
        localStorage.setItem('nts', ntsText);
    }, [ntsText]);

    return <WidgetContainer widgetName="Note to Self" noPadding>
        {/* <div className="w-full h-full p-3"> */}
        <textarea className={`${ntsText.length === 0 ? "bg-transparent" : "bg-white"}
        outline-none 
        w-full h-full resize-none p-5
        text-md 
        rounded-lg
        placeholder:text-yerba-mate-400 focus:placeholder:text-yerba-mate-600 focus:bg-white`}
            placeholder="Jot down some thoughts..."
            value={ntsText}
            onChange={(e) => setntsText(e.target.value.substring(0, 1000))}>

        </textarea>
        {/* </div> */}
    </WidgetContainer>
}