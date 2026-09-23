import {test} from "@playwright/test"

test("Alert Program", async ({page}) => {
    
    //Handling alert
    page.on("dialog",async (alert)=>{

        let alerttype=alert.type()
        console.log(alerttype);
        alert.accept("Playwright")  //Entering Playwright in text box     
    })
    await page.goto("https://www.leafground.com/alert.xhtml");
    
    await page.locator("//h5[text()=' Alert (Prompt Dialog)']/../button/span[2]").click()
})