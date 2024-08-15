import Image from "next/image";

export default function Card({
    firstName,
    lastName,
    imgUrl,
}: {
    firstName: string,
    lastName: string,
    imgUrl: string,
}) {
    return (
        <div className="w-64 h-[28rem] rounded-md drop-shadow-md bg-white mx-4 flex-none flex flex-col items-center overflow-hidden">
            <div className="w-full rounded-t-md h-1/2 relative">
                <Image className="object-cover" src={imgUrl} alt="Profile Picture" fill={true} />
            </div>
            <div className="flex-1 w-full px-6 py-6 flex items-center flex-col">
                <h1 className="w-full text-center text-xl font-semibold truncate">{firstName} {lastName}</h1>
            </div>
        </div>
    );
}