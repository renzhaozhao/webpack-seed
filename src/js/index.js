require('../less/index.less');
var com = require("./lib/com");

document.body.appendChild(com());


console.log('这是首页');

import Person from './lib/person';

let person = new Person('张三', 20);
document.write(person.say());

function* helloWorldGenerator() {
  yield 'hello';
  yield 'world';
  return 'ending';
}

var hw = helloWorldGenerator();

console.log(hw.next());
