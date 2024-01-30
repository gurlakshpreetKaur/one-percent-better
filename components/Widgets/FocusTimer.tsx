'use client'
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import WidgetContainer from "./WidgetContainer";
import { AiOutlinePlayCircle, AiOutlineStop, AiOutlinePauseCircle } from "react-icons/ai";
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
    const [paused, setPaused] = useState(false);

    /**Handles state for starting timer and calls the function that starts/stops timer */
    function startOrStopTimer() {
        if (started) {
            setStarted(false);
            setPaused(false);
        } else {
            setMinutesTemp(minutesFixed);
            setSecondsTemp(secondsFixed);
            setStarted(true);
        }
    }

    //this will be set off by the startOrStopTimer(). when timer is started, secondsTemp is set to value of seconds
    // fixed. after that, useEffect will be triggered
    useEffect(() => {
        if (started && !paused) { //if timer is started
            setTimeout(() => { //then we set timeout of 1000ms, calling start timer which will reduce no. of seconds by 1
                startTimer(minutesTemp, secondsTemp, started); // as this will update seconds temp after 1000ms, then
                //                                                once again useEffect will be called and so, this works sort of recursively
            }, 1000)
        }
    }, [secondsTemp, paused]);

    useEffect(() => {
        console.log("isPaused?", paused);
    }, [paused]);


    /**A function that simply reduces seconds by 1, or if seconds===0 then sets seconds=59 and minutes=minutes-1
     * @param {number} minutes The minutes to use as starting point for the timer
     * @param {number} seconds The seconds to use as starting point for the timer
     * @param {boolean} started current status of timer (started/paused) so that recursion can be ended
     * @description You may wonder why this function uses params, when it could just use the state. State is being passed statically, we could solve that with useRef, but I didn't want to both with that so I've deduced a clever work-around and used params which will update the next time the function is called, keeping them synced with the state.
     */
    const startTimer = (minutes: number, seconds: number, started: boolean) => {
        if (!started || (minutes === 0 && seconds === 0)) {
            setStarted(false);
            return;
        }

        console.log(minutes, seconds, started);

        if (seconds === 0) { //if seconds is 0, we've finished a minute, so seconds turns to 59, and mintues is reduced by 1
            seconds = 59;
            setSecondsTemp(59);
            minutes--;
            setMinutesTemp(prev => prev - 1);
        } else { //else just reduce seconds by 1
            seconds--;
            setSecondsTemp(prev => prev - 1);
        }
    }

    return <WidgetContainer widgetName="Focus Timer" activeIndicator={started}>
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
            {<button className={`${started ? "inline-block" : "hidden"}
            ${!paused ? "bg-yerba-mate-500" : "bg-yerba-mate-700"}
            hover:bg-yerba-mate-800  text-md p-2 mt-2 text-white rounded-full mx-2`}
                onClick={() => setPaused(prev => !prev)}>
                {paused ? <AiOutlinePlayCircle /> : <AiOutlinePauseCircle />}
            </button>}
            <button className={`${started ? "bg-black hover:bg-red-600" : "bg-yerba-mate-600 hover:bg-yerba-mate-800"}
            text-md p-2 mt-2 text-white rounded-full mx-2`}
                onClick={startOrStopTimer}>{started ? <AiOutlineStop /> : <AiOutlinePlayCircle />}</button>
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
        if (value <= 9) return `0${value}`;
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