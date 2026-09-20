type payment = "UPI" | "CreditCard" |"PayPal" //union datatype to define the payment methods

function makePayment(paymentMethod: payment) :void
{
    if(paymentMethod === "UPI")
    {
        console.log("Payment is made using UPI")
    }
    else if(paymentMethod === "CreditCard")
    {
        console.log("Payment is made using CreditCard")
    }
    else
    {
        console.log("Invalid payment method")
    }
}

makePayment("UPI") //calling the function with UPI as payment method
makePayment("CreditCard") //calling the function with CreditCard as payment method
makePayment("PayPal") //calling the function with PayPal as payment method