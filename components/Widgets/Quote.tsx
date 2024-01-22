import WidgetContainer from "./WidgetContainer";
import axios from "axios";

/**
 * Creates a quote widget that fetches zen quotes daily quotes.
 * Server-side rendering.
 */
export default async function Quote() {
    const response = await axios.get('https://zenquotes.io/api/today/');
    const [{ q: quote, a: author }] = response.data;

    return (<WidgetContainer widgetName="Quote of the Day">
        <div className="flex flex-col h-full py-5 px-4 justify-between items-between">
            <p className="font-normal cursor-pointer">
                "{quote}"
            </p>
            <p className="text-right font-noto mt-2 font-medium">— {author}</p>
        </div>
    </WidgetContainer>)
}