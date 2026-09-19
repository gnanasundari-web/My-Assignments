"use strict";
function fibonacci(n) {
    let a = 0, b = 1, c = 0;
    if (n <= 0) {
        return "Number should be greater than 1";
    }
    else {
        for (let i = 1; i <= n; i++) {
            c = a + b;
            a = b;
            b = c;
        }
        return c;
    }
}
console.log(fibonacci(15));
console.log(fibonacci(3));
console.log(fibonacci(-4));
console.log(fibonacci(0));
