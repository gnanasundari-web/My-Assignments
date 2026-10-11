import {test} from '@playwright/test'
import { CreateLead } from './Pages_SF/sf_lead'

test('Test to create Lead in Salesforce using POM method', async ({page}) => {

let objlead=new CreateLead(page)
await objlead.loadUrl("https://login.salesforce.com")
await objlead.loginintoSF("gnanasundari.92.56583c9197c1@agentforce.com","SGMG@143!")
await objlead.clickViewall()
await objlead.clickLeads("Leads")
await objlead.clickNew()
await objlead.enterDataandCreate("Gugan Saravanakumar","Capgemini")
})
