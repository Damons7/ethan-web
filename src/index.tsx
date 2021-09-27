import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import reportWebVitals from './reportWebVitals';
import { isMobile } from '@/utils'
import Error from '@/pages/Error'
import { MusicCard } from '@/components/Music/MusicCard'
import './assets/common.less'

ReactDOM.render(
  <React.StrictMode>
    {
      isMobile() ?
        // <Error err={'该开发师有点菜，移动端没时间兼容，去趟PC端访问吧，你忍一下'} />
        <MusicCard />
        :
        <App />
    }
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
