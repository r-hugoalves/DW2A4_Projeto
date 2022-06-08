import { CircleNotch } from "phosphor-react";

export function Loading(){
    return(
        <div className="LoadingAnimation">
            <CircleNotch weight="bold" className="w-4 h-4" />
        </div>
    ); 
}