let fs =require('fs');
fs.readFile('./test1/sub1/index1.txt',(err,data)=>{
if(err)
console.log('Not Success');
else
console.log('Success'+data);
}
)
fs.readFile('./test1/sub2/index2.txt',(err,data)=>{
if(err)
console.log('Not Success');
else
console.log('Success'+data);
}
)
console.log('before creating');
