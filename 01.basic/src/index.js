import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// JSX 문법 및 특징 정리
import App from './App';
import reportWebVitals from './reportWebVitals';
// JSX문법을 활용한 실습
import AppSample from './AppSample';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <AppSample />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
