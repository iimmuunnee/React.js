import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// 설명
import App from './App';
import reportWebVitals from './reportWebVitals';
// 컬러리스트 실습 1
import Ex01 from './Ex01';

// 실습 2
import Ex02 from './Ex02';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <App />
    // <Ex01/>
    // <Ex02/>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
