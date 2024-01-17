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
        localStorage.setItem('nts', ntsText);
    }, [ntsText]);

    return <WidgetContainer widgetName="Note to Self" noPadding>
        <textarea className="bg-transparent outline-none w-full h-full resize-none text-md px-5 py-3 focus:bg-white rounded-lg"
            placeholder="Jot down some thoughts..."
            value={ntsText}
            onChange={(e) => setntsText(e.target.value.substring(0, 1000))}>

        </textarea>
    </WidgetContainer>
}