import { test } from '@playwright/test'
import { parse } from 'csv-parse/sync'
import dotenv from 'dotenv'
import fs from 'fs'

dotenv.config({ path: 'Utils/cl.env' }) //Reading the env file from the Utils folder
import jdata from '../../../Utils/cl.json' //Reading the json file from the Utils folder
let details: any[] = parse(fs.readFileSync('Utils/cl.csv', 'utf-8'), { columns: true, skip_empty_lines: true }) //Reading the csv file from the Utils folder

//storing the values from the env file into variables
let url = process.env.cl_url as string   //url
let username = process.env.cl_username as string //username
let pwd = process.env.cl_password as string //password

test('Test to create lead using env file, csv and json', async ({ page }) => {

    await page.goto(url)
    await page.locator('#username').fill(username)
    await page.locator('#password').fill(pwd)
    await page.locator('.decorativeSubmit').click()

    //Clicking on CRM link
    await page.getByRole("link", { name: 'CRM/SFA' }).click();

    //Click Leads
    await page.getByRole("link", { name: 'Leads' }).click();

    //Click Create Lead
    await page.getByRole("link", { name: 'Create Lead' }).click();

    //Enter the data for fields
    await page.locator("#createLeadForm_firstName").fill(details[0].firstname);
    await page.locator("#createLeadForm_lastName").fill(details[0].lastname);
    await page.locator("#createLeadForm_companyName").fill(details[0].companyname);
    await page.locator("//select[@name='dataSourceId']").selectOption(jdata[0].source)
    
    //Get the list of options in the dropdown and print the size of the list
    let mcamp= await page.locator("//select[@name='marketingCampaignId']/option").allInnerTexts()
    console.log(mcamp,'Size is',mcamp.length);
    
    //Select the option from the dropdown using the value from json file
    await page.locator("//select[@name='marketingCampaignId']").selectOption(jdata[0].marketcamp)    
    await page.locator("//select[@name='industryEnumId']").selectOption(jdata[0].industry)
    await page.locator("//select[@name='currencyUomId']").selectOption(jdata[0].prefcurr)
    await page.locator("//select[@name='generalCountryGeoId']").selectOption(jdata[0].country)
    await page.locator("//select[@name='generalStateProvinceGeoId']").selectOption(jdata[0].state)
    
    //Get the list of options in the dropdown and print the size of the list
    let state= await page.locator("//select[@name='generalStateProvinceGeoId']/option").allInnerTexts()
    console.log(state,'Size is',state.length);
    
    //Click on Create Lead
    await page.locator('.smallSubmit').click();
})