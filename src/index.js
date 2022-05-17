import React from 'react'
import ReactDOM from 'react-dom/client'
// 导入history
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom'
import { history } from '@/utils'
import App from './App'
// 引入自己写的样式
import '@/assets/index.scss'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <HistoryRouter history={history}>
    <App />
  </HistoryRouter>
  // </React.StrictMode>
);