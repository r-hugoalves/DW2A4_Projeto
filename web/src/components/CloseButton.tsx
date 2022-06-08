import {Popover} from '@headlessui/react'
import { X } from 'phosphor-react'

export function CloseButton(){
    return(
        <Popover.Button className="CloseWidget" title='Fechar formulário'>
            <X  weight='bold' className='w-4 h-4'></X>
        </Popover.Button>
    )
}