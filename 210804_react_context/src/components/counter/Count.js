import React, { useContext, createContext } from 'react';
import { CountContext } from '../../context/CountContext';

const Count = (value) => {
    // value 받기
    //CountContext를 받아옴 (provider를 통해)
    const {count,increment,decrement} = useContext(CountContext)
    return (
        <div>
            <h1>숫자: {count}</h1>
            <p>
                <button onClick={()=>increment()}>증가</button>
                <button onClick={()=>decrement()}>감소</button>
            </p>
        </div>
    );
};

export default Count;