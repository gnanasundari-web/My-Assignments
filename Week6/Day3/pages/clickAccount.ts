import { WelcomePage } from "./welcome";   

export class ClickonAccountlink extends WelcomePage
{
    async clickAccountLink()
    {
        await this.page.locator("//a[text()='Accounts']").click()       
    }
}