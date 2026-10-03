import { BankAccount } from "./bankAccount";

class BankAccountChild extends BankAccount {        //creating a child class that extends the parent class

    public displayBalance() {
        console.log("Balance is: ", this.balance);   //accessing the protected property from the parent class
    }
}

let accChild = new BankAccountChild();  //creating an object of the child class
accChild.deposit(5000);                 //depositing an amount to the balance using the public method from the parent class
accChild.displayBalance();              //displaying the balance using the public method from the child class
accChild.withdraw(2000);                //withdrawing an amount from the balance using the public method from the parent class
accChild.displayBalance();              //displaying the balance using the public method from the child class