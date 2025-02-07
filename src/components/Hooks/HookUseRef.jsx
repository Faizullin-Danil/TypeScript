import { useState, useRef } from 'react';

// useRef используется для хранения значения между рендерами или для доступа к DOM-элементу
const HookUseRef = () => {
    //useRef для хранения значения между рендерами
    const [count, setCount] = useState(0);
    const renders = useRef(0); // Хранение количества рендеров
    renders.current += 1;

    //useRef для доступа к DOM-элементу
    const inputRef = useRef(null);

    const handleFocus = () => {
        inputRef.current.focus(); // Устанавливаем фокус на input
    };

    return (
        <div>
            <p>Счетчик: {count}</p>
            <p>Количество рендеров: {renders.current}</p>
            <button onClick={() => setCount(count + 1)}>Увеличить</button>
            <hr />
            <input ref={inputRef} type="text" placeholder="Кликни на кнопку!" />
            <button onClick={handleFocus}>Фокус</button>
        </div>
    );
}
export default HookUseRef

