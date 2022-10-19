class createOrg{
    get orgNameTextField(){
        return $("[name='accountname']")
    }

    get contactNoTextField(){
        return $("#phone")
    }

    get industryDropDown(){
        return $("[name='industry']")
    }

    get btnSave(){
        return $("//input[@title='Save [Alt+S]']")
    }

    async newOrgCreate(NameOrg,phoneNo,dropdownValue){
        await this.orgNameTextField.setValue(NameOrg)
        await this.contactNoTextField.setValue(phoneNo)
        await this.industryDropDown.selectByVisibleText(dropdownValue)
        await this.btnSave.click()
    }

}
module.exports=new createOrg()