import { ArrowArcLeft, ArrowLeft, Camera } from "phosphor-react";
import { FormEvent, useState } from "react";
import { FeedbackType, FeedbackTypes} from "..";
import { api } from "../../../lib/api";
import { CloseButton } from "../../CloseButton";
import { Loading } from "../Loading";
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
const[isSendingFeedback, setIsSendingFeedback] = useState(false); 

const feedbackTypeInfo = FeedbackTypes[feedbackType]; 

async function handleSubmiFeedback(event:FormEvent){
    event.preventDefault(); 

    setIsSendingFeedback(true); 

    // console.log({
    //     screenshot, 
    //     comment,
    // })

   await api.post('/feedbacks', {
        type: feedbackType,
        comment, 
        screenshot, 
    });

    setIsSendingFeedback(false); 
    onFeedbackSent(); 
}

    return (
        <>
            <header>
                <button 
                    type="button" 
                    className="ArrowReturn"
                    onClick={onFeedbackRestartRequested}
                >
                    <ArrowLeft weight="bold" className="w-4 h-4"/>

                </button>

                <span className="FeedbackContent">
                    <img src={feedbackTypeInfo.image.source} alt={feedbackTypeInfo.image.alt} className="w-6 h-6" />
                    {feedbackTypeInfo.title}
                </span>

                <CloseButton/>
            </header>

            <form onSubmit={handleSubmiFeedback}className="my-4 w-full">
                <textarea
                    className="FeedbackText focus:border-b-red-600 focus:ring-red-600 focus:ring-1 resize-none
                    focus: outline-none scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"

                    /*O "focus" não é possível jogar em um arquivo só do global.css, pois o tailwind não suporta */

                    placeholder="Conte com detalhes o que está acontecendo..."
                    onChange={event => setComment(event.target.value)}
                />

                <footer className="flex gap-2 mt-2">

                    <ScreenshotButton 
                        screenshot={screenshot}
                        onScreenshotTook={setScreenshot}
                    />
                   
                    <button
                        disabled={comment.length === 0 || isSendingFeedback}
                        type="submit"
                        className=" FeedbackSend focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900
                        focus:ring-red-500 "
                    >
                        {isSendingFeedback ? <Loading/> : 'Enviar Feedback'}
                    </button>
                </footer>
            </form>
        </>
    )
}