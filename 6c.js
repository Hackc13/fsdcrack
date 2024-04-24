const fs=require('fs');
// to locate the file in path
const path= require('path');
//create directory path: __dirname-current directory name and folder
name:crud-filesystem
const dirPath=path.join(__dirname,'crud-fs');
// this directory name is used in all operations so making constant.
const filePath=`${dirPath}/temp.txt`
console.log(`${dirPath}`)
fs.appendFile(filePath,'\t and filename is temp.txt',(err,data)=>{
if(!err)
console.log("file is updated")
})
fs.rename(filePath,`${dirPath}/sample.txt`,(err)=>{
if(!err)
console.log("file name is updated")
})
