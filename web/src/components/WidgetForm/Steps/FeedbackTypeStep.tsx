import { FeedbackType, FeedbackTypes } from "..";
import { CloseButton } from "../../CloseButton";

interface FeedbackTypeStepProps{
    onFeedbackTypeChanged: (type: FeedbackType) => void; 
}

export function FeedbackTypeStep(props: FeedbackTypeStepProps) {
    return (

    <>
        <header>
            <span className="DeixarFeedback">Deixe seu Feedback </span>
            <CloseButton/>
        </header>

        <div className="TiposFeedback">

            {Object.entries(FeedbackTypes).map(([key, value]) => {

                return (
                    <button
                        key={key}
                        className="BoxFeedbackTypes"

                        onClick={() => props.onFeedbackTypeChanged(key as FeedbackType)}

                        type="button"
                    >
                        <img src={value.image.source} alt={value.image.alt} />
                        <span>{value.title}</span>
                    </button>
                );
            })}
        </div>
    </>
    )
}