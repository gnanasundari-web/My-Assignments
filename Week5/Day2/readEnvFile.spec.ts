import {test} from "@playwright/test"

import dotenv from 'dotenv'
dotenv.config({path: 'Data/sf.env'})

let url=process.env.sf_url as string
let username=process.env.sf_username as string
let pwd=process.env.sf_password as string

test('Test to login into salesforce using env file', async ({page}) => {
    
    await page.goto(url)
    await page.locator('#username').fill(username)
    await page.locator('#Login').click()
    await page.locator('#password').fill(pwd)
    await page.locator('#Login').click()
})