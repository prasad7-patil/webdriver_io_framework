class org_home_page{
    get btnCreateOrg(){
        return $("//img[@alt='Create Organization...']")
    }
    get orgNamesFromTable(){
        return $$("//a[text()='Organization Name']/ancestor::tr//td//a[@title='Organizations']")
    }

    get getDeleteButton(){
        return $("//input[@value='Delete']")
    }
    get administratorIcon(){
        return $("//img[@src='themes/softed/images/user.PNG']")
    }
    get signOutlink(){
        return $("//a[.='Sign Out']")
    }

    async orgCheckBox (orgName) {
        return  await $(`//a[text()='${orgName}']/ancestor::td/preceding-sibling::td/input[@name='selected_id']`)
    }

    

    // async selectCheckBox(orgName){
    //     await this.orgCheckBox(orgName).c
    // }


}

module.exports=new org_home_page()