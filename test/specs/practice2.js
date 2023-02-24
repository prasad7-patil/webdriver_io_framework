describe("sales",async()=>{
    it("login",async()=>{
        await browser.url("https://www.flipkart.com/")
        await browser.maximizeWindow()
    
        await browser.$("//button[@class='_2KpZ6l _2doB4z']").click()
        await browser.$('[name="q"]').addValue("iphone 14")
        
    })
})