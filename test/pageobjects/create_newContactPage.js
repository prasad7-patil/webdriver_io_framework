class createNewContact{
    get headerTextElementOfPage(){
        return $("//span[@class='lvtHeaderText']")
    }
    get lastNameTextField(){
        return $("//input[@name='lastname']")
    }
    get mobileTextField(){
        return $("#mobile")
    }
    get orgPlusIcon(){
        return $("//input[@id='mobile']/ancestor::td/preceding-sibling::td/img[@alt='Select']")
    }
    get btnSave(){
        return $("//input[@title='Save [Alt+S]']")
    }

    async  createContact(lastName,mobileNo) {
        await this.lastNameTextField.setValue(lastName)
        await this.mobileTextField.setValue(mobileNo)
    }

}
module.exports=new createNewContact()