'use client'
import WidgetContainer from "./WidgetContainer";
import { useState } from "react";
// import { format } from 'date-fns';                <== these commented out imports will be used later
// import { DayPicker } from 'react-day-picker';         when implementing date-based feature allowing user
// import 'react-day-picker/dist/style.css';             to see past entries fetched from db

/**
 * Creates a daily journal widget on widget pane.
 * Client-side rendering.
 * This will be a diary entry which will be added to database everyday and unchangeable once posted, basically once the day is over, the user won't be able to modify past entries.
 */
export default function Journal() {
    // const [selected, setSelected] = useState<Date>(); <== will be used later to set dates
    const [journalText, setJournalText] = useState("");

    return <WidgetContainer widgetName="Journal" noPadding>
        <div className={`${journalText.length === 0 ? "bg-transparent" : "bg-white"} text-left w-full h-full rounded-lg`}>
            <h3 className={`text-center text-yerba-mate-600 font-noto font-medium 
            pt-3 pb-1`}>Today</h3>
            <textarea className={`bg-transparent
            w-full h-full resize-none px-5 pb-2
            text-md 
            rounded-b-lg outline-none
          placeholder:text-yerba-mate-400 focus:placeholder:text-yerba-mate-600`}
                placeholder="Today has been..." onChange={(e) => setJournalText(e.target.value)}>
            </textarea>
        </div>
    </WidgetContainer>
}