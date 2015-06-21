var pnum1 = 1;
var pnum2 = 0;

var fib = pnum1 + pnum2;

var sum = 0;

function fibFind(limit) {
    while (fib < limit) {
        if (fib % 2 === 0) {
            sum += fib;
        }
        pnum2 = pnum1;
        pnum1 = fib;
        fib = pnum1 + pnum2;
    }
}

fibFind(4000000);
console.log(sum);