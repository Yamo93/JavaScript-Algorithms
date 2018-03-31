function factorialize (num) {
    let sum = 1;

    for (let i = 2; i<=num; i++) {
        sum *= i;
    }

    return sum;
}

console.log(factorialize(5));
console.log(factorialize(4));
console.log(factorialize(0));
console.log(factorialize(10));