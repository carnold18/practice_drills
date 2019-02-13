// Q1 - What is this called?
(function () {
    a = 2;
    console.log('hello')
})
// A1 - function expression



// Q2 - What is this called?
(function () {
    a = 2;
    console.log('hello')
})()
// A2 - immediately invoked function expression / IIFE



// Q3 - What does this represent?
var a = 1;
(function () {
    a = 2;
    console.log('hello')
})()
// A3 - a closure



//Q4 - What will each of the following lines output?
console.log(
    "1" === 1,
    1 === 1, 
    "1" == 1, 
    "1" === "1" 
)
//A4 - false, true, true, true



//Q5 - What will this output when invoked?
const x = () => {
    console.log(this.do)
}
this.do = 'hello'
x()
//A5 - 'hello'



//Q6 - What will this output when invoked?
const x = function() {
    console.log(this.do)
}
this.do = 'hello'
x()
//A6 - undefined



//Q7 - Write an example of a promise
const queue = new Promise.resolve({});
for (i...100){
    queue = queue.then(processRecord(i))
}
queue = queue.then(console.log('done'));

new Promise((resolve, reject) =>{
    fs.readFile(fileName, function (err, data) => {
        if(err) reject(err)
        resolve(data)
    })
}).then().error()



//Q8 - What is the following line of code doing?
const x = { ...obj1, ...obj2 };
Object.prototype.assign = function (...arg) {
    console.log(arg);
}
console.log(Object.assign({}, {}, {}));
//A8 - merging obj1 and obj2 into a new object, x

