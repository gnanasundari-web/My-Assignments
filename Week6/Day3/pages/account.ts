import { ClickonAccountlink } from "./clickAccount";

export class clickonAccount extends ClickonAccountlink
{

    async clickonCreateAccount()
    {
        await this.page.locator("//a[text()='Create Account']").click()    
    }
}