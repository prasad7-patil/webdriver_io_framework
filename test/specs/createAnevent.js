const expectedChai=require("chai")
const vtiger_login_page=require('../pageobjects/Vtiger_login_page')
const Vtiger_Home_page=require('../pageobjects/vtiger_home_page')
const orgHomePage=require('../pageobjects/organization_home_page')

const fs=require('fs')
const creadentials =JSON.parse(fs.readFileSync("./TestData/createOrganization.json"))
const eventCredentials=JSON.parse(fs.readFileSync("./TestData/createAnEvent.json"))

describe('create an event',async()=>{
    creadentials.forEach(({username,password}) => {
    it('login',async()=>{
        await browser.url("http://rmgtestingserver:8888/")
        await browser.maximizeWindow()
        await console.log( browser.getTitle())
        await expect(browser).toHaveTitleContaining('vtiger CRM 5 - Commercial Open Source CRM')
        await expectedChai.assert.equal('vtiger CRM 5 - Commercial Open Source CRM','vtiger CRM 5 - Commercial Open Source CRM',"the title is correct")
        vtiger_login_page.login(username,password)
        await console.log(browser.getTitle())
        await expect(browser).toHaveTitleContaining("Administrator - Home - vtiger CRM 5 ")
    })
}) 
eventCredentials.forEach(({dropdownValue}) => {
    it('create an event',async()=>{

        await Vtiger_Home_page.selectFromQuickCreate(dropdownValue)
        console.log(await Vtiger_Home_page.quickCreatePopUp.getText())
        await expect(Vtiger_Home_page.quickCreatePopUp).toBeDisplayed()
        

    })
})
})