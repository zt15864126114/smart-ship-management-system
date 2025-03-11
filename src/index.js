import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import './index.css';
import App from './App';

// 根据环境判断是否需要添加basename
const basename = process.env.NODE_ENV === 'production' 
  ? '/smart-ship-management-system'
  : '';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter basename={basename}>
      <App />
    </HashRouter>
  </React.StrictMode>
); 