import React, { useState, useCallback } from "react";

// Дочерний компонент с мемоизацией
const ChildComponent = React.memo(({ onClick }) => {
  console.log("Рендеринг дочернего компонента...");
  return <button onClick={onClick}>Нажми меня</button>;
});

// useCallback мемоизирует функцию - то есть предотвращает ее пересоздание при каждом рендере, если зависимости не изменились
const HookUseCallback = () => {
  const [count, setCount] = useState(0);


  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []); 

  return (
    <div>
      <p>Счётчик: {count}</p>
      <ChildComponent onClick={increment} />
      <button onClick={increment}>Увеличить счётчик</button>
    </div>
  );
}

export default HookUseCallback;
