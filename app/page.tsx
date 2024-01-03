/* This page is the landing page or homepage, dynamically rendered.
   When no user is logged in, a log-in/sign-up page + features and graphics will be displayed
   If a user is logged in, it will open up directly to the user dashboard */
import LoginSignupInterface from '@/components/loginSignupInterface'

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
      h-full w-full md:w-4/5 p-12
      grid lg:grid-cols-[2fr_1fr] md:grid-cols-[1fr_1fr] gap-10`}>
        <section className="flex flex-col">
          <h1 className="text-yerba-mate-600 font-semibold font-source text-6xl my-3">{heading}</h1>
          <div className="flex flex-col justify-between h-full">
            <p className="text-sm font-noto my-3"> {context} <em>Small steps, everyday.</em> </p>
            <p className="text-sm text-right my-3 w-3/4 ml-auto"><em className="font-source">{quote.text}</em> <br /> <span className="font-noto">{quote.writer}</span></p>
          </div>
        </section>
        <section className="flex">
          <div className="rounded-xl bg-white bg-opacity-60 hover:bg-yerba-mate-300 p-8 w-full h-full border-4 border-solid border-yerba-mate-600"></div>
        </section>
      </div>
    </main>
  )
}
