import { Camera, Trash } from "phosphor-react";
import html2canvas from 'html2canvas'
import { useState } from "react";
import { Loading } from "./Loading";

interface ScreenshotButtonProps{
    screenshot: string | null; 
    onScreenshotTook: (screenshot: string | null) => void; 
}

export function ScreenshotButton({
    screenshot,
    onScreenshotTook

}: ScreenshotButtonProps){

    const[isTakingScreenshot, setIsTakingScreenshot] = useState(false)

    async function handleTakeScreenshot(){

        setIsTakingScreenshot(true)
        const canvas = await html2canvas(document.querySelector('html')!); 
        const base64image = canvas.toDataURL('image/png'); 

        onScreenshotTook(base64image);
        setIsTakingScreenshot(false);

    }

    if(screenshot){
        return(
            <button
                type="button"
                className="ScreenshotPosition"
                onClick={() => onScreenshotTook(null)}
                style={{
                    backgroundImage: `url(${screenshot})`,
                    backgroundPosition: 'right bottom',
                    backgroundSize: 80,
                }}
            >
                <Trash weight="fill"/>
            </button>
        );
    }

    return(
        <button
            type="button"
            onClick={handleTakeScreenshot}
            className="ScreenshotLayout transition-colorss focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-red-600"
        >
            {isTakingScreenshot ? <Loading/> : <Camera className="w-6 h-6"/>}
        </button>
    );
}