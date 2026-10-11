export abstract class BasePage{
    waitForPageLoad()
    {
        console.log("Wait until the page loads completely");
        
    }

    getPageTitle() 
    {
        console.log("Title of the page");
        
    }
}