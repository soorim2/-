import React from 'react';
import { useDispatch } from 'react-redux';
import { remove } from '../../store/modules/todos';

const TodoItem = ({todo}) => {
    const{id,text}=todo
    const dispatch = useDispatch()
    return (
        <li>
           {id} / {text}
           <button onClick={()=>dispatch(remove(id))}>삭제</button>
        </li>
    );
};

export default TodoItem;