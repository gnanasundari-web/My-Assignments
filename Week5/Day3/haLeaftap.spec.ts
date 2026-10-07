import {expect, test} from '@playwright/test'

test.describe.serial('Test to read the annotations in the test', () => {
test('Test to verify fail in the test', async ({page}) => {
    test.fail(true, 'This test is expected to fail for invalid login credentials');
    await page.goto('https://leaftaps.com/opentaps/control/main')
    await page.locator("#username").fill("demosalesmanager")
    await page.locator("#password").fill("testpassword")
    await page.locator(".decorativeSubmit").click()   
    await page.getByRole("link", {name: 'CRM/SFA'}).click({timeout:3000});
})

test('Test to verify Fixme in the test', async ({page}) => {
test.fixme(true, "Known Issue")
    await page.goto('https://leaftaps.com/opentaps/control/main')
    await page.locator("#username").fill("demosalesmanager")
    await page.locator("#password").fill("crmsfa")
    await page.locator(".decorativeSubmit").click()

    //Clicking on CRM link
    await page.getByRole("link", {name: 'CRM/SFA'}).click();

    //Click Leads
    await page.getByRole("link", {name: 'Leads'}).click();

    let pagename=await page.locator("//div[@class='x-panel-header sectionHeaderTitle']").textContent();
    expect(pagename).toBe("New Leads");
})

test('Test to verify skip in the test', async ({page}) => {
    test.skip(true, "Skipping the test for now");
    await page.goto('https://leaftaps.com/opentaps/control/main')
    await page.locator("#username").fill("demosalesmanager")
    await page.locator("#password").fill("crmsfa")
    await page.locator(".decorativeSubmit").click()

    //Clicking on CRM link
    await page.getByRole("link", {name: 'CRM/SFA'}).click();

    //Click Leads
    await page.locator("//a[contains(text(),'Upload Leads')]").click()
})
})