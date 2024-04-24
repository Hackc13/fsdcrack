let fs= require('fs');
// create directory
fs.mkdir('./test',(err,data)=>
{
if(err)
console.log('not success');
else
console.log('Success');
}
/*
//create sub directory-1
fs.mkdir('./test/sub1',(err,data)=>
{
if(err)
console.log('not success');
else
console.log('Success');
})
//create sub directory-2
fs.mkdir('./test/sub2',(err,data)=>
{
if(err)
console.log('not success');
else
console.log('Success');
})
*/
