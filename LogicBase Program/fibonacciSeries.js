/*
    [0, 1, 1, 2, 3, 5]
    0 1
    0+1=1
    1+1=2
    1+2=3
    2+3=5
*/

function fibonacci(term) {
    let fibonacciSeries = [0, 1];
    for (let i = 2; i < term; i++) {
        fibonacciSeries[i] = fibonacciSeries[i -1] + fibonacciSeries[i - 2];
    }
    return fibonacciSeries
}

let term = 10;
let fibonacciSeries = fibonacci(10);

console.log(`Fibonacci Series up to ${term} terms: ${fibonacciSeries.join(', ')}`);