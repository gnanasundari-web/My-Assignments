import { HomePage } from "./sf_home";
import {expect} from '@playwright/test'

export class CreateLead extends HomePage
{
    async clickNew()
    {
        await this.page.locator("//button[@name='New']").click()
    }

    async enterDataandCreate(lname:string,cname:string)
    {
        await this.page.locator("//input[@name='lastName']").fill(lname)
        await this.page.locator("//input[@name='Company']").fill(cname)
        await this.page.locator("//button[@name='SaveEdit']").click()
        let leadname=await this.page.locator("//div[@class='entityNameTitle slds-line-height--reset']/following-sibling::h1//lightning-formatted-name").innerText()
        console.log(leadname);
        expect(leadname).toBe(lname)
    }
}