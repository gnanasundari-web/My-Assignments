import { LeadPage } from "./lead";


export class CreateLead extends LeadPage{

async enterManditoryFields(){

await this.page.locator('[id="createLeadForm_companyName"]').fill('Infosys')

await this.page.locator('[id="createLeadForm_firstName"]').fill('Naveen')

await this.page.locator('input[id="createLeadForm_lastName"]').fill('Kumar')

}

async clickonCreateLeadSubmitButton(){

await this.page.locator('.smallSubmit').click()
}


    
}