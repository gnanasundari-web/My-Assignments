function factorial(fn: number) {
    let factorial: number=1;
    if (fn <= 0){
        return "Number should be greater than 0";
    }
    else{
        for (let i=1; i<=fn; i++){
            factorial = factorial*i;
        }
        return factorial;
    }
}
console.log(factorial(12));
console.log(factorial(2));
console.log(factorial(-5));
console.log(factorial(0));