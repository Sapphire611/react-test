/*
 * @Author: Sapphire Liu
 * @Date: 2022-09-16 15:00:11
 * @LastEditors: Sapphire Liu
 * @LastEditTime: 2022-09-30 16:59:23
 * @Description: index.js...
 */

import React from "react"; // 框架核心
import ReactDOM from "react-dom"; // DOM渲染
import "./index.css"; // 全局样式文件
import App from "./App"; // 引入根组件

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // 严格节点模式需要去掉，这会影响到useEffect的执行时机
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
); // 渲染根组件App到一个id为root到节点上
