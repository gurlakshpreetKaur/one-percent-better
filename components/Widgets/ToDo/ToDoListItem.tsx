"use client"
import { useState } from "react";

/**
 * @property {string} task The task that the user has entered 
 * @property {boolean} striked Specifies whether the task has been completed or not (true = has been completed)
 * @property {number} dateCreated Specifies the date when the task was created
 */
interface ToDoListItemInterface {
    /** The task that the user has entered  */
    task: string,
    /**  Specifies whether the task has been completed or not (true = has been completed) */
    striked: boolean,
    /** Specifies the date when the task was created */
    dateCreated: number,
}
/**
 * Creates each specific item of the to-do list. Used only as a child within to-do widget.
 * @param {string} task The task that the user has entered
 * @param {boolean} striked Specifies whether the task has been completed or not
 */
export function ToDoListItem({ task, striked }: ToDoListItemInterface) {
    const [strikedState, setStrikedState] = useState(striked);
    return <ul className={`my-1 hover:text-gray-500 ${strikedState ? "line-through text-gray-500" : ""}`}
        onClick={() => setStrikedState(prev => !prev)}>{task}</ul>;
}