import { WelcomePage } from "./welcome";

export class HomePage extends WelcomePage{


    async clickonLeadsButton(){

        await this.page.locator('//a[text()="Leads"]').click()


    }
}