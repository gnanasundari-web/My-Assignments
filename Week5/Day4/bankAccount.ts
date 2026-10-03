export class BankAccount {
    public accountNumber = '5897878787090' //public access modifier can be accessed anywhere
    private accountHolder = 'John Doe' //private access modifier can be accessed only within the class
    protected balance = 10000 //protected access modifier can be accessed within the class and its subclasses


    public deposit(amount: number) {
        this.balance = this.balance + amount; //adding the amount to the balance
    }

    public withdraw(amount: number) {
        this.balance = this.balance - amount;    //subtracting the amount from the balance       
    }

    public get userDisplay() {
        return this.accountHolder;
    }

    public set userUpdate(name: string) {
        this.accountHolder = name;            //updating the account holder name
    }
}

let acc = new BankAccount();      //creating an object of the class
console.log(acc.accountNumber)  //accessing the public property
console.log(acc.userDisplay)    //accessing the public getter method
acc.userUpdate = 'Killer'         //updating the account holder name using the public setter method
console.log(acc.userDisplay)    //accessing the public getter method to display the updated name