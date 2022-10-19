const vtiger_login_page=require('../pageobjects/Vtiger_login_page')
const Vtiger_Home_page=require('../pageobjects/vtiger_home_page')
const orgHomePage=require('../pageobjects/organization_home_page')
const createOrg=require('../pageobjects/creating_new_org_page')
const vtiger_home_page = require('../pageobjects/vtiger_home_page')
const orgInfoPage = require('../pageobjects/org_infomn_page')
const contactHomePage=require('../pageobjects/contactHomePage')
const createContactPage=require('../pageobjects/create_newContactPage')
const ContactModuleOrgWindow=require('../pageobjects/contactOrganizationChildWindowPage')
const ContactInfoPage=require('../pageobjects/contact_informn_page')

const fs=require('fs')
const creadentials =JSON.parse(fs.readFileSync("./TestData/createOrganization.json"))

describe('createOrganizationAndCheckDataFlowInContactModule',async()=>{
    const actulOrgName="mindtree"+Math.ceil(Math.random()*100)
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
    it('organization information page',async()=>{
        const orgInfoElement=  await orgInfoPage.orgInfoHeaderElement
        console.log(orgInfoElement.getText());
        await  expect(orgInfoElement).toBeDisplayed()
        const contactMajorTab=await browser.$("//td[@class='tabUnSelected']//a[text()='Contacts']")
        contactMajorTab.click()
    })
    it("Contact home page ",async()=>{
       console.log(await browser.getTitle())
       await expect(browser).toHaveTitleContaining('Administrator - Contacts - vtiger CRM 5')
       await contactHomePage.btnCreateContact.click()
    })
    
    creadentials.forEach(({lastName,mobileNo}) => {
    it('create New contact with the organization created',async()=>{
        const createContactPageHeaderEle=await createContactPage.headerTextElementOfPage
        console.log(createContactPageHeaderEle.getText());
        await expect(createContactPageHeaderEle).toBeDisplayed()
        await createContactPage.createContact(lastName,mobileNo)
        var parentWid=await browser.getWindowHandle()
        await createContactPage.orgPlusIcon.click()
        let wid=await browser.getWindowHandles()
        for (let index = 0; index < wid.length; index++) {
                if (await wid[index]!=parentWid) {
                    await browser.switchToWindow(wid[index])
                     break
                } 
            }
        console.log(await browser.getUrl())
        await expect(browser).toHaveUrlContaining("module=Accounts&action=Popup&popuptype=")
        
        const listOfOrg=await ContactModuleOrgWindow.selectOrg(actulOrgName)
           for (let index = 0; index <= listOfOrg.length; index++) {
            await listOfOrg[index].click()
            break
        }
        await browser.switchToWindow(parentWid)
        console.log(await browser.getTitle())
        await expect(browser).toHaveTitleContaining("Administrator - Contacts - vtiger CRM 5 - Commercial Open Source CRM")
        await createContactPage.btnSave.click()
        const contactInfoHeaderInfoElement=  await ContactInfoPage.contactInfoHeaderElement
        console.log(await contactInfoHeaderInfoElement.getText());
        await expect(contactInfoHeaderInfoElement).toBeDisplayed()
        })
    })
    it('logout',async()=>{
        const admnIcon= await orgHomePage.administratorIcon
        await admnIcon.moveTo()
        await orgHomePage.signOutlink.click()
    })
})