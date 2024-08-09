import Image from "next/image";
import NextScreenButton from "./NextScreenButton";

export default function ClubScreen() {
    return (
        <div id="club-screen" className="w-full h-screen bg-blue-100 flex flex-col justify-center items-center relative">
            <h1 className="text-slate-50 text-5xl font-bold">Chulalonkorn University Real Estate Club</h1>
            <div className="h-28 w-28 rounded-full overflow-hidden relative bg-white mt-8 mb-96">
                <Image src="/logos/logo.png" alt="CURE Logo" fill={true} />
            </div>
            <NextScreenButton toId="/#about-us" />
        </div>
    );
}