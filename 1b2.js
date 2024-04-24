let fs =require('fs');
fs.writeFile('./test1/sub1/index1.txt','This is sub directory-1 file',(err,data)=>{
if(err)
console.log('Not Success');
else
console.log('Success');
}
)
fs.writeFile('./test1/sub2/index2.txt','This is sub directory-2 file',(err,data)=>{
if(err)
console.log('Not Success');
else
console.log('Success');
}
)
console.log('before creating');