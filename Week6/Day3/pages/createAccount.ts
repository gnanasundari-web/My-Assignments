import { clickonAccount } from "./account";
import {expect} from '@playwright/test'

export class createAccount extends clickonAccount
{
    async accountCreation()
    {
        await this.page.locator('#accountName').fill("Example Program")
        await this.page.locator('.smallSubmit').click()
        let title=await this.page.locator("//div[@id='sectionHeaderTitle_accounts']").innerText()
        console.log(title);
        expect(title).toBe("Account Details")
        
    }

}