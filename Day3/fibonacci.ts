function fibonacci(n: number) {
  let a:number=0, b:number=1,c: number=0
  if(n <= 0) //check for negative numbers and zero
  {
    return "Number should be greater than 1";
  }
  else{  
    for(let i=1;i<=n;i++){ //loop to calculate fibonacci series

        c = a+b;        
        a=b;       
        b=c; //update values of a and b
        
    }
    return c;
}
}
console.log(fibonacci(15));
console.log(fibonacci(3));
console.log(fibonacci(-4));
console.log(fibonacci(0));