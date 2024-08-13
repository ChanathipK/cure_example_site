"use client"

import { SyntheticEvent, useState } from "react"
import Link from "next/link";
import { MenuRounded } from "@mui/icons-material";

export default function ExampleFeature3Nav() {

    const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
    
    function handleHamburger(e: SyntheticEvent) {
        setIsNavOpen(!isNavOpen);
    }

    function handleTransparentPane(e: SyntheticEvent) {
        setIsNavOpen(!isNavOpen);
    }

    const responsiveMenuMobile = (
        <>
            <ul className={`flex flex-col w-64 h-screen bg-blue-400 z-40 lg:hidden overflow-hidden absolute top-0 right-0 duration-150 ${isNavOpen ? "opacity-100" : "opacity-0"}`}>
                
            </ul>
            <div className={`h-screen w-screen absolute top-0 left-0 z-30 bg-slate-500 ${isNavOpen ? "pointer-events-auto opacity-50": "pointer-events-none opacity-0"}`} onClick={handleTransparentPane}>

            </div>
        </>
    );

    const responsiveMenuDesktop = (
        <ul className="hidden lg:flex">
            <li className="px-2 py-1 hover:bg-slate-700">
                <Link href="/" prefetch={true}>Home</Link>
            </li>
            <li className="px-2 py-1 hover:bg-slate-700">
                <Link href="/" prefetch={true}>Teams</Link>
            </li>
            <li className="px-2 py-1 hover:bg-slate-700">
                <Link href="/" prefetch={true}>Works</Link>
            </li>
            <li className="px-2 py-1 hover:bg-slate-700">
                <Link href="/" prefetch={true}>About Us</Link>
            </li>
        </ul>
    );


    return (
        <nav className="w-full bg-slate-500 fixed top-0 right-0">
            <div className="max-w-screen-xl mx-auto h-14 flex justify-between items-center">
                <div className="flex items-center">
                    <div className="w-14 h-14 bg-slate-600 me-4"></div>
                    <span>Brand Name</span>
                </div>
                <MenuRounded className="w-14 h-14 z-50 inline-block lg:hidden hover:cursor-pointer" onClick={handleHamburger} />
                {responsiveMenuMobile}
                {responsiveMenuDesktop}
            </div>
        </nav>
    );
}