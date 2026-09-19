import {chromium, test} from "@playwright/test"

test('learn to launch the browser',async() => {
    const browser= await chromium.launch({headless:false})
    const context=await browser.newContext()
    const page=await context.newPage()
    
     //Logging into leaftaps with provided credentials
    await page.goto("http://leaftaps.com/opentaps/control/main");
    await page.locator('#username').fill('democsr2');  
    await page.locator('#password').fill('crmsfa');
    await page.locator('.decorativeSubmit').click();  

    await page.waitForLoadState("domcontentloaded")

    await page.context().storageState({path: 'Data/leaftaplogin.json'});

    
})
