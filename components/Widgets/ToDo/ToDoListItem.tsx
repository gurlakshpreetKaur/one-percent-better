"use client"
import { useState } from "react";

interface ToDoListItemInterface {
    task: string,
    striked: boolean,
    dateCreated: number,
}
/**
 * Creates each specific item of the to-do list. Used only as a child within to-do widget.
 */
export function ToDoListItem({ task, striked }: ToDoListItemInterface) {
    const [strikedState, setStrikedState] = useState(striked);
    return <ul className={`my-1 hover:text-gray-500 ${strikedState ? "line-through text-gray-500" : ""}`}
        onClick={() => setStrikedState(prev => !prev)}>{task}</ul>;
}