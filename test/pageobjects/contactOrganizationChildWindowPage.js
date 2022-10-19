class orgwindow{
    async selectOrg(orgName) {
        return  await $$(`//a[contains(.,'Organization Name')]/ancestor::tr/following::a[.='${orgName}']`)   
    }
}
module.exports=new orgwindow()