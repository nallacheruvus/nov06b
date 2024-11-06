//IIFE=Immediately Instantiable Function Expression
(
    function (a) {
        console.log("Self calling function with param " + a);
    }
)(1001);
(
    function (b) {
        console.log("The value sent by inner one is " + b);
    }
)((function (a, b) {
    return Math.sqrt(a + b);
})(21, 22));

const aa = (function (a) {
    return Math.log(a);
})(70);
console.log("Printing the logarithm of 70 ", aa);
