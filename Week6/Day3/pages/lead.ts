import { HomePage } from "./home";


export class LeadPage extends HomePage {


async clickonCreateLeadButton(){

await this.page.locator('//a[text()="Create Lead"]').click()

}

}