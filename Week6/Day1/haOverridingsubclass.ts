import { BasePage } from "./haOverridingParent";    //Importing parent class in child class

class LoginPage extends BasePage  

{
    performCommonTasks()
    {
        console.log("Delete the entered text and enter new text");
        super.performCommonTasks()  //Calling the performCommonTasks of Parent class
        
    }
}

let loginobj=new LoginPage()  //Creating object for child class
loginobj.clickElement()
loginobj.enterText()
loginobj.findElement()
loginobj.performCommonTasks()