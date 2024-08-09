import Link from "next/link";
import Image from "next/image";
import NextScreenButton from "./NextScreenButton";

export default function HomeScreen() {
    return (
        <div id="home-screen" className="w-full h-screen bg-green-200 relative">
            <div className="max-w-screen-xl mx-auto h-full flex justify-center items-center">
                <div className="flex-1">
                    <h1 className="text-4xl font-bold text-white leading-tight text-center">Chulalongkorn University<br /><span className="text-[3.5rem]">Real Estate Club</span></h1>
                </div>
                <div className="flex-1 h-full flex justify-center items-center">
                    <div className="rounded-md w-4/5 h-1/2 lg:h-2/3 bg-white relative duration-150 hover:translate-x-[-1rem] hover:translate-y-[-1rem]">

                    </div>
                </div>
            </div>
            <NextScreenButton toId="#club-screen" />
        </div>
    );
}