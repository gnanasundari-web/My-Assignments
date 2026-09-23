import {test,expect,chromium} from "@playwright/test"

test("Decathlon, Marathon", async () => 
{

    const browser = await chromium.launch({headless:false})
    const context = await browser.newContext()
    const page = await context.newPage()
    
    //Logging into Decathlon website
    await page.goto('https://www.decathlon.in/')
    await page.waitForLoadState("domcontentloaded")

    //Searching for Shoes in the search bar
    await page.locator("//input[@type='search']").click()
    await page.locator("//input[@type='search']").fill("Shoes")
    await page.locator("//input[@type='search']").press("Enter")

    //Verify title of the page 
    let title=await page.title()
    console.log(title)
    expect.soft(title).toBe("Search | Shoes")

    //Filtering the search results for Running Shoes
    await page.waitForLoadState("domcontentloaded")
    await page.locator('//span[text()="Sport"]//parent::button').click()
    await page.locator('[data-test-id="filter-checkbox-sport_pratice_en-Running"]').click()

    //Filtering the search results for Men 
    await page.locator('//span[text()="Gender"]//parent::button').click()
    await page.locator("[data-test-id='filter-checkbox-gender_id_en-MEN']").click()

    //Filtering the search results withSize 10.5
    await page.getByRole('button', { name: 'Size' }).click()
    await page.locator("//input[@data-test-id='filter-checkbox-indian_size-10.5']").click({ timeout: 5000 })
    
    //Sorting the search results by Price (low → high)
    await page.getByRole('button', { name: 'Most Relevant' }).click()
    await page.locator("//span[contains(text(),'Price (low → high) ')]").click({timeout: 8000})

    //Selecting the first product from the search results
    await page.locator("[data-test-id='product-card-product-image:img']").nth(0).click()

    //Selecting the size 10.5 and adding the product to the cart
    await page.locator("[aria-label='Select size 10.5']").click()
    await page.getByRole('button', { name: 'Add to cart' }).click()

    //Click on Cart and verify the total cart value
    await page.getByRole('link', { name: 'Cart' }).click()
    const totalvalue=await page.locator("//div[@data-test-id='cart:cart-checkout-total-cart-value']//p").innerText({timeout: 5000})
    console.log("Total cart value:",totalvalue)
}
)