import { test, expect } from "@playwright/test"

test("To upload file using type and Event Listener", async ({ page, context }) => {

    await page.goto("https://www.naukri.com/registration/createAccount")

    
    let expoption = page.locator("(//div[@class='textWrap']//h2)[1]").click()
    let upload = page.locator("[type='file']")
    upload.setInputFiles('Data/sample-1mb.pdf')
    console.log("Upload Sucess");
    let filename = await page.locator("//span[@class='file-name ellipsis']").innerText();
    console.log(filename);
    expect(filename).toBe("sample-1mb.pdf")
})