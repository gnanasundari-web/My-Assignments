import {test} from "@playwright/test"


test.use(
    {
       storageState:'Data/leaftaplogin.json' 
    }
)

test('auth file to skip the login', async ({page}) => {

//await page.goto("http://leaftaps.com/opentaps/control/main")
await page.goto("https://leaftaps.com/opentaps/control/login;jsessionid=45690AA9B7DE8A7DF56AD68A97C6CDA0.jvm1")

await page.waitForLoadState('domcontentloaded')

console.log(await page.title());


})