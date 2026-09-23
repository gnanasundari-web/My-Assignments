import {test} from "@playwright/test"

test.use(
    {
       storageState:'Data/leaftaplogin.json' 
    }
)

test("Window Handling", async ({page,context}) => {

    await page.goto("http://leaftaps.com/opentaps/control/main")

     //Clicking on CRM link
    await page.getByRole("link", {name: 'CRM/SFA'}).click();

    //Click Leads
    await page.getByRole("link", {name: 'Leads'}).click();

    //Click Merge Leads
   await page.getByRole("link", {name: 'Merge Leads'}).click();



})