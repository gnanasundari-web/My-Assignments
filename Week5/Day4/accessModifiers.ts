export class Calculator
{
    public a=5;
    public b=10;
    private c=15;
    protected d=20;  

public add()
{
    console.log("Addition method",this.a+this.b);
}
private sub()
{
    console.log("Subtraction method",this.c-this.b);
}
protected mul()
{
    console.log("Multiplication method",this.a*this.b);       
}
public get callsub(){
   return this.sub();

}
}

let obj=new Calculator();
obj.add();
console.log(obj.b)
console.log(obj.a)
console.log(obj.callsub)