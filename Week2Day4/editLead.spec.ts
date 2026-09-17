import {chromium, test} from "@playwright/test"

test('Edit Lead',async() => {
    const browser= await chromium.launch({headless:false})
    const context=await browser.newContext()
    const page=await context.newPage()
    
    //Logging into leaftaps with provided credentials
    await page.goto("http://leaftaps.com/opentaps/control/main");
    await page.locator('#username').fill('democsr2');  
    await page.locator('#password').fill('crmsfa');
    await page.locator('.decorativeSubmit').click();  
    
    //clicking on CRM/SFA link
    await page.getByText('CRM/SFA ').click();

    //Clicking on Leads tab
    await page.locator('a[href="/crmsfa/control/leadsMain"]').click();
    await page.waitForTimeout(5000);
    
    //Clicking on Create Lead
    await page.locator('a[href="/crmsfa/control/createLeadForm"]').click();

    //Entering Company name, First name and Last name
    await page.locator('input[name="companyName"]').fill("Test Leaf");
    await page.locator('#createLeadForm_firstName').fill('Gnana Sundari');
    await page.locator('#createLeadForm_lastName').fill('Parama Sivam');   

    //Clicking on Create Lead button
    await page.locator('.smallSubmit').click();

    //Clicking on Edit button, Updating the company name and clicking on Update
    await page.locator("//a[text()='Edit']").click();
    await page.locator("input[name='companyName']").fill("VM Company");
    await page.locator("//input[@value='Update']").click();
}
)