var xlsx=require('xlsx')
var wb=xlsx.readFile('./test/specs/TestData/testdata.xlsx')

let sheet=wb.SheetNames

let ws=wb.Sheets['Sheet1']
let excelData=xlsx.utils.sheet_to_json(ws)

// console.log(excelData);

console.log(excelData[0].orgName);
console.log(excelData[0].phone);
console.log(excelData[0].industryDropDown);


