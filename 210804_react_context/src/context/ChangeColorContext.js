import React, { createContext, useState } from 'react';

export const ChangeColorContext = createContext()

const ChangeColorProvider = ({children}) => {
    const [color, setColor] = useState('whitesmoke')
    // 값만 받아와서 한개의 함수를 각각 다른 값으로 호출
    const onColor = (text) => {
        setColor(text)
    }
    return (
        <ChangeColorContext.Provider value={{color,onColor}}>
            {children}
            {/* <ChangeColor/> */}
        </ChangeColorContext.Provider>
    );
};

export default ChangeColorProvider;