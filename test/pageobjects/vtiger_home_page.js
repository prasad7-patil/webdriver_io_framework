class home_page{
    get orgMajorTab(){
        return $("//a[text()='Organizations']")
    }
    get contactsMajorTab(){
        return $$("//td[@class='tabUnSelected']//a[text()='Contacts']")
    }

    get quickCreateDropDown(){
        return $("//option[.='Quick Create...']")
    }

    get quickCreatePopUp(){
        return $("//i[.='Quick Create']")
    }

    async selectFromQuickCreate(value){
        await this.quickCreateDropDown.selectByVisibleText(value)
    }
}

module.exports=new home_page()