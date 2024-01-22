'use client'
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import WidgetContainer from "./WidgetContainer";
import { AiOutlinePlayCircle } from "react-icons/ai";
// import { clearInterval } from "timers";

//TODO: Create pause option separately which doesn't reset timer.
/**
 * Creates a timer widget for widget pane on the side.
 * Client-side rendered.
 * Max time of 59:59
 */
export default function FocusTimer() {
    const [minutesFixed, setMinutesFixed] = useState(15);
    const [secondsFixed, setSecondsFixed] = useState(0);
    const [minutesTemp, setMinutesTemp] = useState(minutesFixed); //<= will be used them timer starts
    const [secondsTemp, setSecondsTemp] = useState(secondsFixed); //<= will be used them timer starts
    const [started, setStarted] = useState(false);

    /**Handles state for starting timer and calls the function that starts/pauses timer */
    function manageTimer() {
        if (started) {
            setStarted(false);
        } else {
            setMinutesTemp(minutesFixed);
            setSecondsTemp(secondsFixed);
            setStarted(true);
        }
    }

    useEffect(() => {
        if (started) setTimeout(() => startTimer(minutesTemp, secondsTemp), 1000);
    }, [started]);

    /**Recursive function that reduces second by 1, and sets timout of 1000ms for itself, until either start state becomes false, or minutes and seconds both become 0 (timer ends).
     * @param {number} minutes The minutes to use as starting point for the timer
     * @param {number} seconds The seconds to use as starting point for the timer
     * @description You may wonder why this function uses params, when it could just use the state. State is being passed statically, we could solve that with useRef, but I didn't want to both with that so I've deduced a clever work-around and used params which will update the next time the function is called, keeping them synced with the state.
     */
    const startTimer = (minutes: number, seconds: number) => {
        if (!started || (minutes === 0 && seconds === 0)) {
            setStarted(false);
            return;
        }

        if (seconds === 0) { //if seconds is 0, we've finished a minute, so seconds turns to 59, and mintues is reduced by 1
            seconds = 59;
            setSecondsTemp(59);
            minutes--;
            setMinutesTemp(prev => prev - 1);
        } else { //else just reduce seconds by 1
            seconds--;
            setSecondsTemp(prev => prev - 1);
        }

        setTimeout(() => startTimer(minutes, seconds), 1000);
    }

    return <WidgetContainer widgetName="Focus Timer">
        <div className="py-5">
            <p>Get in the zone, and allow yourself to focus</p>
            <span className="inline-block my-3">
                <FocusTimerNumberInput setState={setMinutesFixed} value={started ? minutesTemp : minutesFixed}
                    placeholder="15" ariaPlaceholder="Enter timer minutes..." started={started} />
                <span className="font-noto text-yerba-mate-700 text-xl mx-1">:</span>
                <FocusTimerNumberInput setState={setSecondsFixed} value={started ? secondsTemp : secondsFixed}
                    placeholder="00" ariaPlaceholder="Enter timer seconds..." started={started} />
            </span>
            <br />
            <button className={`bg-yerba-mate-600 hover:bg-yerba-mate-400 text-md p-2 mt-2 text-white rounded-full `}
                onClick={manageTimer}><AiOutlinePlayCircle /></button>
        </div>
    </WidgetContainer>
}

/**
 * The interface to be followed for the params of FocusTimerNumberInput
 * @prop {Dispatch<SetStateAction<number>>} setState This is the state update function to be used to record change in value of input
 * @prop {string} placeholder The placeholder for input
 * @prop {string} ariaPlaceholder The aria-placeholder for input (descriptive)
 * @prop {number} value Value of input (supposed to be the state value to ensure singular flow of data)
 * @prop {boolean} started Specifies whether or not the timer has been started
 */
interface FocusTimerNumberInputParams {
    /**This is the state update function to be used to record change in value of input */
    setState: Dispatch<SetStateAction<number>>,
    /** The placeholder for input */
    placeholder: string,
    /** The aria-placeholder for input (descriptive) */
    ariaPlaceholder: string,
    /** Value of input (supposed to be the state value to ensure singular flow of data) */
    value: number,
    /** started Specifies whether or not the timer has been started */
    started: boolean
}

/**
 * Creates the number inputs used in the focus timer
 * @param {Dispatch<SetStateAction<number>>} setState This is the state update function to be used to record change in value of input
 * @param {string} placeholder The placeholder for input
 * @param {string} ariaPlaceholder The aria-placeholder for input (descriptive)
 * @param {number} value Value of input (supposed to be the state value to ensure singular flow of data)
 * @param {boolean} started Specifies whether or not the timer has been started
 */
function FocusTimerNumberInput({ setState, placeholder, ariaPlaceholder, value, started }: FocusTimerNumberInputParams) {
    function formatDisplayFromValue() {
        if (value < 9) return `0${value}`;
        return `${value}`; // <== need to stringify it, else it has extra 0 in front (12 => 012, String(12) => 12)
    }

    return (<input type="number" onChange={(e) => setState(Number(e.target.value))} placeholder={placeholder}
        aria-placeholder={ariaPlaceholder} value={formatDisplayFromValue()} disabled={started} onBlur={() => setState(prev => prev % 60)}
        className={`bg-transparent focus:bg-yerba-mate-200
    text-center font-source text-yerba-mate-700 text-medium
    w-[30px] py-1
    border-b-2 border-b-yerba-mate-700 outline-none rounded-sm
    disabled:bg-yerba-mate-600 disabled:hover:bg-yerba-mate-600 disabled:text-silver`} />);
}