'use client'
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import WidgetContainer from "./WidgetContainer";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { clearInterval } from "timers";


//TODO: Clear up the relationship between minutes fixed and as per timer, same with seconds
//BUG: Out of bounds error
/**
 * Creates a timer widget for widget pane on the side.
 * Client-side rendered.
 * Max time of 59:59
 */
export default function FocusTimer() {
    const [minutesFixed, setMinutesFixed] = useState(15);
    const [secondsFixed, setSecondsFixed] = useState(0);
    const [minutesAsPerTimer, setMinutesAsPerTimer] = useState(minutesFixed); //<== these both will update when timer starts
    const [secondsAsPerTimer, setSecondsAsPerTimer] = useState(secondsFixed); //<== these both will update when timer starts
    const [started, setStarted] = useState(false);
    const [timerInterval, setTimerInterval] = useState<NodeJS.Timeout>();

    function reduceSecond() {
        if (secondsAsPerTimer === 0) {
            setSecondsAsPerTimer(59);
            setMinutesAsPerTimer(prev => prev - 1);
            return;
        }
        setSecondsAsPerTimer(prev => prev - 1);
    }

    useEffect(() => {
        if (minutesAsPerTimer === 0 && secondsAsPerTimer === 0) return;
        if (started) {
            setTimerInterval(setInterval(reduceSecond, 1000));
        } else {
            clearInterval(timerInterval);
        }
    }, [started]);

    return <WidgetContainer widgetName="Focus Timer">
        <div className="py-5">
            <p>Get in the zone, and allow yourself to focus</p>
            <span className="inline-block my-3">
                <FocusTimerNumberInput setState={setMinutesFixed} value={minutesFixed} placeholder="15" ariaPlaceholder="Enter timer minutes..." started={started} />
                <span className="font-noto text-yerba-mate-700 text-xl mx-1">:</span>
                <FocusTimerNumberInput setState={setSecondsFixed} value={secondsFixed} placeholder="00" ariaPlaceholder="Enter timer seconds..." started={started} />
            </span>
            <br />
            <button className={`bg-yerba-mate-600 hover:bg-yerba-mate-400 text-md p-2 mt-2 text-white rounded-full `}
                onClick={() => { setStarted(prev => !prev) }}><AiOutlinePlayCircle /></button>
        </div>
    </WidgetContainer>
}

interface FocusTimerNumberInputParams {
    setState: Dispatch<SetStateAction<number>>,
    placeholder: string,
    ariaPlaceholder: string,
    value: number,
    started: boolean
}
function FocusTimerNumberInput({ setState, placeholder, ariaPlaceholder, value, started }: FocusTimerNumberInputParams) {
    function determineValue() {
        if (value < 9) return `0${value}`;
        return `${value}`; // <== need to stringify it, else it has extra 0 in front (12 => 012, String(12) => 12)
    }

    return (<input type="number" onChange={(e) => setState(Number(e.target.value))} placeholder={placeholder}
        aria-placeholder={ariaPlaceholder} value={determineValue()} disabled={started} onBlur={() => setState(prev => prev % 60)}
        className={`bg-transparent focus:bg-yerba-mate-200
    text-center font-source text-yerba-mate-700 text-medium
    w-[30px] py-1
    border-b-2 border-b-yerba-mate-700 outline-none rounded-sm
    disabled:bg-yerba-mate-600 disabled:hover:bg-yerba-mate-600 disabled:text-silver`} />);
}