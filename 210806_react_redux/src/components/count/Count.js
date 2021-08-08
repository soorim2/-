import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../../store/modules/count';

const Count = () => {    

    const cnt = useSelector(state => state.count.cnt)
    const color = useSelector(state => state.color.color)
    const dispatch = useDispatch()
    return (
        <div>
            <h1 style={{color:color}}>숫자: {cnt}</h1>
            <h1> 컬러 : {color} </h1>
            <p>
                <button onClick={()=>dispatch(increment())}>증가</button>
                <button onClick={()=>dispatch(decrement())}>감소</button>
            </p>
        </div>
    );
};

export default Count;