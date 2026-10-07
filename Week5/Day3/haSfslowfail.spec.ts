import { expect, test } from '@playwright/test'

test.describe.serial('Test to read the annotations in the test', () => {
    //set the storage state for all the tests in this describe block
    test.use({
        storageState: 'Utils/sf_login.json'
    })
    // This test is expected to be slow, as we are waiting for 80 seconds in the test.
    test('To run for test.slow', async ({ page }) => {
        test.slow(true, 'This test is expected to be slow');
        await page.goto('https://orgfarm-e97d4fc8c2-dev-ed.develop.lightning.force.com/lightning/page/home')
        await page.locator("//a[@href='/lightning/o/Lead/home']").click()
    })

    // This test is expected to fail, as we are asserting the wrong title of the page. 
    test('To run for test.fail', async ({ page }) => {
        test.fail(true, 'This test is expected to fail');
        await page.goto('https://orgfarm-e97d4fc8c2-dev-ed.develop.lightning.force.com/lightning/page/home')
        let title = await page.title()
        console.log(title);
        expect(title).toBe('Salesforce - Limited Edition')
    })
})
