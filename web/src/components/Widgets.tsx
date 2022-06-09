import { ChatTeardropDots } from "phosphor-react"
import { Popover} from "@headlessui/react"
import { WidgetForm } from "./WidgetForm"


export function Widget(){
   
    return(
        <Popover className="WidgetPosicao">
            <Popover.Panel> 
                <WidgetForm/>    
            </Popover.Panel>

            <Popover.Button className="WidgetExpandir group">
                <ChatTeardropDots className="w-6 h-6 "/>

                <span className="WidgetRetrair">
                   <span className="pl-2"> </span>
                        Feedback
                </span>
            </Popover.Button>
        </Popover>
    )
}