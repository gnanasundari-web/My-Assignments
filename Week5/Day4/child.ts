import {Calculator} from "./accessModifiers"
class Two extends Calculator{

public multi()
{
    console.log(this.d);
    this.mul()
}
}

let obj2=new Two();
obj2.multi();   
