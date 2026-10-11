import { chromium,Page,Browser } from "@playwright/test"

export class Login{

    page: Page


    constructor(sfpage:Page)
    {
        this.page=sfpage
    }

    async loadUrl(url:string){

    await this.page.goto(url, {waitUntil: "domcontentloaded"})

   } 

   async loginintoSF(username:string,password:string){

    await this.page.locator('#username').fill(username)
    await this.page.locator('#Login').click()
    await this.page.locator('#password').fill(password)
    await this.page.locator('#Login').click()
    await this.page.waitForTimeout(10000)
    }
}