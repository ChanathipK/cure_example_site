"use client"

import { SyntheticEvent, useState } from "react"
import { CircularProgress } from "@mui/material";

export default function ExampleFeature2() {
    const [isLoading, setIsLoading] = useState<boolean>(false);

    async function handleLoading(e: SyntheticEvent<HTMLButtonElement>) {
        // this function is called whenever the loading button is clicked
        // this function can't be called more than once within a click
        // because once the button is clicked, setIsLoading is called
        // thus changing the state, and the button disappear
        setIsLoading(true);

        // fake wait for 3 seconds
        await new Promise((resolve) => {
            setTimeout(resolve, 3000);
        });

        setIsLoading(false);
    }

    if (isLoading) {
        return (
            <div className="h-screen flex justify-center items-center bg-slate-50">
                <CircularProgress />
            </div>
        );
    }

    return (
        <div className="h-screen flex flex-col justify-center items-center bg-slate-50">
            <h1 className="text-2xl">Loading finished</h1>
            <div className="flex">
                <h2>To load again, </h2>
                <button className="px-2 text-blue-500" onClick={handleLoading}>click</button>
            </div>
        </div>
    );
}