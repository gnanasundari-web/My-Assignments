import { test, expect } from "@playwright/test"

// test.use(
//     {
//         storageState: 'Data/leaftaplogin.json'
//     }
// )

test("Window Handling", async ({ page, context }) => {

    page.on('dialog', async (alert) => {

        alert.accept()

    })

    await page.goto("http://leaftaps.com/opentaps/control/main")
    //logging into Leaftaps
    await page.locator('#username').fill('demosalesmanager');
    await page.locator('#password').fill('crmsfa');
    await page.locator('.decorativeSubmit').click();

    //Clicking on CRM link
    await page.getByRole("link", { name: 'CRM/SFA' }).click();

    //Click Leads
    await page.getByRole("link", { name: 'Leads' }).click();

    //Click Merge Leads
    await page.getByRole("link", { name: 'Merge Leads' }).click();

    //Event Listener for From Lead
    let childpage1promise = context.waitForEvent("page")

    //Click on From Lead selector
    await page.locator("(//img[@alt='Lookup'])[1]").click({ timeout: 5000 })

    //Resolve the promise, Search for the lead and click on the result
    let childpage1 = await childpage1promise
    let leadsnum1 = '10128'
    await childpage1.getByRole("textbox", { name: 'Lead ID' }).fill(leadsnum1)
    await childpage1.locator("//button[text()='Find Leads']").click()
    await childpage1.locator("//td[@class='x-grid3-col x-grid3-cell x-grid3-td-partyId x-grid3-cell-first ']//a[@class='linktext']").first().click()
    
    //Bring the control back to Parent window
    await page.bringToFront()

    //Event Listener for To Lead
    let childpage2promise = context.waitForEvent("page")

    //Click on To Lead selector
    await page.locator("(//img[@alt='Lookup'])[2]").click({ timeout: 5000 })

    //Resolve the promise, Search for the lead and click on the result
    let childpage2 = await childpage2promise
    let leadsnum2 = '10129';
    await childpage2.getByRole("textbox", { name: 'Lead ID' }).fill(leadsnum2)
    await childpage2.locator("//button[text()='Find Leads']").click()
    await childpage2.locator("//td[@class='x-grid3-col x-grid3-cell x-grid3-td-partyId x-grid3-cell-first ']//a[@class='linktext']").first().click()

    //Bring the control back to Parent window
    await page.bringToFront()

    //Click Merge
    await page.locator("//a[text()='Merge']").click()

    //Verify the title
    await page.waitForLoadState("domcontentloaded")
    let title = await page.title()
    console.log(title);
    expect(title).toBe("View Lead | opentaps CRM");
})