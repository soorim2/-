import React, { createContext, useState } from 'react';
//color 컴포넌트의 상태값 관리

// const ColorContext = createContext(defaultValue)
// defaultValue - Provider가 매칭되지 않을 때

//관리자 생성 //export 로 내보내기
export const ColorContext = createContext()


const ColorProvider = (props) => {
    //모든행동, state
    const [color, setColor] = useState('blue')
    
    //이벤트 함수 
    const onTomato = () => {
        setColor('tomato')
    }
    const onSalmon = () => {
        setColor('salmon')
    }
    const onSkyblue = () => {
        setColor('skyblue')
    }
    const onGainsboro = () => {
        setColor('gainsboro')
    }
    return (
        //이름만 ColorProvider이고 실제 리턴되는 값은 <ColorContext.Provider>
        <ColorContext.Provider value={{color,onTomato,onSalmon,onSkyblue,onGainsboro}}>
            {props.children}
          {/* <Color/> */}
        </ColorContext.Provider>
    );
};

export default ColorProvider;