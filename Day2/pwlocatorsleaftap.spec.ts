import {test} from "@playwright/test";

test('Creating Lead using playwright locators', async ({page}) => {

    await page.goto("http://leaftaps.com/opentaps/control/main");

    //Logging into Leaftaps 
    await page.getByLabel("Username").fill("Demosalesmanager");
    await page.getByLabel("Password").fill("crmsfa");

    await page.getByRole("button").click();
    
    //Clicking on CRM link
    await page.getByRole("link", {name: 'CRM/SFA'}).click();

    //Click Leads
    await page.getByRole("link", {name: 'Leads'}).click();

    //Click Create Lead
    await page.getByRole("link", {name: 'Create Lead'}).click();

    //Enter the data for fields
    await page.locator("#createLeadForm_firstName").fill("Mahima");
    await page.locator("#createLeadForm_lastName").fill("Saravanakumar");
    await page.locator("#createLeadForm_companyName").fill("TestLeaf");
    await page.locator('#createLeadForm_personalTitle').fill("Ms.");
    await page.locator('#createLeadForm_generalProfTitle').fill("QA");
    await page.locator('#createLeadForm_annualRevenue').fill("120000");
    await page.locator('#createLeadForm_departmentName').fill("Testing");
    await page.locator('#createLeadForm_primaryPhoneNumber').fill("9876578965");

    //Click on Create Lead
    await page.locator('.smallSubmit').click();    
})