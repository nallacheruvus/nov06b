//HOF=Higher Order Functions
//Composition
function addOne(a) {
    return a + 1;
}
function applyTwice(f, a) {
    return f(f(a));
}
console.log(applyTwice(addOne, 1));
function a(a) {
    return a * a;
}
function b(a) {
    return a + 1;
}
function applyBoth(f, g, h) {
    return f(g(h));
}
console.log(applyBoth(b, a, 2));
