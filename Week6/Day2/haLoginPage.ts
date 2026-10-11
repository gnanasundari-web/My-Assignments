import { BasePage } from "./haAbstractClass";
import { PageRules } from "./haInterface";

class LoginPage extends BasePage implements PageRules
{
    verifyPage()
    {
        console.log("Login Page Verified");
        
    }
    enterUsername() 
    {   console.log("Username entered");
    

    }
    enterPassword() 
    {
        console.log("Password entered");

    }    
    clickLogin() {
        console.log("Login Button is clicked");
        
    }

}

let lp=new LoginPage()
lp.waitForPageLoad()
lp.verifyPage()
lp.enterUsername()
lp.enterPassword()
lp.clickLogin()
lp.getPageTitle()