import {Input} from './styles'
import {ChangeEvent} from 'react'

type InputTypes = {
    editLocal: (e: ChangeEvent<HTMLInputElement>) => void;
}

const InputComponent = ({editLocal} : InputTypes) => {
    return (
        <Input
            placeholder='Digite o local que deseja conhecer'
            onChange={editLocal}
        />
    )
}


export default InputComponent;