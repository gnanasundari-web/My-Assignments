import {test} from "@playwright/test"

test("Window Handling", async ({page,context}) => {

    await page.goto("https://www.leafground.com/window.xhtml");

    let parentTitle=await page.title()
    console.log("Parent Page Title is : " + parentTitle)

    let pagePromise=context.waitForEvent("page")

    await page.locator("//span[text()='Open']").click()
      
    let childPage=await pagePromise

    await childPage.waitForLoadState("domcontentloaded")

    let childTitle=await childPage.title()
    console.log("Child Page Title is : " + childTitle)

    await childPage.locator("#email").fill("gnana@testleaf.com")
    await childPage.locator("#message").fill("Playwright Window Handling ")
})