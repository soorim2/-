import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals'; 

//store생성
import { createStore } from 'redux';
//provider 공급
import { Provider } from 'react-redux'; 
// 리덕스 개발자 도구 연결
import { composeWithDevTools } from 'redux-devtools-extension' 

// reducer root폴더 연결
import rootReducer from './store'

// composeWithDevTools 를 사용하여 리덕스 개발자 도구 활성화
// const store = createStore( rootReducer ) 스토어생성

const store = createStore(rootReducer, composeWithDevTools()); 

ReactDOM.render(
  <React.StrictMode>
    {/* App 안에있는 자식에게 store를 공급해준다. */}
    <Provider store={store}>
      <App /> 
    </Provider>  
  </React.StrictMode>,
  document.getElementById('root')
);

 
reportWebVitals();
