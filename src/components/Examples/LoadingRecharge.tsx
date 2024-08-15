import { Battery0BarRounded } from "@mui/icons-material";
import { indigo } from "@mui/material/colors";

export default function LoadingRecharge() {    
    return (
            <div className="h-36 w-36 relative rotate-90">
                <Battery0BarRounded sx={{color: indigo[50], width: "100%", height: "100%"}} />
                <div className="w-1/5 rounded-[1px] absolute bottom-[19%] left-1/2 translate-x-[-50%] bg-blue-200 opacity-50 animate-[chargeBattery_3s_ease-out_infinite]">

                </div>
            </div>
    );
}