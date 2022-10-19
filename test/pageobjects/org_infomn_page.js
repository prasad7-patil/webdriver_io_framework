class OrgInfo{
    get orgInfoHeaderElement(){
        return $("//td[text()='Organization Information']")
    }
 
}

module.exports=new OrgInfo()