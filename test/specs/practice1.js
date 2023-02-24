describe("admin",async()=>{
    it("login",async()=>{
        await browser.url("http://www.google.com/")
        await browser.maximizeWindow()
        await browser.$('[name="q"]').setValue("alexnder supertramp") 
        await browser.url("http://www.google.com/")

        

    })
})