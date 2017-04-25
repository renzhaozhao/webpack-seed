import Person from './lib/person';

let p = new Person('张三', 20);
console.log(p.say());


function* helloWorldGenerator() {
    yield 'hello';
    yield 'world';
    return 'ending';
}

var hw = helloWorldGenerator();

console.log(hw.next());
console.log(hw.next());
