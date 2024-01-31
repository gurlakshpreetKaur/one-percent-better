'use client'

import { useEffect, useState } from "react";
import { endOfMonth } from "date-fns";
import { eachDayOfInterval } from "date-fns";
import { formatDate } from "date-fns/format";
import { subDays } from "date-fns";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import { addDays } from "date-fns";

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

        const START_DAY = 1; //1 => monday in the getDay method of date

        //when displaying in calendar, we use 5 rows and 7 colums, each column corresponds to a day of the week.
        //hence, our first cell must be a monday.
        //so now we will append days to the start of eachDayOfMonth array until we get a monday.
        while (eachDayOfMonth[0].getDay() !== START_DAY) {
            eachDayOfMonth.unshift(subDays(eachDayOfMonth[0], 1));
        }

        //similarly, the last cell needs to be a sunday, so we append days to the end of eachDayOfMonth array until we get a saturday
        //but also, instead of checking the weekday each time, we can just do it until length of array is 35
        while (eachDayOfMonth.length !== 35) {
            eachDayOfMonth.push(addDays(eachDayOfMonth[eachDayOfMonth.length - 1], 1));
        }

        const formattedEachDayOfMonth = eachDayOfMonth.map(i => formatDate(i, "d")); //format the array, we only need the date, since the month
        //                              and year which was used to detemine the dates in the first place is already present in the states
        return formattedEachDayOfMonth;
    }

    useEffect(() => {
        if (month < 0) {
            setMonth(11);
            setYear(prev => prev - 1);
            return;
        }
        if (month > 11) {
            setMonth(0);
            setYear(prev => prev + 1);
        }
    }, [month]);

    console.log(generateDatesOfCurrentMonth());

    return <div className="h-screen w-full grid relative grid-cols-[100%] md:grid-cols-[3rem_calc(100%-3rem)]">
        <nav className="h-full bg-yerba-mate-800 px-3 hidden md:flex flex-col justify-center items-center [&>*]:my-5 [&>*]:text-white">
            <button onClick={() => setMonth(month => (month + 1))}><AiOutlineArrowUp /></button>
            <h2 className="font-source font-medium text-white [writing-mode:vertical-rl] rotate-180 tracking-[2px] text-md inline-block h-1/5 text-center">
                {formatDate(new Date(year, month, 1), "MMM")} {year !== (new Date().getFullYear()) ? year : ""}
            </h2>
            <button onClick={() => setMonth(month => (month - 1))}><AiOutlineArrowDown /></button>
        </nav>
        <div className="h-full w-full grid grid-rows-[1fr_repeat(5,3fr)] grid-cols-[repeat(7,1fr)]">
            <div>
                Mon
            </div>
            <div>
                Tue
            </div>
            <div>
                Wed
            </div>
            <div>
                Thu
            </div>
            <div>
                Fri
            </div>
            <div>
                Sat
            </div>
            <div>
                Sun
            </div>
            {generateDatesOfCurrentMonth().map(i => <div className="">{i}</div>)}
        </div>
    </div>;
}