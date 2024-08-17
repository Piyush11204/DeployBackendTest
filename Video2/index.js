require('dotenv').config()
const express =require("express")
const app = express()
const port = 4000

app.get('/',(req,res)=>{
    res.send("this is the part of beckend")
})

app.get('/Login', (req,res)=>{
    res.send("this will be the backend for Login ")
})
app.get('/signup',(req,res)=>{
    res.send("<h1>this will be the backend for signup</h1> ")
})

app.listen(process.env.PORT,()=>{
    console.log(`server started at ${port}`)
})