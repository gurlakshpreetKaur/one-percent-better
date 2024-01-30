'use client'

import { useState } from "react";
import { endOfMonth } from "date-fns";
import { eachDayOfInterval } from "date-fns";
import { formatDate } from "date-fns/format";

//CURRENTLY NON-FUNCTIONAL

/**
 * This function will be used to generate the calendar which will be displayed taking up the main space
 */
export default function Calendar() {
    const date = new Date();
    const [month, setMonth] = useState(date.getMonth());
    const [year, setYear] = useState(date.getFullYear());

    /**
     * This will generate an array of all the dates of the month
     * @returns {string[]} The array of all the dates of the month
     */
    function generateDatesOfCurrentMonth() {
        const endOfMonthDate = endOfMonth(month).getDate(); //use date-fns to get the last date of the month

        const eachDayOfMonth = eachDayOfInterval({ //this function returns a DateType array of all dates of the month
            start: (new Date(year, month, 1)),
            end: new Date(year, month, endOfMonthDate)
        });
        const formattedEachDayOfMonth = eachDayOfMonth.map(i => formatDate(i, "yyyy-MM-dd")); //format the array
        return formattedEachDayOfMonth; //and return it
    }

    console.log(generateDatesOfCurrentMonth());

    return <></>;
}