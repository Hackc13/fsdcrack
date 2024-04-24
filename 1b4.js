var fs= require('fs');
fs.readdir('./test1',(err,data)=>{
if(err)
console.log(' not success');
else {
console.log(data);
for( f of data){
fs.readdir('./test1/'+f,(err,subdata)=>{
if(err)
console.log(err);
else
console.log(subdata);
})
}
}
}
)
console.log('Before writing');
