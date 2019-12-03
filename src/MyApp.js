import React from 'react';
// import logo from './logo.svg';
// import './App.css';

class MyApp extends React.Component {

  //构造函数
  constructor(props){
    super(props);
    this.state = {
      list: [
        'learn react',
        'learn englist',
        'learn vue'
      ]
    }
  }

  handlerBtnClick () {
    this.setState({
      // ... 展开运算符,在这里指：'learn react','learn englist','learn vue'
      list: [...this.state.list,'hello world']
    })
  }

  render() {
    return (
      <div>
        <div>
          <input />
          {/* bind(this)：将当前组件绑定到 button 标签上 */}
          <button onClick={this.handlerBtnClick.bind(this)}>add</button>
        </div>
        <ul>
          { this.state.list.map((item) => {
            return <li>{item}</li>
          })}
        </ul>
      </div>
    );
  }
}

export default MyApp;
