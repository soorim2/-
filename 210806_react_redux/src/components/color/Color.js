import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { yellow, lime, tomato } from '../../store/modules/color';
 

const Color = () => {
    //state 에서 리듀서 파일명을 찾아서 초기값을 가져온다.
    //const state담을이름 = useSelector( state => state.리듀서파일명.state명 )
    const color = useSelector(state => state.color.color)

    /*
    const dispatch = useDispatch() 
    <button onClick={() => dispatch( 리듀에서내보낸액션명() )}>변경</button>
    */
    const dispatch = useDispatch()

    return (
        <div>
            <h1 style={{color:color}}>컬러 : {color} </h1>
            <p>
                <button onClick={()=>dispatch(tomato())}>tomato</button>
                <button onClick={()=>dispatch(yellow())}>yellow</button>
                <button onClick={()=>dispatch(lime())}>lime</button>
            </p>
        </div>
    );
};

export default Color;