const myFunc = () => console.log('output displayed in 0 time');
const timerId1=setTimeout(myFunc,1000);// myFunc is executed after executing below code.
const myFunc1= (par1,par2) => {
console.log(par1 + par2 +' . rocks');
};
setTimeout(myFunc1,5*1000,'Raghu ','is great');
// more code
const timerId2= setImmediate(myFunc,0);
console.log('output displayed in 4sec time');
clearImmediate(timerId2);
const timerId3= setInterval(myFunc,5000);
console.log('output displayed in 5sec time');
clearInterval(timerId3);
clearTimeout(timerId1);