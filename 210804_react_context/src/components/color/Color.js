import React, { useContext } from 'react';
import { ColorContext } from '../../context/ColorContext';

const Color = () => {
    // value 가져오기 (조회) =useContext(생성한context)
    const {color,onTomato,onSalmon,onSkyblue,onGainsboro} = useContext(ColorContext)
    return (
        <div>
            <h1 style={{color:color}}>컬러 : {color} </h1>
            <button onClick={() => onTomato()}>tomato</button>
            <button onClick={() => onSalmon()}>salmon</button>
            <button onClick={() => onSkyblue()}>skyblue</button>
            <button onClick={() => onGainsboro()}>gainsboro</button>
        </div>
    );
};

export default Color;