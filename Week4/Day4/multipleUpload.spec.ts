import { test, expect } from "@playwright/test"

import path from 'path'

test("To upload file using Event Listener", async ({ page }) => {

    await page.goto("https://www.leafground.com/file.xhtml")

    //Creating Event Listener
    let uploadPromise = page.waitForEvent("filechooser")

    //Click on Choose option for multiple upload
    page.locator("(//span[contains(text(),'Choose')])[2]").click()

    //Resolving promise and uploading file
    const uploadfile = await uploadPromise
    await uploadfile.setFiles([path.join(__dirname,'../../../Data/jpg-quality-10.jpg'),
        path.join(__dirname,'../../../Data/jpg-quality-30.jpg')
    ])
    //Verify file names
    const fileinnertext=await page.locator("//div[@class='ui-fileupload-filename']").allInnerTexts()
    console.log(fileinnertext)    

})