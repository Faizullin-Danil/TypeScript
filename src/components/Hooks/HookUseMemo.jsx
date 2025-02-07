import { useState, useMemo } from "react";

const factorial = (value) => {
    let result = 1
    for (let i = 1; i <= value; i++) {
        result *= i;
      }
    return result
}

// useMemo - мемоизирует значение, предотравщая повторные вычисления если входные данные не изменились
const HookUseMemo = () => {
    const[value, setValue] = useState(0) 
    const[state, setState] = useState(null)

    const factorialResult = useMemo(() => factorial(value), [value]); // если value не поменяется, то функция вернет сохрененное(мемоизированное) значение
    
    const onChange = (e) => {
        const newValue = Number(e.target.value); 
        setValue(newValue);
    }

    
    return (
        <div>
            <input onChange={onChange}/>
            <h1>Факториал {value} = {factorialResult}</h1>
        </div>
    )
}
export default HookUseMemo