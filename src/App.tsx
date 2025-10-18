import React, { useState } from 'react';
import './App.css';
import { NavBar } from './views/navBar';
import { 抢票任务表单 } from './views/抢票任务表单';
import { 抢票任务列表 } from './views/抢票任务列表';
import { 抢票任务配置 } from './views/抢票任务配置';
import { 抢票任务日志 } from './views/抢票任务日志';
import { 页面类型 as 页面类型枚举 } from './types/页面类型';

function App() {
  const [当前页面, set当前页面] = useState(页面类型枚举.抢票任务表单);
  function 切换页面(页面类型: 页面类型枚举) {
    set当前页面(页面类型);
  }
  return (
    <div className="App">
      <NavBar 切换页面={切换页面} 当前页面={当前页面} />
      {当前页面 === 页面类型枚举.抢票任务表单 && <抢票任务表单 />}
      {当前页面 === 页面类型枚举.抢票任务列表 && <抢票任务列表 />}
      {当前页面 === 页面类型枚举.抢票任务配置 && <抢票任务配置 />}
      {当前页面 === 页面类型枚举.抢票任务日志 && <抢票任务日志 />}
    </div>
  );
}

export default App;
