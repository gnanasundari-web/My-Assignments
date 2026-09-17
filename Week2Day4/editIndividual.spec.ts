import {test, chromium } from "@playwright/test";

test("Create Lead",async() => {
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

    //Search for the created name
    await page.locator("//input[@aria-label='Search this list...']").fill("Gugan");
    await page.locator("//input[@aria-label='Search this list...']").press("Enter");
    await page.waitForTimeout(10000);
    //Click on dropdown key
    await page.locator("//td[@data-col-key-value='6-lstListViewRowLevelAction-6']").isVisible();
    await page.locator("//td[@data-col-key-value='6-lstListViewRowLevelAction-6']").highlight();
    await page.locator("//td[@data-col-key-value='6-lstListViewRowLevelAction-6']").click();

    //click on Edit
    await page.locator("//a[@title='Edit']").scrollIntoViewIfNeeded();
    await page.locator("//a[@title='Edit']").click();

    //Change the Salutation value
    await page.locator("//div[@class='salutation compoundTLRadius compoundTRRadius compoundBorderBottom form-element__row uiMenu']//span").click();
    await page.getByText('Mr.', {exact: true}).click();

    //Enter the First Name
    await page.locator("//input[@placeholder='First Name']").fill("SG");

    //Click on Save
    await page.locator("//span[text()='Save']").click();

    //Validate the updated name
    const updatedtitle=await page.locator("//th[@data-label='Name']//span//span").textContent();
    console.log(updatedtitle);
})