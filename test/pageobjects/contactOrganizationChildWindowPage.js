const contact_informn_page = require("./contact_informn_page")

class orgwindow {
    async selectOrg(orgName) {
        return  await $$(`//a[contains(.,'Organization Name')]/ancestor::tr/following::a[.='${orgName}']`)   
    }
}
module.exports=new orgwindow()