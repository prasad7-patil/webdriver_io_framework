class ContactHomePage{
    get btnCreateContact(){
        return $("//img[@alt='Create Contact...']")
    }
}

module.exports=new  ContactHomePage()