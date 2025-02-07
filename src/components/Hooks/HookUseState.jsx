import { useState } from "react"

const HookUseState = () => {
    const [state, setState] = useState(0) // хранит в себе состояние state И функцию для изменения состояния setState

    const onClick = () => {
        setState(() => state + 1)
    }

    return (
        <div>
            <button onClick={onClick}>{state}</button>
        </div>
    )
}
export default HookUseState