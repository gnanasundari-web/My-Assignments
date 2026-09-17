import {test, chromium } from "@playwright/test";

test("Edit Individual",async() => {
    const browser=await chromium.launch({headless: false})
    const context=await browser.newContext()
    const page=await context.newPage()

    //Logging into Salesforce with provided credentials
    await page.goto("https://login.salesforce.com/")
    await page.locator("#username").fill("dilipkumar.rajendran@testleaf.com");
    await page.locator("#Login").click();
    await page.locator("#password").fill("TestLeaf@2025");
    await page.locator("#Login").click();

    //Clicking on icon in the left top
    await page.locator("//div[@class='slds-icon-waffle']").click();
   
    //Clicking on View All
    await page.locator("//button[@aria-label='View All Applications']").highlight();
    await page.locator("//button[@aria-label='View All Applications']").click();
   
    //Click on Sales  and move to Leads tab
    await page.locator("//p[text()='Sales']").click();
     await page.locator("//a[@title='Leads']/span").highlight();
    await page.locator("//a[@title='Leads']/span").click();

    //Create a new Lead, Enter Salutation, Last name and Company name
    await page.locator("//div[@title='New']").click(); 
    await page.locator("//button[@aria-label='Salutation']").click();
    await page.getByText('Mr.', {exact: true}).click();

    await page.locator("//input[@name='lastName']").fill("SaravanaKumar");    
    await page.locator("//input[@name='Company']").fill("TestLeaf");
    
    //Click on Save
    await page.locator("//li//button[text()='Save']").click();

    //Get the title of the created Lead
    const title=await page.locator("//div[@class='entityNameTitle slds-line-height--reset']/../slot/lightning-formatted-name").textContent();
    console.log(title);
})