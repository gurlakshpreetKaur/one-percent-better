/* This page is the landing page or homepage, dynamically rendered.
   When no user is logged in, a log-in/sign-up page + features and graphics will be displayed
   If a user is logged in, it will open up directly to the user dashboard */
import LoginSignupInterface from '@/components/loginSignupInterface';
import { YerbaMateInput } from "@/components/inputs";

export default function LandingPage() {
  const heading = `1% Better`;
  const context = `Our goal is to help you improve by 1% everyday, do the math, by the end of the year you’ll be 37 times better than you are today.`
  const quote = {
    text: `“In many cases, improvement is not about doing more things right, but about doing fewer things wrong.”`,
    writer: `- James Clear, author of ‘Atomic Habits’`
  }

  return (
    <main className={`bg-coffee-300
    h-screen overflow-hidden sm:p-12 md:p-16
    flex justify-center items-center`}>
      <div className={`bg-white bg-opacity-60 
      sm:rounded-3xl sm:border-4 sm:border-solid sm:border-yerba-mate-600 
      h-full w-full lg:w-4/5 md:aspect-square lg:aspect-auto p-12 overflow-y-auto
      grid lg:grid-cols-[3fr_2fr] md:grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-10`}>
        <section className="flex flex-col">
          <h1 className="text-yerba-mate-600 font-semibold font-source lg:text-6xl md:text-5xl text-6xl text-center">{heading}</h1>
          <div className="flex flex-col justify-around h-full mt-4 md:mb-8">
            <p className="text-sm font-noto w-3/4 max-w-76 inline-block md:my-2"> {context} <em className="font-source text-yerba-mate-700">Small steps, everyday.</em> </p>
            <p className="text-sm text-right ml-auto w-3/4 max-w-76 inline-block md:my-2"><em className="font-source text-yerba-mate-700">{quote.text}</em> <br /> <span className="font-noto">{quote.writer}</span></p>
          </div>
        </section>
        <section className="flex">
          <div className="rounded-xl bg-white bg-opacity-60 hover:bg-yerba-mate-300 py-8 px-4 w-full h-full border-4 border-solid border-yerba-mate-600 text-center">
            <h1 className="text-yerba-mate-800 text-center text-xl font-source">Start Your Self-Improvement Journey</h1>
            <div className="flex flex-col justify-around mt-4 md:mb-8">
              <YerbaMateInput placeholder="Enter your name..." />
              <YerbaMateInput placeholder="Enter your email..." />
              <YerbaMateInput placeholder="Enter your password..." type="password" />
              <button>Sign me up</button>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
