interface InputParams {
    type?: string,
    placeholder?: string,
    ariaPlaceholder?: string
}

/**
 * Produces a styled input with coffee (brown/cream) border.
 * @property {string} type: The input-type of text-input.
 * @property {string} placeholder: Placeholder for input. 
 * @property {string} ariaPlaceholder: Aria placeholder of input (ie. the placeholder to be used for visual aids purpose).
 */
export function CoffeeInput({ type = "text", placeholder = "", ariaPlaceholder = placeholder }: InputParams) {
    return <input type={type}
        placeholder={placeholder}
        aria-placeholder={ariaPlaceholder}
        className={`transition-all duration-300 ease-linear
        bg-white bg-opacity-40 focus:bg-opacity-90
        rounded-full border-2 border-solid border-coffee-500 outline-none hover:outline-none
        px-3 py-1 my-1
        text-sm
        placeholder:text-coffee-1000`} />
}

/**
 * Produces a styled input with yerba-mate (shade of green) border.
 * @property {string} type: The input-type of text-input.
 * @property {string} placeholder: Placeholder for input. 
 * @property {string} ariaPlaceholder: Aria placeholder of input (ie. the placeholder to be used for visual aids purpose).
 */
export function YerbaMateInput({ type = "text", placeholder = "", ariaPlaceholder = placeholder }: InputParams) {
    return <input type={type}
        placeholder={placeholder}
        aria-placeholder={ariaPlaceholder}
        className={`transition-all duration-300 ease-linear
        bg-white bg-opacity-40 focus:bg-opacity-90
        rounded-full border-2 border-solid border-yerba-mate-500 outline-none hover:outline-none
        px-3 py-1 my-1
        text-sm
        placeholder:text-yerba-mate-700`} />
}