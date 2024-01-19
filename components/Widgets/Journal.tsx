'use client'
import WidgetContainer from "./WidgetContainer";
import { useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { format } from 'date-fns';
//                                                      these commented out imports will be used later
// import { DayPicker } from 'react-day-picker';         when implementing date-based feature allowing user
// import 'react-day-picker/dist/style.css';             to see past entries fetched from db

/**
 * Creates a daily journal widget on widget pane.
 * Client-side rendering.
 * This will be a diary entry which will be added to database everyday and unchangeable once posted, basically once the day is over, the user won't be able to modify past entries.
 */

export default function Journal() {
    function hasTodayBeenSelected() {
        const today = new Date();
        return (
            selected.getDate() === today.getDate() &&
            selected.getMonth() === today.getMonth() &&
            selected.getFullYear() === today.getFullYear()
        );
    }

    const incrementDate = () => {
        if (hasTodayBeenSelected()) return;
        const newDate = new Date(selected);
        newDate.setDate(newDate.getDate() + 1);
        setSelected(newDate);
    };
    const decrementDate = () => {
        const newDate = new Date(selected);
        newDate.setDate(newDate.getDate() - 1);
        setSelected(newDate);
    };

    const formattedDisplayDate = () => {
        if (hasTodayBeenSelected()) return "Today";
        else return format(selected, "Do MMM Y");
    }

    const [selected, setSelected] = useState<Date>(new Date());
    const [journalText, setJournalText] = useState("");

    return <WidgetContainer widgetName="Journal" noPadding>
        <div className="py-2">
            <div className={`${journalText.length === 0 ? "bg-transparent" : "bg-white"} text-left w-full h-full rounded-lg`}>
                <header className="w-full flex justify-between px-5">
                    <button className="text-yerba-mate-600 hover:text-coffee-400" onClick={decrementDate} aria-label="Previous-date"><AiOutlineArrowLeft /></button>
                    <h3 className={`inline-block text-center text-yerba-mate-600 font-noto font-medium pt-3 pb-1`}>{formattedDisplayDate()}</h3>
                    <button className="text-yerba-mate-600 hover:text-coffee-400" onClick={incrementDate} aria-label="Next-date" disabled={hasTodayBeenSelected()}><AiOutlineArrowRight /></button>
                </header>

                <textarea className={`bg-transparent
            w-full h-full resize-none px-5 pb-2 pt-1
            text-md 
            rounded-b-lg outline-none
          placeholder:text-yerba-mate-400 focus:placeholder:text-yerba-mate-600
            ${!hasTodayBeenSelected() ? "cursor-not-allowed" : ""}`}
                    placeholder="Today has been..." onChange={(e) => setJournalText(e.target.value)}
                    readOnly={!hasTodayBeenSelected()}>
                </textarea>
            </div>
        </div>
    </WidgetContainer>
}