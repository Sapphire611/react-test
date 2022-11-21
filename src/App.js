/*
 * @Author: Sapphire Liu
 * @Date: 2022-09-16 15:00:11
 * @LastEditors: Sapphire Liu
 * @LastEditTime: 2022-11-21 16:45:59
 * @Description: App.js...
 */

import React from 'react'

// function HelloFn() {
//   // 定义事件回调函数
//   const clickHandler = (e, msg) => {
//     // e.preventDefault();
//     console.log('事件被触发了' + msg)
//     console.log(e);
//   }
//   return (
//     // 绑定事件
//     <button onClick={(e) => clickHandler(e, 'I am Sapphire611')}>click me!</button>
//     // <div><a href='https://www.baidu.com' onClick={clickHandler}>www.baidu.com</a></div>
//   )
// }

/**
 * @description: TestComponent
 * @return {*}
 */
class TestComponent extends React.Component {
  state = {
    name: 'test1',
    count: 0,
  }

  // 箭头函数的this默认指向父级，普通function函数需要指定this
  // 箭头函数永远指向父作用域，this指向是固定的，普通函数的this指向是可变的，指向调用塔的对象
  changeName = () => {
    this.setState({ name: 'test22222' }); // 不允许直接赋值修改
  }

  changeCount = () => {
    this.setState({ count: this.state.count + 1 }); // 不允许直接赋值修改
  }

  render() {
    return (
      <div>
        &nbsp;&nbsp;I am TestComponent~ State.name = {this.state.name}
        &nbsp;&nbsp;<button onClick={this.changeName}>changeName</button>
        &nbsp;&nbsp;<button onClick={this.changeCount}>Count = {this.state.count}</button>
      </div>
    )
  }
}

function App() {
  return (
    <div className="App">
      <span style={{ color: 'red' }}>&nbsp;&nbsp;What??</span>
      <TestComponent />
    </div>
  );
}

export default App;
