/**
 * A section for landing page which contains details about the website, such as its ideology.
 * Server-side.
 */

export default function DetailsSection() {
    const heading = `1% Better`;
    const context = `Our goal is to help you improve by 1% everyday, do the math, by the end of the year you’ll be 37 times better than you are today.`
    const quote = {
        text: `“In many cases, improvement is not about doing more things right, but about doing fewer things wrong.”`,
        writer: `- James Clear, author of ‘Atomic Habits’`
    }

    return (<section className="flex flex-col min-h-[50vh] md:min-h-fit">
        <h1 className="text-yerba-mate-600 font-semibold font-source lg:text-6xl md:text-5xl text-6xl text-center">{heading}</h1>
        <div className="flex flex-col justify-around h-full mt-4 md:mb-8">
            <p className="text-sm font-noto w-3/4 max-w-76 inline-block md:my-2"> {context} <em className="font-source text-yerba-mate-700">Small steps, everyday.</em> </p>
            <p className="text-sm text-right ml-auto w-3/4 max-w-76 inline-block md:my-2"><em className="font-source text-yerba-mate-700">{quote.text}</em> <br /> <span className="font-noto">{quote.writer}</span></p>
        </div>
    </section>)
}