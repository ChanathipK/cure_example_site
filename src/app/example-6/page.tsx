"use client"

import { SyntheticEvent } from "react"

export default function ExampleSix() {

    function testScreenSize(e: SyntheticEvent<HTMLButtonElement>) {
        alert(window.screen.width);
        alert(window.screen.height);
    }

    function testViewportSize(e: SyntheticEvent<HTMLButtonElement>) {
        alert(window.visualViewport!.width);
        alert(window.visualViewport!.height);
    }

    return (
        <main className="bg-blue-100">
            <div className="max-w-screen-xl mx-auto min-h-screen max-h-[150vh] pt-36 bg-blue-200">
                <div className="h-96 bg-blue-300 p-4">
                    <div className="flex gap-2">
                        <button className="px-4 py-2 bg-white rounded-md hover:bg-slate-100 active:bg-slate-200" onClick={testScreenSize}>Test Screen Size</button>
                        <p className="px-4 py-2 bg-white rounded-md">This button shows screen size. Screen size is the resolution of the screen. It's affected by zoom and scaling.</p>
                    </div>
                    <div className="flex gap-2 mt-2">
                        <button className="px-4 py-2 bg-white rounded-md hover:bg-slate-100 active:bg-slate-200" onClick={testViewportSize}>Test Viewport Size</button>
                        <p className="px-4 py-2 bg-white rounded-md">This button shows viewport size. Viewport size is the size a broswer see. Try resizing browser.Try zooming in/out.</p>
                    </div>
                </div>
            </div>
        </main>
    );
}