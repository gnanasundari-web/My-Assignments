import { Login } from "./sf_login";

export class HomePage extends Login
{
    async clickViewall()
    {
        await this.page.locator("//div[@class='slds-icon-waffle']").click()
        await this.page.locator("//button[@aria-label='View All Applications']").click()
    }

    async clickLeads(linkname:string)
    {
        await this.page.locator("//input[@placeholder='Search apps or items...']").fill(linkname)
        await this.page.press("//input[@placeholder='Search apps or items...']","Enter")
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.locator("//a[@href='/lightning/o/Lead/home']//mark").click()
        const title=await this.page.title();
        console.log(title);   
    }
}