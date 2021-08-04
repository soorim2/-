import React from 'react';
import Color from './components/color/Color';
import ColorProvider from './context/ColorContext';
import Count from './components/counter/Count';
import CountProvider from './context/CountContext';
import ChangeColor from './components/color/ChangeColor';
import ChangeColorProvider from './context/ChangeColorContext';

const App = () => {
  return (
    <div>

      <ColorProvider>
        {/* 화면에 보일 UI 구조 =Color */}
        <Color/>
      </ColorProvider>

      <hr/>

      <CountProvider>
        <Count/>
      </CountProvider>

      <hr/>
      
      <ChangeColorProvider>
        <ChangeColor/>
      </ChangeColorProvider>

    </div>
  );
};

export default App;