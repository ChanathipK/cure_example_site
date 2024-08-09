import Link from "next/link"
import KeyboardDoubleArrowDownRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowDownRounded';

export default function NextScreenButton({toId = ""}: {toId: string} = { toId: ""}) {
    return (
        <Link href={`/${toId}`} className="h-20 w-20 absolute bottom-8 left-1/2 translate-x-[-50%] rounded-full bg-white drop-shadow-md duration-100 hover:drop-shadow-lg hover:cursor-pointer hover:translate-y-[-8px] flex justify-center items-center">
            <div className="w-4/5 h-4/5 relative rounded-full overflow-hidden">
                <KeyboardDoubleArrowDownRoundedIcon className="w-full h-full opacity-50" />
            </div>
        </Link>
    );

}