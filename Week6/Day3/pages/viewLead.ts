import {expect} from "@playwright/test"
import { CreateLead } from "./createLead";


export class ViewLead extends CreateLead{

async verifyLead(){


let firstName=await this.page.locator('[id="viewLead_firstName_sp"]').innerText()
console.log(firstName)

//Non-retry assertion

expect(firstName).toBe('Naveen')


//retry assertion


//exact match
await expect(this.page.locator('[id="viewLead_firstName_sp"]')).toHaveText('Naveen')

//partial match
await expect(this.page.locator('[id="viewLead_firstName_sp"]')).toContainText('Naveen')

}


}