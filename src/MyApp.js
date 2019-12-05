import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import TodoItem from './TodoItem'

class MyApp extends React.Component {

  //构造函数
  constructor(props){
    super(props);
    this.state = {
      list: [
        // 'learn react',
        // 'learn englist',
        // 'learn vue'
      ],
      inputValue: ''
    }
  }

  handlerBtnClick () {
    this.setState({
      // ... 展开运算符,在这里指：'learn react','learn englist','learn vue'
      list: [...this.state.list,this.state.inputValue],
      inputValue: ''
    })
  }

  handlerInputChange (e) {
    this.setState ({
      inputValue: e.target.value
    })
  }

  handlerItemClick (index) {
    const list = [...this.state.list];
    // 根据索引移除集合中的数据
    list.splice(index,1);
    // 将更新后的集合，重新赋值给原始集合
    this.setState({
      list: list
    })
  }

  render() {
    return (
      <div>
        <div>
          <input value={this.state.inputValue} onChange={this.handlerInputChange.bind(this)}/>
          {/* bind(this)：将当前组件绑定到 button 标签上 */}
          <button onClick={this.handlerBtnClick.bind(this)}>add</button>
        </div>
        <ul>
          { this.state.list.map((item,index) => {
            return <TodoItem onClick={this.handlerItemClick.bind(this,index)} key={index} content={item} />
            // return <li onClick={this.handlerItemClick.bind(this,index)} key={index}>{item}</li>
          })}
        </ul>
      </div>
    );
  }
}

export default MyApp;
