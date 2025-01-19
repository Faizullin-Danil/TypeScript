import { useEffect, useState, useRef } from 'react';

const Education = () => {
    const [state1, setState1] = useState(0);
    const [state2, setState2] = useState(0);
    let a = 5
    const anyRef = useRef(5)

    const onClick1 = () => {
        setState1(state => state + 1)
        a += 1
        anyRef.current += 1
        console.log("a: ", {a})
        console.log("anyRef: ", anyRef.current)
    }

    const onClick2 = () => {
        setState2(state => state + 1)
    }

    // useEffect(() => {
    //     console.log("state1: ", {state1});
    //     console.log("state2: ", {state2});
    // }, []); 

    return (
        <div>
            <button onClick={onClick1}>{state1}</button>
            <button onClick={onClick2}>{state2}</button>
        </div>
    );
}

export default Education;
