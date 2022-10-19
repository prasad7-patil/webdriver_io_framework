describe('book a flight', async()=>{
    it('launch the application',async()=>{
        await browser.url("https://www.spicejet.com/")
        await browser.maximizeWindow()
        var roundtripRadioButton=await browser.$("//div[@data-testid='round-trip-radio-button']//*[local-name()='svg']")
        await roundtripRadioButton.click()
        var returnDatecalander=await browser.$("//div[@data-testid='return-date-dropdown-label-test-id']")
        await returnDatecalander.click()
        var returnDate= await browser.$("//div[@data-testid='undefined-month-November-2022']//div[@data-testid='undefined-calendar-day-1']")
        await returnDate.click()

    })
})