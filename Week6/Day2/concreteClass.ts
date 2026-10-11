import { PaymentMethod } from "./interfacePaymentMethod";
class UPI implements PaymentMethod
{
    pay(amount: number): void 
    {
        console.log(`Paid ${amount} using UPI`);
    }
}

class CreditCard implements PaymentMethod
{
    pay(amount: number): void 
    {
        console.log(`Paid ${amount} using Credit card`);
    }
}

class NetBanking implements PaymentMethod
{
    pay(amount: number): void 
    {
        console.log(`Paid ${amount} using NetBanking`);
    }
}

let objupi=new UPI()
let objcc=new CreditCard()
let objnb=new NetBanking()
objcc.pay(12900)
objupi.pay(9000)
objnb.pay(2300.90)