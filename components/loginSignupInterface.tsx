/* This component is made to be placed on landing page, and it will have inputs and buttons to allow users to 
   login/sign */

import { YerbaMateInput } from "./inputs";

/**
 * Login/signup interface, with inputs and buttons to allow users to login/signup. 
 * Server-side.
 */
export default function LoginSignupInterface() {
    async function onSubmit() {
        'use server'
        console.log("Submit");
    }

    return (<section
        className={`bg-white bg-opacity-45
        py-8 px-8
        rounded-md border-[1px] border-solid border-yerba-mate-500
        text-center`}>
        <h2 className="font-noto text-yerba-mate-600 text-xl mb-3 font-medium">Login</h2>
        <form onSubmit={onSubmit}>
            <YerbaMateInput type="text" placeholder="Enter your email..." />
            <br />
            <YerbaMateInput type="password" placeholder="Enter your password..." />
            <br />
            <button type="submit" className="py-[7px] px-[16px] bg-coffee-800 text-white font-noto text-sm rounded-[5px] mt-3 tracking-[1.25px] hover:bg-coffee-900 transition-all">Next</button>
        </form>
    </section>);
}