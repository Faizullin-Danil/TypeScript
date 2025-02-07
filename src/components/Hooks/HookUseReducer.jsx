import { useReducer } from "react";

const reducer = (state, action) => {
    switch (action.type) {
      case 'increment':
        return { count: state.count + 1 };
      case 'decrement':
        return { count: state.count - 1 };
      default:
        throw new Error('Неизвестное действие');
    }
}

const HookUseReducer = () => {
    const [state, dispatch] = useReducer(reducer, { count: 0 }) 
    // В useReducer передаем функцию-reducer и начальное состояние
    // dispatch - функция, которая отправляет действия в reducer для изменения состояния 

    return (
        <div>
            <p>{state.count}</p>
            <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
            <button onClick={() => dispatch({ type: 'increment' })}>+</button>
        </div>
    )
}
export default HookUseReducer