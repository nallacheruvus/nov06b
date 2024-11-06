function fa() {
    console.log("This is a function");
}
fa();
//regular 
function first() {
    return Math.sqrt(2);
}
console.log(first());
//Anonymous function
const sec = function () {
    return Math.sqrt(2);
}
console.log(sec());
//Arrow fn
const third = () => {
    return Math.sqrt(2);
}
console.log(third());
function afun(a) {
    return Math.log(a);
}
const bfun = function (a) {
    return Math.log(a);
}
const cfun = (a) => {
    return Math.log(a);
}
console.log(afun(10));
console.log(bfun(10));
console.log(cfun(10));
//Currying function
//Arrow syntax
const myFun = (a) => {
    return (b) => {
        return (c) => {
            return a * b * c;
        }
    }
}
// const aa = myFun(1);
// for (let i = 0; i < 1000; i++) {
//     console.log("****" + i);
// }
// const bb = aa(2);
// for (let i = 0; i < 1000; i++) {
//     console.log("^^^^^" + i);
// }
// const cc = bb(3);
// console.log(cc);
//Anonymous syntax
const aFun = function (l) {
    return function (b) {
        return function (h) {
            return l * b * h;
        }
    }
}
// const aa1 = aFun(1);
// for (let i = 0; i < 1000; i++) {
//     console.log("^^^^^" + i);
// }
// const bb1 = aa1(2);
// for (let i = 0; i < 1000; i++) {
//     console.log("((((^|^))))" + i);
// }
// const cc1 = bb1(3);
// console.log(cc1);
const pp = aFun(2)(4)(8);
console.log(pp);
