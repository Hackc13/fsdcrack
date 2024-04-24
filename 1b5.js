let fs =require('fs');
fs.appendFile('./test1/sub1/index1.txt','File name:index1.txt',
(err,data)=>{
if(err)
console.log('Not Success');
else
console.log('Success');
} )
fs.appendFile('./test1/sub2/index2.txt','File name:index2.txt',(err,data)=>{
if(err)
console.log('Not Success');
else
console.log('Success');
} )
console.log('before creating');