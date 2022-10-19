const fs=require('fs')
const creadentials=JSON.parse(fs.readFileSync("./test/specs/TestData/login.json"))

describe("login the application",async()=>{
    it("launch the application ",async()=>{
        await browser.url("http://rmgtestingserver:8888/")
        await browser.maximizeWindow()
        await console.log( browser.getTitle())
        await expect(browser).toHaveTitleContaining('vtiger CRM 5 - Commercial Open Source CRM')
        
    })

    creadentials.forEach(({username,password})=>{
        it("login the application",async()=>{
            await browser.$("[name='user_name']").setValue(username)
            await browser.$("[name='user_password']").setValue(password)
            await browser.$("#submitButton").click()
        })
    })
})