import { useEffect, useState } from "react"

const HookUseEffect = () => {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
        setSeconds((prev) => prev + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, []); 
    // [] - вызов useEffect при монтировании компонента
    // [state, x] - вызов useEffect при изменении массива зависимосетей
    // return в useEffect - функия очистки, вызывается при размонтировании компонента и при изменении массива зависимостей
    return (
        <div>
            <p>Прошло {seconds} секунд.</p>
        </div>
    )
}
export default HookUseEffect