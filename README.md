# learn day01
1. 学习 react 的组件化 css
2. ... 代表展开运算符,如果 list 中有内容，则可以将该 list 中的内容直接全部展示出来
3. 在需要绑定声明的组件到标签上时，使用 bind() 方法
4. 在 react 中遍历集合时，需要给定遍历出来的标签唯一的 key 值，否则浏览器 console 控制台会出现警告：Warning: Each child in a list should have a unique "key" prop.
# learn day02
5. 对构造方法中声明的数据进行拷贝 const list = [...this.state.list];
6. 在对 state 中的集合进行修改时，不建议直接操作 state 中的集合，而是 const 拷贝出一个集合的副本进行操作，这样待办的可调式性和性能都是最优的
7. MyApp.js 中的 js 语法，属于 es6 的语法
8. react 中存在 “父子” 组件，父组件通过属性的形式向子组件传递参数。子组件通过 props 接受父组件传递过来的参数