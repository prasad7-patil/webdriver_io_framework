const vtiger_login_page=require('../pageobjects/Vtiger_login_page')
const Vtiger_Home_page=require('../pageobjects/vtiger_home_page')
const orgHomePage=require('../pageobjects/organization_home_page')
const createOrg=require('../pageobjects/creating_new_org_page')
const vtiger_home_page = require('../pageobjects/vtiger_home_page')
const orgInfoPage = require('../pageobjects/org_infomn_page')

const fs=require('fs')
const creadentials =JSON.parse(fs.readFileSync("./TestData/createOrganization.json"))
describe('deleteOrganization',async()=>{
    var actulOrgName="mindtree"+Math.ceil(Math.random()*100)
    creadentials.forEach(({username,password}) => {
    it('login',async()=>{
        await browser.url("http://localhost:8888/")
        await console.log( browser.getTitle())
        await expect(browser).toHaveTitleContaining('vtiger CRM 5 - Commercial Open Source CRM')
        await browser.maximizeWindow()
        vtiger_login_page.login(username,password)
        await console.log(browser.getTitle())
        await expect(browser).toHaveTitleContaining("Administrator - Home - vtiger CRM 5 ")
    })
})
creadentials.forEach(({mobileNo,industryDropdown}) => {
    it('fill all details in create new organization page',async()=>{  
        Vtiger_Home_page.orgMajorTab.click()
        await console.log(browser.getTitle())
        await expect(browser).toHaveTitleContaining("Administrator - Organizations - ")
        await orgHomePage.btnCreateOrg.click()
        await createOrg.newOrgCreate(actulOrgName,mobileNo,industryDropdown)
    })
})
    creadentials.forEach(({}) => {
    it('deleteTheCreatedOrganization',async()=>{ 
        const orgInfoElement=  await orgInfoPage.orgInfoHeaderElement
        console.log(orgInfoElement.getText());
        await  expect(orgInfoElement).toBeDisplayed()
        await vtiger_home_page.orgMajorTab.click()
        await (await orgHomePage.orgCheckBox(actulOrgName)).scrollIntoView()
        await (await orgHomePage.orgCheckBox(actulOrgName)).click()
        await orgHomePage.getDeleteButton.click()
        await browser.acceptAlert()
    })    
})
creadentials.forEach(({}) => {
    it('validate the deleted organization present in list of organization',async()=>{
        
        var  count=0
        await browser.pause(10000)
        const listOfOrganization=await orgHomePage.orgNamesFromTable
        for (let index = 0; index <listOfOrganization.length ; index++) {
            var text=await listOfOrganization[index].getText()
            if (await text==actulOrgName) {
                await count++
                break
            }
        }
        console.log(count);
        if (await count==0) {
            await console.log("PASS:Successfully deleted the organization");
        } else {
            await console.log("Fail:unsuccessfull organization is not deleted");
        }
        
    })

})
})