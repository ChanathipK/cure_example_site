"use client"

import { useState, useEffect } from "react"
import { CircularProgress } from "@mui/material";

export default function ExampleFeature1() {

    const [isLoading, setIsLoading] = useState<boolean>(false);

    // this example show how you can setup a loadind/fetching feature
    // when the page is first loaded (only the first time)
    useEffect(() => {
        async function mockLoading() {
            setIsLoading(true);
            // you can fetch data or sync with external system here
            // as long as you want
            // let's say we want to fetch data and it takes 4 seconds
            // fake wait 4 secons
            await new Promise((resolve) => {
                setTimeout(resolve, 4000);
            });

            // change state back to not loading
            setIsLoading(false);
        }
        mockLoading();
    }, [])

    if (isLoading) {
        return (
            <div className="h-screen flex justify-center items-center bg-slate-50">
                <CircularProgress className="w-20 h-20" />
            </div>
        );
    }

    return (
        <div className="h-screen flex justify-center items-center bg-slate-50">
            <h1 className="text-2xl">Loading Finish</h1>
        </div>
    );
}