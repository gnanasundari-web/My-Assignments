import { test } from '@playwright/test'
import { parse } from 'csv-parse/sync'
import fs from 'fs'

//Reading data from csv file and storing it in an array of objects
let value: any[] = parse(fs.readFileSync('Utils/loginData.csv', 'utf-8'), { columns: true, skip_empty_lines: true })
//console.log(value);

//Running the tests in serial
test.describe.serial('runs in serial', () => {

    //For loop to iterate
    for (let details of value) {

        test(`test to read the csv file ${details.tcid}`, async ({ page }) => {

            //Navigating to the url and performing login
            await page.goto("https://leaftaps.com/opentaps/control/main")
            await page.locator("#username").fill(details.username) //Logging with the username from csv file
            await page.locator("#password").fill(details.password) //Logging with the password from csv file
            await page.locator(".decorativeSubmit").click()

        })
    }
})