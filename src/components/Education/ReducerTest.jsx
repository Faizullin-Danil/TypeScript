import { useReducer } from "react"

function reducer(state, action) {
    switch (action.type) {
        case "CHANGE_NAME": {
            return {
                Name: action.payload,
                Age: state.Age 
            }
        }
        case "INCREMENT_AGE": {
            return {
                Name: state.Name,
                Age: state.Age + 1
            }
        }
    }
}

const initialState = { Name: "", Age: 0}

const ReducerTest = () => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const onClick = () => {
        dispatch({ type: "INCREMENT_AGE" })
    }

    const onChange = (event) => {
        dispatch({ type: "CHANGE_NAME", payload: event.target.value })
    }

    return (
        <div>
            <input onChange={onChange} value={state.Name} placeholder="Введите имя..."></input>
            <button onClick={onClick}>Увеличить возраст на 1</button>
            <h1>Вас зовут: {state.Name}</h1>
            <h1>Ваш возраст: {state.Age}</h1>
        </div>
    )
}
export default ReducerTest