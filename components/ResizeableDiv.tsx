"use client"

import { MouseEvent, MouseEventHandler, useRef } from "react";

export default function ResizeableDiv({ children, className = "" }: { children: JSX.Element | JSX.Element[], className?: string }) {
    const resizeDiv = useRef<HTMLDivElement>(null);

    function handleResize(e: any) {
        if (resizeDiv.current === null) return;
        resizeDiv.current.style.width = `${e.clientX % window.innerWidth}px`; //<- prevent excess width which would lead to scroll
    };

    function drag(e: MouseEvent) { //on mouse down
        window.addEventListener('mousemove', handleResize); //we will create an event listener to listen for mouse movement

        window.addEventListener('mouseup', () => { //when mouse moves up, we will remove the listener to prevent unnecessary resize
            window.removeEventListener('mousemove', handleResize);
        });
    }
    return <div className={className} ref={resizeDiv}>
        <div className="absolute w-[10px] h-full right-0 bottom-0 top-10 inline-block cursor-w-resize" onMouseDown={drag}>
            {children}
        </div>
    </div>;
}