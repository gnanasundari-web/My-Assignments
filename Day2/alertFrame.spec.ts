import {test,expect} from "@playwright/test"

test("Test Frames and Alerts", async ({page}) => 
{
    //Launching URL
    await page.goto("https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm");

    //Handling alert - message verification and accept
    page.on("dialog",async (alert) => 
    {
        let alertmessage=alert.message()
        console.log(alertmessage);
        alert.accept() 
    })

    await page.waitForLoadState("domcontentloaded")

    //Inspect iframe thru xpath
    let frame= page.frameLocator("//iframe[@name='iframeResult']")

    //CLick on Try it in iframe
    await frame.locator("//button[text()='Try it']").click()
    
    //Get the message after clicking Try it
    let successmessage=await frame.locator("//button[text()='Try it']/../p").textContent()
    console.log("Success Message is : " + successmessage)
    expect(successmessage).toBe("You pressed OK!")
}
)