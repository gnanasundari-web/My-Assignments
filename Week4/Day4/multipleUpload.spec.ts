import { test, expect } from "@playwright/test"
import path from 'path'

test("To upload file using Event Listener", async ({ page }) => {

    await page.goto("https://www.leafground.com/file.xhtml")
    let uploadPromise = page.waitForEvent("filechooser")

    page.locator("(//span[contains(text(),'Choose')])[2]").click()


    const uploadfile = await uploadPromise
    await uploadfile.setFiles([path.join(__dirname,'../../../Data/jpg-quality-10.jpg'),
        path.join(__dirname,'../../../Data/jpg-quality-30.jpg')
    ])


})