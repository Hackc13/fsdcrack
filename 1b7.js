let fs= require('fs');
fs.rmdir('./test1/sub1',(err,data)=>
{
if(err)
console.log('not success');
else
console.log('Successfully removed sub1 sub-directory');
})
fs.rmdir('./test1/sub2',(err,data)=>
{
if(err)
console.log('not success');
else
console.log('Successfully removed sub2 sub-directory');
})
fs.rmdir('./test1',(err,data)=>
{
if(err)
console.log('not success');
else
console.log('Successfully removed test1 directory');
})
