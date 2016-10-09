require('../less/index.less');
var com = require("./lib/com.js");

document.body.appendChild(com());


console.log('这是首页');

import Person from './lib/person.js';


let p = new Person('张三', 20);
document.write(p.say());
