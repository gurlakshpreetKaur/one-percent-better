"use client"

import { MouseEvent, useRef, useState } from "react";

/**
 * @property {JSX.Element} children- Children of the resizeable div.
 * @property {string} className- Classnames applied to the resizeable div.
 * @property {string} resizeAreaClassName- Background color applied only to the resize area of the resizeable div.
 */
interface ResizeableDivParams {
    /** Children of the resizeable div. */
    children?: JSX.Element,
    /** Classnames applied to the resizeable div */
    className?: string,
    /** Background color applied only to the resize area of the resizeable div. */
    resizeAreaBg?: string
}

/**
 * Creates a resizeable div.
 * @param {JSX.Element} children- Children of the resizeable div.
 * @param {string} className- Classnames applied to the resizeable div.
 * @param {string} resizeAreaClassName- Background color applied only to the resize area of the resizeable div.
 */
export default function ResizeableDiv({ children = <></>, className = "", resizeAreaBg = "" }: ResizeableDivParams) {
    const resizeDiv = useRef<HTMLDivElement>(null);
    const [width, setWidth] = useState(300); //this won't be used to directly set the width of the resizeable div,
    //  that will be done via imperative programming, this will be used to store the SAME width, for other styling
    //  reasons, ie. the translate styling. we aren't using width state directly since it is slower to the user

    /**
     * This function handles the resize of the resizeable div.
     * It uses the width state to determine the current calculated width of the resizeable div. If that calculated
     * width is less than 300px, it will set it to 300px and return, as a min-width of 300px needs to be maintained. Else it will
     * calculate the new width and set the width state to it accordingly.
     * 
     * At the same time, remember that the width state does not change the element's width, that is changed by ref
     * (resizeDiv). And after the width state, the ref element is updated accordingly.
     * @param e: The event that triggered the function, its either the click (in case the div is hidden) or the resize.
     */
    function handleResize(e: globalThis.MouseEvent | MouseEvent) {
        if (resizeDiv.current === null) return;

        if (width < 300) {
            setWidth(300);
            return;
        }

        const newWidth = window.innerWidth - (e.clientX % window.innerWidth); //since we resize FROM the right, the new width is calculated like this
        resizeDiv.current.style.width = `${newWidth}px`;
        setWidth(newWidth);
    };

    /**
     * This function is basically triggered on mousedown over resizeable div. 
     * 
     * If mousedown is heard, this function will create lister for mousemove (to resize) and mouseup (to end resize)
     *  of the resizeable div.
     */
    function drag() { //on mouse down
        if (resizeDiv.current === null) return;

        window.addEventListener('mousemove', handleResize); //we will create an event listener to listen for mouse movement

        window.addEventListener('mouseup', () => { //when mouse moves up, we will remove the listener to prevent unnecessary resize
            window.removeEventListener('mousemove', handleResize);
        });
    }

    //the resize bar for the div
    //if width < 300, the cursor will be pointer (to tell user to click the resize bar to reveal the resizable div)
    //if a resizeAreaBg param is given, it will be used as bg
    const ResizeBar = <div className={`absolute w-[10px] h-full left-0 bottom-0 top-0 inline-block  
            ${width < 300 ? "cursor-pointer" : "cursor-e-resize"}
            ${resizeAreaBg === "" ? "bg-coffee-700" : resizeAreaBg}
            flex flex-col justify-center items-center`}
        onClick={(e) => { width < 300 && handleResize(e) }}>
    </div>;


    return <div className={`${className} ${className.includes("fixed") ? "" : "relative"}`} ref={resizeDiv} onMouseDown={drag}
        style={{ transform: width < 300 ? "translateX(calc(100% - 15px))" : "translateX(0px)" }}>
        <div className="h-full overflow-hidden">
            {ResizeBar}
            <div className="overflow-y-auto py-12 px-12 h-full">
                {children}
            </div>
        </div>
    </div>;
}