class ContactInfo{
    get contactInfoHeaderElement(){
        return $("//td[.='Contact Information']")
    }
 
}
module.exports=new ContactInfo()