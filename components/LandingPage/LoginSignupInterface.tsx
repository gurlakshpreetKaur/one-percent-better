'use client'

import { useState } from "react";
import { YerbaMateInput } from "../inputs";

/**
 * Login-signup interface featured on the landing page.
 * Client-side.
 */
export default function LoginSignupInterface() {
    const [loginOrSignupIsLoginTrue, setLoginOrSignupIsLoginTrue] = useState(true);
    return (<section className="flex justify-center items-center">
        <div className="rounded-xl bg-white bg-opacity-60 py-8 px-4 w-full h-min border-4 border-solid border-yerba-mate-600 text-center">
            {loginOrSignupIsLoginTrue ? <SigninComponents /> : <LoginComponents />}
            <button onClick={() => setLoginOrSignupIsLoginTrue(prev => !prev)}
                className="text-xs text-yerba-mate-300 font-medium hover:text-yerba-mate-500">
                {loginOrSignupIsLoginTrue ? "I already have an account" : "I don't have an account yet"}
            </button>
        </div>
    </section>)
}

function LoginComponents() {
    return <>
        <h1 className="text-yerba-mate-800 text-center text-xl font-source">Welcome Back to your Self-Improvement Journey!</h1>
        <div className="flex flex-col justify-around mt-4 items-center">
            <YerbaMateInput placeholder="Enter your email..." />
            <YerbaMateInput placeholder="Enter your password..." type="password" />
            <button className="mt-2 px-4 py-1 bg-yerba-mate-600 text-white font-noto rounded-md inline-block w-fit text-md">Log me in</button>
        </div>
    </>;
}

function SigninComponents() {
    return <>
        <h1 className="text-yerba-mate-800 text-center text-xl font-source">Start Your Self-Improvement Journey</h1>
        <div className="flex flex-col justify-around mt-4 items-center">
            <YerbaMateInput placeholder="Enter your name..." />
            <YerbaMateInput placeholder="Enter your email..." />
            <YerbaMateInput placeholder="Enter your password..." type="password" />
            <button className="mt-2 px-4 py-1 bg-yerba-mate-600 text-white font-noto rounded-md inline-block w-fit text-md">Sign me up</button>
        </div>
    </>;
}