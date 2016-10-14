import './index.less';
import React from 'react';
import ReactDOM from 'react-dom';
import Person from './lib/person';

let p = new Person('张三', 20);
console.log(p.say());

var Hello = React.createClass({
    render: function render() {
        return <div> Hello {this.props.name}111 </div>;
    }
});
ReactDOM.render(<Hello name="World"/> , document.getElementById('AppRoot'));

function* helloWorldGenerator() {
  yield 'hello';
  yield 'world';
  return 'ending';
}

var hw = helloWorldGenerator();

console.log(hw.next());
