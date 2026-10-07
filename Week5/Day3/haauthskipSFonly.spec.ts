import {expect, test} from '@playwright/test'

test.describe.serial('Test to read the annotations in the test', () => {
    test.use({
    storageState: 'Utils/sf_login.json'
})
test.only('To run this test only once', async ({page}) => {
    await page.goto('https://orgfarm-e97d4fc8c2-dev-ed.develop.lightning.force.com/lightning/page/home')
    console.log(page.url());
    console.log(await page.title());
    
})
})
