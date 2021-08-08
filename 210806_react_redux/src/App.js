import React from 'react';
import Color from './components/color/Color';
import Count from './components/count/Count';
import Counter from './components/count/Counter';
import Todos from './components/todos/Todos';

const App = () => {
  return (
    <div>
      <Color />
      <hr/>
      <Counter />
      <hr/>
      <Count />
      <hr/>
      <Todos />
    </div>
  );
};

export default App;