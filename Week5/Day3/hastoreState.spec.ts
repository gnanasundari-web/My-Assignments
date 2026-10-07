import {test} from '@playwright/test'

test('Test to read the annotations in the test', async ({page}) => {

    await page.goto('https://orgfarm-e97d4fc8c2-dev-ed.develop.my.salesforce.com/')
    await page.locator("#username").fill("gnanasundari.92.56583c9197c1@agentforce.com")
    await page.locator("#Login").click()
    await page.locator("#password").fill("SGMG@143!")
    await page.locator("#Login").click()
    await page.waitForTimeout(40000)

    await page.context().storageState({path: 'Utils/sf_login.json'}); //Storage State creation


})