"use client"

import Link from "next/link";
import { useState } from "react";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

export default function NavBar() {
    // show hamburger when <lg
    const [menuOpen, setMenuOpen] = useState<boolean>(false);

    const responsiveMenuSmall = (
        <ul className={`lg:hidden absolute top-[100%] left-0 w-full flex flex-col justify-center items-end overflow-hidden bg-slate-600 duration-150 ${menuOpen ? "h-[18rem] py-4" : "h-0"}`}>
            <li className="my-2 me-4"><Link href="/" prefetch={true}>HOME</Link></li>
            <li className="my-2 me-4"><Link href="/" prefetch={true}>OUR TEAM</Link></li>
            <li className="my-2 me-4"><Link href="/" prefetch={true}>EVENTS</Link></li>
            <li className="my-2 me-4"><Link href="/" prefetch={true}>SPONSORS</Link></li>
            <li className="my-2 me-4"><Link href="/" prefetch={true}>CAREERS</Link></li>
            <li className="my-2 me-4"><Link href="/" prefetch={true}>JOIN US</Link></li>
        </ul>
    );

    const responsiveMenuLarge = (
        <ul className="hidden lg:flex items-center">
            <li className="px-2 py-4 duration-100 hover:bg-slate-800">
                <Link href="/" prefetch={true}>HOME</Link>
            </li>
            <li className="px-2 py-4 duration-100 hover:bg-slate-800">
                <Link href="/#" prefetch={true}>OUR TEAM</Link>
            </li>
            <li className="px-2 py-4 duration-100 hover:bg-slate-800">
                <Link href="/#" prefetch={true}>EVENTS</Link>
            </li>
            <li className="px-2 py-4 duration-100 hover:bg-slate-800">
                <Link href="/#" prefetch={true}>SPONSORS</Link>
            </li>
            <li className="px-2 py-4 duration-100 hover:bg-slate-800">
                <Link href="/#" prefetch={true}>CAREERS</Link>
            </li>
            <li className="px-2 py-4 duration-100 hover:bg-slate-800">
                <Link href="/#" prefetch={true}>CONTACT US</Link>
            </li>
        </ul>
    );

    return (
        <nav className="w-full bg-[#22587C] fixed z-50">
            <div className="max-w-screen-xl flex justify-between items-center mx-auto text-white px-4 2xl:px-0">
                <Link
                className="flex items-center duration-100 hover:bg-slate-800"
                href="/"
                prefetch={true}
                >
                    <div className="relative w-12 h-12 bg-slate-700">
                        {/* <Image src="/cu_re_logo.png" alt="CU Real Estate Logo" fill={true} /> */}
                    </div>
                    <span className="ms-1 px-2">CU Real Estate</span>
                </Link>
                {responsiveMenuLarge}
                <Link className="hidden lg:inline-block bg-slate-800 rounded-md px-3 py-2 ms-8 duration-100 hover:text-slate-800 hover:bg-slate-50" href="/#" prefetch={true}>JOIN US</Link>
                <div className="block lg:hidden h-14 w-14 relative hover:cursor-pointer" onClick={(e) => {
                    e.preventDefault();
                    setMenuOpen(!menuOpen);
                }}>
                    <MenuRoundedIcon className="w-full h-full" />
                </div>
                {responsiveMenuSmall}
            </div>
        </nav>
    );
}