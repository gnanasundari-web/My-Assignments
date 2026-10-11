
import {test} from "@playwright/test"
import { createAccount } from "./pages/createAccount"

test('create Account using POM',async ({page}) => {

//create object for view lead page

let objca=new createAccount(page)
await objca.loadUrl("https://leaftaps.com/opentaps/control/main")
await objca.loginCredentials("democsr2","crmsfa")
await objca.clickonLogin()
await objca.clickonCRMSFA()
await objca.clickAccountLink()
await objca.clickonCreateAccount()
await objca.accountCreation()   
})
