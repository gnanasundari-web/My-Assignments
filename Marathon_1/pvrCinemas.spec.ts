import {test, expect} from "@playwright/test"

test("PVR Cinemas", async ({page}) => {
    await page.goto('https://www.pvrcinemas.com/')

    //Select City as Chennai
    await page.locator("//h6[contains(text(),'Chennai')]").click()

    //Select Cinema
    await page.locator(".cinemas-inactive").click()

    //Select Movie
    await page.waitForLoadState("load")
    await page.locator("(//img[@alt='THE PARADISE'])[4]").click()

    //Book Tickets
    await page.getByRole('button', {name: 'Book Now'}).click()

    //Select Date
    await page.locator("//span[contains(text(),'Tomorrow')]").click()

    //Select Time
    await page.locator("(//div[@class='time-select ']//h5[text()='12:10 PM'])[1]").click()

    //Accept Terms and Conditions
    await page.locator("//button[contains(text(),'Accept')]").click()
    await page.locator("//button[contains(text(),'Accept')]").click({timeout: 5000})
    
    //Select Seats
    await page.waitForLoadState("domcontentloaded")
    await page.locator("//span[@id='PE.PRIME|B:4']//parent::td").isVisible({timeout: 5000})
    await page.locator("//span[@id='PE.PRIME|B:4']//parent::td").click({timeout: 5000})


    //Verifying the selected seat
    expect(await page.locator("//div[@class='seat-number']").innerText()).toBe('B4')
    

    //Verify the total amount
    let totalamount = await page.locator("//div[@class='grand-prices']//h6").textContent()
    console.log("Total Amount is : " + totalamount)

    //Verify page title
    let title = await page.title()
    expect(title).toBe('PVR Cinemas')

    //Click on Proceed to Pay
    await page.getByRole("button", { name: "Proceed" }).click()

})