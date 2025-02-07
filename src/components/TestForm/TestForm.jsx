import { useState } from "react"
import "./TestForm.css"

const defaultstate = {
    name: "",
    lastname: "",
    patronymic: "",
    comment: ""
}

const TestForm = () => {
    const [state, setState] = useState(defaultstate)

    const onChange = (key) => (e) => {
        setState({...state, [key]: e.target.value})
    }

    const HandleSubmit = () => {
        console.log(state)
        setState(defaultstate)
    }

    return (
            <div className="Form">
                <div className="Inputs">
                    <div className="Input">
                        <label>Имя</label>
                        <input type="text" value={state.name} onChange={onChange("name")}/>
                    </div>
                    <div className="Input">
                        <label>Фамилия</label>
                        <input type="text" value={state.lastname} onChange={onChange("lastname")}/>
                    </div>
                    <div className="Input">
                        <label>Отчество</label>
                        <input type="text" value={state.patronymic} onChange={onChange("patronymic")}/>
                    </div>
                </div>
                <div className="Input">
                    <label>Комментарий</label>
                    <textarea type="text" value={state.comment} onChange={onChange("comment")}></textarea>
                    <button className="button" onClick={HandleSubmit}>Отправить</button>
                </div>
            </div>        
    )
}
export default TestForm