var sum = 0;

function multiple3and5(number) {
    for (var count = 0; count < number; count++) {
        if (count % 3 === 0 || count % 5 === 0) {
            sum += count;
        } else {}
    }
    return sum;
}

console.log(multiple3and5(1000));