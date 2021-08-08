import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../../store/modules/counter';

const Counter = () => {
    const num = useSelector(state => state.counter.num)
    const dispatch = useDispatch()
    return (
        <div>
            <h1>숫자:{num} </h1>
            <p>
                <button onClick={()=>dispatch(increment(10))}>500씩증가</button>
                <button onClick={()=>dispatch(increment(1200))}>120씩증가</button>                
            </p>
            <p>
                <button onClick={()=>dispatch(decrement(105))}>105씩감소</button>
                <button onClick={()=>dispatch(decrement(800))}>800씩감소</button>                 
            </p>
        </div>
    );
};

export default Counter;