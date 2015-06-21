function largestprime(number) {
    var largest = 0;
    for (var i = 0; i < number; i++) {
        if (number % i === 0) {
            largest = i;
        }
    }
    return largest;
}

largestprime(9873);