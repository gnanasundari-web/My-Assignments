import {expect,test} from "@playwright/test";

test('Program to test the assertions', async ({page}) => {

    //Part 1
    await page.goto("https://leafground.com/input.xhtml");

    //Part 2
    const disfield=page.locator("//input[@placeholder='Disabled']");
    await expect(disfield).toBeDisabled();

    //Part 3
    const editablefield=page.locator("//input[@id='j_idt106:float-input']");
    await expect(editablefield).toBeEditable();
    editablefield.fill("MahimaGugan");

    //Part 4
    await expect.soft(editablefield).toBeDisabled();

    //Test will be failed but the message will be printed in the console
    console.log("Text box is NOT disabled");
    
    //Part 5
    await editablefield.fill("Playwright Learning");   
})