import {test, chromium } from "@playwright/test";

test("Create Individual",async() => {
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
   
    //Click on Individuals link
    await page.locator("//p[text()='Individuals']").scrollIntoViewIfNeeded();
    await page.locator("//p[text()='Individuals']").click();
    
    //Create a new Lead, Enter Salutations and Last name
    await page.locator("//a[@title='New']").click(); 

    await page.locator("//div[@class='salutation compoundTLRadius compoundTRRadius compoundBorderBottom form-element__row uiMenu']//span").click();
    await page.getByText('Ms.', {exact: true}).click();

    await page.locator("//input[@placeholder='Last Name']").fill("Gugan");    
        
    //Click on Save
    await page.locator("//span[text()='Save']").click();

    //Get the title of the created Individuals
    const title=await page.locator("//div[text()='Individual']/..//span[@class='uiOutputText']").textContent();
    console.log(title);
})