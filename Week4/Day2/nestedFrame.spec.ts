import {test, expect } from '@playwright/test'; 

test('Nested Frames', async ({ page }) => {
    await page.goto('https://www.leafground.com/frame.xhtml')

    let outerframe= page.frameLocator("[src='page.xhtml']")

    await outerframe.frameLocator("[src='framebutton.xhtml']").locator('#Click').click();  
    
    })