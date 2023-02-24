const expectedChai=require("chai")
const vtiger_login_page=require('../pageobjects/Vtiger_login_page')
const Vtiger_Home_page=require('../pageobjects/vtiger_home_page')
const orgHomePage=require('../pageobjects/organization_home_page')
const createOrg=require('../pageobjects/creating_new_org_page')
const vtiger_home_page = require('../pageobjects/vtiger_home_page')
const orgInfoPage = require('../pageobjects/org_infomn_page')


const fs=require('fs')
const creadentials =JSON.parse(fs.readFileSync("./TestData/createOrganization.json"))

describe('createOrganization',async()=>{
   const actulOrgName="mindtree"+Math.ceil(Math.random()*100)
   creadentials.forEach(({username,password}) => {
    it('login',async()=>{
        await browser.url("http://rmgtestingserver:8888/")
        await browser.maximizeWindow()
        const title=await console.log( browser.getTitle())
        await expect(browser).toHaveTitleContaining('vtiger CRM 5 - Commercial Open Source CRM')
        // await expectedChai.assert.equal(title,'vtiger CRM 5 - Commercial Open Source CRM',"the title is correct")
        vtiger_login_page.login(username,password)
        await console.log(browser.getTitle())
        await expect(browser).toHaveTitleContaining("Administrator - Home - vtiger CRM 5 ")
    })
});

creadentials.forEach(({mobileNo,industryDropdown}) => {
    it('fill all details in create new organization page',async()=>{
       
        Vtiger_Home_page.orgMajorTab.click()
        await console.log(browser.getTitle())
        await expect(browser).toHaveTitleContaining("Administrator - Organizations - ")
        
        await orgHomePage.btnCreateOrg.click()
        await createOrg.newOrgCreate(actulOrgName,mobileNo,industryDropdown)
        
    })

});
creadentials.forEach(({}) => {
    it('validating created organization',async()=>{
    //    this.retries(2)
        
        const orgInfoElement=  await orgInfoPage.orgInfoHeaderElement
        console.log(orgInfoElement.getText());
        await expect(orgInfoElement).toBeDisplayedInViewport()
        await vtiger_home_page.orgMajorTab.click()
        await console.log(browser.getTitle())
        await expect(browser).toHaveTitleContaining("Administrator - Organizations - ")
        const listOfOrganization=await orgHomePage.orgNamesFromTable
        for (let index = 0; index < listOfOrganization.length; index++) {
            let text=await listOfOrganization[index].getText()
            if (text==(actulOrgName)) {
                await console.log(text);
                await console.log("PASS:successfully created the orgnaization");
                break
            }
        }
        })
    })
})

