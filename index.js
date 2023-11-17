import  express  from "express"
// const express = require('express')
import UploadRoute from "./routes/upload.js" 

const app = express();
 const PORT = process.env.PORT || 8000;

 const user =[{
    id:1,
    name: "Junaid",
    Email : "Junadi@gmail.com",
    Password: "12345678"
 },
 {
    id:2,
    name: "Ali",
    Email : "alii@gmail.com",
    Password: "12345678"
 }]

 
app.use(express.json())
app.get('/user',(req,res)=>{

    res.send(user)
})

app.use("/upload",UploadRoute)




app.post('/user', (req,res)=>{
    console.log('request')
    user.push({id:user.length+1,...req.body})
    res.send({msg:"user add successfully"})
})

app.delete('/user/:id', (req,res)=>{
    console.log('request')
    let index=user.findIndex((item)=>{req.params.id})
     users.splice(index ,  1)
    res.send({msg:"user DELETE successfully"})
})



app.listen(PORT,()=>{
    console.log(`Server is running on Port ${PORT}`  )
})
console.log("hELOP")