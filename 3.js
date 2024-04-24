const express= require("express");
const app= express();
const port=5000
const firstHandler=((req,res,next)=>{
if (10<20)
{
next()
}
})
// to get response from server using router with call back function
app.get('/home',firstHandler,(req,res)=>{
res.send("Welcome to home page")
})
app.get('/user:login',(req,res)=>{
res.send("Welcome to Login page")
})
// to start server
app.listen(port,()=>{
console.log(`server started and running at port ${port}`)
})