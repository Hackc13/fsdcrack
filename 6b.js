const fs=require('fs');
// to locate the file in path
const path= require('path');
//create directory path: __dirname-current directory name and folder
name:crud-filesystem
const dirPath=path.join(__dirname,'crud-fs');
// this directory name is used in all operations so making constant.
const filePath=`${dirPath}/temp.txt`
console.log(`${dirPath}`)
//embed this directory path to my filename-`(backtick)
//utf8 is for string format
fs.readFile(filePath,'utf8',(err,data)=>{
if(err)
console.log(err)
else
console.log(data)
})
