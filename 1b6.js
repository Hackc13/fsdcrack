let fs=require('fs');
fs.unlink('./test1/sub1/index1.txt',(err,data)=>{
if(err)
console.log('Not Success');
else
console.log('Successfully deleted index1.txt');
})
fs.unlink('./test1/sub2/index2.txt',(err,data)=>{
if(err)
console.log('Not Success');
else
console.log('Successfully deleted index2.txt');
})
console.log('Before creation');