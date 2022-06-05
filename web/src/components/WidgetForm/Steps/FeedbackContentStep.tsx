import { ArrowArcLeft, ArrowLeft, Camera } from "phosphor-react";
import { FormEvent, useState } from "react";
import { FeedbackType, FeedbackTypes} from "..";
import { CloseButton } from "../../CloseButton";
import { ScreenshotButton } from "../ScreenshotButton";

interface FeedbackContentStepProps {
    feedbackType: FeedbackType;
    onFeedbackRestartRequested: () => void; 
    onFeedbackSent: () => void; 
}

export function FeedbackContentStep({
    feedbackType, 
    onFeedbackRestartRequested, 
    onFeedbackSent, 
}: FeedbackContentStepProps){

const[screenshot, setScreenshot] = useState<string | null> (null)
const[comment, setComment] = useState('')

const feedbackTypeInfo = FeedbackTypes[feedbackType]; 

function handleSubmiFeedback(event:FormEvent){
    event.preventDefault(); 

    console.log({
        screenshot, 
        comment,
    })

    onFeedbackSent(); 
}

    return (
        <>
            <header>
                <button 
                    type="button" 
                    className="top-5 left-5 text-zinc-400 hover:text-zinc-100"
                    onClick={onFeedbackRestartRequested}
                >
                    <ArrowLeft weight="bold" className="w-4 h-4"/>

                </button>

                <span className="text-xl leading-6 flex items-center gap-2">
                    <img src={feedbackTypeInfo.image.source} alt={feedbackTypeInfo.image.alt} className="w-6 h-6" />
                    {feedbackTypeInfo.title}
                </span>

                <CloseButton/>
            </header>

            <form onSubmit={handleSubmiFeedback}className="my-4 w-full">
                <textarea
                    className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 
                    bg-transparent rounded-md focus:border-b-purple-500 focus:ring-purple-500 focus:ring-1 resize-none
                    focus: outline-none scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"

                    placeholder="Conte com detalhes o que está acontecendo..."
                    onChange={event => setComment(event.target.value)}
                />

                <footer className="flex gap-2 mt-2">

                    <ScreenshotButton 
                        screenshot={screenshot}
                        onScreenshotTook={setScreenshot}
                    />
                   
                    <button
                        disabled={comment.length === 0}
                        type="submit"
                        className="p-2 bg-purple-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm
                        hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900
                        focus:ring-purple-500 transition-colors disabled:opacity-50 disabled:hover:bg-purple-500"
                    >
                        Enviar Feedback
                    </button>
                </footer>
            </form>
        </>
    )
}