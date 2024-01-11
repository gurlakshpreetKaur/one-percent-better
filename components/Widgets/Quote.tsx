// 'use client'
import { useState } from "react";
import WidgetContainer from "./WidgetContainer";
const getQuote = require('forbes-quote');

/**
 * Creates a quote widget that fetches forbes daily quotes
 */
export default async function Quote() {
    const { quote, author } = await getQuote();
    console.log(quote);
    return (<WidgetContainer widgetName="Quote of the Day">
        <div className="p-2">
            <p className="text-xl font-source font-medium italic cursor-pointer">
                "{quote}"
            </p>
            <p className="text-right font-noto mt-2">{author}</p>
        </div>
    </WidgetContainer>)
}